import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

export const MainPhoto = styled.img`
  width: 300px;
  height: auto;
  border-radius: 12px;
  margin: 0 auto 20px;
  display: block;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

export const Section = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FieldLabel = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #475bce;
`;

export const FieldValue = styled.p`
  font-size: 16px;
  color: #4a5568;
  margin-top: 5px;
  text-align: center;
`;

export const AdditionalPhotos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 10px;

  img {
    width: 100%;
    height: 100px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  }
`;