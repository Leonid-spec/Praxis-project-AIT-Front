import React from "react";
import styles from "./adminPanel.module.css";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import LoginAdminForm from "../../../components/Login/LoginAdminForm";

interface AdminPanelProps {
  isLoggedIn?: boolean;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ isLoggedIn }) => {
  if (!isLoggedIn) {
   //  return <div>Будь ласка, увійдіть у систему</div>; // або редірект на логін
   return <LoginAdminForm onClose={function (): void {
     throw new Error("Function not implemented.");
   } } onLoginSuccess={function (): void {
     throw new Error("Function not implemented.");
   } }></LoginAdminForm>
  }

  return (
    <div className={styles.mainPanel}>
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default AdminPanel;
