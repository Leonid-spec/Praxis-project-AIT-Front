import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./adminPanel.module.css";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

const AdminPanel: React.FC = () => {
  const [hasReloaded, setHasReloaded] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/"); 
    } else if (!hasReloaded) {
      setHasReloaded(true);
      const alreadyReloaded = sessionStorage.getItem("alreadyReloaded");
      if (!alreadyReloaded) {
        sessionStorage.setItem("alreadyReloaded", "true");
        window.location.reload(); 
      }
    }
  }, [token, hasReloaded, navigate]);

  if (!token) {
    return null; 
  }

  return (
    <div className={styles.mainPanel}>
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default AdminPanel;
