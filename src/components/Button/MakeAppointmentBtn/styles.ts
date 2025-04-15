import styled from 'styled-components';


export const StyledButton = styled.button`
  padding: 12px 35px; 
  padding: 12px 12px; 
  font-size: 1.1rem;
  border: none; 
  border-radius: 6px;
  background-color: #5FC9D3; 
  background-color: #9ceef1;
  background-color: #7a2141;
  color: #ffffff;
  cursor: pointer;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);

  transition: all 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    /* background-color:#4A9FB0; */
    transform: translateY(-2px); 
  }

  &:active {

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