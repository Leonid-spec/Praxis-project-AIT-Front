import React from "react";
import styles from "./miniFooter.module.css";
import { useTranslation } from "react-i18next";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import MakeAppointmentBtn from "../../components/Button/MakeAppointmentBtn/MakeAppointmentBtn";

const MiniFooter: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      {/* Левая часть: логотип */}
      <div className={styles.leftSection}>
        <img
          src="/src/public/logo.jpg"
          alt="Zahn"
          className={styles.logo}
        />
      </div>

      {/* Центральная часть: контакты и SPRECHZEITEN */}
<div className={styles.centerSection}>
  <div className={styles.contactInfo}>
    <div className={styles.contactElement}>
      <FaPhone style={{ marginRight: "5px" }} />
      +49 017 223 334
    </div>
    <div className={styles.contactElement}>
      <FaEnvelope style={{ marginRight: "5px" }} />
      info@dentalclinic.de
    </div>
    <div className={styles.contactElement}>
      Mo-Fr: 08:00 - 12:00, 13:00 - 18:00
    </div>
    <div className={styles.contactElement}>
      Sa-So: geschlossen
    </div>
  </div>
</div>


      {/* Правая часть: кнопка Termin Buchen */}
      <div className={styles.rightSection}>
        <MakeAppointmentBtn text={t("message.main.use_oft.button.title")} />
      </div>
    </footer>
  );
};

export default MiniFooter;
