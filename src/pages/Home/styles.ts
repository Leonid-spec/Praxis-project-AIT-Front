import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 20px;
  height: 100vh;
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fefefe;
`;

export const RightContainer = styled.div`
  background-color: #a5a0b9;
  width: 100%;
  height: 100%;
`;

export const WelcomeText = styled.h1`
  color: #414141;
  font-size: 2rem;
  line-height: 1.5;

  span {
    color: #9dd7ef;
  }
`;

export const HighlightedSpan = styled.span`
  color: #9dd7ef;
`;

export const PlaceholderButton = styled.button`
  background-color: #4a90e2;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #357abf;
  }
`;
