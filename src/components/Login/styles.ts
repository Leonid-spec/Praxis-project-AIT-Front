import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(171, 169, 169, 0.65);
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div`
  position: relative;
  width: 350px;
  padding: 40px 30px 20px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  gap: 16px;
  z-index: 2;
  /* align-items: center; */
  /* text-align: center; */
`;

export const TitleAndSub = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 14px;
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

export const ButtonCloseContainer = styled.div`
position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: flex-end;
`;
