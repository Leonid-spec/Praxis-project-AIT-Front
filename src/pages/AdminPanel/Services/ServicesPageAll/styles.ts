import styled from "styled-components";

export const ScrollContainer = styled.div`
  flex: 1;
  overflow-y: auto; 
  scroll-behavior: smooth;
  padding: 0 30px 0 20px;
`;

export const ServicesPageAllContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  overflow: hidden;
  padding: 30px; 
`;

export const HeaderMainBtnsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 30px;
`;

export const RefreshIconBox = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const RefreshIconImage2 = styled.image`
  width: 50px;
  height: 50px;
`;

export const RefreshIconImage = styled.img`
  width: 50px;
  height: 50px;
`;

export const RefreshBtn = styled.button`
  width: 40px;
  height: 40px;
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
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); 
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
