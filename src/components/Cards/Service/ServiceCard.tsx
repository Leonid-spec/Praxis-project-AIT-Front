import React from "react";
import { Card, Photo, Info, Title, Description, DetailsButton, PhotoContainer } from "./styles";
import { useTranslation } from "react-i18next";

interface ServiceCardProps {
  id: number;
  topImage: string;
  title: string;
  description: string;
  onDetailsClick: (id: number) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  title,
  topImage,
  onDetailsClick,
}) => {
  const { t } = useTranslation();

  return (
    <Card>
     <PhotoContainer>
        <Photo
          src={topImage}
          alt={`Photo of ${title}`}
        />
     </PhotoContainer>
      <Info>
        <Title>{title}</Title>
        <DetailsButton onClick={() => onDetailsClick(id)}>
                  {t("message.main.team_page.moreInfoBtn")} 
                </DetailsButton>
      </Info>
    </Card>
  );
};

export default ServiceCard;