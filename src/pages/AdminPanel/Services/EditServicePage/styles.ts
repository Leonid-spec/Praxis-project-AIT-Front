import styled from "styled-components";

export const EditDoctorContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 10px;
  height: 80vh;
  overflow: hidden;
  overflow-x: hidden;

  @media (max-width: 768px) {
    height: auto;
    padding: 20px;
    gap: 20px;
    overflow-y: auto; 
    max-height: 100vh;
  }
`;


export const ScrollContainer = styled.div`
  flex: 1;
  overflow-y: auto; 
  scroll-behavior: smooth;
  /* padding: 0 10px; */
  overflow-x: hidden;

`;

export const ServicesPageAllContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 80vh; */
  /* overflow: hidden; */
  /* padding: 30px;  */
`;

export const HeaderMainBtnsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 30px;
`;

export const CardsMainContainer = styled.div`
  flex: 1; 
  overflow-y: auto; 
  padding-right: 10px;
`;

export const ServiceCardsMainContainer = styled.div`
  flex: 1;
  overflow-y: auto; 
  padding: 10px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); 
  gap: 20px;
  scroll-behavior: smooth;

  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c4c4c4;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

export const CheckboxLabel = styled.label`
  font-size: 14px;
  color: #333;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
    gap: 8px;
  }
`;