import React, { useState } from "react";
import {
  ButtonContainer,
  CardsGrid,
  ContactIcons,
  ContactsBox,
  ContactsBoxTitle,
  ContactsContainer,
  ContactsPageContainer,
  ContactsWrapper,
  DaysOfWeek,
  DaysOfWeekBox,
  // HighlightedSpan,
  IconCircle,
  MapContainer,
  SprechzeitenBox,
  SprechzeitenWrapper,
} from "./styles";
import { useTranslation } from "react-i18next";
import MakeAppointmentBtn from "../../components/Button/MakeAppointmentBtn/MakeAppointmentBtn";
import { FaPhone, FaEnvelope, FaCopy } from "react-icons/fa";

const Contacts: React.FC = () => {
  const { t } = useTranslation();
  const [showMessage, setShowMessage] = useState(false);

  const handleCopyCoordinates = () => {
    const coordinates = "50.4501° N, 30.5234° E";
    navigator.clipboard.writeText(coordinates);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);
  };

  const handleCall = () => {
    window.location.href = "tel:+1234567890";
  };

  const handleEmail = () => {
    window.location.href = "mailto:example@example.com";
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
              </ContactsBoxTitle>{" "}
              <DaysOfWeek>
                <p>{t("message.main.contacts_page.address")}</p>
              </DaysOfWeek>
              <ContactIcons
                onClick={handleCopyCoordinates}
                style={{
                  cursor: "pointer",
                }}
              >
                <IconCircle>
                  <FaCopy />
                </IconCircle>
                <span>GPS: 50.4501° N, 30.5234° E</span>
              </ContactIcons>
              <ContactIcons onClick={handleCall} style={{ cursor: "pointer" }}>
                <IconCircle>
                  <FaPhone
                    style={{
                      transform: "rotate(90deg)",
                    }}
                  />
                </IconCircle>
                <span>{t("message.main.contacts_page.phone")}</span>
              </ContactIcons>
              <ContactIcons onClick={handleEmail} style={{ cursor: "pointer" }}>
                <IconCircle>
                  <FaEnvelope />
                </IconCircle>
                <span>{t("message.main.contacts_page.email")}</span>
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
                </DaysOfWeek>
                <DaysOfWeek>
                  <p>08:00 - 12:00, 13:00 - 18:00</p>
                  <p>08:00 - 12:00, 13:00 - 18:00</p>
                  <p>08:00 - 12:00, 13:00 - 18:00</p>
                  <p>08:00 - 12:00, 13:00 - 18:00</p>
                  <p>08:00 - 12:00, 13:00 - 18:00</p>
                </DaysOfWeek>
              </DaysOfWeekBox>
              <ButtonContainer>
                <MakeAppointmentBtn
                  text={t("message.main.use_oft.button.title")}
                />
              </ButtonContainer>
            </SprechzeitenBox>
          </SprechzeitenWrapper>
        </CardsGrid>

        <MapContainer>
          <ContactsBoxTitle>
            {t("message.main.contacts_page.map.title")}
          </ContactsBoxTitle>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.577930682343!2d11.587207676366516!3d48.1093323792194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ddf31d5b7085f%3A0xd3a9396049ec4d54!2sAlbrecht-D%C3%BCrer-Stra%C3%9Fe%2010%2C%2081543%20M%C3%BCnchen%2C%20Germany!5e0!3m2!1sen!2sus!4v1688561234567!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </MapContainer>
      </ContactsPageContainer>
    </ContactsContainer>
  );
};

export default Contacts;
