import styled from "styled-components";

export const StyledAddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  margin: 20px;
  border-radius: 30px;
  background-color: #7a2141;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);

  &:hover {
    background-color: #5c0d2a;

  }

  &:active {
    background-color: #045f62;
    transform: scale(0.95);
  }
`;