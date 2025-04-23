import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import {
  BurgerButton,
  MobileMenuOverlay,
  MobileNav,
  MobileNavLink,
  LanguagePanel,
  LanguageLink,
  Divider,
  BurgerMenuContainer,
  BurgerAndAppBtnContainer,
} from "./BurgerMenuStyles";
import AdminMenu from "../AdminMenu/AdminMenu";
import React from "react";
import MakeAppointmentBtn from "../Button/MakeAppointmentBtn/MakeAppointmentBtn";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);  

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  const handleAdminMenuClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <BurgerMenuContainer>
        <BurgerAndAppBtnContainer>
            <MakeAppointmentBtn 
                text={t("message.main.use_oft.button.title")} 
            />

          <BurgerButton
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </BurgerButton>
        </BurgerAndAppBtnContainer>

        {isOpen && (
          <>
            <MobileMenuOverlay onClick={() => setIsOpen(false)}>
              <MobileNav onClick={(e) => e.stopPropagation()}>
                <MobileNavLink to="/services" onClick={handleAdminMenuClick}>
                  {t("message.header.menu.services")}
                </MobileNavLink>
                <MobileNavLink to="/about" onClick={handleAdminMenuClick}>
                  {t("message.header.menu.about_us")}
                </MobileNavLink>
                <MobileNavLink to="/team" onClick={handleAdminMenuClick}>
                  {t("message.header.menu.team")}
                </MobileNavLink>
                <MobileNavLink to="/contacts" onClick={() => setIsOpen(false)}>
                  {t("message.header.menu.contact")}
                </MobileNavLink>

                <LanguagePanel>
                  {["de", "en", "ru"].map((lang, index) => (
                    <React.Fragment key={lang}>
                      <LanguageLink onClick={() => handleLanguageChange(lang)}>
                        {lang.toUpperCase()}
                      </LanguageLink>
                      {index < 2 && <Divider>|</Divider>}
                    </React.Fragment>
                  ))}
                </LanguagePanel>

                <MakeAppointmentBtn
                  text={t("message.main.use_oft.button.title")}
                  bgColor="#ffffff"
                  textColor="#7a2141"
                  fontSize="1rem"
                />
                <AdminMenu
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                />
              </MobileNav>
            </MobileMenuOverlay>
          </>
        )}
      </BurgerMenuContainer>
    </>
  );
};

export default BurgerMenu;
