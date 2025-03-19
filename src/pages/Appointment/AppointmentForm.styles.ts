import styled from 'styled-components';

// Общий контейнер для всей страницы
export const PageContainer = styled.div`
  padding-top: 100px; /* Отступ под фиксированное меню */
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  background-color: #f9f9f9; /* Нежный фон для всей страницы */
`;

// Контейнер формы
export const FormContainer = styled.form`
  width: 100%;
  max-width: 600px; /* Ограничиваем ширину формы */
  background: #ffffff; /* Белый фон для формы */
  padding: 20px 30px;
  border-radius: 8px; /* Скруглённые углы */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Лёгкая тень */
  display: flex;
  flex-direction: column;
  gap: 20px; /* Пространство между элементами формы */
`;

// Заголовок формы
export const FormTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 1.5rem;
  color: #333333;
  text-align: center;
`;

// Группа элементов формы (для удобной группировки label, input и т.д.)
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  label {
    font-size: 0.9rem;
    color: #555555;
  }

  input,
  textarea,
  select {
    font-size: 1rem;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    width: 100%;
    box-sizing: border-box;

    &:focus {
      border-color: #4a90e2;
    }
  }

  textarea {
    resize: vertical;
  }

  span {
    font-size: 0.8rem;
    color: #888888;
  }
`;

// Кнопка отправки формы
export const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: #ffffff;
  background-color: #4a90e2;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #357abf;
  }
`;
