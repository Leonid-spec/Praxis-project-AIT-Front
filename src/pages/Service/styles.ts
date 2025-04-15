import styled from "styled-components";

export const ServiceContainer = styled.div`
  padding: 30px 5%;
  background-color: #f6f9fc;

`;
 
export const HighlightedSpan = styled.span`
  color: #555555;
  color: #77c0eb;
  color: #7a2141;
  font-weight: bold;
`;

export const HeaderTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

export const ServiceText = styled.p`
  font-size: 28px;
  color: #2e3a59;
  margin-top: 30px;
`;

export const HighlightText = styled.span`
  color: #5FC9D3; 
  color: #7a2141;
  color: #333;
  font-weight: bold;
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 0 10px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); 
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; 
  }
`;
