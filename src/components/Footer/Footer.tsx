import React, { useEffect, useState } from "react";
import {
  FooterContainer,
  Content,
  Column,
  Title,
  Address,
  Info,
  ContactIcons,
  IconCircle,
  TimesContainer,
  DaysStyle,
  DaysTimesContainer,
  ColumnLeft,
  Days,
} from "./styles";
import { useTranslation } from "react-i18next";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const [workingHours, setWorkingHours] = useState({
    monday: "",
    tuesday: "",
    wednesday: "",
    thursday: "",
    friday: "",
  });

  const [address, setAddress] = useState({
    clinicName: "",
    street: "",
    city: "",
    phone: "",
    email: "",
  });

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
        setAddress({
          clinicName: parsedAddress.clinicName || "Abramian Dental",
          street: parsedAddress.street || "Breslauer Str. 17",
          city: parsedAddress.city || "78467 Konstanz",
          phone: parsedAddress.phone || "+49 75 31 7 72 73",
          email: parsedAddress.email || "praxis.sofia.abramian@gmail.com",
        });
      } catch (error) {
        console.error("Ошибка при загрузке адреса из localStorage:", error);
      }
    }
  }, []);

  return (
    <FooterContainer>
      <Content>

        <ColumnLeft>

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

        </ColumnLeft>
        
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
              <DaysTimesContainer>
              {workingHours.monday}
              </DaysTimesContainer>
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
        
        {/* Колонка с рабочим временем */}
        <Column>
          <Title>{t("message.footer.titles.time")}</Title>
          <TimesContainer>
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
          </TimesContainer>

        </Column>
      </Content>
    </FooterContainer>
  );
};

export default Footer;
