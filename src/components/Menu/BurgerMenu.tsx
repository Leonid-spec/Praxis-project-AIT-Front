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
} from "./BurgerMenuStyles";
import AdminMenu from "../AdminMenu/AdminMenu";
import React from "react";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  return (
    <>
      <BurgerButton onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
        {isOpen ? <FaTimes /> : <FaBars />}
      </BurgerButton>

      {isOpen && (
        <MobileMenuOverlay onClick={() => setIsOpen(false)}>
          <MobileNav onClick={(e) => e.stopPropagation()}>
            <MobileNavLink to="/services">
              {t("message.header.menu.services")}
            </MobileNavLink>
            <MobileNavLink to="/about">
              {t("message.header.menu.about_us")}
            </MobileNavLink>
            <MobileNavLink to="/team">
              {t("message.header.menu.team")}
            </MobileNavLink>
            <MobileNavLink to="/contacts">
              {t("message.header.menu.contact")}
            </MobileNavLink>

            {/* <LanguagePanel>
              {['de', 'en', 'ru'].map((lang) => (
                <LanguageLink key={lang} onClick={() => handleLanguageChange(lang)}>
                  {lang.toUpperCase()}
                </LanguageLink>
              ))}
            </LanguagePanel> */}
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

            <AdminMenu isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          </MobileNav>
        </MobileMenuOverlay>
      )}
    </>
  );
};

export default BurgerMenu;
