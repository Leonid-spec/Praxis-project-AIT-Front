import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  Container,
  TopContainer,
  LeftContainer,
  RightContainer,
  BottomContainer,
  Field,
  Label,
  ButtonContainer,
  Loading,
  Error,
  Heading,
  BackButton,
  CompleteButton,
  ScrollContainer,
  InputContainer,
  PhoneBox,
} from "./styles";
import { getAppointmentById } from "../../../../api/appointmentAPI";
import { AppointmentData } from "../../../../store/types/appointmentTypes";
import CustomNotification from "../../../../components/CustomNotification/CustomNotification";
import { FaCopy } from "react-icons/fa";
import { updateAppointment } from "../../../../api/appointmentAPI"; 

const AppointmentDetailsPage: React.FC = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [appointment, setAppointment] = useState<AppointmentData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [notification, setNotification] = useState<{
    message: string;
    type: "error" | "success";
  } | null>(null);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchAppointment = async () => {
      try {
        if (token && id) {
          const appointmentData = await getAppointmentById(Number(id), token);
          setAppointment(appointmentData);
        }
      } catch (err) {
        setError(
          t("message.adminPanel.appointments.errorFetchingAppointments")
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchAppointment();
  }, [id, t, token]);

  const handleCompleteClick = async () => {
    if (appointment) {
      try {
        const updatedAppointment = {
          ...appointment,
          isNew: !appointment.isNew,
        };

        if (token) {
          await updateAppointment(Number(id), updatedAppointment, token);
        }

        setAppointment(updatedAppointment);
        setNotification({
          message: t("message.adminPanel.appointments.statusUpdated", {
            status: updatedAppointment.isNew ? "Active" : "Completed",
          }),
          type: "success",
        });

        setTimeout(() => {
          setNotification(null);
          navigate(-1);
        }, 1500);
      } catch (error) {
        setNotification({
          message: t("message.adminPanel.appointments.statusUpdateError", {
            status: "Completed",
          }),
          type: "error",
        });
      }
    }
  };

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

  const handleCopyPhone1 = () => {
    const phone1 = appointment?.phone1 || "";
    navigator.clipboard.writeText(phone1);
    setNotification({
      message: t("message.adminPanel.appointments.phoneCopied", {
        phone: phone1,
      }),
      type: "success",
    });
    setTimeout(() => setNotification(null), 2000);
  };

  const handleCopyPhone2 = () => {
    const phone2 = appointment?.phone2 || "";
    navigator.clipboard.writeText(phone2);
    setNotification({
      message: t("message.adminPanel.appointments.phoneCopied", {
        phone: phone2,
      }),
      type: "success",
    });
    setTimeout(() => setNotification(null), 2000);
  };

  return (
    <Container>
      <Heading>
        {t("message.adminPanel.appointments.appointmentDetails.title")}
      </Heading>
      <ButtonContainer>
        <BackButton onClick={() => navigate("/admin-panel/appointments")}>
          {t("message.adminPanel.appointments.buttons.back")}
        </BackButton>
        <CompleteButton onClick={handleCompleteClick}>
          {t("message.adminPanel.appointments.buttons.complete")}
        </CompleteButton>
      </ButtonContainer>

      <ScrollContainer>
        {appointment && (
          <>
            <TopContainer>
              <LeftContainer>
                <div>
                  <Label>
                    {t(
                      "message.adminPanel.appointments.appointmentDetails.service"
                    )}
                    :
                  </Label>
                  <Field
                    type="text"
                    value={t(`service.${appointment.dentalServiceSectionId}`)}
                    readOnly
                  />
                </div>
                <div>
                  <Label>
                    {t(
                      "message.adminPanel.appointments.appointmentDetails.client"
                    )}
                    :
                  </Label>
                  <Field
                    type="text"
                    value={`${appointment.firstName} ${appointment.lastName}`}
                    readOnly
                  />
                </div>
                <div>
                  <Label>
                    {t(
                      "message.adminPanel.appointments.appointmentDetails.email"
                    )}
                    :
                  </Label>
                  <Field type="email" value={appointment.email} readOnly />
                </div>
              </LeftContainer>

              <RightContainer>
                <PhoneBox>
                  <div>
                    <Label>
                      {t(
                        "message.adminPanel.appointments.appointmentDetails.phone1"
                      )}
                      :
                    </Label>
                    <PhoneInput
                      country={"de"}
                      value={appointment.phone1}
                      disabled
                    />
                  </div>
                  <FaCopy
                    onClick={handleCopyPhone1}
                    style={{
                      cursor: "pointer",
                      width: "20px",
                      height: "20px",
                    }}
                  />
                </PhoneBox>

                <PhoneBox>
                  <div>
                    <Label>
                      {t(
                        "message.adminPanel.appointments.appointmentDetails.phone2"
                      )}
                      :
                    </Label>
                    <PhoneInput
                      country={"de"}
                      value={appointment.phone2 || ""}
                      disabled
                    />
                  </div>
                  <FaCopy
                    onClick={handleCopyPhone2}
                    style={{
                      cursor: "pointer",
                      width: "20px",
                      height: "20px",
                    }}
                  />
                </PhoneBox>

                <div>
                  <Label>
                    {t(
                      "message.adminPanel.appointments.appointmentDetails.language"
                    )}
                    :
                  </Label>
                  <Field
                    type="text"
                    value={
                      appointment.language ||
                      t(
                        "message.adminPanel.appointments.appointmentDetails.noLanguage"
                      )
                    }
                    readOnly
                  />
                </div>
              </RightContainer>
            </TopContainer>

            <BottomContainer>
              <InputContainer>
                <Label>
                  {t(
                    "message.adminPanel.appointments.appointmentDetails.comment"
                  )}
                  :
                </Label>
                <textarea
                  rows={5}
                  value={
                    appointment.comment ||
                    t(
                      "message.adminPanel.appointments.appointmentDetails.noComment"
                    )
                  }
                />
              </InputContainer>
              <InputContainer>
                <Label>
                  {t(
                    "message.adminPanel.appointments.appointmentDetails.available_time"
                  )}
                  :
                </Label>
                <textarea
                  rows={5}
                  value={
                    appointment.availableTime ||
                    t(
                      "message.adminPanel.appointments.appointmentDetails.noAvailable_time"
                    )
                  }
                />
              </InputContainer>
            </BottomContainer>
          </>
        )}
      </ScrollContainer>

      {notification && (
        <CustomNotification
          message={notification.message}
          type={notification.type}
        />
      )}
    </Container>
  );
};

export default AppointmentDetailsPage;
