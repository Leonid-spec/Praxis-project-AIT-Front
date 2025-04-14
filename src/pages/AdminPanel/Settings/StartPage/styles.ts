import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column; 
  width: 100%;
  height: 100vh;
  padding: 20px 10px;
  margin: 0 auto;
  max-width: 1200px;  /* Ограничение ширины, если нужно для больших экранов */
  transition: margin-left 0.3s ease, margin-top 0.3s ease;

  @media (min-width: 768px) {
   
    padding: 20px;
  }
`;
export const BodyLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 40px;
  }
`;


export const Sidebar = styled.div`
  display: flex;
  flex-direction: column; /* Кнопки располагаются вертикально */
  justify-content: flex-start;
  align-items: flex-start; /* Кнопки прижаты к левому краю */
  width: 250px; /* Фиксированная ширина для сайдбара */
  background-color: #f8f9fa;
  padding: 20px;
  gap: 15px;

  @media (max-width: 768px) {
    flex-direction: row; /* Горизонтальное размещение кнопок */
    justify-content: center;
    width: 100%; /* На мобильных кнопки занимают всю ширину */
    padding: 10px;
  }
`;

export const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #ffffff; /* Фон содержимого */

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const WelcomeTextBox = styled.div`
  display: flex;
  flex-direction: column; /* Заголовки располагаются сверху */
  justify-content: center;
  align-items: center; /* Центровка текста */
  gap: 15px;
  margin-bottom: 20px;
`;

export const MainWelcomeText = styled.h1`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  margin: 0;
`;

export const Section = styled.div`
  margin-top: 20px;
`;

export const SectionTitle = styled.h3`
  text-align: center;
  margin: 0 auto;
  padding-bottom: 15px; /* Пространство под заголовком */
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column; /* Вертикально на широких экранах */
  gap: 15px;

  @media (max-width: 768px) {
    flex-direction: row; /* Горизонтально на мобильных устройствах */
    justify-content: center;
    flex-wrap: wrap; /* Перенос кнопок на следующую строку */
  }
`;

export const StyledButton = styled.button`
  padding: 12px 20px;
  background-color: #20b1b7;
  color: white;
  border: none;
  border-radius: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);

  &:hover {
    background-color: #1a8e92;
  }

  &:focus {
    background-color: #16888c;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px 15px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 8px 12px;
  }
`;

export const BackButton = styled.button`
  padding: 10px 20px;
  background-color: #20b1b7;
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 10px;

  &:hover {
    background-color: #1a8e92;
  }

  @media (max-width: 768px) {
    width: 100%;
    position: static;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  margin: 20px auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input<{ type?: string }>`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

export const HighlightedSpan = styled.span`
  color: #5fc9d3;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
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

export const ScrollContainer = styled.div`
  overflow-y: auto;
  margin: 0 auto;
`;

export const MainFunctionsText = styled.p`
  font-size: 18px;
  margin-top: 20px;
  text-align: center;
`;
