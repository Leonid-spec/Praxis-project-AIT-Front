import React from "react";
import { useTranslation } from "react-i18next";
import {
  Card,
  PhotoContainer,
  Photo,
  Info,
  Title,
  DetailsButton,
  InactiveOverlay,
} from "./styles";

interface ServiceCardProps {
  id: number;
  title: string;
  topImage?: string;
  isActive?: boolean;
  onEditClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  topImage, 
  onEditClick,
  isActive = true,
}) => {
  const { t } = useTranslation(); 
  return (
    <Card style={{ opacity: isActive ? 1 : 0.5 }}>
      
      <PhotoContainer>
      
        <Photo
          src={topImage}
          alt="Service preview"
        />
      </PhotoContainer>
      <Info>
        <Title>{title}</Title>
        <DetailsButton onClick={onEditClick}> {t("message.adminPanel.appointments.buttons.edit")} </DetailsButton>
      </Info>
    </Card>
  );
};

export default ServiceCard;
