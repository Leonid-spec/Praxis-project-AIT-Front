import React from "react";
import styled from "styled-components";

interface TextInputProps {
  type?: string; 
  placeholder?: string; 
  value: string; 
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
  icon?: React.ReactNode; 
}

const TextInput: React.FC<TextInputProps> = ({ type = "text", placeholder, value, onChange, icon }) => {
  return (
    <InputContainer>
      {icon && <InputIcon>{icon}</InputIcon>}
      <StyledInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputContainer>
  );
};

export default TextInput;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 8px;
  background: #f9f9f9;
`;

const InputIcon = styled.div`
  width: 15px;
  height: 15px;
  color: #a0a4a8;
  margin-right: 8px;
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  flex: 1;
  font-size: 16px;
  font-weight: 200;
`;
