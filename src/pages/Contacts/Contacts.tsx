import React, { useState, useEffect } from "react";
import {
  ButtonContainer,
  CardsGrid,
  ContactIcons,
  ContactsBox,
  ContactsBoxTitle,
  ContactsContainer,
  ContactsPageContainer,
  ContactsWrapper,
  DaysOfWeekBox,
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
  const [address, setAddress] = useState({
    street: "MusterStrasse 10",
    city: "München",
    zipCode: "12345",
    gps: "50.4501° N, 30.5234° E",
    phone: "+49 017 223 334",
    email: "info@dentalclinic.de",
  });

  const [workingHours, setWorkingHours] = useState({
    monday: "08:00 - 12:00, 13:00 - 18:00",
    tuesday: "08:00 - 12:00, 13:00 - 18:00",
    wednesday: "08:00 - 12:00, 13:00 - 18:00",
    thursday: "08:00 - 12:00, 13:00 - 18:00",
    friday: "08:00 - 12:00, 13:00 - 18:00",
  });

  // Загрузка адреса из localStorage
  useEffect(() => {
    const savedAddress = localStorage.getItem("address");
    if (savedAddress) {
      try {
        const parsedAddress = JSON.parse(savedAddress);
        setAddress(parsedAddress);
      } catch (error) {
        console.error("Ошибка при загрузке адреса из localStorage:", error);
      }
    }
  }, []);

  // Загрузка данных режима работы из localStorage
  useEffect(() => {
    const savedHours = localStorage.getItem("workingHours");
    if (savedHours) {
      try {
        const parsedHours = JSON.parse(savedHours);
        setWorkingHours(parsedHours);
      } catch (error) {
        console.error("Ошибка при загрузке данных из localStorage:", error);
      }
    }
  }, []);

  const handleCopyCoordinates = () => {
    navigator.clipboard.writeText(address.gps);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);
  };

  const handleCall = () => {
    window.location.href = `tel:${address.phone}`;
  };

  const handleEmail = () => {
    window.location.href = `mailto:${address.email}`;
  };

  return (
    <ContactsContainer>
      {showMessage && (
        <div className="notification-message">
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
              <DaysOfWeekBox>
                <p>
                  {address.street}, {address.zipCode} {address.city}
                </p>
              </DaysOfWeekBox>
              <ContactIcons
                onClick={handleCopyCoordinates}
                style={{ cursor: "pointer" }}
              >
                <IconCircle>
                  <FaCopy />
                </IconCircle>
                <span>GPS: {address.gps}</span>
              </ContactIcons>
              <ContactIcons onClick={handleCall} style={{ cursor: "pointer" }}>
                <IconCircle>
                  <FaPhone />
                </IconCircle>
                <span>{address.phone}</span>
              </ContactIcons>
              <ContactIcons onClick={handleEmail} style={{ cursor: "pointer" }}>
                <IconCircle>
                  <FaEnvelope />
                </IconCircle>
                <span>{address.email}</span>
              </ContactIcons>
            </ContactsBox>
          </ContactsWrapper>

          <SprechzeitenWrapper>
            <SprechzeitenBox>
              <ContactsBoxTitle>
                {t("message.main.contacts_page.titleTime")}
              </ContactsBoxTitle>
              <DaysOfWeekBox>
                <div className="days-column">
                  <p>{t("message.footer.daysOfWeek.monday")}</p>
                  <p>{t("message.footer.daysOfWeek.tuesday")}</p>
                  <p>{t("message.footer.daysOfWeek.wednesday")}</p>
                  <p>{t("message.footer.daysOfWeek.thursday")}</p>
                  <p>{t("message.footer.daysOfWeek.friday")}</p>
                </div>
                <div className="hours-column">
                  <p>{workingHours.monday}</p>
                  <p>{workingHours.tuesday}</p>
                  <p>{workingHours.wednesday}</p>
                  <p>{workingHours.thursday}</p>
                  <p>{workingHours.friday}</p>
                </div>
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
