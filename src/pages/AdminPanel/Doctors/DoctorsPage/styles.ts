import styled from "styled-components";

export const ScrollContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  scroll-behavior: smooth;
  /* height: 60vh; */

  @media(max-width: 1440px) {
    padding: 0 30px 0 20px;
  }

  @media(max-width: 768px) {
    margin: 0;
    padding: 0;
  }
`;

export const DoctorsPageAllContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  overflow: hidden;
`;

export const HeaderMainBtnsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 30px;

  @media(max-width: 768px) {
    flex-direction: column;
    gap: 5px;
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
`;

export const RefreshIconImage = styled.img`
  width: 50px;
  height: 50px;
`;

export const RefreshBtn = styled.button`
  width: 40px;
  height: 40px;
`;

export const CardsMainContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-right: 10px;

  @media(max-width: 1980px) {
    margin: 0 10px;
  }

  @media(max-width: 1240px) {
    margin: 10px;
    padding: 5px;
    gap: 0;
  }

  @media(max-width: 768px) {
    margin: 0;
    padding: 0;
    gap: 0;
  }
`;

export const DoctorCardsMainContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 10px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 10px;
  scroll-behavior: smooth;
  margin: 10px;

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

  @media (max-width: 1980px) {
    margin: 0 10px;
    margin: 0 20px;
  }

  @media (max-width: 1240px) {
    margin: 10px;
    padding: 5px;
    gap: 0;
  }

  @media (max-width: 768px) {
    margin: 0 auto; /* Центрирование по горизонтали */
    padding: 0;
    gap: 20px;
    justify-content: center; /* Для центрирования элементов */
    align-items: center; /* Центрируем по вертикали */
    grid-template-columns: minmax(auto, 400px); /* Задаем ширину карточки */
  }

   @media(max-width: 530px) {
    margin: 0 auto;
    padding: 0;
    gap: 20px;
    justify-content: center;
    align-items: center;
    grid-template-columns: 1fr; /* Одноколоночная структура для узких экранов */
  }
`;

export const DoctorCardStyled = styled.div<{ isActive: boolean }>`
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
  `;