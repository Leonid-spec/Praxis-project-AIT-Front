import styled from "styled-components";

export const ServiceContainer = styled.div`
  padding: 50px 5%;
  background-color: #f9f9f9; /* Светлый фон, чтобы выделить страницу */
`;

export const WelcomeSection = styled.div`
  margin-bottom: 40px;
  text-align: center;
`;

export const ServiceHeaderText = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 32px;
  font-weight: bold;
  color: #475bce; /* Основной цвет для заголовка */
  color: #1a1e38a8;
`;

export const ServicePhoto = styled.img`
  display: block;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

export const HeaderTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-bottom: 20px;
`;

export const ServiceText = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 28px;
  color: #2e3a59;
  margin-top: 100px;
`;

export const HighlightText = styled.span`
  color: #9ceef1; /* Основной акцентный цвет */
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); /* Сетка услуг */
  gap: 30px;
  margin-top: 40px;
`;