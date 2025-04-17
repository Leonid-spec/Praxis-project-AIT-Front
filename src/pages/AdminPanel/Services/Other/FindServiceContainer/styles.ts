import styled from "styled-components";

export const StyledButton = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 8px 20px;
  margin: 20px;
  min-width: 450px;
  border-radius: 30px;
  background-color: #7a2141;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    /* flex-direction: column;  */
    min-width: auto;
    gap: 10px;

  }

`;

export const ImageItem = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 18px;
  height: 18px;

  }
`;

export const SearchIcon = styled.div`
 @media (max-width: 768px) {

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

  @media (max-width: 768px) {
    font-size: 12px;
    margin: 0;
  }
`;
