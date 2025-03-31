import '../../utils/i18n';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import AdminMenu from '../AdminMenu/AdminMenu';
import { 
  MenuContainer, 
  Logo, 
  Nav, 
  StyledNavLink, 
  StyledNavLinkMenu,
  SprachUundAdminbereich, 
  LanguagePanel, 
  LanguageLink, 
  Divider, 
  AdminPanelBox, 
  NavLinkImg, 
  NavLinkText,
 } from './styles';

const Menu = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng); 
  };

  return (
    <>
      <MenuContainer>
        <Logo>
          <StyledNavLink to="/" aria-label={t('message.menu.home')}>
            <NavLinkImg src="/src/assets/MainLogo.png" alt={t('message.menu.logo')}/>
          </StyledNavLink>
          <StyledNavLink to="/" aria-label={t('message.menu.home')}>
            <NavLinkText>Abramian Dental</NavLinkText>
          </StyledNavLink>
        </Logo>
  
        <Nav>
          <StyledNavLinkMenu to="/services">{t('message.header.menu.services')}</StyledNavLinkMenu>
          <StyledNavLinkMenu to="/about">{t('message.header.menu.about_us')}</StyledNavLinkMenu>
          <StyledNavLinkMenu to="/doctors">{t('message.header.menu.team')}</StyledNavLinkMenu>
          <StyledNavLinkMenu to="/contacts">{t('message.header.menu.contact')}</StyledNavLinkMenu>
        </Nav>
  
        <SprachUundAdminbereich>
          <LanguagePanel>
            <LanguageLink onClick={() => changeLanguage('de')}>DE</LanguageLink>
            <Divider>|</Divider>
            <LanguageLink onClick={() => changeLanguage('en')}>EN</LanguageLink>
            <Divider>|</Divider>
            <LanguageLink onClick={() => changeLanguage('ru')}>RU</LanguageLink>
          </LanguagePanel>
          <AdminPanelBox>
            <AdminMenu isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          </AdminPanelBox>
        </SprachUundAdminbereich>
      </MenuContainer>
    </>
  );
};

export default Menu;
//todo