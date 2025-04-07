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

export const Section = styled.div`
  margin-top: 50px;
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
