import styled from 'styled-components';

// export const HomeContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;


export const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 30px;
  padding: 50px 20px;
  max-width: 1200px;
  margin: 50px auto; // !important 50 => 0
  align-items: center;

  @media (max-width: 910px) {
    grid-template-columns: 1fr;
    gap: 20px;
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
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const LeftContainerPosition = styled.div`
  position: relative;
  padding: 10px;
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  overflow: hidden;
  padding: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const RightContainerPhoto = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  display: block;
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