import styled from "styled-components";

export const ServicesPageAllContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh; 
  padding: 30px 50px;
  background-color: #f7f7f7;
  overflow: hidden;
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
  max-height: calc(100vh - 120px); 
`;