import styled from "styled-components";

export const StyledButton = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 8px 20px;
  margin: 20px;
  min-width: 400px;
  border-radius: 30px;
  background-color: #20b1b7;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease-in-out;
`;

export const ImageItem = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const InputBox = styled.input`
  flex: 1;
  padding: 8px 12px;
  font-size: 16px;
  border: none;
  border-radius: 20px;
  outline: none;
  background: #ffffff;
  color: #333;

  &::placeholder {
    color: #999;
  }
`;
