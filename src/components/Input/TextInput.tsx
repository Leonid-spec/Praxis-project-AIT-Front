import React from "react";
import { Wrapper, Label, RequiredMarker, InputContainer, InputIcon, StyledInput, ErrorText, StyledTextarea } from "./styles";


interface TextInputProps {
  label: string;
  type?: string;
  id?: string;
  name: string;
  placeholder?: string; 
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  icon?: React.ReactNode;
  required?: boolean;
  error?: string;
  maxLength?: number;
  rows?: number;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  type = "text",
  id,
  name,
  placeholder,
  value,
  onChange,
  icon,
  required = false,
  error,
  maxLength,
  rows = 5
}) => {
  return (
    <Wrapper>
      {placeholder && (
        <Label>
          {label}
          {required && <RequiredMarker>*</RequiredMarker>}
        </Label>
      )}
      <InputContainer $hasError={!!error}>
        {icon && <InputIcon>{icon}</InputIcon>}
        {type === "textarea" ? (
          <StyledTextarea
            id={id}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            maxLength={maxLength}
            rows={rows}
          />
        ) : (
          <StyledInput
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        )}
      </InputContainer>
      {error && <ErrorText>{error}</ErrorText>}
    </Wrapper>
  );
};

export default TextInput;
