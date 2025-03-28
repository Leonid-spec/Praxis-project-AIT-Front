import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./sidebar.module.css";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.sidebar}>
      <div className={styles.item}>
        <div className={styles.labelTop}>Calendar</div>
        <div onClick={() => navigate("/admin-panel/calendar")} className={styles.box}>
          <span className={styles.icon} role="img" aria-label="calendar">
            📅
          </span>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.labelTop}>Service</div>
        <div onClick={() => navigate("/admin-panel/services")} className={styles.box}>
          <span className={styles.icon} role="img" aria-label="services">
            🛠️
          </span>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.labelTop}>Doctors</div>
        <div onClick={() => navigate("/admin-panel/doctors")} className={styles.box}>
          <span className={styles.icon} role="img" aria-label="doctors">
            👨‍⚕️
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;