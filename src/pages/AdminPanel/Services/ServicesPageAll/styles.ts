import styled from "styled-components"; 

export const ScrollContainer = styled.div`
  flex: 1;
  overflow-y: auto; 
  scroll-behavior: smooth;
  padding: 0 30px 0 20px;
`;

export const ServicesPageAllContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  padding: 30px; 
`;

export const HeaderMainBtnsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap; /* Разрешаем перенос элементов на новую строку */

  @media (max-width: 768px) {
    flex-wrap: wrap;  /* Разрешаем перенос элементов */
    gap: 10px;  /* Уменьшаем промежуток между кнопками */

    & > *:nth-child(1),
    & > *:nth-child(2) {
      flex: 1 1 auto;  /* Даем кнопкам гибкую ширину */
      max-width: 220px;  /* Ограничиваем максимальную ширину кнопок */
    }

    & > *:nth-child(3) {
      width: 100%;  /* Контейнер поиска займет всю ширину */
    }
  }
`;

export const RefreshIconBox = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

export const RefreshIconImage2 = styled.image`
  width: 50px;
  height: 50px;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

export const RefreshIconImage = styled.img`
  width: 50px;
  height: 50px;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

export const RefreshBtn = styled.button`
  width: 40px;
  height: 40px;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

export const CardsMainContainer = styled.div`
  flex: 1; 
  overflow-y: auto; 
  padding-right: 10px;
  margin-top: 20px;  /* Добавляем отступ сверху */
  height: calc(100vh - 150px);  /* Учитываем высоту заголовка и кнопок */
`;

export const ServiceCardsMainContainer = styled.div`
  flex: 1;
  padding: 10px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); 
  gap: 20px;
  scroll-behavior: smooth;

  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c4c4c4;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;  /* Для узких экранов - один столбец */
    gap: 15px;  /* Уменьшаем промежуток между карточками */
  }
`;

export const ServiceCardStyled = styled.div<{ isActive: boolean, id: number }>`
  opacity: ${(props) => (props.isActive ? "1" : "0.5")};
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;
