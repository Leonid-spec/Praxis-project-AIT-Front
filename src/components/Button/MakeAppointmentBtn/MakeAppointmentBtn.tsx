import React from 'react';
import { StyledButton } from './styles';

interface MakeAppointmentBtnProps {
  text: string; // Текст кнопки
  onClick?: () => void; // Функция для обработки нажатия
  disabled?: boolean; // Состояние кнопки
}

const MakeAppointmentBtn: React.FC<MakeAppointmentBtnProps> = ({ text, onClick, disabled }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {text}
    </StyledButton>
  );
};

export default MakeAppointmentBtn;
