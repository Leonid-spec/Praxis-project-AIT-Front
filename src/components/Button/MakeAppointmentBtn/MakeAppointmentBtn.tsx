import React, { useContext } from 'react';
import { StyledButton } from './styles';
import { ModalContext } from '../../Modal/ModalContext';

interface MakeAppointmentBtnProps {
  text: string; 
  onClick?: () => void;
  disabled?: boolean;
  serviceId?: number | null;
  bgColor?: string;
  textColor?: string; 
}

const MakeAppointmentBtn: React.FC<MakeAppointmentBtnProps> = ({ 
  text, 
  onClick,
  disabled, 
  serviceId,
  bgColor,
  textColor 
}) => {
  const { openModal } = useContext(ModalContext);

  const handleClick = () => {
    console.log('Clicked serviceId:', serviceId); 

    if (onClick) {
      onClick();
    } else {
      openModal(undefined, serviceId!); 
    }
  };

  return (
    <StyledButton onClick={handleClick} disabled={disabled} bgColor={bgColor} textColor={textColor}>
      {text}
    </StyledButton>
  );
};

export default MakeAppointmentBtn;
