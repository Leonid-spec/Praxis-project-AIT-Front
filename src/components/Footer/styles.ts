import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #f0f0f0;
  background-color: #effcf6;
  background-color: #eff1fc;
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
    align-items: center;
    padding: 20px;
  }

  @media (max-width: 576px) {
    padding: 15px;
  }

  @media (max-width: 360px) {
    padding: 10px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

// export const ColumnLeft = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: flex-start;
//   flex: 1;
//   text-align: left;

//   @media (max-width: 768px) {
//     align-items: center;
//     text-align: center;
//     margin-bottom: 20px;
//   }

//   @media (max-width: 576px) {
//     min-height: auto;
//     margin: 0;
//   }
// `;


// export const Column = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   align-items: flex-start;
//   flex: 1;
//   text-align: left;
//   margin: 0 10px;

//   @media (max-width: 768px) {
//     align-items: center;
//     text-align: center;
//     margin-bottom: 20px;
//   }

//   @media (max-width: 576px) {
//     min-height: auto;
//     margin: 0;
//   }
// `;

export const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  flex: 1;
  text-align: left;
  margin-left: 20%; 

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    margin-bottom: 20px;
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
  /* margin: 0 10px; */
  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    margin-bottom: 20px;
  }

  @media (max-width: 576px) {
    min-height: auto;
    margin: 0;
  }
`;


export const LogoContainer = styled(Column)`
  justify-content: center;
  align-items: center;
  background-color: #a0eef2;
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const Logo = styled.img`
  width: 300px;
  height: auto;
  object-fit: contain;
  background-color: transparent;

  @media (max-width: 992px) {
    width: 250px;
  }

  @media (max-width: 576px) {
    width: 200px;
  }
`;

export const Title = styled.h3`
  font-size: 17px;
  margin-bottom: 20px;
  /* color: #a0eef2; */
  color: #69e5ec;
  color: #69e5ec;
  color: #7a2141;
  /* color: #333; */

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 576px) {
    font-size: 18px;
  }
`;

export const TimesContainer = styled.div`
  display: flex;
  gap: 40px;
  width: 100%;
`;

export const DaysTimesContainer = styled.p`
  width: 100%;
`;

export const Address = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 16px;
  /* margin: 5px 10px; */

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 576px) {
    font-size: 16px;
  }
`;

export const DaysLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (max-width: 768px) {
    gap: 12px;
  }
`;

export const Days = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 768px) {
    gap: 12px;
  }
`;

export const Text = styled.div`
  padding: 0;
  margin: 0;
`;

export const ContactIcons = styled.div`
  display: flex;
  align-items: center;
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
`;

export const DaysStyle = styled.div`
  font-weight: bold;
  color: #111;
  font-size: 16px;
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