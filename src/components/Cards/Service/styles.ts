import styled from "styled-components";

export const Card = styled.div`
  margin-top: 50px;
  background-color: #f9f9f9; /* Светлый фон, подходящий для услуг */
  border-radius: 8px; /* Немного уменьшенный радиус углов */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05); /* Увеличение масштаба при наведении */
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.15);
  }
`;

export const Photo = styled.img`
  width: 100%;
  aspect-ratio: 4 / 3; /* Задаём соотношение сторон */
  object-fit: cover; /* Обрезаем изображение, чтобы оно вписывалось */
  border-bottom: 2px solid #e0e0e0; /* Разделительная линия снизу */
`;

export const Info = styled.div`
  padding: 20px;
  text-align: center;
`;

export const Title = styled.h3`
  font-size: 22px;
  color: #2e3a59; /* Цвет текста для заголовков */
  margin-bottom: 8px;
  font-weight: bold;
`;

export const Description = styled.p`
  font-size: 16px;
  color: #6a6a6a; /* Спокойный серый цвет для описания */
  margin-bottom: 16px;
  line-height: 1.5; /* Лучшая читаемость */
`;

export const DetailsButton = styled.button`
  background-color: #a0eef2; /* Основной цвет сайта */
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: 600; /* Небольшая жирность */
  border: none;
  cursor: pointer;
  font-size: 18px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  transition: background-color 0.3s;
  &:hover {
    background-color: #89d4e3; /* Более тёмный оттенок при наведении */
  }
`;
