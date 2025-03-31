import React, { useState } from "react";
import styles, {
  ContactsContainer,
  HighlightedSpan,
  MainPhoto,
  MainPhotoContainer,
  MainPhotosContainer,
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
    // alert(t("message.coordinatesCopied"));
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

        <MainPhotosContainer>
          <MainPhotoContainer>
            <MainPhoto
              src="https://th.bing.com/th/id/R.8a5ad11f92e2ee33d7c2ec9de4e89acf?rik=SILS5o4EwnukrA&riu=http%3a%2f%2fwww.reiseberichte.bplaced.net%2fthailand%2fbangkok-thailand-fass-dental-clinc-zahnarzt-01.jpg&ehk=o4IzXCzI1NmV6ZRPxlSh15cjCQnrX2AOQOHDEOURlIo%3d&risl=&pid=ImgRaw&r=0"
              alt="Team"
            />
          </MainPhotoContainer>
          <MainPhotoContainer>
            <MainPhoto
              src="https://www.zahnarzt-krappen.de/wp-content/uploads/UnserTeam_Suedwallpraxis_Rezeption1-705x484.jpg"
              alt="Team"
            />
          </MainPhotoContainer>
        </MainPhotosContainer>
      </TeamContainer>

      <div style={styles.contactsPage}>
        <div style={styles.cardsGrid}>
          <div style={styles.contactsWrapper}>
            <div style={styles.contacts}>
              <h2>
                <a
                  href="https://www.google.com/maps?q=50.4501,30.5234"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.link}
                >
                  {t("message.main.contacts_page.titleContacts")}
                </a>
              </h2>

              <p style={styles.contactBox}>
                {t("message.main.contacts_page.address")}
              </p>

              <div style={styles.contactBox}>
                <div style={styles.contactIcons}>
                  <div style={styles.contactIcons}>
                    <div style={styles.iconCircle}>📍</div>
                  <span>GPS: 50.4501° N, 30.5234° E</span>
                  </div>
                  {/* <button onClick={handleCopyCoordinates} style={styles.copyButton}>
                {t("message.copy")}
                //TODO что-то сделать с кнопкой, не понимаю, что она должна и куда копировать
              </button> */}
                </div>

                <div style={styles.contactIcons}>
                  <div style={styles.iconCircle}>📞</div>
                  <span>{t("message.main.contacts_page.phone")}</span>
                </div>

                <div style={styles.contactIcons}>
                  <div style={styles.contactIcons}>
                    <div style={styles.iconCircle}>📧</div>
                    <span>{t("message.main.contacts_page.email")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={styles.sprechzeitenWrapper}>
            <div style={styles.sprechzeiten}>
              <h2>{t("message.main.contacts_page.titleTime")}</h2>
              <div style={styles.daysOfWeek}>
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
              </div>
              <div style={styles.buttonContainer}>
                <MakeAppointmentBtn
                  text={t("message.main.use_oft.button.title")}
                />
              </div>
            </div>
          </div>
        </div>

        <div style={styles.mapContainer}>
          <h2>{t("message.main.contacts_page.map.title")}</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.577930682343!2d11.587207676366516!3d48.1093323792194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ddf31d5b7085f%3A0xd3a9396049ec4d54!2sAlbrecht-D%C3%BCrer-Stra%C3%9Fe%2010%2C%2081543%20M%C3%BCnchen%2C%20Germany!5e0!3m2!1sen!2sus!4v1688561234567!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </ContactsContainer>
  );
};

export default Contacts;