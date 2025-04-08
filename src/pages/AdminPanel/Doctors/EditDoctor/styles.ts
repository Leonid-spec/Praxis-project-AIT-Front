import styled from "styled-components";

export const EditDoctorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 50px;
`;

export const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MainBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
`;

export const MainBoxText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TitleBoxText = styled.label`
  font-size: 16px;
  font-weight: bold;
  color: #292828;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  &:focus {
    border-color: #20b1b7;
    outline: none;
  }
`;

export const BiographyTextarea = styled.textarea`
  width: 100%;
  height: 150px; /* ✅ Теперь поле в 3 раза выше */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  resize: vertical; /* ✅ Пользователь может изменять высоту */
  &:focus {
    border-color: #20b1b7;
    outline: none;
  }
`;

export const EditPhotoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const UploadInput = styled.input`
  padding: 10px;
  border-radius: 5px;
`;

export const PhotoPreview = styled.img`
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
  background-color: #f8f8f8;
`;

export const StyledReturnButton = styled.button`
  background-color: #20b1b7;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  &:hover {
    background-color: #0c989c;
  }
`;

export const StyledSaveButton = styled.button<{ disabled?: boolean }>`
  background-color: ${({ disabled }) => (disabled ? "#ccc" : "#20B1B7")};
  color: ${({ disabled }) => (disabled ? "#888" : "#fff")};
  padding: 10px 20px;
  border: none;
  border-radius: 30px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  font-size: 18px;
  &:hover {
    background-color: ${({ disabled }) => (disabled ? "#ccc" : "#0c989c")};
  }
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: 600;
  color: #333;

  input {
    width: 20px;
    height: 20px;
  }
`;