import styled from 'styled-components';

export const StyledButton = styled.button`
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
