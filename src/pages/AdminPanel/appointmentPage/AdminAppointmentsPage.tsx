import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./AdminAppstyles";

interface Appointment {
  id: string;
  clientName: string;
  service: string;
  date: string;
  isNew?: boolean; // isNew вместо статуса
}

const AdminAppointmentsPage: React.FC = () => {
  const { t } = useTranslation(); 
  const navigate = useNavigate();

  const fakeData: Appointment[] = [
    { id: "1", clientName: "John Doe", service: "Dental Cleaning", date: "2025-04-01T10:00:00Z" },
    { id: "2", clientName: "Jane Smith", service: "Consultation", date: "2025-04-02T12:00:00Z" },
    { id: "3", clientName: "Emily Johnson", service: "Orthodontics", date: "2025-04-03T14:00:00Z" },
  ];

  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<"all" | "new" | "completed">("all");

  useEffect(() => {
    /**
     * Инициализация данных
     */
    const initializeAppointments = async () => {
      try {
        // Здесь реальный запрос к API
        /*
        const response = await fetch("/api/appointments");
        const data = await response.json();
        */
        // (фейковый режим)
        const data = fakeData;

        // флаг isNew для всех записей
        const updatedData = data.map((appointment) => ({
          ...appointment,
          isNew: appointment.isNew ?? true, // По умолчанию true
        }));

        setAppointments(updatedData);
      } catch (err) {
        setError(t("message.adminPanel.appointments.errorFetchingAppointments"));
      } finally {
        setIsLoading(false);
      }
    };

    initializeAppointments();
  }, [t]);

  const handleMoreInfoClick = async (appointmentId: string) => {
    try {
      // Логика для работы с записью
      navigate(`/admin-panel/appointments/${appointmentId}`);
    } catch (error) {
      alert(t("message.adminPanel.appointments.errorFetchingAppointments"));
    }
  };

  const filteredAppointments = appointments.filter((appointment) => {
    if (filter === "new") return appointment.isNew;
    if (filter === "completed") return !appointment.isNew;
    return true; // Возвращаем все записи для фильтра "all"
  });

  if (isLoading) {
    return <div style={styles.loading}>{t("message.adminPanel.appointments.loadingAppointments")}</div>;
  }

  if (error) {
    return <div style={styles.error}>{error}</div>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>{t("message.adminPanel.appointments.title")}</h1>
      <div style={styles.filterContainer}>
        {["all", "new", "completed"].map((filterKey) => (
          <button
            key={filterKey}
            style={{
              ...styles.filterButton,
              ...(filter === filterKey && styles.filterButtonActive),
            }}
            onClick={() => setFilter(filterKey as "all" | "new" | "completed")}
          >
            {t(`message.adminPanel.appointments.filter.${filterKey}`)}
          </button>
        ))}
      </div>
      {filteredAppointments.length === 0 ? (
        <div style={styles.emptyMessage}>{t("message.adminPanel.appointments.noAppointments")}</div>
      ) : (
        <ul>
          {filteredAppointments.map((appointment) => (
            <li key={appointment.id} style={styles.appointmentRow}>
              <div style={styles.marker}>
                {appointment.isNew && <div style={styles.markerCircleNew}></div>}
                {!appointment.isNew && <div style={styles.markerCircleCompleted}></div>}
              </div>
              <div style={styles.clientName}>{appointment.clientName}</div>
              <div style={styles.service}>{appointment.service}</div>
              <div style={styles.date}>{new Date(appointment.date).toLocaleDateString()}</div>
              <button
                style={styles.moreInfoButton}
                onClick={() => handleMoreInfoClick(appointment.id)}
              >
                {t("message.adminPanel.appointments.buttons.moreInfo")}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminAppointmentsPage;
