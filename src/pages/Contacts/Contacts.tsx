import React, { useEffect, useState } from "react";
import {
  CardsGrid,
  ContactIcons,
  ContactsBox,
  ContactsBoxTitle,
  ContactsContainer,
  ContactsPageContainer,
  ContactsWrapper,
  DaysOfWeek,
  DaysOfWeekBox,
  DaysOfWeekp,
  DaysOfWeekspan,
  IconCircle,
  MapContainer,
  SprechzeitenBox,
  SprechzeitenWrapper,
} from "./styles";
import { useTranslation } from "react-i18next";
import { FaPhone, FaEnvelope, FaCopy } from "react-icons/fa";
import { SettingsStringDto } from "../../store/types/settingsTypes";
import { getSettings } from "../../api/settingsAPI";

const Contacts: React.FC = () => {
  const { t } = useTranslation();
  const [settings, setSettings] = useState<SettingsStringDto>({});
  const [showMessage, setShowMessage] = useState(false);

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

  const handleCopyCoordinates = () => {
    if (settings.gps) navigator.clipboard.writeText(settings.gps);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);
  };

  const handleCall = () => {
    if (settings.phone) window.location.href = `tel:${settings.phone}`;
  };

  const handleEmail = () => {
    if (settings.email) window.location.href = `mailto:${settings.email}`;
  };

  return (
    <ContactsContainer>
      {showMessage && (
        <div
          style={{
            position: "fixed",
            bottom: "30px",
            right: "10px",
            backgroundColor: "#4caf50",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            zIndex: 1,
          }}
        >
          {t("message.main.contacts_page.copy")}
        </div>
      )}

      <ContactsPageContainer>
        <CardsGrid>
          <ContactsWrapper>
            <ContactsBox>
              <ContactsBoxTitle>
                {t("message.main.contacts_page.titleContacts")}
              </ContactsBoxTitle>

              <DaysOfWeek>
                <DaysOfWeekp>
                  {settings.street}, {settings.zipCode} {settings.city}
                </DaysOfWeekp>
              </DaysOfWeek>

              <ContactIcons>
                <IconCircle onClick={handleCopyCoordinates}>
                  <FaCopy />
                </IconCircle>
                <DaysOfWeekspan>{settings.gps}</DaysOfWeekspan>
              </ContactIcons>

              <ContactIcons>
                <IconCircle onClick={handleCall}>
                  <FaPhone style={{ transform: "rotate(90deg)" }} />
                </IconCircle>
                <DaysOfWeekspan>{settings.phone}</DaysOfWeekspan>
              </ContactIcons>

              <ContactIcons>
                <IconCircle onClick={handleEmail}>
                  <FaEnvelope />
                </IconCircle>
                <DaysOfWeekspan>{settings.email}</DaysOfWeekspan>
              </ContactIcons>
            </ContactsBox>
          </ContactsWrapper>

          <SprechzeitenWrapper>
            <SprechzeitenBox>
              <ContactsBoxTitle>
                {t("message.main.contacts_page.titleTime")}
              </ContactsBoxTitle>
              <DaysOfWeekBox>
                <DaysOfWeek>
                  <p>{t("message.footer.daysOfWeek.monday")}:</p>
                  <p>{t("message.footer.daysOfWeek.tuesday")}:</p>
                  <p>{t("message.footer.daysOfWeek.wednesday")}:</p>
                  <p>{t("message.footer.daysOfWeek.thursday")}:</p>
                  <p>{t("message.footer.daysOfWeek.friday")}:</p>
                  <p>{t("message.footer.hours.weekend")}</p>
                </DaysOfWeek>
                <DaysOfWeek>
                  <p>{settings.monday}</p>
                  <p>{settings.tuesday}</p>
                  <p>{settings.wednesday}</p>
                  <p>{settings.thursday}</p>
                  <p>{settings.friday}</p>
                  <p>{t("message.footer.hours.weekendText")}</p>
                </DaysOfWeek>
              </DaysOfWeekBox>
            </SprechzeitenBox>
          </SprechzeitenWrapper>
        </CardsGrid>

        <MapContainer>
          <ContactsBoxTitle>
            {t("message.main.contacts_page.map.title")}
          </ContactsBoxTitle>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6206.4969366814885!2d9.147400797436982!3d47.68490569054843!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479af6661cef1c23%3A0x944fb240c49a68bc!2sBreslauer%20Str.%2017%2C%2078467%20Konstanz!5e0!3m2!1sen!2sde!4v1745592803234!5m2!1sen!2sde"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </MapContainer>
      </ContactsPageContainer>
    </ContactsContainer>
  );
};

export default Contacts;
