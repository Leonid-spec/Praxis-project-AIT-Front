import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import styles from "./mainContent.module.css";
import AdminAppointmentsPage from "../AppointmentsPage/AdminAppointmentsPage"; 
import AppointmentsPage from "../AppointmentsPage/AppointmentDetailsPage"; 
import DoctorsPage from "../Doctors/DoctorsPage";
import { ServicesPageAll } from "../Services/ServicesPageAll/ServicesPageAll";
import { ServicePageSingle } from "../Services/ServicePageSinge/ServicePageSingle";
import SettingsPage from "../Settings/StartPage/SettingsPage";

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
        <Route path="adminServices" element={<ServicesPageAll />} >
          <Route path="add-new-service" element={
            <ServicePageSingle onReturnBack={function (): void {
            throw new Error("Function not implemented.");
          } } />
          } />
        </Route>

        {/* Settings */}
        <Route path="settings" element={<SettingsPage />} /> 

        {/* Doctors */}
        <Route path="doctors" element={<DoctorsPage />} />

        {/* 404 */}
        <Route path="*" element={<div>Page not found!</div>} />
      </Routes>
    </div>
  );
};

export default MainContent;
