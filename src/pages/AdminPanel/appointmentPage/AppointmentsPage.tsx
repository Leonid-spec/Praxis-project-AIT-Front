import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import appointmentDetailsStyles from "./AppointmentDetailsStyles";

interface Appointment {
  id: string;
  clientName: string;
  service: string;
  date: string;
  email: string;
  phone1: string;
  phone2?: string;
  comment?: string;
  language?: string;
  available_time?: string;
}

const AppointmentsPage: React.FC = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const fakeData: Appointment = {
    id: "1",
    clientName: "John Doe",
    service: "Dental Cleaning",
    date: "2025-04-01T10:00:00Z",
    email: "john.doe@example.com",
    phone1: "+1234567890",
    phone2: "+0987654321",
    comment: "Looking forward to the appointment.",
    language: "en",
    available_time: "10:00 - 11:00",
  };

  const [appointment, setAppointment] = useState<Appointment | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setAppointment(fakeData);
    setIsLoading(false);
  }, [id]);

  if (isLoading) {
    return <div style={appointmentDetailsStyles.loading}>{t("message.adminPanel.appointments.loadingAppointments")}</div>;
  }

  if (error) {
    return <div style={appointmentDetailsStyles.error}>{t("message.adminPanel.appointments.errorFetchingAppointments")}</div>;
  }

  return (
    <div style={appointmentDetailsStyles.container}>
      <div style={appointmentDetailsStyles.buttonContainer}>
        <button
          style={appointmentDetailsStyles.backButton}
          onClick={() => navigate("/admin-panel/appointments")}
        >
          {t("message.adminPanel.appointments.backButton", "Вернуться назад")}
        </button>
      </div>
      <h1 style={appointmentDetailsStyles.heading}>{t("message.adminPanel.appointments.appointmentDetails.title")}</h1>
      {appointment && (
        <div>
          <div style={appointmentDetailsStyles.topContainer}>
            <div style={appointmentDetailsStyles.leftContainer}>
              <form style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div>
                  <label style={appointmentDetailsStyles.label}>
                    {t("message.adminPanel.appointments.appointmentDetails.service")}:
                  </label>
                  <input type="text" value={appointment.service} readOnly style={appointmentDetailsStyles.field} />
                </div>
                <div>
                  <label style={appointmentDetailsStyles.label}>
                    {t("message.adminPanel.appointments.appointmentDetails.client")}:
                  </label>
                  <input type="text" value={appointment.clientName} readOnly style={appointmentDetailsStyles.field} />
                </div>
                <div>
                  <label style={appointmentDetailsStyles.label}>
                    {t("message.adminPanel.appointments.appointmentDetails.date")}:
                  </label>
                  <input
                    type="text"
                    value={new Date(appointment.date).toLocaleString()}
                    readOnly
                    style={appointmentDetailsStyles.field}
                  />
                </div>
                <div>
                  <label style={appointmentDetailsStyles.label}>
                    {t("message.adminPanel.appointments.appointmentDetails.language")}:
                  </label>
                  <input
                    type="text"
                    value={appointment.language || t("message.adminPanel.appointments.appointmentDetails.noLanguage")}
                    readOnly
                    style={appointmentDetailsStyles.field}
                  />
                </div>
              </form>
            </div>
            <div style={appointmentDetailsStyles.rightContainer}>
              <form style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div>
                  <label style={appointmentDetailsStyles.label}>
                    {t("message.adminPanel.appointments.appointmentDetails.email")}:
                  </label>
                  <input type="email" value={appointment.email} readOnly style={appointmentDetailsStyles.field} />
                </div>
                <div>
                  <label style={appointmentDetailsStyles.label}>
                    {t("message.adminPanel.appointments.appointmentDetails.phone1")}:
                  </label>
                  <PhoneInput
                    country={"de"}
                    value={appointment.phone1}
                    disabled
                    inputStyle={{ ...appointmentDetailsStyles.field, paddingLeft: "48px" }}
                  />
                </div>
                <div>
                  <label style={appointmentDetailsStyles.label}>
                    {t("message.adminPanel.appointments.appointmentDetails.phone2")}:
                  </label>
                  <PhoneInput
                    country={"de"}
                    value={appointment.phone2 || ""}
                    disabled
                    inputStyle={{ ...appointmentDetailsStyles.field, paddingLeft: "48px" }}
                  />
                </div>
              </form>
            </div>
          </div>
          <div style={appointmentDetailsStyles.bottomContainer}>
            <form style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <div>
                <label style={appointmentDetailsStyles.label}>
                  {t("message.adminPanel.appointments.appointmentDetails.comment")}:
                </label>
                <textarea
                  value={appointment.comment || t("message.adminPanel.appointments.appointmentDetails.noComment")}
                  readOnly
                  style={appointmentDetailsStyles.field}
                />
              </div>
              <div>
                <label style={appointmentDetailsStyles.label}>
                  {t("message.adminPanel.appointments.appointmentDetails.available_time")}:
                </label>
                <input
                  type="text"
                  value={appointment.available_time || t("message.adminPanel.appointments.appointmentDetails.noAvailable_time")}
                  readOnly
                  style={appointmentDetailsStyles.field}
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentsPage;
