import styled from "styled-components";

export const HomeContainer = styled.div`
  display: grid;
  /* grid-template-columns: 40% 60%; */
  grid-template-columns: 50% 50%;
  justify-content: space-between;
  /* margin: 20px auto; */
  margin: 10px auto;
  margin-right: 10px;
  /* gap: 10px; */
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  justify-content: center;
  text-align: center;
  position: relative;
  top: 0;
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
    font-size: clamp(1.4rem, 3.5vw, 3.8rem);
    /* line-height: 1.6; */
  }

  @media (max-width: 1200px) {
    font-size: clamp(1.2rem, 4vw, 1.6rem);
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
  /* max-width: 100%; */
  /* padding: 3px; */
  /* background-color: green; */
`

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
