import React from "react";
import { Route, Routes } from "react-router-dom";
import styles from "./mainContent.module.css";
import DoctorsPage from "./DoctorsPage";

const MainContent: React.FC = () => {
  return (
    <div className={styles.content}>
      <Routes>
        <Route path="calendar" element={<div>Calendar content...</div>} />
        <Route path="services" element={<div>Services content...</div>} />
        <Route path="doctors" element={<DoctorsPage />} />
      </Routes>
    </div>
  );
};

export default MainContent;