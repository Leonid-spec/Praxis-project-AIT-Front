import React from "react";
import { Card, Photo, Info, Name, Description, DetailsButton } from "./styles";
import { useTranslation } from "react-i18next";

interface ServiceCardProps {
  id: number;
  photo?: string;
  name: string;
  description: string;
  onDetailsClick: (id: number) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  photo,
  name,
  description,
  onDetailsClick,
}) => {
  const { t } = useTranslation();

  return (
    <Card>
      <Photo
        src={photo || "https://via.placeholder.com/150"}
        alt={`Photo of ${name}`}
      />
      <Info>
        <Name>{name}</Name>
        <Description>{description}</Description>
        <DetailsButton onClick={() => onDetailsClick(id)}>
          {t("message.main.services_page.moreInfoBtn")}
        </DetailsButton>
      </Info>
    </Card>
  );
};

export default ServiceCard;
