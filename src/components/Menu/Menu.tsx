import { 
  MenuContainer, 
  Logo, 
  Nav, 
  StyledNavLink, 
  SprachUundAdminbereich, 
  LanguagePanel, 
  LanguageLink, 
  Divider, 
  AdminPanel, 
  AdminLink, 
  AdminIcon, 
  NavLinkImg, 
  NavLinkText,
 } from './styles';

const Menu = () => {

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
        <StyledNavLink to="/service">Leistungen</StyledNavLink>
        <StyledNavLink to="/team">Team</StyledNavLink>
        <StyledNavLink to="/about">Über uns</StyledNavLink>
        <StyledNavLink to="/contact">Kontakte</StyledNavLink>
      </Nav>

      <SprachUundAdminbereich>
        <LanguagePanel>
          <LanguageLink href="#">DE</LanguageLink>
          <Divider>|</Divider>
          <LanguageLink href="#">EN</LanguageLink>
          <Divider>|</Divider>
          <LanguageLink href="#">RU</LanguageLink>
        </LanguagePanel>
        <AdminPanel>
          <AdminLink to="/admin">
            <AdminIcon 
            src="https://th.bing.com/th/id/R.fbf39144bff5c02898fdc8fd583f84b6?rik=qLhp7D3LhK%2fQgA&pid=ImgRaw&r=0"
            alt="Admin" />
            Admin
          </AdminLink>
        </AdminPanel>
      </SprachUundAdminbereich>
    </MenuContainer>
  );
};

export default Menu;
