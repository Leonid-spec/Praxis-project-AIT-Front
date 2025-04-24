import styled from "styled-components";
import { NavLink } from "react-router-dom";

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
  gap: 50px;

  @media (max-width: 768px) {
    gap: 30px;
  }

  @media (max-width: 540px) {
    gap: 20px;
  }

  @media (max-width: 375px) {
    gap: 10px;
  }
`;

export const BurgerButton = styled.div`
  display: none;
  margin-top:4px;

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
  gap: 20px;
  width: 90%;
  max-width: 300px;
  font-size: 1.1rem;

`;

export const MobileNavLink = styled(NavLink)`
  text-decoration: none;
  color: #ffffff;
  text-align: center;
  border: none;

  &:hover {
    color: #111;
  }
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
  padding: 14px;

  &:hover {
    color: #111;
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
