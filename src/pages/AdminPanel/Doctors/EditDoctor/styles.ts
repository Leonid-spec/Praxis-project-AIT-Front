import styled from "styled-components";

// Контейнеры
export const EditDoctorContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 50px;
  width: 100%;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 10px;
  /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
  height: 80vh;
  overflow: hidden;
  @media (max-width: 768px) {
    height: auto; /* Убираем фиксированную высоту */
    padding: 20px;
    gap: 20px;
    overflow-y: auto; /* Сохраняем скроллинг */
    max-height: 100vh;
  }
`;

export const MainTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ScrollContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  scroll-behavior: smooth;
  padding: 0 30px 0 20px;
`;

export const HeaderBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;

  @media (max-width: 768px) {
    gap: 20px;
    overflow-y: auto; /* Добавлено для скроллинга */
  }
`;

export const TitleBoxText = styled.label`
  font-size: 14px;
  padding-left: 10px;
  color: #555;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const SectionTitles = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin: 30px 0 0px 0;
  color: #333;
  color:  #292828;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

// Поля ввода
export const InputContainerFullName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

export const Input = styled.input`
  padding: 12px 15px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #ccc;
  /* background-color: #f9f9f9; */
  outline: none;
  width: 100%;
  color:  #292828;
  &:focus {
    border-color: #007bff;
    background-color: #fff;
  }

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 12px;
  }
`;

export const UploadInput = styled.input`
  font-size: 14px;
  padding: 10px;
  margin-top: 10px;

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 12px;
  }
`;

export const CheckboxLabel = styled.label`
  font-size: 14px;
  color: #333;
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    font-size: 12px;
    gap: 8px;
  }
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const BiographySection = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    gap: 8px;
    overflow-y: auto; /* Гарантируем скроллинг для длинного контента */
    max-height: 150px; /* Ограничиваем высоту для мобильных устройств */
  }
`;
export const BiographyLabel = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const BiographyTextareaDe = styled.textarea`
  font-size: 14px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  /* background-color: #f9f9f9; */
  min-height: 100px;
  resize: none;
  outline: none;
  width: 100%;
  color:  #292828;
  &:focus {
    border-color: #20b1b7;
    outline: none;
    background-color: #fff;
  }

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 12px;
    min-height: 80px;
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

  @media (max-width: 768px) {
    gap: 15px;
  }
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

  @media (max-width: 768px) {
    height: 300px;
    padding: 20px;
  }
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

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 16px;
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

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 16px;
  }
`;

export const StyledSaveButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-top: 15px;
  }
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

  @media (max-width: 768px) {
    width: 100%;
    gap: 15px;
  }
`;
