import React from "react";
import styles from "./miniFooter.module.css";
import { useTranslation } from "react-i18next";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import MakeAppointmentBtn from "../../components/Button/MakeAppointmentBtn/MakeAppointmentBtn";
import { Link } from "react-router-dom";

const MiniFooter: React.FC = () => {
  const { t } = useTranslation();

  const handleCall = () => {
    window.location.href = `tel:${t("message.footer.contact.phone")}`; 
  };

  const handleEmail = () => {
    window.location.href = `mailto:${t("message.footer.contact.email")}`; 
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.leftSection}>
        <Link to="/" className={styles.styledNavLink}>
          <img
            src="/src/public/MainLogo-removebg.png"
            alt={t("message.footer.logo.alt")}
            className={styles.logo}
          />
        </Link>
      </div>

      <div className={styles.centerSection}>
        <div className={styles.contactElement} onClick={handleCall}>
          <FaPhone style={{ cursor: "pointer", marginRight: "5px" }} />
          +49 017 123 456 789
        </div>
        <div className={styles.contactElement} onClick={handleEmail}>
          <FaEnvelope style={{ cursor: "pointer", marginRight: "5px" }} />
          info@dentalclinic.de
        </div>
        <div className={styles.contactElement}>
          {t("message.footer.hours.weekdays")} 08:00 - 12:00, 13:00 - 18:00
        </div>
        <div className={styles.contactElement}>
          {t("message.footer.hours.weekend")}
        </div>
      </div>

      <div className={styles.rightSection}>
        <MakeAppointmentBtn text={t("message.main.use_oft.button.title")} />
      </div>
    </footer>
  );
};

export default MiniFooter;
