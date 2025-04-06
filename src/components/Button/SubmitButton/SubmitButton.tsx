import React from "react";
import { StyledButton } from "./styles";

interface SubmitButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>; 
  children: React.ReactNode; 
  type?: "submit" | "button"; 
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick, children, type = "button" }) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default SubmitButton;

