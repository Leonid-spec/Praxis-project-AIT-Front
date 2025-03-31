import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./appointmentPage.module.css";

interface Appointment {
  id: number;
  firstName: string;
  lastName: string;
  service: string;
}

const AppointmentPage: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("/api/appointments")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setAppointments(response.data);
        } else {
          console.error("Неверный формат данных:", response.data);
          setError("Ошибка: данные с сервера имеют неверный формат.");
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Ошибка при загрузке данных:", err);
        setError("Ошибка при подключении к серверу.");
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div className={styles.loading}>Загрузка данных...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Appointments</h1>
      <div className={styles.table}>
        <div className={styles.headerRow}>
          <div className={styles.cell}>ID</div>
          <div className={styles.cell}>First Name</div>
          <div className={styles.cell}>Last Name</div>
          <div className={styles.cell}>Service</div>
        </div>
        {appointments.length > 0 ? (
          appointments.map((appointment) => (
            <div className={styles.row} key={appointment.id}>
              <div className={styles.cell}>{appointment.id}</div>
              <div className={styles.cell}>{appointment.firstName}</div>
              <div className={styles.cell}>{appointment.lastName}</div>
              <div className={styles.cell}>{appointment.service}</div>
            </div>
          ))
        ) : (
          <div className={styles.noData}>тут будут данные какието.</div>
        )}
      </div>
    </div>
  );
};

export default AppointmentPage;