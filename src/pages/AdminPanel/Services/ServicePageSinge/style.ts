import styled from "styled-components";

export const ScrollContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  scroll-behavior: smooth;
  padding: 0 30px 0 20px;
  height: 80vh;
`;

export const ServicePageSingleContainer = styled.div`
  display: flex;
  height: 80vh;
  flex-direction: column;
  padding: 20px;
`;

export const HeaderBox = styled.div`
  display: flex;
  justify-content: flex-start;;
  align-items: center;
  gap: 20px;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const MainBox = styled.div`
  display: grid;
  /* grid-template-columns: 1fr 1fr; */
  grid-template-columns: 40% 60%;
  gap: 30px;
  padding: 10px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const MainBoxText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    height: auto;
    padding: 20px;
  }
`;

export const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 10% 5%;
  width: 100%;
  max-height: 400px;
`;

export const ImagePreview = styled.img`
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
  background-color: #f8f8f8;
`;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;

    &:focus {
      border-color: #7a2141;
      outline: none;
    }
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
`;

export const MakeCardVisibleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const TitlesBox = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #292828;
  margin: 20px 0 10px;
`;

export const TitleBoxText = styled.label`
  font-size: 16px;
  color: #b5abab;
  color: #292828;
  padding: 0 0 0 20px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;

    &:focus {
      border-color: #7a2141;
      outline: none;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;

  &:focus {
    border-color: #68a4f8;
    outline: none;
  }
`;

export const DescriptionSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
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
`;

// Gallery

export const GalleryContainer = styled.div`
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
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 12px;
`;

export const GalleryImageWrapper = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

export const CheckboxLabel = styled.label`
  font-size: 14px;
  color: #333;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
    gap: 8px;
  }
`;