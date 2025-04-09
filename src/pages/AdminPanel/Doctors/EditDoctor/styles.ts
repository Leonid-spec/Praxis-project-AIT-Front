import styled from "styled-components";

export const EditDoctorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 50px;
  align-items: center; /* ✅ Центрируем всю страницу */
`;

export const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between; /* ✅ Две колонки */
  align-items: flex-start;
  gap: 30px;
  width: 100%;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column; /* ✅ Биография в одной колонке */
  align-items: center; /* ✅ Центрируем */
  width: 80%;
  gap: 20px; /* ✅ Добавил отступы */
`;

export const BiographySection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px; /* ✅ Добавил отступы между заголовками и полем */
  width: 100%;
`;

export const BiographyLabel = styled.label`
  font-size: 16px;
  font-weight: bold;
  color: #292828;
`;

export const BiographyTextareaDe = styled.textarea`
  width: 80%;
  height: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  resize: none;
  text-align: center;
  margin: auto;
  &:focus {
    border-color: #20b1b7;
    outline: none;
  }
`;

export const BiographyTextareaEn = styled(BiographyTextareaDe)`
  height: 200px;
`;

export const BiographyTextareaRu = styled(BiographyTextareaDe)`
  height: 200px;
`;

export const EditPhotoSection = styled.div`
  width: 900px;
  height: 727px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

export const UploadInput = styled.input`
  padding: 10px;
  border-radius: 5px;
`;

export const PhotoPreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
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

/* ✅ Добавлен `InputContainer`, чтобы избежать ошибки */
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  width: 100%;
`;

/* ✅ Добавлен `Input`, чтобы избежать ошибки */
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

/* ✅ Добавлен `MainBoxText`, чтобы избежать ошибки */
export const MainBoxText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
`;

/* ✅ Добавлен `TitleBoxText`, чтобы избежать ошибки */
export const TitleBoxText = styled.label`
  font-size: 16px;
  font-weight: bold;
  color: #292828;
`;