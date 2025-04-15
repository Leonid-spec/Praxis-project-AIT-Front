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
  DaysOfWeekBox,
  DayRow,
  DayRowAdd,
} from "./styles";
import { useTranslation } from "react-i18next";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const defaultAddress = {
    clinicName: t("message.footer.contact.clinicName"),
    street: t("message.footer.contact.street"),
    city: t("message.footer.contact.city"),
    phone: t("message.footer.contact.phone"),
    email: t("message.footer.contact.email"),
  };

  const defaultWorkingHours = {
    monday: "08:00 - 12:00, 13:00 - 18:00",
    tuesday: "08:00 - 12:00, 13:00 - 18:00",
    wednesday: "08:00 - 12:00",
    thursday: "08:00 - 12:00, 13:00 - 18:00",
    friday: "08:00 - 12:00",
  };

  const [address, setAddress] = useState(defaultAddress);
  const [workingHours, setWorkingHours] = useState(defaultWorkingHours);

  useEffect(() => {
    const savedAddress = localStorage.getItem("address");
    if (savedAddress) {
      try {
        const parsedAddress = JSON.parse(savedAddress);
        setAddress((prev) => ({
          ...prev,
          ...parsedAddress,
        }));
      } catch (error) {
        console.error("Ошибка при загрузке данных адреса из localStorage:", error);
      }
    }

    const savedHours = localStorage.getItem("workingHours");
    if (savedHours) {
      try {
        const parsedHours = JSON.parse(savedHours);
        setWorkingHours(parsedHours);
      } catch (error) {
        console.error("Ошибка при загрузке данных режима работы из localStorage:", error);
      }
    }
  }, []);

  return (
    <FooterContainer>
      <Content>
        {/* Колонка с контактной информацией */}
        <Column>
  <Title>{t("message.footer.titles.contact")}</Title>
  <DaysOfWeekBox>
    <DayRowAdd>
      <p>{address.clinicName}</p>
      <p>{address.street}</p>
      <p>{address.city}</p>
    </DayRowAdd>
    <DayRow>
      <ContactIcons style={{ cursor: "pointer" }}>
        <IconCircle>
          <FaPhone style={{ transform: "rotate(90deg)" }} />
        </IconCircle>
        <p style={{ marginLeft: "10px" }}>{address.phone}</p>
      </ContactIcons>
    </DayRow>
    <DayRow>
      <ContactIcons style={{ cursor: "pointer" }}>
        <IconCircle>
          <FaEnvelope />
        </IconCircle>
        <p style={{ marginLeft: "10px" }}>{address.email}</p>
      </ContactIcons>
    </DayRow>
  </DaysOfWeekBox>
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
