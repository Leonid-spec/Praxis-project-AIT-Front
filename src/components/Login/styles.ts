import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(171, 169, 169, 0.65);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div`
  position: relative;
  width: 350px;
  padding: 30px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  gap: 20px;
  z-index: 2;
`;

export const TitleAndSub = styled.div`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;


export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  font-weight: 300;
  color: #a0a4a8;
  text-transform: uppercase;
`;

export const ForgotPasswordText = styled.span`
  color: #a0a4a8;
  text-align: center;
  cursor: pointer;
  text-decoration: underline;
`;

