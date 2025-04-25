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
  DaysOfWeekBox,
  TitleText,
  ContactText,
  DaysOfWeek,
  ContactsInfoContainer,
  StyledNavLink,
  Nav,
  RunningLine,
  RunningLineContainer,
  RunningLineWrapper,
} from "./styles";
import { useTranslation } from "react-i18next";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { getSettings } from "../../api/settingsAPI";
import { SettingsStringDto } from "../../store/types/settingsTypes";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const [settings, setSettings] = useState<SettingsStringDto>({});

  useEffect(() => {
    const init = async () => {
      const localSettings = localStorage.getItem("settings");
      if (localSettings) {
        try {
          const parsedSettings: SettingsStringDto = JSON.parse(localSettings);
          setSettings(parsedSettings);
        } catch (e) {
          console.error("Error parsing settings from localStorage:", e);
        }
      } else {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("Token is missing");
          return;
        }

        try {
          const apiSettings = await getSettings(token);
          console.log("Settings from API:", apiSettings);
          setSettings(apiSettings);

          localStorage.setItem("settings", JSON.stringify(apiSettings));
        } catch (err) {
          console.error("Failed to fetch settings from API:", err);
        }
      }
    };

    init();
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 434);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <RunningLineWrapper>
        <RunningLineContainer>
          <RunningLine>{settings.runningText}</RunningLine>
        </RunningLineContainer>
      </RunningLineWrapper>

      <FooterContainer>
        <Content>
          <ColumnLeft>
            <TitleText>{t("message.footer.titles.contact")}</TitleText>
            <ContactsInfoContainer>
              <Address>
                <div>{settings.clinicName}</div>
                <div>{settings.street}</div>
                <div>{settings.city}</div>
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
                  <ContactText>{settings.phone}</ContactText>
                </ContactIcons>
                <ContactIcons style={{ cursor: "pointer" }}>
                  <IconCircle>
                    <FaEnvelope />
                  </IconCircle>
                  <ContactText>{settings.email}</ContactText>
                </ContactIcons>
              </Info>
            </ContactsInfoContainer>
          </ColumnLeft>

          <Column>
            <TimesContainer>
              <TitleText>{t("message.footer.titles.time")}</TitleText>
              <DaysOfWeekBox>
                <DaysOfWeek>
                  <div>{t("message.footer.daysOfWeek.monday")}:</div>
                  <div>{t("message.footer.daysOfWeek.tuesday")}:</div>
                  <div>{t("message.footer.daysOfWeek.wednesday")}:</div>
                  <div>{t("message.footer.daysOfWeek.thursday")}:</div>
                  <div>{t("message.footer.daysOfWeek.friday")}:</div>
                  {/* <p>{t("message.footer.hours.weekend")}</p> */}
                </DaysOfWeek>
                <DaysOfWeek>
                  <div>{settings.monday}</div>
                  <div>{settings.tuesday}</div>
                  <div>{settings.wednesday}</div>
                  <div>{settings.thursday}</div>
                  <div>{settings.friday}</div>
                </DaysOfWeek>
              </DaysOfWeekBox>
            </TimesContainer>
          </Column>

          <Column>
            {isMobile && (
              <>
                  <TitleText>{t("message.footer.titles.pages")}</TitleText>
                  <Nav>
                    <StyledNavLink to="/services">
                      {t("message.header.menu.services")}
                    </StyledNavLink>
                    <StyledNavLink to="/about">
                      {t("message.header.menu.about_us")}
                    </StyledNavLink>
                    <StyledNavLink to="/team">
                      {t("message.header.menu.team")}
                    </StyledNavLink>
                    <StyledNavLink to="/contacts">
                      {t("message.header.menu.contact")}
                    </StyledNavLink>
                  </Nav>
              </>
            )}
          </Column>
        </Content>
      </FooterContainer>
    </>
  );
};

export default Footer;
