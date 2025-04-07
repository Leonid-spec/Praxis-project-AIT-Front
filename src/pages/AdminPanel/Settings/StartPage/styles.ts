import styled from "styled-components";

export const ContentContainer = styled.div`
  width: 100%;
  padding: 20px 10px;
  margin: 0 auto;
  position: relative;
  transition: margin-left 0.3s ease, margin-top 0.3s ease;

  @media (max-width: 768px) {
    padding: 0 15px;
    margin-top: 60px;
    z-index: 2;

    h1, h2 {
      text-align: center;
    }
  }
`;

export const WelcomeTextBox = styled.div`
    display: flex;
    flex-direction: column;
  gap: 30px;
  text-align:center;
  margin: 20px 0;
  padding: 10px 0 20px;
`;

export const MainWelcomeText = styled.p`
    font-size: 28px;
  font-weight: bold;
`;


export const MainFunctionsText = styled.p`
      font-size: 24px;

`;


export const Section = styled.div`
  margin-top: 50px;
`;

export const SectionTitle = styled.h2`
  text-align:center;

`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const StyledButton = styled.button`
  padding: 12px 20px;
  background-color: #20b1b7;
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1a8e92;
  }
`;

export const BackButton = styled.button`
  padding: 10px 20px;
  background-color: #20b1b7;
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 10px;

  &:hover {
    background-color: #1a8e92;
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
  padding: 20px;
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
  color: #5fc9d3;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;