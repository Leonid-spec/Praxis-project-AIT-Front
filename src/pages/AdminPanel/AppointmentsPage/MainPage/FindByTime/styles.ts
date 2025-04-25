import styled from "styled-components";

export const StyledButton = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 8px 20px;
  margin: 20px;
  border-radius: 30px;
  background-color: #7a2141;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease-in-out;

  @media (min-width: 1980px) {
    padding: 14px 32px;
  }

  @media (min-width: 1440px) {
    /* padding: 14px 28px; */
  }

  @media (max-width: 1200px) {
    /* padding: 12px 24px; */
  }

  @media (max-width: 768px) {
    /* padding: 10px 20px; */
  }

  @media (max-width: 480px) {
    font-size: clamp(0.8rem, 2vw, 1.2rem);
    padding: 8px 16px;
  }

  @media (max-width: 360px) {
    font-size: clamp(0.6rem, 2vw, 1rem);
    padding: 6px 12px;
  }

  @media (max-width: 320px) {
    font-size: clamp(0.5rem, 2vw, 0.8rem);
  }

  @media (max-width: 280px) {
    font-size: clamp(0.4rem, 2vw, 0.6rem);
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

  @media (max-width: 320px) {
    width: 12px;
    height: 12px;
  }

  @media (max-width: 280px) {
    width: 10px;
    height: 10px;
  }
`;

export const SearchIcon = styled.div`
  font-size: 24px;
  color: white;
  transition: font-size 0.3s ease;

  @media (max-width: 1200px) {
    font-size: 30px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }

  @media (max-width: 340px) {
    font-size: 12px;
  }

  @media (max-width: 280px) {
    font-size: 10px;
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

    @media (max-width: 768px) {
      font-size: 12px;
    }

    @media (max-width: 320px) {
      font-size: 13px;
      padding: 0;
    }

    @media (max-width: 280px) {
      font-size: 8px;
    }
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 320px) {
    font-size: 10px;
    margin: 0;
    padding: 6px 10px;
  }

  @media (max-width: 280px) {
    font-size: 10px;
    margin: 0;
    padding: 4px 8px;
    padding: 2px;

  }
`;
