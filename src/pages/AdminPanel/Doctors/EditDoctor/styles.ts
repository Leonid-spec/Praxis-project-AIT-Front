import styled from 'styled-components';

// Контейнеры
export const EditDoctorContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 30px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  margin-bottom: 40px;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const TitleBoxText = styled.h2`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #333;
`;

// Поля ввода
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Input = styled.input`
  padding: 12px 15px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  outline: none;

  &:focus {
    border-color: #007bff;
    background-color: #fff;
  }
`;

export const UploadInput = styled.input`
  font-size: 14px;
  padding: 10px;
  margin-top: 10px;
`;

export const CheckboxLabel = styled.label`
  font-size: 14px;
  color: #333;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const BiographySection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const BiographyLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #555;
`;

export const BiographyTextareaDe = styled.textarea`
  font-size: 14px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  min-height: 100px;
  resize: none;
  outline: none;

  &:focus {
    border-color: #007bff;
    background-color: #fff;
  }
`;

export const BiographyTextareaEn = styled(BiographyTextareaDe)``;
export const BiographyTextareaRu = styled(BiographyTextareaDe)``;

// Фото
export const EditPhotoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

export const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  width: 100%;
  height: 500px;
  background-color: #f8f8f8;
  border-radius: 10px;
`;

export const ImagePreview = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
`;

// Кнопки
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

export const StyledSaveButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;
export const PhotoPreview = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
`;
export const MainBoxText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 60%;
`;


