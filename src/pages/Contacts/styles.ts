import styled from "styled-components";

export const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #f6f9fc;
  margin: 0 auto;
`;

export const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  max-width: 1200px;
  background-color: #f6f9fc;
`;

export const WelcomeTextContainer = styled.p`
padding: 20px 40px 0;
  font-size: 1.4rem;
  color: #555;
  text-align: center;
  line-height: 1.9;

  @media (min-width: 1920px) {
    font-size: 2rem;
  }

  @media (max-width: 1440px) {
    font-size: 1.9rem;
  }

  @media (max-width: 1024px) {
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1.7rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

export const WelcomeTextSubtitle = styled.span`
  color: #555;
  /* text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); */
  font-weight: none;
`;

export const HighlightedSpan = styled.span`
  color: #5fc9d3;
  /* font-weight: bold; */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

export const ContactsPageContainer = styled.div`
  width: 100%;
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin: 20px auto;
  max-width: 1200px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 10px;
  }
`;

export const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;
  border-radius: 12px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const ContactsBox = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  padding: 0 50px;
  border-radius: 12px;
  gap: 10px;
  flex: 1;

  @media (max-width: 768px) {
    padding: 0 20px;
    font-size: 16px;
  }
`;

export const ContactBox = styled.p`
  cursor: pointer;
`;

export const ContactsBoxTitle = styled.h2`
margin-left: 4px;
  font-size: 1.8rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const SprechzeitenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  
  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

export const SprechzeitenBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 50px;
  border-radius: 12px;
  flex: 1;
  margin: 0;

  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;


export const DaysOfWeekBox = styled.div`
  display: grid;
  grid-template-columns:30% 70%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 5px;
  }
`;

export const DaysOfWeek = styled.div`
  padding: 0 0 0 2%;
  color: #333;
  font-size: 20px;
  line-height: 2;

  @media (max-width: 768px) {
    font-size: 16px;
    padding-left: 0;
  }
`;

export const DaysOfWeekp = styled.div`
  margin-top: 10px;
`;

export const DaysOfWeekspan = styled.p`
  font-size: 20px;

  @media (max-width: 1024px) {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;


export const MapContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto 50px;
`;

export const ContactLink = styled.a`
  color: #333;
  text-decoration: none;
`;

export const ContactIcons = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  span {
    font-size: 1rem;

    @media (max-width: 1024px) {
      font-size: 1rem;
    }

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }

    @media (max-width: 480px) {
      font-size: 0.8rem;
    }
  }
`;

export const IconCircle = styled.div`
  width: 50px;
  height: 50px;
  background-color: #7a2141;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #ffffff;
  margin-right: 10px;

  @media (max-width: 1024px) {
    width: 50px;
    height: 50px;
    font-size: 18px;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 18px;
    margin-right: 8px;
  }

  @media (max-width: 480px) {
    width: 32px;
    height: 32px;
    font-size: 16px;
    margin-right: 5px;
  }
`;

export const ButtonContainer = styled.div`
/* margin-left: 10px; */
`;

// date
export const RunningLineWrapper = styled.div`
  width: 100%;
  background-color: #f0f8ff; 
  padding: 10px 0;
  position: relative;
  overflow: hidden; 
`;

export const RunningLineContainer = styled.div`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  position: relative;
`;

export const RunningLine = styled.div`
  display: inline-block;
  animation: scroll 20s linear infinite;
  @keyframes scroll {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(-100%);
    }
  }
`;

export const ButtonWrapper = styled.div`
  width: fit-content;
  align-self: flex-start;
  @media (max-width: 768px) {
    align-self: center;
  }
`;
