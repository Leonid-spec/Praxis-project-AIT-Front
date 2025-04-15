import React, { useEffect, useState } from "react";
import {
  FooterContainer,
  Content,
  Column,
  Title,
  Address,
  Info,
  Days,
  ContactIcons,
  IconCircle,
  TimesContainer,
  DaysStyle,
  RunningLineWrapper,
  RunningLineContainer,
  RunningLine,
} from "./styles";
import { useTranslation } from "react-i18next";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const [runningText, setRunningText] = useState("");
  const [workingHours, setWorkingHours] = useState({
    monday: "08:00 - 12:00, 13:00 - 18:00",
    tuesday: "08:00 - 12:00, 13:00 - 18:00",
    wednesday: "08:00 - 12:00, 13:00 - 18:00",
    thursday: "08:00 - 12:00, 13:00 - 18:00",
    friday: "08:00 - 12:00, 13:00 - 18:00",
  });

  const [address, setAddress] = useState({
    clinicName: "Abramian Dental", // Значение по умолчанию
    street: "Breslauer Str. 17", // Значение по умолчанию
    city: "78467 Konstanz", // Значение по умолчанию
    phone: "+49 75 31 7 72 73", // Значение по умолчанию
    email: "praxis.sofia.abramian@gmail.com", // Значение по умолчанию
  });

  // Загрузка бегущей строки из localStorage
  useEffect(() => {
    const savedText = localStorage.getItem("runningLineText");
    if (savedText) {
      setRunningText(savedText);
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

  // Загрузка данных адреса из localStorage
  useEffect(() => {
    const savedAddress = localStorage.getItem("address");
    if (savedAddress) {
      try {
        const parsedAddress = JSON.parse(savedAddress);
        setAddress((prevState) => ({
          ...prevState,
          clinicName: parsedAddress.clinicName || prevState.clinicName,
          street: parsedAddress.street || prevState.street,
          city: parsedAddress.city || prevState.city,
          phone: parsedAddress.phone || prevState.phone,
          email: parsedAddress.email || prevState.email,
        }));
      } catch (error) {
        console.error("Ошибка при загрузке адреса из localStorage:", error);
      }
    }
  }, []);
  
  return (
    <FooterContainer>

       {/* Бегущая строка выше всего содержимого */}
       {runningText && (
        <RunningLineWrapper>
          <RunningLineContainer>
            <RunningLine>{runningText}</RunningLine>
          </RunningLineContainer>
        </RunningLineWrapper>
      )}


      <Content>
        <Column>
          <Title>{t("message.footer.titles.contact")}</Title>
          <Address>
            <p>{address.clinicName}</p>
            <p>{address.street}</p>
            <p>{address.city}</p>
          </Address>
          <Info>
            <ContactIcons style={{ cursor: "pointer" }}>
              <IconCircle>
                <FaPhone
                  style={{
                    transform: "rotate(90deg)",
                  }}
                />
              </IconCircle>
              <span>{address.phone}</span>
            </ContactIcons>
            <ContactIcons style={{ cursor: "pointer" }}>
              <IconCircle>
                <FaEnvelope />
              </IconCircle>
              <span>{address.email}</span>
            </ContactIcons>
          </Info>
        </Column>
        <Column>
          <Title>{t("message.footer.titles.time")}</Title>
         <TimesContainer>
            <Days>
              <DaysStyle>
                {t("message.footer.daysOfWeek.monday")}: 
              </DaysStyle>
              <DaysStyle>
                {t("message.footer.daysOfWeek.tuesday")}: 
              </DaysStyle>
              <DaysStyle>
                {t("message.footer.daysOfWeek.wednesday")}: 
              </DaysStyle>
              <DaysStyle>
                {t("message.footer.daysOfWeek.thursday")}: 
              </DaysStyle>
              <DaysStyle>
                {t("message.footer.daysOfWeek.friday")}: 
              </DaysStyle>
            </Days>
            <Days>
              <p>
              {workingHours.monday}
              </p>
              <p>
              {workingHours.tuesday}
              </p>
              <p>
              {workingHours.wednesday}
              </p>
              <p>
              {workingHours.thursday}
              </p>
              <p>
              {workingHours.friday}
              </p>
            </Days>
         </TimesContainer>
        </Column>
      </Content>
    </FooterContainer>
  );
};

export default Footer;
