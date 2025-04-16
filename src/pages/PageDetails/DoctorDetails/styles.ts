import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 40px auto;
  flex-direction: row;
  
  @media (max-width: 1200px) and (min-width: 768px) {
    gap: 40px; // отступ между изображением и текстом
  }

  @media (max-width: 768px) {
    flex-direction: column;

    & > div:first-child {
      order: 2; // ImageSectionWrapper
    }

    & > div:last-child {
      order: 1; // ContentWrapper
    }
  }
`;


export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 30px;
  width: 100%;
`;


export const ImgAndBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ImageWrapper = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  overflow: hidden;
  margin: 10px 0 25px 0;
  border-radius: 12px;
  background-color: #f8f8f8;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 88%;
    height: auto;
    margin: 10px 0 25px 0;
  }
`;

export const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
`;

export const InfoWrapper = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const FullName = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
  text-align: center;
  margin-bottom: 40px;
`;

export const TitleWrapper = styled.div`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
`;

export const ResetImageButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  cursor: pointer;
  border-radius: 8px;
  font-size: 24px;
  color: #333;
`;

export const LabelWrapper = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #444;
  margin-bottom: 10px;
`;

export const Title = styled.p`
  font-size: 24px;
  color: #555;
  margin-bottom: 10px;
`;

export const SpecializationWrapper = styled.div`
  margin-bottom: 20px;
`;

export const Specialization = styled.p`
  font-size: 18px;
  color: #555;
`;

export const BiographyWrapper = styled.div`
  margin-top: 20px;
`;

export const Biography = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.6;
`;

export const GalleryWrapper = styled.div`
display: flex;
justify-content: center;
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
  max-width: 120px;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export const ImageSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 10px;
  margin-top: 15px;
  justify-content: center;
  max-width: 400px;
  width: 100%;
`;