import React from "react";
import styles, {
  HighlightedSpan,
  MainPhoto,
  MainPhotoContainer,
  MainPhotosContainer,
  WelcomeTextContainer,
  WelcomeTextSubtitle,
} from "./styles"; // Импорт стилей из styles.ts
import { useTranslation } from "react-i18next";
import MakeAppointmentBtn from "../../components/Button/MakeAppointmentBtn/MakeAppointmentBtn";
import { TeamContainer, TeamContainerMainPhoto } from "../Team/styles";

const Contacts: React.FC = () => {
  const { t } = useTranslation(); // Использование функции перевода

  const handleCopyCoordinates = () => {
    const coordinates = "50.4501° N, 30.5234° E";
    navigator.clipboard.writeText(coordinates); // Копирование координат в буфер обмена
    alert(t("message.coordinatesCopied")); // Уведомление пользователя
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
    <div>
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
        {/* Грид-контейнер для карточек */}
        <div style={styles.cardsGrid}>
          {/* Левый контейнер */}
          <div style={styles.leftContainer}>
            <div style={styles.leftInnerContainer}>
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
              <p>{t("message.main.contacts_page.address")}</p>
              <p> GPS </p>

              {/* Кнопка перенесена на отдельную строку */}
              <button onClick={handleCopyCoordinates} style={styles.copyButton}>
                {t("message.copy")}
                //TODO
              </button>

              <div style={styles.contactIcons}>
                <div style={styles.iconCircle}>📞</div>
                <span>{t("message.main.contacts_page.phone")}</span>
              </div>
              <div style={styles.contactIcons}>
                <div style={styles.iconCircle}>📧</div>
                <span>{t("message.main.contacts_page.email")}</span>
              </div>
            </div>
          </div>

          {/* Правый контейнер */}
          <div style={styles.rightContainer1}>
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

        {/* Контейнер для карты */}
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
    </div>
  );
};

export default Contacts;
