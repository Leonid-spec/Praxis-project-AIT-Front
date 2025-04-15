import React, { useEffect, useState } from "react";
import styles from "./miniFooter.module.css";
import { useTranslation } from "react-i18next";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const MiniFooter: React.FC = () => {
  const { t } = useTranslation();
  const [address, setAddress] = useState({
    phone: "+49 75 31 7 72 73", // Значение по умолчанию
    email: "praxis.sofia.abramian@gmail.com", // Значение по умолчанию
  });

  // Загрузка данных из localStorage
  useEffect(() => {
    const savedAddress = localStorage.getItem("address");
    if (savedAddress) {
      try {
        const parsedAddress = JSON.parse(savedAddress);
        setAddress((prevState) => ({
          ...prevState,
          phone: parsedAddress.phone || prevState.phone,
          email: parsedAddress.email || prevState.email,
        }));
      } catch (error) {
        console.error("Ошибка при загрузке адреса из localStorage:", error);
      }
    }
  }, []);
  const handleCall = () => {
    window.location.href = "tel:+49 75 31 7 72 73";
  };

  const handleEmail = () => {
    window.location.href = "mailto:praxis.sofia.abramian@gmail.com";
  };

  return (
    <footer className={styles.footer}>

      <div className={styles.centerSection}>
        <div className={styles.contactElement} onClick={handleCall}>
          <FaPhone style={{ cursor: "pointer", marginRight: "5px" }} />
          {address.phone}
        </div>
        <div className={styles.contactElement} onClick={handleEmail}>
          <FaEnvelope style={{ cursor: "pointer", marginRight: "5px" }} />
          {address.email}
        </div>
        <div className={styles.contactElement}>
          {t("message.footer.hours.weekend")}
        </div>
      </div>

      {/* <div className={styles.rightSection}>
        <MakeAppointmentBtn text={t("message.main.use_oft.button.title")} />
      </div> */}
    </footer>
  );
};

export default MiniFooter;
