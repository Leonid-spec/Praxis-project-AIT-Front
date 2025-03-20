import React from 'react';
import { StyledButton } from './styles';

interface MakeAppointmentBtnProps {
  text: string; 
  onClick?: () => void;
  disabled?: boolean;
}

const MakeAppointmentBtn: React.FC<MakeAppointmentBtnProps> = ({ text, onClick, disabled }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {text}
    </StyledButton>
  );
};

export default MakeAppointmentBtn;