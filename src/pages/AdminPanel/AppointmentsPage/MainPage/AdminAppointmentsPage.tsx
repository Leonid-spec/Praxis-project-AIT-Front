import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AppointmentData } from "../../../../store/types/appointmentTypes";
import { getAppointments } from "../../../../api/appointmentAPI";
import {
  Container,
  Heading,
  Loading,
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
  Date,
  MoreInfoButton,
  ScrollContainer,
  HeaderBox,
} from "./styles";

const AdminAppointmentsPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [appointments, setAppointments] = useState<AppointmentData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<"all" | "new" | "completed">("all");

  const token = localStorage.getItem("token");

  useEffect(() => {
    const initializeAppointments = async () => {
      try {
        const data = await getAppointments(token);

        const updatedData = data.map((appointment) => ({
          ...appointment,
          isNew: appointment.isNew ?? true,
        }));

        setAppointments(updatedData);
      } catch (err) {
        setError(
          t("message.adminPanel.appointments.errorFetchingAppointments")
        );
      } finally {
        setIsLoading(false);
      }
    };

    initializeAppointments();
  }, [t]);

  const handleMoreInfoClick = async (appointmentId: number) => {
    try {
      navigate(`/admin-panel/appointment/${appointmentId}`);
    } catch (error) {
      alert(t("message.adminPanel.appointments.errorFetchingAppointments"));
    }
  };

  const filteredAppointments = appointments.filter((appointment) => {
    if (filter === "new") return appointment.isNew;
    if (filter === "completed") return !appointment.isNew;
    return true;
  });

  if (isLoading) {
    return (
      <Loading>
        {t("message.adminPanel.appointments.loadingAppointments")}
      </Loading>
    );
  }

  if (error) {
    return <Error>{error}</Error>;
  }

  return (
    <Container>
      <HeaderBox>
        <Heading>{t("message.adminPanel.appointments.title")}</Heading>
        <FilterContainer>
          {["all", "new", "completed"].map((filterKey) => (
            <FilterButton
              key={filterKey}
              isActive={filter === filterKey}
              onClick={() => setFilter(filterKey as "all" | "new" | "completed")}
            >
              {t(`message.adminPanel.appointments.filter.${filterKey}`)}
            </FilterButton>
          ))}
        </FilterContainer>
      </HeaderBox>

      {filteredAppointments.length === 0 ? (
        <EmptyMessage>
          {t("message.adminPanel.appointments.noAppointments")}
        </EmptyMessage>
      ) : (
        <ScrollContainer>
          <AppointmentList>
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
                    {appointment.comment || "No service specified"}
                  </Service>
                  <Date>
                    {/* {new Date(appointment.createdAt).toLocaleDateString()} */}
                    {/* Created at:  */}
                  </Date>
                </MainInfoContainer>

                <MoreInfoButton
                  onClick={() => handleMoreInfoClick(appointment.id)}
                >
                  {t("message.adminPanel.appointments.buttons.moreInfo")}
                </MoreInfoButton>
              </AppointmentRow>
            ))}
          </AppointmentList>
        </ScrollContainer>
      )}
    </Container>
  );
};

export default AdminAppointmentsPage;
