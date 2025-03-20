import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px;
  gap: 20px;
  margin: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  @media (max-width: 480px) {
    margin: 10px;
    padding: 10px;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: #fefefe;

  @media (max-width: 768px) {
    align-items: center;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const LeftContainerPosition = styled.div`
  position: relative;
  left: 20px;
  bottom: 20px;

  @media (max-width: 768px) {
    left: 0;
    bottom: 0;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  /* background-color: #ecf3ff;  */
  border-radius: 6px;
  overflow: hidden; 
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); 

  @media (max-width: 768px) {
    padding: 8px; 
  }

  @media (max-width: 480px) {
    padding: 5px; 
  }
`;


export const RightContainerPhoto = styled.img`
  max-width: 100%;
  width: auto;
  height: auto; 
  border-radius: 0; 
  object-fit: cover; 
  display: block; 

  @media (max-width: 768px) {
    max-width: 95%; 
    border-radius: 4px; 
  }

  @media (max-width: 480px) {
    max-width: 90%; 
    border-radius: 2px;

  }
`;

export const WelcomeText = styled.h1`
  color: #414141;
  color: #595f70;
  font-size: clamp(1.8rem, 5vw, 2.5rem); 
  line-height: 1.5;
  text-align: start;

  @media (max-width: 768px) {
    text-align: center;
    line-height: 1.3;
  }

  @media (max-width: 480px) {
    font-size: clamp(1.6rem, 6vw, 1.8rem);
  }

  span {
    color: #9ceef1;
  }
`;


export const HighlightedSpan = styled.span`
  color: #9ceef1;
`;

export const PlaceholderButton = styled.button`
  background-color: #4a90e2;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #357abf;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 8px 18px;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 6px 16px;
  }
`;
