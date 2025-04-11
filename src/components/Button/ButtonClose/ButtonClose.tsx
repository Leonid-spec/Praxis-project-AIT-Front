import React from "react";
import { FaTimes } from "react-icons/fa";
import { StyledCloseButton } from "./styles";

interface ButtonCloseProps {
  onClick: () => void;
}

const ButtonClose: React.FC<ButtonCloseProps> = ({ onClick }) => {
  return (
    <StyledCloseButton onClick={onClick}>
      <FaTimes />
    </StyledCloseButton>
  );
};

export default ButtonClose;

