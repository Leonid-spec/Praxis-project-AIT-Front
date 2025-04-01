import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AdminAppstyles";

interface Appointment {
  id: string;
  clientName: string;
  service: string;
  date: string;
  status: "Новая" | "В обработке" | "Выполнена"; // Статус заявки
}

const AdminAppointmentsPage: React.FC = () => {
  // Фейковые данные для тестирования (замените на API-запросы при подключении реальной базы)
  const fakeData: Appointment[] = [
    { id: "1", clientName: "John Doe", service: "Dental Cleaning", date: "2025-04-01T10:00:00Z", status: "Новая" },
    { id: "2", clientName: "Jane Smith", service: "Consultation", date: "2025-04-02T12:00:00Z", status: "В обработке" },
    { id: "3", clientName: "Emily Johnson", service: "Orthodontics", date: "2025-04-03T14:00:00Z", status: "Выполнена" },
  ];

  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<"Все" | "Новая" | "В обработке" | "Выполнена">("Все");
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Запуск useEffect в AdminAppointmentsPage...");

    /**
     * Для тестирования страницы с фейковыми данными:
     * - Закомментируйте строки ниже (fetchAppointments)
     * - Раскомментируйте блок setAppointments(fakeData)
     */
    console.log("Используем фейковые данные...");
    setAppointments(fakeData);
    setIsLoading(false);

    /**
     * Для работы с реальной базой данных:
     * - Закомментируйте блок setAppointments(fakeData)
     * - Раскомментируйте строки ниже
     */

    /*
    fetchAppointments()
      .then((data) => {
        console.log("Данные из API:", data);
        setAppointments(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Ошибка загрузки заявок:", err);
        setError("Не удалось загрузить данные заявок.");
        setIsLoading(false);
      });
    */
  }, []);

  // Функция обновления состояния заявки (из `AppointmentsPage.tsx`)
  const handleStatusUpdate = (updatedAppointment: Appointment) => {
    setAppointments((prev) =>
      prev.map((appointment) =>
        appointment.id === updatedAppointment.id ? updatedAppointment : appointment
      )
    );
  };

  const filteredAppointments = filter === "Все" ? appointments : appointments.filter((appointment) => appointment.status === filter);

  if (isLoading) {
    return <div style={styles.loading}>Загрузка данных...</div>;
  }

  if (error) {
    return <div style={styles.error}>Ошибка: {error}</div>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Список заявок</h1>

      {/* Контейнер фильтров */}
      <div style={styles.filterContainer}>
        {["Все", "Новая", "В обработке", "Выполнена"].map((status) => (
          <button
            key={status}
            style={{
              ...styles.filterButton,
              ...(filter === status && styles.filterButtonActive),
            }}
            onClick={() => setFilter(status as "Все" | "Новая" | "В обработке" | "Выполнена")}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Список заявок */}
      <ul>
        {filteredAppointments.map((appointment) => (
          <li
            key={appointment.id}
            style={styles.appointmentRow}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = styles.appointmentRowHover.backgroundColor)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = styles.appointmentRow.backgroundColor)}
          >
            <div style={styles.marker}>
              {/* Цвет маркера соответствует статусу заявки */}
              {appointment.status === "Новая" && <div style={styles.markerCircleNew}></div>}
              {appointment.status === "В обработке" && <div style={styles.markerCircleInProgress}></div>}
              {appointment.status === "Выполнена" && <div style={styles.markerCircleCompleted}></div>}
            </div>
            <div style={styles.clientName}>{appointment.clientName}</div>
            <div style={styles.service}>{appointment.service}</div>
            <div style={styles.date}>{new Date(appointment.date).toLocaleDateString()}</div>
            <button
              style={styles.moreInfoButton}
              onClick={() => navigate(`/admin-panel/appointments/${appointment.id}`)}
            >
              Подробнее
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminAppointmentsPage;
