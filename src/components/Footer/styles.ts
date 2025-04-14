import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #f0f0f0;
  background-color: #effcf6;
  background-color: #eff1fc;
  /* background-color: #a5a0b6; */
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
  /* align-items: stretch; */
  width: 100%;
  /* max-width: 1200px; */
  /* background-color: red; */
  padding: 0 20%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  flex: 1;
  text-align: left;
  /* min-height: 200px; */
  margin: 0 10px;

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
  font-size: 18px;
  margin-bottom: 20px;
  color: #a0eef2;

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