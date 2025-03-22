import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MenuContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: #ffffff;
  box-shadow: 0px 2px 22px rgba(0, 0, 0, 0.1); 
  border-bottom: 1px solid #eaeaea; 
  

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
    transform: translateY(-2px); 
  }

  &:active {
    color: #4b51a5;
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
    color: #4a90e2;
    border-bottom: 2px solid #4a90e2; 
  }

  &:active {
    color: #4b51a5;
    border-bottom: 2px solid #4b51a5;
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
font-weight: 500; `;

export const SprachUundAdminbereich = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

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

  @media (max-width: 480px) {
    justify-content: center;
  }
`;

export const LanguageLink = styled.a`
  text-decoration: none;
  color: #3d3d3d;
  font-size: 1rem;
  transition: color 0.3s;

  &:hover {
    color: #4a90e2;
  }

  &:active {
    color: #292929;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const Divider = styled.span` color: #3d3d3d; `;

export const AdminPanelBox = styled.div`
 display: flex; 
 align-items: center; 
 gap: 10px; `;