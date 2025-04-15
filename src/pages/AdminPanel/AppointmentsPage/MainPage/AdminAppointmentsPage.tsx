import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AppointmentData } from "../../../../store/types/appointmentTypes";
import { getAppointments } from "../../../../api/appointmentAPI";
import { FaTrashAlt } from "react-icons/fa";
import {
  Container,
  Heading,
  Error,
  EmptyMessage,
  FilterContainer,
  FilterButton,
  AppointmentList,
  AppointmentRow,
  Marker,
  MarkerCircleNew,
  MarkerCircleCompleted,
  MainInfoContainer,
  ClientName,
  Service,
  // Date,
  MoreInfoButton,
  ScrollContainer,
  HeaderBox,
  TrashIconBox,
  ModalOverlay,
  Modal,
  ModalContent,
  ModalActions,
  ModalActionsBtn,
  BtnBox,
} from "./styles";
import { getActiveServices } from "../../../../api/serviceAPI";
import i18n from "../../../../utils/i18n";
import { ServiceData } from "../../../../store/types/serviceTypes";
import { deleteAppointment } from "../../../../api/appointmentAPI";

const AdminAppointmentsPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [appointments, setAppointments] = useState<AppointmentData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<"all" | "new" | "completed">("all");
  const [services, setServices] = useState<ServiceData[]>([]);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [appointmentToDelete, setAppointmentToDelete] = useState<number | null>(
    null
  );

   const [, setNotification] = useState<{
      message: string;
      type: "error" | "success";
    } | null>(null);
  
  const token = localStorage.getItem("token");

  useEffect(() => {
    const initializeAppointments = async () => {
      try {
        const data = await getAppointments(token!);
        const updatedData = data.map((appointment) => ({
          ...appointment,
          isNew: appointment.isNew ?? true,
        }));
        setAppointments(updatedData);

        const servicesData = await getActiveServices();
        setServices(servicesData);
      } catch (err) {
        setError(
          t("message.adminPanel.appointments.errorFetchingAppointments")
        );
      }
    };

    initializeAppointments();
  }, [t]);

  const handleMoreInfoClick = async (appointmentId: number) => {
    try {
      navigate(`/admin-panel/appointment/${appointmentId}`);
    } catch (error) {
      setNotification({
        message: t("message.adminPanel.appointments.errorFetchingAppointments"),
        type: "error",
      });
      // alert(t("message.adminPanel.appointments.errorFetchingAppointments"));
    }
  };

  const filteredAppointments = appointments.filter((appointment) => {
    if (filter === "new") return appointment.isNew;
    if (filter === "completed") return !appointment.isNew;
    return true;
  });

  if (error) {
    return <Error>{error}</Error>;
  }

  // const fetchAppointments = async () => {
  //   try {
  //     if (!token) {
  //       setError("Access token is missing");
  //       return;
  //     }
  //     const data = await getAppointments(token);
  //     setAppointments(data);
  //     setError(null);
  //     console.log("message", data);
  //   } catch (err: any) {
  //     setError(err.message || "Appointments loading error");
  //   }
  // };

  const handleDeleteBtn = (appointmentId: number) => {
    setAppointmentToDelete(appointmentId);
    setIsModalVisible(true);
  };

  const confirmDelete = async () => {
    if (appointmentToDelete !== null && token) {
      try {
        await deleteAppointment(appointmentToDelete, token);
        setAppointments(
          appointments.filter((a) => a.id !== appointmentToDelete)
        ); // Оновлюємо список записів
        setIsModalVisible(false);
        setAppointmentToDelete(null);
      } catch (err: any) {
        setError(err.message || "Error deleting appointment");
      }
    }
  };

  const cancelDelete = () => {
    setIsModalVisible(false);
    setAppointmentToDelete(null);
  };

  const getServiceNameById = (id?: number): string => {
    if (!id) return t("message.adminPanel.appointments.serviceNotFound");
    const service = services.find((s) => s.id === id);
    if (!service) return t("message.adminPanel.appointments.serviceNotFound");

    const lang = i18n.language;
    switch (lang) {
      case "de":
        return service!.titleDe || "Unbenannter Service";
      case "en":
        return service.titleEn || "Unnamed service";
      case "ru":
        return service.titleRu || "Без названия";
      default:
        return service.titleEn || "Unnamed service";
    }
  };

  return (
    <Container>
      <HeaderBox>
        <Heading>{t("message.adminPanel.appointments.title")}</Heading>
        <FilterContainer>
          {["all", "new", "completed"].map((filterKey) => (
            <FilterButton
              key={filterKey}
              isActive={filter === filterKey}
              onClick={() =>
                setFilter(filterKey as "all" | "new" | "completed")
              }
            >
              {t(`message.adminPanel.appointments.filter.${filterKey}`)}
            </FilterButton>
          ))}

          {/* <RefreshIconBox onClick={handleRefreshBtn}>
            <FaSyncAlt size={24} color="#20b1b7" />
          </RefreshIconBox> */}
        </FilterContainer>
      </HeaderBox>

      <ScrollContainer>
      <AppointmentList>

        {filteredAppointments.length === 0 ? (
          <EmptyMessage>
            {t("message.adminPanel.appointments.noAppointments")}
          </EmptyMessage>
        ) : (
          <>
            {filteredAppointments.map((appointment) => (
              <AppointmentRow
                key={appointment.id}
                isMobile={window.innerWidth <= 768}
              >
                <Marker>
                  {appointment.isNew && <MarkerCircleNew />}
                  {!appointment.isNew && <MarkerCircleCompleted />}
                </Marker>

                <MainInfoContainer isMobile={window.innerWidth <= 768}>
                  <ClientName>
                    {appointment.firstName} {appointment.lastName}
                  </ClientName>
                  <Service>
                    {getServiceNameById(appointment.dentalServiceSectionId!)}
                  </Service>

                  {/* <Date> */}
                  {/* Created at:  */}
                  {/* {new Date(appointment.).toLocaleDateString()} */}
                  {/* </Date> */}
                </MainInfoContainer>

                <BtnBox>
                  <MoreInfoButton
                    onClick={() => handleMoreInfoClick(appointment?.id || 1)}
                  >
                    {t("message.adminPanel.appointments.buttons.moreInfo")}
                  </MoreInfoButton>
                  <TrashIconBox
                    onClick={() => handleDeleteBtn(appointment.id!)}
                  >
                    <FaTrashAlt size={24} color="#7a2141;" />
                  </TrashIconBox>
                </BtnBox>
              </AppointmentRow>
            ))}
          </>
        )}

      </AppointmentList>
      </ScrollContainer>

      {isModalVisible && (
        <ModalOverlay>
          <Modal>
            <ModalContent>
              <p>{t("message.adminPanel.appointments.confirmDelete")}</p>
              <ModalActions>
                <ModalActionsBtn onClick={confirmDelete}>OK</ModalActionsBtn>
                <ModalActionsBtn onClick={cancelDelete}>Cancel</ModalActionsBtn>
              </ModalActions>
            </ModalContent>
          </Modal>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default AdminAppointmentsPage;
