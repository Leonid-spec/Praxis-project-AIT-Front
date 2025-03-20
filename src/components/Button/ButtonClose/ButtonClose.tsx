import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

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

const StyledCloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: #a0a4a8;
  font-size: 20px;
`;
