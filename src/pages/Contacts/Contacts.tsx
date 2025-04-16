import React, { useEffect, useState } from "react";
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
import { DayRow } from "../../components/Footer/styles";

const Contacts: React.FC = () => {
  const { t } = useTranslation();
  const [showMessage, setShowMessage] = useState(false);
  const [address, setAddress] = useState({
    clinicName: "Zahnarztpraxis Sofia Abramian",
    street: "Breslauer Str. 17",
    city: "Konstanz",
    phone: "+49 75 31 7 72 73",
    email: "praxis.sofia.abramian@gmail.com",
    gps: "47°41'06.7 N 9°09'04.4 E",
    zipCode: "78467",
  });

  const [workingHours, setWorkingHours] = useState({
    monday: "08:00 - 12:00, 13:00 - 18:00",
    tuesday: "08:00 - 12:00, 13:00 - 18:00",
    wednesday: "08:00 - 12:00, 13:00 - 18:00",
    thursday: "08:00 - 12:00, 13:00 - 18:00",
    friday: "08:00 - 12:00, 13:00 - 18:00",
  });

  // Загружаем адрес из локального хранилища
  // useEffect(() => {
  //   const savedAddress = localStorage.getItem("address");
  //   if (savedAddress) {
  //     try {
  //       const parsedAddress = JSON.parse(savedAddress);
  //       setAddress((prev) => ({
  //         ...prev,
  //         street: parsedAddress.street,
  //         city: parsedAddress.city,
  //         phone: parsedAddress.phone,
  //         email: parsedAddress.email,
  //         gps: parsedAddress.gps,
  //         zipCode: parsedAddress.zipCode,
  //       }));
  //     } catch (error) {
  //       console.error("Ошибка при загрузке адреса из localStorage:", error);
  //     }
  //   }
  // }, []);

  // Загружаем рабочее время из локального хранилища
  // useEffect(() => {
  //   const savedHours = localStorage.getItem("workingHours");
  //   if (savedHours) {
  //     try {
  //       const parsedHours = JSON.parse(savedHours);
  //       setWorkingHours(parsedHours);
  //     } catch (error) {
  //       console.error("Ошибка при загрузке рабочего времени из localStorage:", error);
  //     }
  //   }
  // }, []);

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
              <DaysOfWeekBox>
                <p>{address.street}, {address.zipCode} {address.city}
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
                  <FaPhone
                    style={{
                      transform: "rotate(90deg)",
                    }}
                  />
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
                            <DayRow>
                              <p>{t("message.footer.daysOfWeek.monday")}:</p>
                              <p>{workingHours.monday}</p>
                            </DayRow>
                            <DayRow>
                              <p>{t("message.footer.daysOfWeek.tuesday")}:</p>
                              <p>{workingHours.tuesday}</p>
                            </DayRow>
                            <DayRow>
                              <p>{t("message.footer.daysOfWeek.wednesday")}:</p>
                              <p>{workingHours.wednesday}</p>
                            </DayRow>
                            <DayRow>
                              <p>{t("message.footer.daysOfWeek.thursday")}:</p>
                              <p>{workingHours.thursday}</p>
                            </DayRow>
                            <DayRow>
                              <p>{t("message.footer.daysOfWeek.friday")}:</p>
                              <p>{workingHours.friday}</p>
                            </DayRow>
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
