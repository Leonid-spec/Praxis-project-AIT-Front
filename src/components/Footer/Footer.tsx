import React from "react";
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
} from "./styles";
import { useTranslation } from "react-i18next";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <FooterContainer>
      <Content>
        <Column>
          <Title>{t("message.footer.titles.contact")}</Title>
          <Address>
            <p>Abramian Dental</p>
            <p>Breslauer Str. 17</p>
            <p>78467 Konstanz</p>
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
              <span>+49 75 31 7 72 73</span>
            </ContactIcons>
            <ContactIcons style={{ cursor: "pointer" }}>
              <IconCircle>
                <FaEnvelope />
              </IconCircle>
              <span>praxis.sofia.abramian@gmail.com</span>
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
                08:00 - 12:00,    13:00 - 18:00
              </p>
              <p>
                08:00 - 12:00, 13:00 - 18:00
              </p>
              <p>
                08:00 - 12:00, 13:00 - 18:00
              </p>
              <p>
               08:00 - 12:00, 13:00 - 18:00
              </p>
              <p>
                08:00 - 12:00, 13:00 - 18:00
              </p>
            </Days>
         </TimesContainer>
        </Column>
      </Content>
    </FooterContainer>
  );
};

export default Footer;
