import styled from "styled-components";

export const StyledAddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  width: 250px;
  border-radius: 30px;
  background-color: #20b1b7;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);

  &:hover {
    background-color: #1a8e92;
    transform: scale(1.05);
  }

  &:active {
    background-color: #045f62;
    transform: scale(0.95);
  }
`;

export const HeaderMainBtnsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
`;

export const CardsMainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;
