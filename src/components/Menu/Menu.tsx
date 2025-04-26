import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import AdminMenu from "../AdminMenu/AdminMenu";
import MakeAppointmentBtn from "../Button/MakeAppointmentBtn/MakeAppointmentBtn";
import BurgerMenu from "./BurgerMenu";
import LanguageIcon from "./LanguageIcon";
import { LanguageLink, Divider } from "./BurgerMenuStyles";
import { MenuContainer, LogoContainer, StyledNavLink, LogoImage, LogoText, RightContainer, Navigation, NavItem, LanguageAndAdmin, LanguageSwitcher } from "./styles";

const Menu: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 1280);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!localStorage.getItem("token"));

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1280);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <MenuContainer>
      <LogoContainer>
        <StyledNavLink to="/" aria-label={t("message.menu.home")}>
          <LogoImage src="/images/MainLogo.jpg" alt="Logo" />
        </StyledNavLink>
        <StyledNavLink to="/" aria-label={t("message.menu.home")}>
          <LogoText>Zahnarztpraxis Sofia Abramian</LogoText>
        </StyledNavLink>
      </LogoContainer>

      <RightContainer>
        {isMobile ? (
          <>
            <LanguageIcon />
            <BurgerMenu />
          </>
        ) : (
          <>
            <Navigation>
              <NavItem to="/services">{t("message.header.menu.services")}</NavItem>
              <NavItem to="/about">{t("message.header.menu.about_us")}</NavItem>
              <NavItem to="/team">{t("message.header.menu.team")}</NavItem>
              <NavItem to="/contacts">{t("message.header.menu.contact")}</NavItem>
            </Navigation>

            <MakeAppointmentBtn text={t("message.main.use_oft.button.title")} />

            <LanguageAndAdmin>
              <LanguageSwitcher>
                {["de", "en", "ru"].map((lang, index) => (
                  <React.Fragment key={lang}>
                    <LanguageLink onClick={() => handleLanguageChange(lang)}>
                      {lang.toUpperCase()}
                    </LanguageLink>
                    {index < 2 && <Divider>|</Divider>}
                  </React.Fragment>
                ))}
              </LanguageSwitcher>

              <AdminMenu isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            </LanguageAndAdmin>
          </>
        )}
      </RightContainer>
    </MenuContainer>
  );
};

export default Menu;
