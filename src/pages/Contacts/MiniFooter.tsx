import React, { useEffect, useState } from "react";
// import styles from "./miniFooter.module.css";
import { useTranslation } from "react-i18next";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import {
  Footer,
  CenterSection,
  ContactElement,
  ContactText,
  TitleText,
  Address,
  DaysOfWeekBox,
  DaysOfWeek,
  SprechzeitenBox,
} from "./miniFooterStyles";

const MiniFooter: React.FC = () => {
  const { t } = useTranslation();
  const [address, setAddress] = useState({
    clinicName: "Zahnarztpraxis Sofia Abramian",
    street: "Breslauer Str. 17",
    city: "Konstanz",
    phone: "+49 75 31 7 72 73",
    email: "praxis.sofia.abramian@gmail.com",
  });

  const [workingHours] = useState({
    monday: "08:00 - 12:00, 13:00 - 18:00",
    tuesday: "08:00 - 12:00, 13:00 - 18:00",
    wednesday: "08:00 - 12:00, 13:00 - 18:00",
    thursday: "08:00 - 12:00, 13:00 - 18:00",
    friday: "08:00 - 12:00, 13:00 - 18:00",
  });

  useEffect(() => {
    const savedAddress = localStorage.getItem("address");
    if (savedAddress) {
      try {
        const parsedAddress = JSON.parse(savedAddress);
        setAddress((prevState) => ({
          ...prevState,
          phone: parsedAddress.phone || prevState.phone,
          email: parsedAddress.email || prevState.email,
        }));
      } catch (error) {
        console.error("Ошибка при загрузке адреса из localStorage:", error);
      }
    }
  }, []);
  const handleCall = () => {
    window.location.href = "tel:+49 75 31 7 72 73";
  };

  const handleEmail = () => {
    window.location.href = "mailto:praxis.sofia.abramian@gmail.com";
  };

  return (
    <Footer>
      <CenterSection>
        <div>
          <TitleText>{t("message.footer.titles.contact")}</TitleText>
          <Address>
            <p>{address.clinicName}</p>
            <p>{address.street}</p>
            <p>{address.city}</p>
          </Address>
          <ContactElement onClick={handleCall}>
            <FaPhone style={{ cursor: "pointer" }} />
            <ContactText>{address.phone}</ContactText>
          </ContactElement>
          <ContactElement onClick={handleEmail}>
            <FaEnvelope style={{ cursor: "pointer" }} />
            <ContactText>{address.email}</ContactText>
          </ContactElement>
        </div>

        <div>
          <SprechzeitenBox>
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
          </SprechzeitenBox>
        </div>
      </CenterSection>
    </Footer>
  );
};

export default MiniFooter;
