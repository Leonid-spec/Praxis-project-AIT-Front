import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import styles from "./mainContent.module.css";
import DoctorsPage from "./DoctorsPage";
import AppointmentPage from "./appointmentsPage/AppointmentPage";

const MainContent: React.FC = () => {
  return (
    <div className={styles.content}>
      <Routes>
        {/* Маршрут по умолчанию */}
        <Route path="/" element={<Navigate to="appointment" />} />

        {/* Appointment */}
        <Route path="appointment" element={<AppointmentPage />} />

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