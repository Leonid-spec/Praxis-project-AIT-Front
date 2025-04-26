import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MenuContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
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
`;

export const LanguageSwitcher = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
`;

export const LanguageLink = styled.button`
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  padding: 8px;
  font-size: 14px;

  &:hover {
    color: #7a2141;
  }
`;

export const Divider = styled.span`
  margin: 0 5px;
  color: #3d3d3d;
`;

