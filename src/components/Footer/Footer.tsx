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

  useEffect(() => {
    const savedAddress = localStorage.getItem("address");
    if (savedAddress) {
      try {
        const parsedAddress = JSON.parse(savedAddress);
        setAddress({
          clinicName:
            parsedAddress.clinicName || "Zahnarztpraxis Sofia Abramian",
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
    <FooterContainer>
      <Content>
        <ColumnLeft>
          <TitleText>{t("message.footer.titles.contact")}</TitleText>
          <ContactsInfoContainer>
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
                <ContactText>{address.phone}</ContactText>
              </ContactIcons>
              <ContactIcons style={{ cursor: "pointer" }}>
                <IconCircle>
                  <FaEnvelope />
                </IconCircle>
                <ContactText>{address.email}</ContactText>
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
                {/* <p>{t("message.footer.hours.weekend")}</p> */}
              </DaysOfWeek>
              <DaysOfWeek>
                <p>{workingHours.monday}</p>
                <p>{workingHours.tuesday}</p>
                <p>{workingHours.wednesday}</p>
                <p>{workingHours.thursday}</p>
                <p>{workingHours.friday}</p>
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
  );
};

export default Footer;
