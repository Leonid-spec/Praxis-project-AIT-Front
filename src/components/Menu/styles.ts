import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MenuContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: #ffffff;
  box-shadow: 0px 2px 22px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #eaeaea;

  @media (min-width: 1920px) {
    padding: 20px 50px;
  }

  @media (max-width: 910px) {
    flex-direction: column;
    gap: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    gap: 10px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  font-weight: bold;
  cursor: pointer;
  color: #3d3d3d;
  transition: color 0.3s ease;

  &:hover {
    color: #4a90e2;
  }

  @media (min-width: 1920px) {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    justify-content: center;
    font-size: 1.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 25px;
  white-space: nowrap;

  @media (min-width: 1920px) {
    gap: 40px;
  }

  @media (max-width: 768px) {
    gap: 20px;
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #3d3d3d;
  font-size: 1.2rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 8px 10px;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #4a90e2;

    color: #a0eef2;

    transform: translateY(-2px);
  }

  &:active {
    color: #4b51a5;
    color: #4a90e2;
  }

  @media (min-width: 1920px) {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const StyledNavLinkMenu = styled(NavLink)`
  text-decoration: none;
  color: #3d3d3d;
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
  border-bottom: 2px solid transparent;
  padding: 8px 10px;
  transition: all 0.3s ease-in-out;

  &:hover {
    /* color: #4a90e2;
    color: #31bcc3;
    color: #46c4ca; */
    color: #4ba0a5;


    /* border-bottom: 2px solid #4a90e2;
    border-bottom: 2px solid #49bfc5; */
    border-bottom: 2px solid #4b9aa5;

  }

  &:active {
    /* color: #4b51a5; */
    color: #3b7f83;
    /* border-bottom: 2px solid #4b51a5; */
    border-bottom: 2px solid #346b72;
  }

  @media (min-width: 1920px) {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const NavLinkImg = styled.img`
  height: 50px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: #e3f2fc;

  &:hover {
    opacity: 0.8;
    transform: scale(1.05);
  }

  @media (min-width: 1920px) {
    height: 70px;
  }

  @media (max-width: 768px) {
    height: 45px;
  }

  @media (max-width: 480px) {
    height: 40px;
  }
`;

export const NavLinkText = styled.span`
  color: #3d3d3d;
  font-size: 1rem;
  font-weight: 500;

  @media (min-width: 1920px) {
    font-size: 1.4rem;
  }
`;

export const SprachUundAdminbereich = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (min-width: 1920px) {
    gap: 30px;
  }

  @media (max-width: 768px) {
    justify-content: center;
    gap: 15px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const LanguagePanel = styled.div`
  display: flex;
  gap: 10px;

  @media (min-width: 1920px) {
    gap: 20px;
  }

  @media (max-width: 480px) {
    justify-content: center;
  }
`;

export const LanguageLink = styled.button`
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;

  &:hover {
    color: #4a90e2;
    color: #4ba0a5;
  }

  &:active {
    color: #292929;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const Divider = styled.span`
  color: #3d3d3d;

  @media (min-width: 1920px) {
    font-size: 1.2rem;
  }
`;

export const AdminPanelBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (min-width: 1920px) {
    gap: 15px;
  }
`;
