import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./sidebar.module.css";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={styles.sidebar}>
      {/* Appointment */}
      <div
        className={`${styles.item} ${location.pathname === "/admin-panel/appointment" ? styles.active : ""}`}
      >
        <div className={styles.labelTop}>Appointment</div>
        <div onClick={() => navigate("/admin-panel/appointment")} className={styles.box}>
          <span className={styles.icon} role="img" aria-label="calendar">
            📅
          </span>
        </div>
      </div>

      {/* Service */}
      <div
        className={`${styles.item} ${location.pathname === "/admin-panel/services" ? styles.active : ""}`}
      >
        <div className={styles.labelTop}>Service</div>
        <div onClick={() => navigate("/admin-panel/services")} className={styles.box}>
          <span className={styles.icon} role="img" aria-label="services">
            🛠️
          </span>
        </div>
      </div>

      {/* Doctors */}
      <div
        className={`${styles.item} ${location.pathname === "/admin-panel/doctors" ? styles.active : ""}`}
      >
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