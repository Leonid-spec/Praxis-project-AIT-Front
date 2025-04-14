import styled from "styled-components";

export const ServiceContainer = styled.div`
  padding: 30px 5%;
  background-color: #f9f9f9;
`;

export const WelcomeSection = styled.div`
  margin-bottom: 40px;
  text-align: center;
`;

export const ServiceContainerMainPhoto = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);  
  gap: 30px;
  max-width: 1200px;
  margin: 50px auto;
  align-items: stretch;  

  @media (max-width: 910px) {
    grid-template-columns: 1fr; 
    gap: 20px;
  }

  @media (max-width: 768px) {
    gap: 15px;
    margin: 30px auto;
  }

  @media (max-width: 480px) {
    margin: 20px auto;
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
  width: 100%;
  height: auto;  
  border-radius: 12px;
  object-fit: cover;

  @media (max-width: 768px) {
    border-radius: 8px;
  }

  @media (max-width: 480px) {
    border-radius: 6px;
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
 
export const HighlightedSpan = styled.span`
  color: #77c0eb;
  font-weight: bold;
`;

export const ServiceHeaderText = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 32px;
  font-weight: bold;
  color: #475bce; 
  color: #1a1e38a8;
`;

export const ServicePhoto = styled.img`
  display: block;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

export const HeaderTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-bottom: 20px;
`;

export const ServiceText = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 28px;
  color: #2e3a59;
  margin-top: 60px;
`;

export const HighlightText = styled.span`
  color: #5FC9D3; 
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); 
  gap: 30px;
  margin-top: 40px;
`;
