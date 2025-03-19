import styled from 'styled-components';

// Общий стиль меню
export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100px;
  width: 100%;
  background-color: #fefefe;
`;

// Стили для логотипа
export const Logo = styled.div`
  width: 200px;
  height: 80px;
  /* background-color: #d3d3d3; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
`;

// Стили для навигационной панели
export const Nav = styled.div`
  display: flex;
  gap: 20px;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #3d3d3d;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.3s;

  &:hover {
    color: #4a90e2;
  }

  &:active {
    color: #9ed5eb;
  }
`;

export const NavLinkImg = styled.img`
    width: 100%;
  /* height: 24px; */
  margin-right: 5px;

  &:hover {
    color: #4a90e2;
  }

  &:active {
    color: #9ed5eb;
  }
`;

export const SprachUundAdminbereich = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

// Стили для языковой панели
export const LanguagePanel = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
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
`;

export const Divider = styled.span`
  color: #3d3d3d;
`;

// Стили для админа
export const AdminPanel = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  gap: 10px;
`;

export const AdminLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #3d3d3d;
  font-size: 1rem;

  &:hover {
    color: #4a90e2;
  }

`;

export const AdminIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 5px;
`;
