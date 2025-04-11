import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  background-color: #a0eef2;
  padding: 40px 20px;
  margin-top: 30px;

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
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  /* max-width: 1200px; */
  gap: 40px;

  @media (max-width: 992px) {
    gap: 30px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  min-width: 280px;
  text-align: left;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

export const LogoContainer = styled(Column)`
  justify-content: center;
  align-items: flex-start;
  text-align: left;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
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
  font-size: 24px;
  margin-bottom: 10px;
  color: #222;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 576px) {
    font-size: 18px;
  }
`;

export const Address = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 20px;
  margin: 5px 10px;

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
export const ButtonWrapper = styled.div`
  width: fit-content;
  align-self: flex-start;

  @media (max-width: 768px) {
    align-self: center;
  }
`;

