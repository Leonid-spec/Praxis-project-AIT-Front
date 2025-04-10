import styled from "styled-components";

export const ScrollContainer = styled.div`
  flex: 1;
  overflow-y: auto; 
  scroll-behavior: smooth;
  padding: 0 30px 0 20px;
`;

export const ServicePageSingleContainer = styled.div`
  display: flex;
  height: 80vh;
  flex-direction: column;
  padding: 20px;
`;

export const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 100px 0;
  margin-bottom: 20px;


  @media (max-width: 768px) {
    padding: 0 20px; 
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

export const EditTopImage = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UploadInput = styled.input`
  padding: 10px;
  border-radius: 5px;
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
      border-color: #20b1b7;
      outline: none;
    }
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
  color:  #292828;
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
      border-color: #20b1b7;
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