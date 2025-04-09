import styled from "styled-components";

export const GalleryContainer = styled.div`
  margin: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  /* box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12); */
  overflow: hidden;
  transition: all 0.3s ease-in-out;

  /* &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.18);
  } */

  @media(max-width: 768px) {
  margin: 10px;
    width: 300px;
  }
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

export const TitleBox = styled.div`
display: flex;
justify-content: center;
  font-size: 18px;
  font-weight: bold;
  margin: 20px 0 10px;
`;

export const UploadText = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #292828;
  margin: 20px 0 10px;
  /* background-color: #702424; */
`;


export const EditTopImage = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UploadInput = styled.input`
  padding: 10px;
  border-radius: 5px;
`;

export const ImagesContainer = styled.div`

`;

