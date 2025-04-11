import React from "react";
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
} from "./styles";
import MakeAppointmentBtn from "../Button/MakeAppointmentBtn/MakeAppointmentBtn";
import { useTranslation } from "react-i18next";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <FooterContainer>
      <Content>
        <LogoContainer>
          <Logo src="/src/public/logo.png" alt="Zahn" />
        </LogoContainer>
        <Column>
          <Title>{t("message.footer.titles.contact")}</Title>
          <Address>
            <p>{t("message.footer.contact.clinicName")}</p>
            <p>{t("message.footer.contact.street")}</p>
            <p>{t("message.footer.contact.city")}</p>
          </Address>
          <Info>
            <p>
              <FaPhone style={{ marginRight: "8px", color: "#222" }} />
              {t("message.footer.contact.phone")}
            </p>
            <p>
              <FaEnvelope style={{ marginRight: "8px", color: "#222" }} />
              {t("message.footer.contact.email")}
            </p>
          </Info>
        </Column>
        <Column>
          <Title>{t("message.footer.titles.time")}</Title>
          <Days>
            <p>{t("message.footer.daysOfWeek.monday")}: {t("message.footer.hours.monday")}</p>
            <p>{t("message.footer.daysOfWeek.tuesday")}: {t("message.footer.hours.tuesday")}</p>
            <p>{t("message.footer.daysOfWeek.wednesday")}: {t("message.footer.hours.wednesday")}</p>
            <p>{t("message.footer.daysOfWeek.thursday")}: {t("message.footer.hours.thursday")}</p>
            <p>{t("message.footer.daysOfWeek.friday")}: {t("message.footer.hours.friday")}</p>
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
