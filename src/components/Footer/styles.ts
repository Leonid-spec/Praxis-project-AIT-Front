import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: flex-start;
  width: 100%;
  background-color: #f0effc;
  padding: 40px 20px;

  @media (max-width: 1200px) {
    padding: 30px 15px;
  }

  @media (max-width: 992px) {
    padding: 25px 10px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    /* align-items: center; */
    padding: 20px;
  }

  @media (max-width: 576px) {
    padding: 15px;
  }

  @media (max-width: 360px) {
    padding: 10px;
  }
`;
export const Days = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`;

export const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  text-align: left;
  margin-left: 10%;

  @media (max-width: 1024px) {
    margin-left: 5%;
  }

  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 20px;
    margin-left: 0;
  }

  @media (max-width: 576px) {
    min-height: auto;
    margin: 0;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  flex: 1;
  text-align: left;
  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 20px;
  }

  @media (max-width: 576px) {
    margin: 0;
  }
`;

export const ContentBelowTitle = styled.div`
  margin-top: 20px;
`;

export const Logo = styled.img`
  width: 300px;
  height: auto;
  object-fit: contain;

  @media (max-width: 992px) {
    width: 250px;
  }

  @media (max-width: 576px) {
    width: 200px;
  }
`;

export const Title1 = styled.h3`
  font-size: 17px;
  margin-bottom: 20px;
  color: #69e5ec;
  color: #7a2141;

  @media (max-width: 768px) {
    font-size: 20px;
    height: auto;
  }

  @media (max-width: 576px) {
    font-size: 18px;
  }
`;

export const Title2 = styled.h3`
  font-size: 17px;
  margin-bottom: 20px;
  color: #69e5ec;
  color: #7a2141;

  @media (max-width: 768px) {
    font-size: 20px;
    height: auto;
  }

  @media (max-width: 576px) {
    font-size: 18px;
  }
`;

export const TitleText = styled.h3`
  display: flex;
  font-size: 16px;
  margin-bottom: 20px;
  color: #7a2141;

  @media (max-width: 768px) {
    font-size: 14px;
    height: auto;
    margin-bottom: 10px;
  }

  @media (max-width: 576px) {
    font-size: 12px;
  }
`;

export const TimesContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const DaysTimesContainer = styled.div`
  width: 100%;
`;

export const ContactsInfoContainer = styled.div`
  /* background-color: blue; */
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

  @media (max-width: 380px) {
    font-size: 12px;
  }

  @media (max-width: 340px) {
    font-size: 8px;
  }
`;

export const Address = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
  margin-top: 8px;

  @media (max-width: 768px) {
    gap: 6px;
    font-size: 14px;
    align-items: flex-start;
    margin-bottom: 10px;
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
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 20px;

  /* @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 576px) {
    font-size: 12px;
  } */
  @media (max-width: 1024px) {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    gap: 12px;
  }

  @media (max-width: 380px) {
    font-size: 12px;
  }

  @media (max-width: 340px) {
    font-size: 8px;
  }
`;

export const DaysOfWeekBox = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: flex-start;
  text-align: left;
  gap: 15px;
  background-color: #f0effc;
  border-radius: 12px;
  width: 100%;

  @media (max-width: 768px) {
    gap: 5px;
  }
`;

export const DayRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;

  font-size: 16px;
  color: #333;

  &:last-child {
    border-bottom: none;
  }

  & > p:first-child {
    flex: 1;
    font-weight: bold;
    text-align: left;
  }

  & > p:last-child {
    flex: 5;
    text-align: left;
  }

  @media (max-width: 1024px) {
    font-size: 16px;

    & > p:first-child {
      flex: 1;
      font-weight: bold;
      text-align: left;
    }

    & > p:last-child {
      flex: 4;
      text-align: left;
    }
  }

  /* @media (max-width: 890px) {
    font-size: 15px;

    & > p:first-child {
      flex: 1;
      font-weight: bold;
      text-align: left;
    }

    & > p:last-child {
      flex: 3;
      text-align: left;
    }
  } */

  @media (max-width: 768px) {
    font-size: 14px;
    & > p:last-child {
      flex: 3;
      text-align: left;
    }
  }

  @media (max-width: 480px) {
    font-size: 12x;
    & > p:last-child {
      flex: 2;
      text-align: left;
    }
  }

  @media (max-width: 350px) {
    font-size: 10px;
  }

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

export const ContactIcons = styled.div`
  display: flex;
  align-items: center;
  /* font-size: 16px; */

  @media (max-width: 1024px) {
    font-size: 12px;
  }

  @media (max-width: 768px) {
    font-size: 10px;
  }

  @media (max-width: 450px) {
    font-size: 8px;
  }
`;

export const ContactText = styled.span`
  display: inline;
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
`;

export const IconCircle = styled.div`
  width: 30px;
  height: 30px;
  background-color: #a0eef2;
  background-color: #7a2141;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #ffffff;
  margin-right: 10px;

  @media (max-width: 768px) {
    font-size: 12px;
    width: 20px;
    height: 20px;
  }

  @media (max-width: 450px) {
    font-size: 10px;
    width: 16px;
    height: 16px;
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

export const DaysStyle = styled.div`
  font-weight: bold;
  color: #111;
  font-size: 16px;
`;

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

export const DayRowAdd = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: left;
  flex-direction: column;
  gap: 6px;
  padding: 5px 0;
  font-size: 16px;
  color: #333;
  /* Делаем первую колонку жирной */
  & > p:first-child {
    flex: 1;
    font-weight: bold;
    text-align: left;
  }
  /* Вторая колонка остаётся обычной */
  & > p:last-child {
    flex: 2;
    font-weight: normal;
    text-align: left;
  }
`;
