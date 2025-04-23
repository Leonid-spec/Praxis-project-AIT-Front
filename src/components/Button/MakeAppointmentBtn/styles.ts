import styled from "styled-components";

interface ButtonProps {
  bgColor?: string;
  textColor?: string;
}

export const StyledButton = styled.button<ButtonProps>`
  padding: 12px 35px;
  font-size: 1.1rem;
  border: none;
  border-radius: 6px;
  background-color: ${({ bgColor }) => bgColor || "#7a2141"};
  color: ${({ textColor }) => textColor || "#ffffff"};
  cursor: pointer;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
  font-weight: bold;

  transition: all 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: #d3d3d3;
    border-color: #d3d3d3;
    color: #ffffff;
    cursor: not-allowed;
    box-shadow: none;
  }

  @media (min-width: 1980px) {
    /* font-size: clamp(1.4rem, 4vw, 1.8rem); */
    padding: 14px 32px;
  }

  @media (min-width: 1440px) {
    /* font-size: clamp(1.2rem, 3.5vw, 1.6rem); */
    padding: 14px 28px;
  }

  @media (max-width: 1200px) {
    /* font-size: clamp(1rem, 3vw, 1.4rem); */
    padding: 12px 24px;
  }

  @media (max-width: 768px) {
    /* font-size: clamp(0.8rem, 2vw, 1.2rem); */
    padding: 10px 20px;
  }

  @media (max-width: 480px) {
    font-size: clamp(0.8rem, 2vw, 1.2rem);

    padding: 8px 16px;
  }

  @media (max-width: 360px) {
    font-size: clamp(0.6rem, 2vw, 1rem);
    padding: 6px 12px;
  }

  @media (max-width: 320px) {
    font-size: clamp(0.5rem, 2vw, 0.8rem);
  }
`;
