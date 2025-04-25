import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding: 10px;
  margin: auto;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  padding: 25px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.07);
`;

export const Label = styled.label`
  font-size: 14px;
  margin-bottom: 15px;
  color: #333;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 10px;
  margin-top: 5px;
  font-size: 14px;
  border-radius: 6px;
  border: 1px solid #ccc;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: #e74c3c;
    outline: none;
  }
`;

export const DeleteButton = styled.button`
  padding: 12px;
  margin-top: 10px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c0392b;
  }
`;
