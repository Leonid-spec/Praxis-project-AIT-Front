import React from "react";
import styled from "styled-components";

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

const StyledButton = styled.button`
  background-color: #475bce;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;

  &:hover {
    background-color: #3b4ba9;
  }

  &:disabled {
    background-color: #d3d3d3;
    cursor: not-allowed;
  }
`;
