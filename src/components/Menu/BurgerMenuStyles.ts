import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const BurgerMenuContainer = styled.div`
display: flex;
gap: 20px;
align-items: center;
`;


export const BurgerButton = styled.div`
  display: none;
  @media (max-width: 1024px) {
    display: block;
    font-size: 2rem;
    color: #3b7f83;
    color: #9ceef1;
    color: #88e3e6;
    cursor: pointer;
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
  background-color: #3b7f83;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 90%;
  max-width: 300px;
`;

export const MobileNavLink = styled(NavLink)`
  text-decoration: none;
  color: #ffffff;
  font-size: 1.1rem;
  text-align: center;
`;

export const LanguagePanel = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const LanguageLink = styled.button`
  background: none;
  border: none;
  color: inherit;
  font-weight: bold;
  color: #ffffff;
  cursor: pointer;
  &:hover {
    color: #4a90e2;
  }
`;

export const Divider = styled.span`
  color: #dcd5d5;
`;


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
