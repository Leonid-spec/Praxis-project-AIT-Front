import { useState } from 'react';
import AdminMenu from '../AdminMenu/AdminMenu';
import { 
  MenuContainer, 
  Logo, 
  Nav, 
  StyledNavLink, 
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

  return (
    <MenuContainer>
      <Logo>
        <StyledNavLink to="/" aria-label="Zur Startseite">
          <NavLinkImg src="/src/assets/MainLogo.png" alt="Logo" />
        </StyledNavLink>
        <StyledNavLink to="/" aria-label="Zur Startseite">
          <NavLinkText>Abramian Dental</NavLinkText>
        </StyledNavLink>
      </Logo>

      <Nav>
        {/* <StyledNavLink to="/service">Leistungen</StyledNavLink>
        <StyledNavLink to="/team">Team</StyledNavLink>
        <StyledNavLink to="/about">Über uns</StyledNavLink>
        <StyledNavLink to="/contact">Kontakte</StyledNavLink> */}
        <StyledNavLink to="/">Leistungen</StyledNavLink>
        <StyledNavLink to="/">Team</StyledNavLink>
        <StyledNavLink to="/">Über uns</StyledNavLink>
        <StyledNavLink to="/">Kontakte</StyledNavLink>
      </Nav>

      <SprachUundAdminbereich>
        <LanguagePanel>
          <LanguageLink href="#">DE</LanguageLink>
          <Divider>|</Divider>
          <LanguageLink href="#">EN</LanguageLink>
          <Divider>|</Divider>
          <LanguageLink href="#">RU</LanguageLink>
        </LanguagePanel>
        <AdminPanelBox>
          <AdminMenu isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        </AdminPanelBox>
      </SprachUundAdminbereich>
    </MenuContainer>
  );
};

export default Menu;
