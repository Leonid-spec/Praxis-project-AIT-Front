import React, { useEffect, useState } from "react";
import styles from "./miniFooter.module.css";
import { useTranslation } from "react-i18next";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { RunningLineWrapper, RunningLineContainer, RunningLine } from "./styles";
import { getSettings } from "../../api/settingsAPI";
import { SettingsStringDto } from "../../store/types/settingsTypes";

const MiniFooter: React.FC = () => {
  const { t } = useTranslation();
  const [settings, setSettings] = useState<SettingsStringDto>({});

  // Загрузка данных из localStorage
  
  const handleCall = () => {
    window.location.href = "tel:+49 75 31 7 72 73";
  };

  const handleEmail = () => {
    window.location.href = "mailto:praxis.sofia.abramian@gmail.com";
  };

  useEffect(() => {
    const init = async () => {
      const localSettings = localStorage.getItem("settings");
      if (localSettings) {
        try {
          const parsedSettings: SettingsStringDto = JSON.parse(localSettings);
          setSettings(parsedSettings);
        } catch (e) {
          console.error("Error parsing settings from localStorage:", e);
        }
      } else {
        try {
          const apiSettings = await getSettings();
          console.log("Settings from API:", apiSettings);
          setSettings(apiSettings);

          localStorage.setItem("settings", JSON.stringify(apiSettings));
        } catch (err) {
          console.error("Failed to fetch settings from API:", err);
        }
      }
    };

    init();
  }, []);

  return (
    <div>
       <RunningLineWrapper>
              <RunningLineContainer>
                <RunningLine>{settings.runningText}</RunningLine>
              </RunningLineContainer>
            </RunningLineWrapper>
      <footer className={styles.footer}>
  
        <div className={styles.centerSection}>
          <div className={styles.contactElement} onClick={handleCall}>
            <FaPhone style={{ cursor: "pointer", marginRight: "5px" }} />
            <span className={styles.contactText}>{settings.phone}</span>
          </div>
          <div className={styles.contactElement} onClick={handleEmail}>
            <FaEnvelope style={{ cursor: "pointer", marginRight: "5px" }} />
           <span className={styles.contactText}> {settings.email}</span>
          </div>
          <div className={styles.contactElement}>
            {t("message.footer.hours.weekend")}
            {t("message.footer.hours.weekendText")}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MiniFooter;