import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  align-items: center;
  padding: 30px 20px;
  background-color: #f0effc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

`;

export const CenterSection = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

// export const IconsBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
// `;

export const ContactElement = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  margin: 10px 0;
  /* &:hover {
    color: #7a2141;
  } */

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 450px) {
    font-size: 12px;
  }
`;

export const ContactText = styled.span`
  display: inline;
  /* cursor: pointer; */
`;

// new

export const TitleText = styled.h3`
  font-size: 16px;
  margin-bottom: 16px;
  color: #69e5ec;
  color: #7a2141;

  @media (max-width: 768px) {
    font-size: 14px;
    height: auto;
  }

  @media (max-width: 576px) {
    font-size: 12px;
  }
`;

export const DaysTimesContainer = styled.p`
  width: 100%;
`;

export const Address = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 20px;
  margin-top: 8px;
`;

export const DaysOfWeekBox = styled.div`
  display: flex;
  gap: 10px;
  background-color: #f0effc;
  border-radius: 12px;
  width: 100%;
`;

// new 2

export const SprechzeitenBox = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  flex: 1;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    /* padding: 10px 20px; */
  }

  @media (max-width: 768px) {
    /* padding: 10px 20px; */
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 8px;
  }

  @media (max-width: 350px) {
    font-size: 6px;
  }
`;

export const DaysOfWeek = styled.div`
  /* color: #333; */
  font-size: 20px;
  line-height: 2;

  p {
    font-size: 20px;

    @media (max-width: 768px) {
      font-size: 14px;
    }

    @media (max-width: 480px) {
      font-size: 12px;
    }

    @media (max-width: 380px) {
      font-size: 10px;
    }

    @media (max-width: 340px) {
      font-size: 8px;
    }
  }
`;

export const DaysOfWeekp = styled.div`
  margin-top: 10px;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }

  @media (max-width: 380px) {
    font-size: 13px;
  }

  @media (max-width: 340px) {
    font-size: 12px;
  }
`;

export const DaysOfWeekspan = styled.p`
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }

  @media (max-width: 380px) {
    font-size: 13px;
  }

  @media (max-width: 340px) {
    font-size: 12px;
  }
`;

export const ButtonContainer = styled.div`
  margin-bottom: 40px;
`;
