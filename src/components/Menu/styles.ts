import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

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

  @media (max-width: 1024px) {
    /* justify-content: flex-end; */
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 25px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #3d3d3d;
  font-size: 1.2rem;
  font-weight: 500;
  

  &:hover {
    color: #9ceef1;
    color: #4ba0a5;
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
  gap: 10px;
`;

export const LanguageLink = styled.button`
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  
  &:hover {
    color: #9ceef1;
    color: #4ba0a5;

  }

  &:active {
    color: #292929;
  }
`;

export const Divider = styled.span`
  color: #3d3d3d;
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
`;

export const NavLinkText = styled.span`
  color: #3d3d3d;
  font-size: 1.2rem;

     &:hover {
     color: #3b7f83;
   }

  @media (min-width: 1920px) {
    font-size: 1.4rem;
  }
;`

export const StyledNavLinkMenu = styled(Link)`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  text-decoration: none;
  color: #333;
  font-size: 18px;
  font-weight: 600;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3b7f83;
    color: white;
  }
`;
