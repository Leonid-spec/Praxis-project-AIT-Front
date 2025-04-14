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
            <p>DentalClinic</p>
            <p>MusterStrasse 10</p>
            <p>12345 München</p>
          </Address>
          <Info>
            <p>
              <FaPhone style={{ marginRight: "8px", color: "#222" }} />
              +49 017 223 334
            </p>
            <p>
              <FaEnvelope style={{ marginRight: "8px", color: "#222" }} />
              info@dentalclinic.de
            </p>
          </Info>
        </Column>
        <Column>
          <Title>{t("message.footer.titles.time")}</Title>
          <Days>
            <p>{t("message.footer.daysOfWeek.monday")}: 08:00 - 12:00, 13:00 - 18:00</p>
            <p>{t("message.footer.daysOfWeek.tuesday")}: 08:00 - 12:00, 13:00 - 18:00</p>
            <p>{t("message.footer.daysOfWeek.wednesday")}: 08:00 - 12:00, 13:00 - 18:00</p>
            <p>{t("message.footer.daysOfWeek.thursday")}: 08:00 - 12:00, 13:00 - 18:00</p>
            <p>{t("message.footer.daysOfWeek.friday")}: 08:00 - 12:00, 13:00 - 18:00</p>
          </Days>
          <MakeAppointmentBtn text={t("message.main.use_oft.button.title")} />
        </Column>
      </Content>
    </FooterContainer>
  );
};

export default Footer;