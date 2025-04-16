    import styled from 'styled-components';

interface ButtonProps {
  bgColor?: string; 
  textColor?: string; 
}

export const StyledButton = styled.button<ButtonProps>`
  padding: 12px 35px;
  font-size: 1.1rem;
  border: none;
  border-radius: 6px;
  background-color: ${({ bgColor }) => bgColor || '#7a2141'}; 
  color: ${({ textColor }) => textColor || '#ffffff'}; 
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

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 10px 30px;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 8px 25px;
  }
`;
