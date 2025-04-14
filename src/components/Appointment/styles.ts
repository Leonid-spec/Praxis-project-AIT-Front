import styled from 'styled-components';

export const FormContainer = styled.form`
  width: 100%;
  max-width: 100%; 
  background: #ffffff; 
  padding: 0 26px 20px 30px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0 auto; 
  box-sizing: border-box; 
  @media (max-width: 768px) {
    padding: 15px;
    max-width: 95%; 
    box-shadow: none;
  }
`;

export const FormTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 1.5rem;
  color: #333333;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 6px;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #2e3a59;
  margin: 10px 0 0;
`;

export const LanguageOptions = styled.div`
  display: flex;
  gap: 10px;
  label {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 0.9rem;
    color: #2e3a59;
    background: #ffffff;
    border: 1px solid #aba9a9;
    border-radius: 4px;
    padding: 5px 10px;
    cursor: pointer;
    &:hover {
      background: #a0a4a8;
    }
    input {
      cursor: pointer;
    }
    input:checked + span {
      background: #475bce;
      color: #ffffff;
    }
  }
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: #ffffff;
  background-color: #475bce;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #3b4ba9;
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const AditionalInfo = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: #ffffff;
  background-color: #475bce;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #3b4ba9;
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const CharacterCounter = styled.div`
margin: 0;
padding: 0;
  font-size: 12px;
  color: #a0a4a8;
  text-align: right;
  /* margin-top: 4px; */
`;

export const RequiredMarker = styled.span`
  color: #e74c3c;
  margin-left: 4px;
`;