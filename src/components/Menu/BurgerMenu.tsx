import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import {
  BurgerButton,
  Divider,
  LanguageLink,
  LanguagePanel,
  MobileMenuOverlay,
  MobileNav,
  MobileNavLink,
} from "./BurgerMenuStyles";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <BurgerButton
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
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
            <MobileNavLink to="/login">
              {t("message.header.menu.login")}
            </MobileNavLink>
            <LanguagePanel>
              <LanguageLink onClick={() => handleLanguageChange("De")}>
                DE
              </LanguageLink>
              <Divider>|</Divider>
              <LanguageLink onClick={() => handleLanguageChange("En")}>
                EN
              </LanguageLink>
              <Divider>|</Divider>
              <LanguageLink onClick={() => handleLanguageChange("Ru")}>
                RU
              </LanguageLink>
            </LanguagePanel>
          </MobileNav>
        </MobileMenuOverlay>
      )}
    </>
  );
};

export default BurgerMenu;
