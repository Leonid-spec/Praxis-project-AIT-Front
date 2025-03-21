import styled from 'styled-components';

// Контейнер формы
export const FormContainer = styled.form`
  width: 100%;
  max-width: 100%; /* Уменьшаем максимальную ширину, чтобы поместиться внутри модального окна */
  background: #ffffff; /* Прозрачный белый фон */
  padding: 20px 30px;
  border-radius: 8px; /* Скруглённые углы */
  //box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25); /* Приглушённая тень */
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto; /* Центрирование формы по горизонтали */
  box-sizing: border-box; /* Учитываем padding и border в размерах */

  @media (max-width: 768px) {
    padding: 15px;
    max-width: 95%; /* Для маленьких экранов уменьшаем ширину */
    box-shadow: none;
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

// Группа полей ввода
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  label {
    font-size: 16px; /* extraLight 16px */
    color: #2e3a59;
  }

  input,
  textarea {
    font-size: 1rem;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    outline: none;
    width: 100%;
    box-sizing: border-box;
    background: #ffffff;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);

    &:focus {
      border-color: #4a90e2;
    }

    &::placeholder {
      color: #a0a4a8;
    }
  }

  textarea {
    resize: vertical;
    overflow-y: auto;
  }
`;

// Чекбоксы для выбора языков
export const LanguageOptions = styled.div`
  display: flex;
  gap: 10px;

  label {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 0.9rem;
    color: #2e3a59;
    background: #ffffff;
    border: 1px solid #aba9a9;
    border-radius: 4px;
    padding: 5px 10px;
    cursor: pointer;

    &:hover {
      background: #a0a4a8;
    }

    input {
      cursor: pointer;
    }

    input:checked + span {
      background: #475bce;
      color: #ffffff;
    }
  }
`;

// Кнопка отправки
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

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
