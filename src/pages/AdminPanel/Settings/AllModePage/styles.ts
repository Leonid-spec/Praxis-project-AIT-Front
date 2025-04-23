import styled from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  font-size: 24px;
  margin: 20px 0;
  text-align: center;
  color: #333;
`;

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const FieldGroup = styled.div`
  display: flex;
  align-items: center;
  /* gap: 10px; */
`;

export const Label = styled.label`
  flex: 1;
  font-size: 16px;
  color: #555;
`;

export const Input = styled.input`
  flex: 2;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const SaveButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const SaveButton = styled.button`
  padding: 12px 24px;
  background-color: #7a2141;
  color: white;
  border: none;
  border-radius: 18px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5c0d2a;
  }
`;

export const Notification = styled.div<{ $type: "error" | "success" }>`
  margin-top: 20px;
  padding: 10px 15px;
  border-radius: 4px;
  color: ${(props) => (props.$type === "success" ? "#155724" : "#721c24")};
  background-color: ${(props) => (props.$type === "success" ? "#d4edda" : "#f8d7da")};
  border: 1px solid ${(props) => (props.$type === "success" ? "#c3e6cb" : "#f5c6cb")};
  text-align: center;
`;

export const TextArea = styled.textarea`
`;
