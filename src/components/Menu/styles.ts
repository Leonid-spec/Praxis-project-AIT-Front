import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const MenuContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 2;
  display: flex;
  align-content: center;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  padding: 10px 30px;
  max-width: 100%;
  background-color: #ffffff;
  box-shadow: 0px 2px 22px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    gap: 10px;
    padding: 10px;
  }

  @media (max-width: 450px) {
    gap: 20px;
    padding: 6px 10px;
  }

  @media (max-width: 360px) {
    gap: 10px;
  }
`;

export const BesideLogoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  text-align: center;
  gap: 60px;
  font-size: 1.6rem;

  @media (max-width: 1350px) {
    gap: 30px;
  }
`;


export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  
  @media (max-width: 450px) {
    margin-left: 8px;
  }

  @media (max-width: 300px) {
    margin-left: 6px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 25px;

  @media (max-width: 1350px) {
    gap: 10px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #3d3d3d;
  font-size: 1.2rem;

  &.active {
    color: #7a2141;
  }
  
  &:hover {
    color: #9ceef1;
    color: #7a2141;
  }
`;

export const SprachUundAdminbereich = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  gap: 20px;
`;

export const LanguagePanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  text-align: center;
`;

export const LanguageLink = styled.button`
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  margin: 0;
  font-size: 14px;

  &:hover {
    color: #9ceef1;
    color: #7a2141;
    /* color: #4ba0a5; */
  }
`;

export const Divider = styled.span`
  color: #3d3d3d;
  /* font-size: 24px; */
  font-size: 14px;

`;

export const AdminPanelBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

`;

export const NavLinkImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;

  @media (max-width: 450px) {
    width: 40px;
    height: 40px;
    margin-right: 8px;
  }

  @media (max-width: 300px) {
    width: 30px;
    height: 30px;
    margin-right: 6px;
  }
`;

export const NavLinkText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3d3d3d;
  font-size: 1.4rem;
  text-shadow: 2px 4px 4px rgba(0, 0, 0, 0.2);
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
  }

  @media (max-width: 530px) {
    max-width: 150px;
  }

  @media (max-width: 450px) {
    font-size: 0.8rem;
    max-width: 100px;
  }

  @media (max-width: 300px) {
    max-width: 70px;
    font-size: 0.6rem;
  }
  
`;

export const StyledNavLinkMenu = styled(Link)`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  text-decoration: none;
  color: #333;
  font-size: 18px;
  /* font-weight: 600; */
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #7a2141;
    color: white;
  }
`;
