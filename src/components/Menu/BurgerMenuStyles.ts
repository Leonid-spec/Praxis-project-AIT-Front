import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const BurgerButton = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    font-size: 2rem;
    color: #3b7f83;
    color: #9ceef1;
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
