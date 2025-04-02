import styled from 'styled-components';


export const StyledButton = styled.button`
  padding: 12px 35px; 
  font-size: 1.1rem;
  font-weight: bold; 
  border: none; 
  border-radius: 6px;
  background-color: #5FC9D3; 
  color: #ffffff;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease background-color 0.3s ease;;

  &:hover {
    background-color:#4A9FB0;
    transform: translateY(-2px); 
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.15);
  }

  &:active {
    background-color: #308b9d; 
    /* background-color: #268294;  */
    transform: translateY(0); 
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
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


// export const StyledButton = styled.button`
//   padding: 12px 35px; 
//   font-size: 1.1rem;
//   font-weight: bold; 
//   border: 2px solid #9dd7ef; 
//   border-radius: 6px;
//   background-color: #9dd7ef; 
//   color: #ffffff;
//   cursor: pointer;
//   box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
//   transition: all 0.3s ease;

//   &:hover {
//     background-color: #78a2f0; 
//     border-color: #78a2f0; 
//     transform: translateY(-2px); 
//     box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.15);
//   }

//   &:active {
//     background-color: #4a90e2; 
//     border-color: #4a90e2;
//     transform: translateY(0); 
//     box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
//   }

//   &:disabled {
//     background-color: #d3d3d3;
//     border-color: #d3d3d3;
//     color: #ffffff;
//     cursor: not-allowed;
//     box-shadow: none;
//   }

//   @media (max-width: 768px) {
//     font-size: 1rem; 
//     padding: 10px 30px;
//   }

//   @media (max-width: 480px) {
//     font-size: 0.9rem; 
//     padding: 8px 25px;
//   }
// `;

