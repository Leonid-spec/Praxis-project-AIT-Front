import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import AdminMenu from "../AdminMenu/AdminMenu";
import {
  MenuContainer,
  Logo,
  Nav,
  StyledNavLink,
  SprachUundAdminbereich,
  LanguagePanel,
  LanguageLink,
  Divider,
  NavLinkImg,
  NavLinkText,
  BesideLogoContainer,
} from "./styles";
import BurgerMenu from "./BurgerMenu";
import React from "react";
import MakeAppointmentBtn from "../Button/MakeAppointmentBtn/MakeAppointmentBtn";

const Menu = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { t, i18n } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1280);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <MenuContainer>
      <Logo>
        <StyledNavLink to="/" aria-label={t("message.menu.home")}>
          <NavLinkImg src="/public/images/MainLogo.jpg" alt="Logo" />
        </StyledNavLink>
        <StyledNavLink to="/" aria-label={t("message.menu.home")}>
          <NavLinkText>Zahnarztpraxis Sofia Abramian</NavLinkText>
        </StyledNavLink>
      </Logo>

      <BesideLogoContainer>
        {!isMobile ? (
          <>
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
            <MakeAppointmentBtn text={t("message.main.use_oft.button.title")} />

            <SprachUundAdminbereich>
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
              <AdminMenu
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
            </SprachUundAdminbereich>
          </>
        ) : (
          <BurgerMenu />
        )}
      </BesideLogoContainer>
    </MenuContainer>
  );
};

export default Menu;
