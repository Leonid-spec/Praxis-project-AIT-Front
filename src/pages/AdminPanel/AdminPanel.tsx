import React from "react";
import styles from "./adminPanel.module.css";
import Sidebar from "../AdminPanel/Sidebar";
import MainContent from "../AdminPanel/MainContent";
import AdminHeader from "../AdminPanel/AdminHeader";

const AdminPanel: React.FC = () => {
  return (
    <div className={styles.adminPanel}>
      <AdminHeader />
      <div className={styles.mainPanel}>
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
};

export default AdminPanel;