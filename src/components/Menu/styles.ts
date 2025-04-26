import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MenuContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 8px 20px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #3d3d3d;
  display: flex;
  align-items: center;

  &:hover {
    color: #7a2141;
  }

  &.active {
    color: #7a2141;
  }
`;

export const LogoImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;

  @media (max-width: 450px) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 300px) {
    width: 30px;
    height: 30px;
  }
`;

export const LogoText = styled.span`
  font-size: 1.6rem;
  font-weight: 600;
  text-shadow: 2px 4px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
  }

  @media (max-width: 450px) {
    font-size: 0.8rem;
  }

  @media (max-width: 300px) {
    font-size: 0.6rem;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

  @media (max-width: 1350px) {
    gap: 30px;
  }

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 20px;

  @media (max-width: 1350px) {
    gap: 15px;
  }
`;

export const NavItem = styled(NavLink)`
  font-size: 1.2rem;
  color: #3d3d3d;
  text-decoration: none;

  &:hover {
    color: #7a2141;
  }

  &.active {
    color: #7a2141;
  }
`;

export const LanguageAndAdmin = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  color: black;

`;

export const LanguageSwitcher = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: black;
`;

export const LanguageLink = styled.div`
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  padding: 8px;
  font-size: 14px;
  color: black;

  &:hover {
    color: #7a2141;
  }
`;

export const Divider = styled.span`
  margin: 0 5px;
  color: #3d3d3d;
`;


export const BurgerMenuContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: 450px) {
    gap: 10px;
  }

  @media (max-width: 360px) {
    gap: 4px;
  }
`;

export const BurgerAndAppBtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    gap: 20px;
  }

  @media (max-width: 540px) {
    gap: 10px;
  }

  @media (max-width: 375px) {
    gap: 10px;
  }
`;

export const BurgerButton = styled.div`
  display: none;
  margin-top: 8px;

  @media (max-width: 1440px) {
    display: block;
    font-size: 2rem;
    color: #7a2141;
    cursor: pointer;
  }

  @media (max-width: 1240px) {
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }

  @media (max-width: 450px) {
    font-size: 1.4rem;
  }

  @media (max-width: 300px) {
    /* margin-left: 6px; */
  }
`;

export const MobileMenuOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: start;
  padding-top: 100px;
`;

export const MobileNav = styled.nav`
  background-color: #7a2141;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 20px;
  width: 90%;
  max-width: 300px;
  font-size: 1.1rem;
`;

export const MobileNavLink = styled(NavLink)`
  text-decoration: none;
  color: #ffffff;
  color: #111;

  text-align: center;
  border: none;

  &:hover {
    color: #111;
  }
`;

export const LanguagePanel = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

// export const LanguageLink = styled.div`
//   background: none;
//   border: none;
//   color: inherit;
//   font-weight: bold;
//   color: #ffffff;
//   color: #111;

//   cursor: pointer;
//   padding: 14px;
//   font-size: 14px;

//   &:hover {
//     color: #111;
//   }
// `;

export const AdminMenuBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  gap: 20px;
`;

export const AdminMenuBoxLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px 0 0 0.5px;
  width: 50px;
  height: 50px;
  border: 2px solid #f4f4f4;
  border-radius: 50%;
`;
