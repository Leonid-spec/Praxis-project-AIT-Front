import styled from "styled-components";

export const ServicePageSingleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 50px;
`;

export const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-radius: 10px;
  background-color: #ffffff;
  margin-bottom: 40px;
  padding: 0 40px;
`;

export const MainBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const MainBoxText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px;
  width: 100%;
  height: 500px;
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
    background-color: #f8f8f8;

    &:focus {
      border-color: #68a4f8;
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
  color: #b5abab;
  margin: 20px 0 10px;
`;

export const TitleBoxText = styled.label`
  font-size: 16px;
  color: #b5abab;
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
    background-color: #f8f8f8;

    &:focus {
      border-color: #68a4f8;
      outline: none;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f8f8f8;

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
  padding: 18px 40px;
  /* margin: 20px 66px 0; */
  /* margin: 20px; */
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;

  &:hover {
    background-color: #0c989c;
  }
`;

export const StyledSaveButton = styled.button`
  background-color: #20b1b7;
  color: #fff;
  padding: 20px 40px;
  border: none;
  font-weight: bold;

  border-radius: 30px;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    background-color: #0c989c;
  }
`;
