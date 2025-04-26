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
  // StyledNavLink,
  // Nav,
  RunningLine,
  RunningLineContainer,
  RunningLineWrapper,
} from "./styles";
import { useTranslation } from "react-i18next";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { getSettings } from "../../api/settingsAPI";
import { SettingsStringDto } from "../../store/types/settingsTypes";

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();
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
        try {
          const apiSettings = await getSettings();
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

  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth < 434);
  //   };

  //   handleResize();
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  const getRunningText = () => {
    if (!settings) return "";

    switch (i18n.language) {
      case "de":
        return settings.runningTextDe || settings.runningTextEn || "";
      case "en":
        return settings.runningTextEn || settings.runningTextDe || "";
      case "ru":
        return settings.runningTextRu || settings.runningTextDe || "";
      default:
        return settings.runningTextDe || ""; 
    }
  };

  return (
    <>
      <RunningLineWrapper>
        <RunningLineContainer>
           <RunningLine>{getRunningText()}</RunningLine>
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
                  <p>{t("message.footer.daysOfWeek.monday")}:</p>
                  <p>{t("message.footer.daysOfWeek.tuesday")}:</p>
                  <p>{t("message.footer.daysOfWeek.wednesday")}:</p>
                  <p>{t("message.footer.daysOfWeek.thursday")}:</p>
                  <p>{t("message.footer.daysOfWeek.friday")}:</p>
                </DaysOfWeek>
                <DaysOfWeek>
                  <p>{settings.monday}</p>
                  <p>{settings.tuesday}</p>
                  <p>{settings.wednesday}</p>
                  <p>{settings.thursday}</p>
                  <p>{settings.friday}</p>
                </DaysOfWeek>
              </DaysOfWeekBox>
            </TimesContainer>
          </Column>

          {/* <Column>
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
          </Column> */}
        </Content>
      </FooterContainer>
    </>
  );
};

export default Footer;
