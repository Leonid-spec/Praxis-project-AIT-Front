import styled from "styled-components";

export const ContentContainer = styled.div`
  width: 100%;
  padding: 20px 10px;
  margin: 0 auto;
  position: relative;
  transition: margin-left 0.3s ease, margin-top 0.3s ease;
  height: 80vh;
  @media (max-width: 768px) {
    padding: 0 15px;
    margin-top: 60px;
    z-index: 2;

    h1,
    h2 {
      text-align: center;
    }
  }
`;

export const MainTextContainer = styled.p`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  height: 100%;
`;

export const WelcomeTextBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  text-align: center;
  margin-bottom: 20px;
`;

export const MainWelcomeText = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

export const Section = styled.div`
  margin-top: 20px;
`;

export const SectionTitle = styled.h3`
  text-align: center;
  padding: 0;
  margin: 0;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const StyledButton = styled.button`
  padding: 12px 20px;
  background-color:  #7a2141;
  color: white;
  border: none;
  border-radius: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);

  &:hover {
    background-color: #5c0d2a;
  }

  &:focus {
    background-color: #98395c;
  }
`;

export const BackButton = styled.button`
  padding: 10px 20px;
  background-color: #7a2141;
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 10px;

  &:hover {
    background-color: #5c0d2a;

  }

  @media (max-width: 768px) {
    width: 100%;
    position: static;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 20px auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input<{ type?: string }>`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

export const Label = styled.label`
  font-size: 14px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  input[type="checkbox"] {
    margin-right: 10px;
  }
`;

export const HighlightedSpan = styled.span`
  color: #7a2141;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
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

export const RefreshIconImage = styled.img`
  width: 50px;
  height: 50px;
`;

export const RefreshBtn = styled.button`
  width: 40px;
  height: 40px;
`;

export const ScrollContainer = styled.div`
  overflow-y: auto;
  margin: 0 auto;
  /* height: 40vh; */
`;

export const MainFunctionsText = styled.p`
  font-size: 24px;
  margin-top: 10%;
`;