import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import styles from "./mainContent.module.css";

import AdminAppointmentsPage from "../AppointmentsPage/MainPage/AdminAppointmentsPage";
import AppointmentDetailsPage from "../AppointmentsPage/DetailsPage/AppointmentDetailsPage";

import { DoctorsPageAll } from "../Doctors/DoctorsPage/DoctorsPageAll";
import AddNewDoctorPage from "../Doctors/AddNewDoctor/AddNewDoctorPage";
import EditDoctorPage from "../Doctors/EditDoctor/EditDoctorPage"; // ✅ Добавлен импорт страницы редактирования врача

import { ServicesPageAll } from "../Services/ServicesPageAll/ServicesPageAll";
import { ServicePageSingle } from "../Services/ServicePageSinge/ServicePageSingle";

import SettingsPage from "../Settings/StartPage/SettingsPage";

const MainContent: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const loggedInStatus = localStorage.getItem("isLoggedIn");

    if (token && loggedInStatus === "true") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className={styles.content}>
      <Routes>
        {/* Перенаправление на заявки по умолчанию */}
        <Route path="/" element={<Navigate to="/admin-panel/appointments" />} />

        {/* Заявки */}
        <Route path="appointments" element={<AdminAppointmentsPage />} />
        <Route path="appointment/:id" element={<AppointmentDetailsPage />} />

        {/* Услуги */}
        <Route path="admin-services" element={<ServicesPageAll />} />
        <Route
          path="admin-services/add-new-service"
          element={<ServicePageSingle />}
        />
        <Route path="settings" element={<SettingsPage adminLogin={""} />} />

        {/* Врачи */}
        <Route path="doctors/*" element={<DoctorsPageAll />} />
        <Route path="doctors/add-new-doctor" element={<AddNewDoctorPage />} />
        <Route path="edit-doctor/:id" element={<EditDoctorPage />} />{" "}
        {/* ✅ Теперь `/edit-doctor/:id` работает */}

        {/* Страница не найдена */}
        <Route path="*" element={<div>Page not found!</div>} />
      </Routes>
    </div>
  );
};

export default MainContent;
