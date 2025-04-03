import React from "react";
import styles from "./adminPanel.module.css";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import AdminHeader from "./AdminHeader";

const AdminPanel: React.FC = () => {
  return (
      <div className={styles.mainPanel}>
        <Sidebar />
        <MainContent />
      </div>
  );
};

export default AdminPanel;