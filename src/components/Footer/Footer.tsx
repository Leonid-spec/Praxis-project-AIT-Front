import React, { useEffect, useState } from "react";
import {
  FooterContainer,
  Content,
  Column,
  LogoContainer,
  Logo,
  Title,
  Address,
  Info,
  Days,
  ButtonWrapper,
  RunningLineWrapper,
  RunningLineContainer,
  RunningLine,
} from "./styles";
import MakeAppointmentBtn from "../Button/MakeAppointmentBtn/MakeAppointmentBtn";
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
    clinicName: "ClinicName", // Значение по умолчанию
    street: "street", // Значение по умолчанию
    city: "city", // Значение по умолчанию
    phone: "+49 017 123 456 789", // Значение по умолчанию
    email: "info@dentalclinic.de", // Значение по умолчанию
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
        <LogoContainer>
          <Logo src="/src/public/logo.png" alt="Zahn" />
        </LogoContainer>

        <Column>
          <Title>{t("message.footer.titles.contact")}</Title>
          <Address>
            <p>{address.clinicName}</p>
            <p>{address.street}</p>
            <p>{address.city}</p>
          </Address>
          <Info>
            <p>
              <FaPhone style={{ marginRight: "8px", color: "#222" }} />
              {address.phone}
            </p>
            <p>
              <FaEnvelope style={{ marginRight: "8px", color: "#222" }} />
              {address.email}
            </p>
          </Info>
        </Column>

        <Column>
          <Title>{t("message.footer.titles.time")}</Title>
          {/* Часы работы, загружаемые из localStorage */}
          <Days>
            <p>
              {t("message.footer.daysOfWeek.monday")}: {workingHours.monday}
            </p>
            <p>
              {t("message.footer.daysOfWeek.tuesday")}: {workingHours.tuesday}
            </p>
            <p>
              {t("message.footer.daysOfWeek.wednesday")}: {workingHours.wednesday}
            </p>
            <p>
              {t("message.footer.daysOfWeek.thursday")}: {workingHours.thursday}
            </p>
            <p>
              {t("message.footer.daysOfWeek.friday")}: {workingHours.friday}
            </p>
          </Days>
          <ButtonWrapper>
            <MakeAppointmentBtn text={t("message.main.use_oft.button.title")} />
          </ButtonWrapper>
        </Column>
      </Content>
    </FooterContainer>
  );
};

export default Footer;
