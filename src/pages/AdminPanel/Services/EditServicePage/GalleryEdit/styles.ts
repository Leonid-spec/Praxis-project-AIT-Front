import styled from "styled-components";

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

export const UploadInput = styled.input`
  display: block;
`;

export const EditTopImage = styled.div`
  margin-bottom: 20px;
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
