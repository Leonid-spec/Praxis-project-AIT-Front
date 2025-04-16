// import styled from "styled-components";

// export const HomeContainer = styled.div`
//   display: grid;
//   grid-template-columns: 40% 60%;
//   margin: 30px auto;
//   width: 100%;

//   @media (min-width: 1920px) {
//     padding: 70px 30px;
//     gap: 40px;
//   }

//   @media (max-width: 1440px) {
//     gap: 30px;
//   }

//   @media (max-width: 1200px) {
//     grid-template-columns: 1fr;
//     gap: 25px;
//   }

//   @media (max-width: 1024px) {
//     display: flex;
//     flex-direction: column;
//   }

//   @media (max-width: 768px) {
//     & > div:first-child {
//       order: 2;
//     }

//     & > div:last-child {
//       order: 1;
//     }
//   }
//   @media (max-width: 480px) {
//     gap: 15px;
//   }
// `;

// export const LeftContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: flex-start;
//   text-align: center;
//   transition: transform 0.3s ease, box-shadow 0.3s ease;
//   width: 700px;
//   position: relative;
//   top: 250px;
//   left: 110px;

//   @media (min-width: 1920px) {
//     gap: 30px;
//   }

//   @media (max-width: 1200px) {
//     position: relative;
//     align-items: center;
//     text-align: center;
//     padding: 20px;
//     backdrop-filter: blur(8px);
//     background-color: rgba(255, 255, 255, 0.4);
//     border-radius: 12px;
//     width: 100%;
//     top: 500px;
//     left: 0;
//   }

//   @media (max-width: 768px) {
//     top: -250px;
//   }

//   @media (max-width: 480px) {
//     gap: 15px;
//   }
// `;

// export const RightContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   overflow: hidden;
//   width: 100%;
//   aspect-ratio: 4 / 3;

//   @media (max-width: 768px) {
//     aspect-ratio: 3 / 2;
//   }

//   @media (max-width: 480px) {
//     aspect-ratio: 1 / 1;
//   }
// `;

// export const RightContainerPhoto = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   object-position: center;
//   display: block;
// `;

// export const WelcomeTextTitle = styled.p`
//   color: #555;
//   font-size: clamp(1.6rem, 3vw, 2.5rem);
//   line-height: 1.8;
//   text-align: center;
//   padding: 20px 30px;

//   @media (min-width: 1920px) {
//     font-size: clamp(2.5rem, 5vw, 4rem);
//   }

//   @media (max-width: 1200px) {
//     font-size: clamp(1.6rem, 4vw, 2.2rem);
//   }

//   @media (max-width: 768px) {
//     font-size: clamp(1.6rem, 5vw, 2rem);
//   }

//   @media (max-width: 480px) {
//     font-size: 1.5rem;
//   }
// `;

export const WelcomeTextSubtitle = styled.p`
  color: #555555;
  font-size: clamp(1.6rem, 3vw, 3rem);
  line-height: 1.6;
  font-weight: bold;

  @media (min-width: 1920px) {
    font-size: clamp(2rem, 5vw, 2.8rem);
  }

  @media (max-width: 1200px) {
    font-size: clamp(1.2rem, 4vw, 1.6rem);
  }

  @media (max-width: 768px) {
    font-size: clamp(1.2rem, 4vw, 1.4rem);
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
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
  margin: 40px 0 20px;
`;
//
import styled from "styled-components";

export const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  margin: 30px auto;
  width: 100%;
  gap: 40px;
  padding-right: 50px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    gap: 25px;
  padding-right: 0;

  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;

  }

  @media (max-width: 768px) {
    & > div:first-child {
      order: 2;
    }

    & > div:last-child {
      order: 1;
    }
  }

  @media (max-width: 480px) {
    gap: 15px;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: center;
  width: 700px;
  position: relative;
  top: 250px;
  left: 110px;

  @media (max-width: 1200px) {
    align-items: center;
    text-align: center;
    padding: 20px;
    backdrop-filter: blur(8px);
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 12px;
    width: 100%;
    top: 800px;
    left: 0;
  }

  @media (max-width: 1024px) {
    top: 600px;
  }

  @media (max-width: 768px) {
    top: -250px;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: auto;

  @media (max-width: 1024px) {
    padding: 0 10px;
  }
`;

export const RightContainerPhoto = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  object-position: center;

  @media (max-width: 1240px) {
  max-height: 900px;
  }

  @media (max-width: 1024px) {
  max-height: 700px;
  }

  @media (max-width: 768px) {
  max-height: 500px;
  }

  @media (max-width: 480px) {
    max-height: 300px;
  }
`;
