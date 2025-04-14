import styled from "styled-components";

export const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  /* gap: 30px; */
  /* padding: 50px 20px; */
  /* max-width: 1200px; */
  margin: 30px auto;
  align-items: center;
  align-items: stretch;


  @media (min-width: 1920px) {
    max-width: 1600px;
    padding: 70px 30px;
    gap: 40px;
  }

  @media (max-width: 1440px) {
    max-width: 90%;
  }

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 40px 15px;
  }

  @media (max-width: 768px) {
    padding: 30px 10px;
  }

  @media (max-width: 480px) {
    padding: 20px 5px;
    gap: 15px;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 700px;
  position: relative;
  top: 250px;
  left: 110px;

  @media (min-width: 1920px) {
   // padding: 50px;
    gap: 30px;
  }

  @media (max-width: 1200px) {
    //padding: 30px;
  }

  @media (max-width: 768px) {
    //padding: 20px;
  }

  @media (max-width: 480px) {
    gap: 15px;
    //padding: 15px;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: auto;

  @media (min-width: 1920px) {
    //padding: 50px;
  }

  @media (max-width: 1200px) {
    //padding: 20px;
  }

  @media (max-width: 768px) {
    //padding: 15px;
    //aspect-ratio: 4/3;
  }

  @media (max-width: 480px) {
   // padding: 10px;
    aspect-ratio: 1/1;
  }
`;

export const RightContainerPhoto = styled.img`
  width: 100%;
  height: 500px ;
  object-fit: cover;
  object-position: center;
  display: block;

  @media (min-width: 1920px) {
    width: 100%; 
    height: 500px; 
    border-radius: 10px;
  }

  @media (max-width: 1200px) {
    width: 100%;
    height: 400px; 
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    height: 300px; 
    border-radius: 6px;
  }

  @media (max-width: 480px) {
    width: 100%; 
    height: 250px; 
    border-radius: 4px;
  }
`;

export const WelcomeTextTitle = styled.p`
  color: #555;
  font-size: clamp(1.6rem, 3vw, 2.5rem);
  line-height: 1.8;
  text-align: center;
  //padding: 20px 30px;

  @media (min-width: 1920px) {
    font-size: clamp(2.5rem, 5vw, 4rem);
  }

  @media (max-width: 1200px) {
    font-size: clamp(1.6rem, 4vw, 2.2rem);
  }

  @media (max-width: 768px) {
    font-size: clamp(1.6rem, 5vw, 2rem);
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const WelcomeTextSubtitle = styled.p`
  color: #555555;
  font-size: clamp(1.6rem, 3vw, 3rem);
  line-height: 1.6;
  font-weight: bold; 

  span {
    color: #77c0eb;
    font-weight: bold;
  }

  @media (min-width: 1920px) {
    font-size: clamp(2rem, 5vw, 2.8rem);
  }

  @media (max-width: 1200px) {
    font-size: clamp(1.2rem, 4vw, 1.6rem);
  }

  @media (max-width: 768px) {
    font-size: clamp(1.2rem, 4vw, 1.6rem);
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const HighlightedSpan = styled.span`
  && {
    color: #206c7a;
    color: #9ceef1;
    font-weight: bold;
    transition: color 0.3s ease;
  }
`;

export const MakeAppointmentBtnBox = styled.div`
  margin: 40px 0 20px;
`;