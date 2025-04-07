import React, { useState } from "react";
import {
  ButtonContainer,
  CardsGrid,
  ContactBox,
  ContactIcons,
  ContactLink,
  ContactsBox,
  ContactsBoxTitle,
  ContactsContainer,
  ContactsPageContainer,
  ContactsWrapper,
  DaysOfWeek,
  HighlightedSpan,
  IconCircle,
  MapContainer,
  SprechzeitenBox,
  SprechzeitenWrapper,
  TeamContainer,
  WelcomeTextContainer,
  WelcomeTextSubtitle,
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

  const parseSubtitle = (text: string) => {
    return text
      .split(/<HighlightedSpan>|<\/HighlightedSpan>/)
      .map((part, index) =>
        index % 2 === 1 ? (
          <HighlightedSpan key={index}>{part}</HighlightedSpan>
        ) : (
          part
        )
      );
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
      <TeamContainer>
        <WelcomeTextContainer>
          <WelcomeTextSubtitle>
            {parseSubtitle(t("message.main.contacts_page.welcome_text"))}
          </WelcomeTextSubtitle>
        </WelcomeTextContainer>
      </TeamContainer>

      <ContactsPageContainer>
        <CardsGrid>
          <ContactsWrapper>
            <ContactsBox>
              <ContactsBoxTitle>
                  {t("message.main.contacts_page.titleContacts")}
              </ContactsBoxTitle>

              <ContactBox>
                <ContactLink
                  href="https://www.google.com/maps?q=50.4501,30.5234"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("message.main.contacts_page.address")}
                </ContactLink>
              </ContactBox>

              <ContactIcons>
                  <IconCircle><FaCopy
                      onClick={handleCopyCoordinates}
                      style={{ cursor: "pointer"}}
                    /></IconCircle>
                  <span>GPS: 50.4501° N, 30.5234° E</span>
              </ContactIcons>

              <ContactIcons>
                <IconCircle> 
                  <FaPhone 
                      onClick={handleCall}
                      style={{ cursor: "pointer" }} />
                  </IconCircle>
                <span>{t("message.main.contacts_page.phone")}</span>
              </ContactIcons>

              <ContactIcons>
                  <IconCircle>
                    <FaEnvelope 
                        onClick={handleEmail}
                        style={{ cursor: "pointer" }} />
                    </IconCircle>
                  <span>{t("message.main.contacts_page.email")}</span>
              </ContactIcons>
            </ContactsBox>
          </ContactsWrapper>

          <SprechzeitenWrapper>
            <SprechzeitenBox>
              <ContactsBoxTitle>{t("message.main.contacts_page.titleTime")}</ContactsBoxTitle>
              <DaysOfWeek>
                <p>
                  {t("message.footer.daysOfWeek.monday")}: 08:00 - 12:00, 13:00
                  - 18:00
                </p>
                <p>
                  {t("message.footer.daysOfWeek.tuesday")}: 08:00 - 12:00, 13:00
                  - 18:00
                </p>
                <p>
                  {t("message.footer.daysOfWeek.wednesday")}: 08:00 - 12:00,
                  13:00 - 18:00
                </p>
                <p>
                  {t("message.footer.daysOfWeek.thursday")}: 08:00 - 12:00,
                  13:00 - 18:00
                </p>
                <p>
                  {t("message.footer.daysOfWeek.friday")}: 08:00 - 12:00, 13:00
                  - 18:00
                </p>
              </DaysOfWeek>
              <ButtonContainer>
                <MakeAppointmentBtn
                  text={t("message.main.use_oft.button.title")}
                />
              </ButtonContainer>
            </SprechzeitenBox>
          </SprechzeitenWrapper>
        </CardsGrid>

        <MapContainer>
          <ContactsBoxTitle>{t("message.main.contacts_page.map.title")}</ContactsBoxTitle>
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
