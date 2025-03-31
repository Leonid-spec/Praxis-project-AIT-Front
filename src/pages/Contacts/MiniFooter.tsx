import React from "react";
import styles from "./miniFooter.module.css";
import { useTranslation } from "react-i18next";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import MakeAppointmentBtn from "../../components/Button/MakeAppointmentBtn/MakeAppointmentBtn";
import { Link } from "react-router-dom";

const MiniFooter: React.FC = () => {
  const { t } = useTranslation();

  const handleCall = () => {
    window.location.href = "tel:+1234567890"; 
  };

  const handleEmail = () => {
    window.location.href = "mailto:example@example.com"; 
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.leftSection}>
      <Link to="/" className={styles.styledNavLink}>
        <img src="/src/public/MainLogo-removebg.png" alt="Zahn" className={styles.logo} />
      </Link>
    </div>

      <div className={styles.centerSection}>

        <div className={styles.contactInfo} onClick={handleCall}>
          <div className={styles.contactElement}>
            <FaPhone style={{  cursor: "pointer", marginRight: "5px" }} />
            +49 017 223 334
          </div>
          <div className={styles.contactElement} onClick={handleEmail}>
            <FaEnvelope style={{ cursor: "pointer", marginRight: "5px" }} />
            info@dentalclinic.de
          </div>
        </div>

        <div className={styles.contactInfo}>
          <div className={styles.contactElement}>
            Mo-Fr: 08:00 - 12:00, 13:00 - 18:00
          </div>
        </div>

        <div className={styles.contactInfo}>
          <div className={styles.contactElement}>Sa-So: geschlossen</div>
        </div>
      </div>

      <div className={styles.rightSection}>
        <MakeAppointmentBtn text={t("message.main.use_oft.button.title")} />
      </div>
    </footer>
  );
};

export default MiniFooter;
