import styled from 'styled-components';

// Общий стиль контейнера меню
export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between; /* Группы элементов распределены горизонтально */
  align-items: center;
  height: 100px;
  width: 100%;
  background-color: #fefefe;
  padding: 0 20px;
  position: fixed; /* Закрепляем меню наверху страницы */
  top: 0;
  left: 0;
  z-index: 1000; /* Меню всегда будет сверху */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Небольшая тень для визуального разделения */
`;

// Логотип
export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 150px; /* Стандартная ширина */
    height: auto;
    transition: width 0.3s ease;

    @media (max-width: 768px) {
      width: 20%; /* Уменьшаем до 20% экрана на маленьких устройствах */
    }
  }
`;

// Навигационная панель
export const Nav = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column; /* Перестраиваем навигацию вертикально */
    align-items: flex-start;
    width: 100%; /* Занимаем ширину всей группы */
  }
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

// Языковая и администраторская панели
export const SprachUundAdminbereich = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column; /* Перестраиваем в вертикальное положение */
    align-items: flex-end; /* Выравниваем блок справа */
    gap: 10px;
  }
`;

export const LanguagePanel = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    justify-content: flex-end;
  }
`;

export const LanguageLink = styled.a`
  text-decoration: none;
  color: #3d3d3d;
  font-size: 1rem;

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

export const AdminPanel = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
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

// Стили для изображения NavLinkImg
export const NavLinkImg = styled.img`
  width: 150px; /* Стандартный размер */
  height: auto;
  transition: width 0.3s ease;

  @media (max-width: 768px) {
    width: 20%; /* Ограничиваем ширину на узких экранах */
  }
`;
