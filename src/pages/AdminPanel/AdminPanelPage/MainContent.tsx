import React, { useEffect } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import styles from "./mainContent.module.css";


// import AdminAppointmentsPage from "../AppointmentsPage/AdminAppointmentsPage";
import AdminAppointmentsPage from "../AppointmentsPage/MainPage/AdminAppointmentsPage";

// import AppointmentsPage from "../AppointmentsPage/AppointmentDetailsPage";
import AppointmentDetailsPage from "../AppointmentsPage/DetailsPage/AppointmentDetailsPage";


import DoctorsPage from "../Doctors/DoctorsPage";

import { ServicesPageAll } from "../Services/ServicesPageAll/ServicesPageAll";
import { ServicePageSingle } from "../Services/ServicePageSinge/ServicePageSingle";
import SettingsPage from "../Settings/StartPage/SettingsPage";

const MainContent: React.FC = () => {

  // const navigate = useNavigate();

  // useEffect(() => {
  //   const token = localStorage.getItem("token");

  //   if (!token) {
  //     navigate("/login"); 
  //   }
  // }, [navigate]);
  
  return (
    <div className={styles.content}>
      <Routes>
        {/* Маршрут по умолчанию */}
        <Route path="/" element={<Navigate to="appointments" />} />

        {/* Список заявок (Appointment Page в Sidebar) */}
        {/* <Route path="appointments" element={<AdminAppointmentsPage />} /> */}
        <Route path="appointments" element={<AdminAppointmentsPage />} />
        {/* Детали заявки (More info) */}
        {/* <Route path="appointments/:id" element={<AppointmentsPage />} /> */}
        <Route path="appointment/:id" element={<AppointmentDetailsPage />} />

        {/* Services */}
        <Route path="admin-services" element={<ServicesPageAll />} />
        <Route path="admin-services/add-new-service" element={<ServicePageSingle />} />
        
        {/* Settings */}
        <Route path="settings" element={<SettingsPage adminLogin={""} />} /> 
        
        {/* Doctors */}
        <Route path="doctors" element={<DoctorsPage />} />

        {/* 404 */}
        <Route path="*" element={<div>Page not found!</div>} />
      </Routes>
    </div>
  );
};

export default MainContent;
