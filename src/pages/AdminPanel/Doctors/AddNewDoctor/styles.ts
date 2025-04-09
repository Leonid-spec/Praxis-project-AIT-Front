import styled from "styled-components";

export const ScrollContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  scroll-behavior: smooth;
  padding: 0 30px 0 20px;

  @media (max-width: 768px) {
    padding: 0 15px 0 10px;
    overflow-y: auto;
    max-height: 100vh; /* Ограничение высоты для мобильных устройств */
  }
`;

export const DoctorPageContainer = styled.div`
  display: flex;
  height: 80vh;
  flex-direction: column;
  gap: 30px;
  padding: 50px;
  overflow-y: auto; /* Добавлено для скроллинга */

  @media (max-width: 768px) {
    height: auto; /* Убираем фиксированную высоту */
    padding: 20px;
    gap: 20px;
    overflow-y: auto; /* Сохраняем скроллинг */
    max-height: 100vh;
  }
`;

export const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 100px;

  @media (max-width: 768px) {
    padding: 0 20px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

export const MainBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    overflow-y: auto; /* Добавляем скроллинг для мобильных экранов */
  }
`;

export const TitlesBox = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #292828;
  margin: 20px 0 10px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin: 15px 0 8px;
  }
`;

export const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px;
  width: 100%;
  height: 500px;

  @media (max-width: 768px) {
    padding: 20px;
    height: 300px;
    overflow-y: auto;
  }
`;

export const UploadInput = styled.input`
  padding: 10px;
  border-radius: 5px;

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

export const ImagePreview = styled.img`
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
  background-color: #f8f8f8;

  @media (max-width: 768px) {
    border-radius: 5px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }

  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;

    &:focus {
      border-color: #20b1b7;
      outline: none;
    }

    @media (max-width: 768px) {
      padding: 8px;
    }
  }
`;

export const Input = styled.input<{ isInvalid?: boolean }>`
  width: 100%;
  padding: 10px;
  border: 1px solid ${({ isInvalid }) => (isInvalid ? "red" : "#ccc")};
  border-radius: 5px;

  &:focus {
    border-color: ${({ isInvalid }) => (isInvalid ? "red" : "#68a4f8")};
    outline: none;
  }

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

export const EditTopImage = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export const MakeCardVisibleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`;

export const StyledCheckbox = styled.input`
  width: 20px;
  height: 20px;
  accent-color: #20b1b7;
  cursor: pointer;

  &:checked {
    background-color: #20b1b7;
  }

  @media (max-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;

export const SpecialisationSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 10px;
    overflow-y: auto;
  }
`;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 10px;
    overflow-y: auto;
  }
`;

export const BiographySection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  height: 150px;
  overflow-y: auto;

  @media (max-width: 768px) {
    height: auto;
    gap: 10px;
    overflow-y: auto;
  }
`;

export const TitleBoxText = styled.label`
  font-size: 16px;
  color: #292828;
  padding: 0 0 0 20px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 0 0 0 10px;
  }
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
