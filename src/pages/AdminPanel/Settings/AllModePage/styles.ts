import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
  margin: 0 auto;
  padding: 20px;
  /* background-color: #f9f9f9; */
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  gap: 20px;

  @media (max-width: 430px) {
    padding: 0;

  }
`;

export const TopContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const HoursContainer = styled.div`
  padding: 20px;
  background-color: #f3f3f3;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const AdressContainer = styled.div`
  padding: 20px;
  background-color: #f3f3f3;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const LineContainer = styled.div`
  padding: 20px;
  background-color: #f3f3f3;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  font-size: 24px;
  margin: 20px 0;
  text-align: center;
  color: #333;
  margin-bottom: 20px;

  @media (max-width: 430px) {
    font-size: 20px;
  }

  @media (max-width: 340px) {
    font-size: 16px;
  }

  @media (max-width: 280px) {
    font-size: 14px;
  }
`;

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const FieldGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Label = styled.label`
  flex: 1;
  font-size: 16px;
  color: #555;

  @media (max-width: 430px) {
    font-size: 14px;
  }

  @media (max-width: 340px) {
    font-size: 12px;
  }

  @media (max-width: 280px) {
    font-size: 10px;
  }
`;

export const Input = styled.input`
  flex: 2;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;

  @media (max-width: 430px) {
    padding: 4px;
    font-size: 14px;
  }

  @media (max-width: 340px) {
    font-size: 12px;
  }

  @media (max-width: 280px) {
    font-size: 10px;
  }
`;

export const SaveButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  /* margin: 20px; */
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
  padding: 10px;
  width: 100%;
  resize: vertical;
  min-height: 40px;
  max-height: 500px;
  margin-bottom: 20px;
`;


// modal window

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
`;

export const Modal = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 600px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const ModalTitle = styled.h2`
  font-size: 22px;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 400px;
  overflow-y: auto;
`;

export const ListItem = styled.li`
  padding: 8px 0;
  border-bottom: 1px solid #eee;
  font-size: 15px;

  strong {
    color: #7a2141;
  }
`;

export const ButtonGroup = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  transition: 0.3s;

  &.cancel {
    background-color: #ccc;
    color: #333;

    &:hover {
      background-color: #bbb;
    }
  }

  &.confirm {
    background-color: #7a2141;
    color: white;

    &:hover {
      background-color: #5c0d2a;
    }
  }
`;