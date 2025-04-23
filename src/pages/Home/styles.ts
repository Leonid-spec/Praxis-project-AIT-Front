import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;

// smth new gap between main containers
  @media (max-width: 1980px) {
    gap: 10px;
  }

  @media (max-width: 768px) {
    gap: 0;
  }
`;

export const MainFotoContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  justify-content: space-between;
  margin: 10px auto;
  margin-right: 10px;
  margin-bottom: 0;
`;

export const MainTextontainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: left;
  text-align: center;
  margin: 20px auto;
  padding: 30px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 20px;
  width: 90%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  gap: 20px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const MainText = styled.div`
  @media (min-width: 1920px) {
    font-size: clamp(2rem, 5vw, 2.6rem);
  }

  @media (min-width: 1440px) {
    font-size: clamp(1.8rem, 4vw, 2.2rem);
  }

  @media (min-width: 1281px) {
    font-size: clamp(1.7rem, 3.5vw, 2.1rem);
  }

  @media (max-width: 1280px) {
    font-size: clamp(1.6rem, 4vw, 2rem);
  }

  @media (max-width: 1024px) {
    font-size: clamp(1.4rem, 4vw, 1.6rem);
  }

  @media (max-width: 768px) {
    font-size: clamp(1.4rem, 4vw, 1.8rem);
  }

  @media (max-width: 540px) {
    font-size: clamp(1.2rem, 4vw, 1.6rem);
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }

  @media (max-width: 380px) {
    font-size: 0.8rem;
  }

  @media (max-width: 320px) {
    font-size: 0.6rem;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  justify-content: center;
  text-align: center;
  padding: 10px;

  @media (min-width: 1920px) {
    font-size: clamp(2rem, 5vw, 2.8rem);
  }

  @media (min-width: 1440px) {
    font-size: clamp(2.4rem, 3.5vw, 3.8rem);
    line-height: 1.6;
  }

  @media (max-width: 1200px) {
    font-size: clamp(1.4rem, 4vw, 1.6rem);
  }

  @media (max-width: 768px) {
    font-size: clamp(1.2rem, 4vw, 1.4rem);
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const WelcomeTextSubtitle = styled.div`
  position: relative;
  color: #555555;
  font-size: clamp(1.6rem, 3vw, 3rem);
  line-height: 1.6;
  font-weight: bold;

  @media (min-width: 1920px) {
    font-size: clamp(1.6rem, 5vw, 2.8rem);
  }

  @media (min-width: 1440px) {
    font-size: clamp(1.8rem, 3.5vw, 3rem);
  }

  @media (max-width: 1200px) {
    font-size: clamp(1.6rem, 4vw, 2rem);
  }

  @media (max-width: 1024px) {
    font-size: clamp(1.4rem, 4vw, 1.8rem);
  }

  @media (max-width: 768px) {
    font-size: clamp(1rem, 4vw, 1.4rem);
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
  @media (max-width: 350px) {
    font-size: 0.6rem;
  }
`;

export const HighlightedSpan = styled.span`
  && {
    color: #7a2141;
    font-weight: bold;
    transition: color 0.3s ease;
  }
`;

export const MakeAppointmentBtnBox = styled.div`
  margin-top: 20px;
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: auto;
`;

export const RightContainerPhoto = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  object-position: center;
`;
