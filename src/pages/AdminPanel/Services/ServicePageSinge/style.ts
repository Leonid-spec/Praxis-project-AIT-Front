import styled from "styled-components";

export const ServicePageSingleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
  /* background-color: #f7f7f7; */
  border-radius: 10px;
  `;

export const AddNewServicePageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  button {
    background-color: #edf2f7;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 14px;

    &:hover {
      background-color: #dce7ee;
    }
  }
`;

export const MainBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
`;

export const EditTopImage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

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

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

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

export const TitlesBox = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #B5ABAB;
  margin-top: 40px;
`;

export const TitleBoxText = styled.div`
  font-size: 16px;
  /* font-weight: bold; */
  color: #B5ABAB;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  span {
    font-weight: bold;
    color: #4a4a4a;
    flex-shrink: 0;
  }

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

export const DescriptionSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const StyledInvisibleButton = styled.button`
  background-color: #ffa07a;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #ff7f50;
  }
`;

export const StyledSaveButton = styled.button`
  background-color: #90ee90;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #76c76b;
  }
`;
