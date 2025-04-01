import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import styles from "./mainContent.module.css";
import AdminAppointmentsPage from "./appointmentPage/AdminAppointmentsPage"; // Список заявок
import AppointmentsPage from "./appointmentPage/AppointmentsPage"; // Детали заявки
import DoctorsPage from "./DoctorsPage";

const MainContent: React.FC = () => {
  return (
    <div className={styles.content}>
      <Routes>
        {/* Маршрут по умолчанию */}
        <Route path="/" element={<Navigate to="appointments" />} />

        {/* Список заявок (Appointment Page в Sidebar) */}
        <Route path="appointments" element={<AdminAppointmentsPage />} />

        {/* Детали заявки (More info) */}
        <Route path="appointments/:id" element={<AppointmentsPage />} />

        {/* Services */}
        <Route path="services" element={<div>Services content...</div>} />

        {/* Doctors */}
        <Route path="doctors" element={<DoctorsPage />} />

        {/* 404 */}
        <Route path="*" element={<div>Page not found!</div>} />
      </Routes>
    </div>
  );
};

export default MainContent;
