import styled from 'styled-components';

// Общий контейнер для всей страницы
export const PageContainer = styled.div`
  padding-top: 100px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  background-color: #f9f9f9;
`;

// Контейнер формы
export const FormContainer = styled.form`
  width: 100%;
  max-width: 600px; /* Ширина контейнера формы */
  background: #ffffff;
  padding: 20px 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    padding: 15px 20px;
    max-width: 90%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

// Заголовок формы
export const FormTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 1.5rem;
  color: #333333;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

// Группа элементов формы
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  label {
    font-size: 0.9rem;
    color: #555555;
  }

  input,
  textarea {
    font-size: 1rem;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    width: 100%; /* Полная ширина */
    max-width: 600px; /* Синхронизация с другими элементами */
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

  @media (max-width: 768px) {
    label {
      font-size: 0.8rem;
    }

    input,
    textarea {
      font-size: 0.9rem;
    }
  }
`;

// Кнопка отправки
export const SubmitButton = styled.button`
  display: block;
  width: 100%; /* Выравниваем по ширине с полями ввода */
  max-width: 600px; /* Синхронизация ширины с формой */
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

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 8px 16px;
  }
`;

// Поля ввода телефона
export const PhoneInputWrapper = styled.div`
  position: relative;
  width: 100%; /* Адаптивность */
  max-width: 600px; /* Синхронизация ширины с остальными полями */
  box-sizing: border-box;
`;

export const PhoneInputField = styled.input`
  width: 100%; /* Полная адаптивная ширина */
  max-width: 600px; /* Синхронизация ширины с остальными полями */
  padding-left: 50px; /* Отступ для флага */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;

  &:focus {
    border-color: #4a90e2;
  }
`;

// Контейнер для флага
export const FlagContainer = styled.div`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
