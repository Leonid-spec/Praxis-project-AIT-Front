import { NavLink } from 'react-router-dom';
import {
  MenuContainer,
  Logo,
  Nav,
  NavLink as StyledNavLink,
  LanguagePanel,
  LanguageLink,
  Divider,
  AdminPanel,
  AdminLink,
  AdminIcon,
  SprachUundAdminbereich,
  NavLinkImg
} from './styles';

const Menu = () => {
  return (
    <MenuContainer aria-label="Menu">
      {/* Логотип */}
      <Logo aria-label="Logo">
        {/* <NavLink to="/" title="Zur Startseite">Logo</NavLink> */}
        {/* <NavLinkImg src='https://static.vecteezy.com/system/resources/previews/000/561/579/original/logo-for-a-dental-clinic-vector-illustration.jpg'></NavLinkImg> */}
        <NavLinkImg src='https://content.wepik.com/statics/27150564/preview-page1.jpg'></NavLinkImg>

      </Logo>

      {/* Навигационная панель */}
      <Nav aria-label="Navigationsleiste">
        <StyledNavLink as={NavLink} to="/service" title="Unsere Dienstleistungen">Leistungen</StyledNavLink>
        <StyledNavLink as={NavLink} to="/team" title="Unser Team">Team</StyledNavLink>
        <StyledNavLink as={NavLink} to="/about" title="Über die Klinik">Über uns</StyledNavLink>
        <StyledNavLink as={NavLink} to="/contact" title="Unsere Kontaktinformationen">Kontakte</StyledNavLink>
      </Nav>

      {/* Языковая панель и администратор */}
      <SprachUundAdminbereich aria-label="Sprach- und Adminbereich">
        <LanguagePanel>
          <LanguageLink href="#" title="Deutsche Sprache">DE</LanguageLink>
          <Divider>|</Divider>
          <LanguageLink href="#" title="English Language">EN</LanguageLink>
          <Divider>|</Divider>
          <LanguageLink href="#" title="Russische Sprache">RU</LanguageLink>
        </LanguagePanel>

        <AdminPanel>
          <AdminLink as={NavLink} to="/admin" title="Admin-Bereich">
            <AdminIcon 
              src="https://th.bing.com/th/id/R.fbf39144bff5c02898fdc8fd583f84b6?rik=qLhp7D3LhK%2fQgA&pid=ImgRaw&r=0" 
              alt="Admin Icon" />
            Admin
          </AdminLink>
        </AdminPanel>
      </SprachUundAdminbereich>
    </MenuContainer>
  );
};

export default Menu;
