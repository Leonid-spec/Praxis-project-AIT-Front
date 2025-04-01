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
        className={`${styles.item} ${location.pathname === "/admin-panel/appointments" ? styles.active : ""}`}
      >
        <div className={styles.labelTop}>Appointment</div>
        <div onClick={() => navigate("/admin-panel/appointments")} className={styles.box}>
          <img 
            src="https://www.vhv.rs/dpng/f/274-2749469_appointment-icon-png.png" 
            alt="Appointment" 
            className={styles.icon} 
          />
        </div>
      </div>
  
      {/* Service */}
      <div
        className={`${styles.item} ${location.pathname === "/admin-panel/services" ? styles.active : ""}`}
      >
        <div className={styles.labelTop}>Service</div>
        <div onClick={() => navigate("/admin-panel/services")} className={styles.box}>
          <img 
            src="https://png.pngtree.com/png-clipart/20230330/original/pngtree-management-services-line-icon-png-image_9009405.png" 
            alt="Service" 
            className={styles.icon} 
          />
        </div>
      </div>
  
      {/* Doctors */}
      <div
        className={`${styles.item} ${location.pathname === "/admin-panel/doctors" ? styles.active : ""}`}
      >
        <div className={styles.labelTop}>Doctors</div>
        <div onClick={() => navigate("/admin-panel/doctors")} className={styles.box}>
          <img 
            src="https://th.bing.com/th/id/R.f6c7c7a2dcddf4dc8bbfd7e3bd0b7c00?rik=LYm39AE86bkYgw&pid=ImgRaw&r=0" 
            alt="Doctors" 
            className={styles.icon} 
          />
        </div>
      </div>
  
      {/* Images */}
      <div
        className={`${styles.item} ${location.pathname === "/admin-panel/images" ? styles.active : ""}`}
      >
        <div className={styles.labelTop}>Images</div>
        <div onClick={() => navigate("/admin-panel/images")} className={styles.box}>
          <img 
            src="https://th.bing.com/th/id/R.b2242d32dc5434a7a2144b2dff9ccb11?rik=Doe5MOtFkP7fpQ&riu=http%3A%2F%2Ficons.iconarchive.com%2Ficons%2Fpraveen%2Fminimal-outline%2F512%2Fgallery-icon.png&ehk=ufGGEm8Yn5y27iyvTpd%2FZC8yizpZMoKJf%2B2mMJoK0%2FU%3D&risl=&pid=ImgRaw&r=0" 
            alt="Images" 
            className={styles.icon} 
          />
        </div>
      </div>
    </div>
  );
  
};

export default Sidebar;
