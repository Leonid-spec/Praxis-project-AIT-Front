import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #2e3a59;
  margin-top: 10px;
`;

export const RequiredMarker = styled.span`
  color: #e74c3c;
  margin-left: 4px;
`;

interface InputContainerProps {
  $hasError: boolean;
}

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => (props.$hasError ? "#e74c3c" : "#ddd")};
  border-radius: 6px;
  padding: 10px 12px;
  background: #fff;
  transition: border-color 0.3s ease;
  
  &:focus-within {
    border-color: #20b1b7;
  }
`;

export const InputIcon = styled.div`
  width: 20px;
  height: 20px;
  color: #a0a4a8;
  margin-right: 8px;
`;

export const StyledInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  flex: 1;
  font-size: 16px;
  color: #333;
  
  &::placeholder {
    color: #a0a4a8;
  }
`;

export const StyledTextarea = styled.textarea`
  border: none;
  outline: none;
  background: transparent;
  flex: 1;
  font-size: 16px;
  color: #333;
  resize: vertical;
  min-height: 120px;
  
  &::placeholder {
    color: #a0a4a8;
  }
`;

export const ErrorText = styled.span`
  font-size: 12px;
  color: #e74c3c;
  margin-top: 5px;
`;
