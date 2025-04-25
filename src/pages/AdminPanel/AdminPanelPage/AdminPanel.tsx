import React from "react";
import styles from "./adminPanel.module.css";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

interface AdminPanelProps {
  isLoggedIn?: boolean;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ isLoggedIn }) => {
  if (!isLoggedIn) {
  return <div>Please log in</div>;
  }

  return (
    <div className={styles.mainPanel}>
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default AdminPanel;
