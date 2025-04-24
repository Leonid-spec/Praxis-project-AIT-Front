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

export const HeaderBox = styled.div`
  display: flex;
  justify-content: flex-start;;
  align-items: center;
  gap: 20px;
  padding: 0 20px;

  @media (max-width: 768px) {
    /* flex-direction: column; */
    gap: 10px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 30px; */

`;

export const MainBox = styled.div`
  display: flex;
  justify-content: space-between;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;

  @media (max-width: 1024px) {
  display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const TitlesBox = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #292828;
  margin: 30px 0 10px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin: 15px 0 8px;
  }
`;

export const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 200px;
  margin-top: 20px;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

export const ImagePreview = styled.img`
 width: 100%;
  max-width: 100%;
  height: auto;
  /* min-height: 300px; */
  /* max-height: 350px; */
  object-fit: contain;
  border-radius: 10px;
  background-color: #f8f8f8
`;


export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    /* flex-direction: column; */
    gap: 10px;
  }

  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;

    &:focus {
      border-color: #7a2141;
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

export const MakeCardVisibleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`;

export const StyledCheckbox = styled.input`
  width: 20px;
  height: 20px;
  accent-color: #7a2141;
  cursor: pointer;

  &:checked {
    background-color: #7a2141;
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
  background-color: #7a2141;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;

  &:hover {
    background-color: #641230;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 16px;
  }
`;

export const StyledSaveButton = styled.button<{ disabled?: boolean }>`
  background-color: ${({ disabled }) => (disabled ? "#ccc" : "#7a2141; ")};
  color: ${({ disabled }) => (disabled ? "#888" : "#fff")};
  padding: 10px 20px;
  border: none;
  border-radius: 30px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  font-size: 18px;
  font-weight: bold;
  &:hover {
    background-color: ${({ disabled }) => (disabled ? "#ccc" : "#641230")};
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 16px;
  }

`;


// Gallery

export const GalleryContainer = styled.div`
position: relative;
bottom: 0;
left: 0;
margin-top: 20px;
  padding: 16px;
`;

export const TitleBox = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 1.4rem;
  margin-top: 20px;
`;

export const UploadText = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  margin-top: 20px;
`;

export const EditTopImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;

`;

export const EditTopImage = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UploadInput = styled.input`
  padding: 10px;
  border-radius: 5px;
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 12px;
`;

export const GalleryImageWrapper = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 100px;
  /* height: auto; */
  display: block;
`;


// Foto

export const EditPhotoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 200px;
  margin-top: 20px;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;
