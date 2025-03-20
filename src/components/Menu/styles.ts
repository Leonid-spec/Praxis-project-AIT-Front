import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  background-color: #fefefe;

  @media (max-width: 910px) { 
    flex-direction: column;
    gap: 15px;
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
  font-size: 1.4rem;
  font-weight: bold;
  cursor: pointer;
  width: 100px;

  @media (max-width: 768px) { 
    justify-content: center;
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    gap: 20px;
    justify-content: center;
  }

  @media (max-width: 480px) { 
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #3d3d3d;
  font-size: 1.2rem;
  font-weight: 500;
  transition: color 0.3s;

  &:hover {
    color: #4a90e2;
  }

  &:active {
    color: #9ceef1;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) { 
    font-size: 0.9rem;
  }
`;

export const NavLinkImg = styled.img`
  height: 60px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: #9ceef1; 

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    height: 50px;
  }

  @media (max-width: 480px) {
    height: 40px;
  }
`;

export const NavLinkText = styled.span`
  color: #3d3d3d;
  font-size: 1rem;
  font-weight: 500;
`;

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
    color: #6b6b6b;
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
`;

export const AdminPanel = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const AdminLink = styled(NavLink)`
  text-decoration: none;
  color: #3d3d3d;
  font-size: 1.2rem;
  display: flex;
  align-items: center;

  &:hover {
    color: #4a90e2;
  }

  &:active {
    color: #9ceef1;
  }

  @media (max-width: 480px) { 
    font-size: 1rem;
  }
`;

export const AdminIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 5px;

  @media (max-width: 480px) { 
    width: 20px;
    height: 20px;
  }
`;
