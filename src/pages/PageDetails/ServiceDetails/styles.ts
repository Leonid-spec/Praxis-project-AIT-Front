import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 30px;
  width: 100%;
`;

export const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const MainImage = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  object-fit: cover;
`;

export const InfoWrapper = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Title = styled.h1`
  font-size: 28px;
  color: #2e3a59; /* Используем цвет, подходящий для стиля услуги */
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 16px;
  color: #4a4a4a; /* Спокойный серый цвет */
  line-height: 1.6;
`;

export const GalleryWrapper = styled.div`
  margin-top: 30px;
  width: 100%;
  text-align: center;
`;

export const GalleryTitle = styled.h3`
  font-size: 22px;
  margin-bottom: 15px;
  color: #444;
`;

export const ImagesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

export const GalleryImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

