import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px; /* Скругление углов */
  background-color: #83d2f3; /* Цвет кнопки */
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #387f99; /* Цвет при наведении */
  }

  &:disabled {
    background-color: #d3d3d3;
    cursor: not-allowed;
  }
`;
