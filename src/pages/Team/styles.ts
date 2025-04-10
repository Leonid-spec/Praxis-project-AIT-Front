import styled from "styled-components";

export const TeamContainer = styled.div`
    padding: 30px 5%;
  background-color: #f6f9fc;
`;

export const WelcomeTextTitle = styled.p` 
  color: #333333;
  font-size: clamp(1.6rem, 3.5vw, 2rem);
  line-height: 1.4; 
  text-align: center;
  font-weight: bold;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    text-align: center;
    font-size: clamp(1.4rem, 4vw, 1.6rem); 
    font-weight: normal;   
  }
`;


export const TeamContainerMainPhoto = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 30px;
  max-width: 1200px;
  margin: 50px auto; 
  align-items: center;
  
  @media (max-width: 910px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  `;

  export const WelcomeTextSubtitle = styled.p` 
    color: #555555;
    font-size: clamp(1.2rem, 3vw, 1.6rem);
    line-height: 1.5;
    margin-bottom: 20px;
  
    span {
      color: #77c0eb;
      font-weight: bold;
    }
  
    @media (max-width: 768px) {
      font-size: clamp(1.2rem, 4vw, 1.4rem);
    }
  `;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  gap: 20px;
  height: 100%;  

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
  }

  @media (min-width: 1920px) {
    padding: 50px;
    gap: 30px;
  }

  @media (max-width: 1200px) {
    padding: 30px;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    gap: 15px;
    padding: 15px;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  height: 100%;  

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
  }

  @media (min-width: 1920px) {
    padding: 50px;
  }

  @media (max-width: 1200px) {
    padding: 20px;
  }

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;


export const RightContainerPhoto = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  display: block;
`;

export const HighlightedSpan = styled.span`
  color: #77c0eb;
  font-weight: bold;
`;


export const TeamTextBox = styled.div`
        display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    margin-bottom: 20px;
`

export const TeamText = styled.p`
     font-family: 'Lato', sans-serif;
     font-size: 28px;
     color: #2e3a59;
     margin-top: 60px;
`

export const HighlightText = styled.span`
    color: #5FC9D3; 
`;

export const DoctorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Три колонки по умолчанию */
  gap: 20px;
  margin: 40px 10px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); /* Две колонки на средних экранах */
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Одна колонка на узких экранах */
  }
`;


