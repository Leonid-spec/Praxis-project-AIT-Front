import React, { useContext } from 'react';
import { StyledButton } from './styles';
import { ModalContext } from '../../Modal/ModalContext';
// import { useNavigate } from "react-router-dom";

interface MakeAppointmentBtnProps {
  text: string; 
  onClick?: () => void;
  disabled?: boolean;
}

const MakeAppointmentBtn: React.FC<MakeAppointmentBtnProps> = ({ text, onClick, disabled }) => {
  const { openModal } = useContext(ModalContext);
  // const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      openModal();
      // navigate("/api/appointment");
    }
  };

  return (
    <StyledButton onClick={handleClick} disabled={disabled}>
      {text}
    </StyledButton>
  );
};

export default MakeAppointmentBtn;
