import React, { useEffect, useState } from "react";
import {
  FooterContainer,
  Content,
  Column,
  Address,
  Info,
  ContactIcons,
  IconCircle,
  TimesContainer,
  ColumnLeft,
  DayRow,
  DaysOfWeekBox,
  Title2,
  Title1,
} from "./styles";
import { useTranslation } from "react-i18next";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const [workingHours, setWorkingHours] = useState({
    monday: "08:00 - 12:00, 13:00 - 18:00",
    tuesday: "08:00 - 12:00, 13:00 - 18:00",
    wednesday: "08:00 - 12:00, 13:00 - 18:00",
    thursday: "08:00 - 12:00, 13:00 - 18:00",
    friday: "08:00 - 12:00, 13:00 - 18:00",
  });

  const [address, setAddress] = useState({
    clinicName: "Zahnarztpraxis Sofia Abramian",
    street: "Breslauer Str. 17",
    city: "Konstanz",
    phone: "+49 75 31 7 72 73",
    email: "praxis.sofia.abramian@gmail.com",
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
          clinicName: parsedAddress.clinicName || "Zahnarztpraxis Sofia Abramian",
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

          <Title1>{t("message.footer.titles.contact")}</Title1>
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
        
        {/* Колонка с рабочим временем */}
        <Column>
         
          <TimesContainer>
            <DaysOfWeekBox>
            <Title2>{t("message.footer.titles.time")}</Title2>
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
