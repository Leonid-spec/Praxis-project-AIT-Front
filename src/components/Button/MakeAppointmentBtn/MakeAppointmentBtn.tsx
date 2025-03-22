import React, { useContext } from 'react';
import { StyledButton } from './styles';
import { ModalContext } from '../../Modal/ModalContext';

interface MakeAppointmentBtnProps {
  text: string; 
  onClick?: () => void;
  disabled?: boolean;
}

const MakeAppointmentBtn: React.FC<MakeAppointmentBtnProps> = ({ text, onClick, disabled }) => {
  const { openModal } = useContext(ModalContext);

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      openModal();
    }
  };

  return (
    <StyledButton onClick={handleClick} disabled={disabled}>
      {text}
    </StyledButton>
  );
};

export default MakeAppointmentBtn;
