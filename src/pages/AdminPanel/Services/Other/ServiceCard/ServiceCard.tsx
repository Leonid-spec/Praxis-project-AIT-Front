import React from "react";
import {
  Card,
  PhotoContainer,
  Photo,
  Info,
  Title,
  DetailsButton,
} from "./styles";

interface ServiceCardProps {
  title: string;
  image?: string;
  onEditClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, image, onEditClick }) => {
  return (
    <Card>
      <PhotoContainer>
        <Photo
          src={image || "https://via.placeholder.com/150"}
          alt="Service preview"
        />
      </PhotoContainer>
      <Info>
        <Title>{title}</Title>
        <DetailsButton onClick={onEditClick}>Edit</DetailsButton>
      </Info>
    </Card>
  );
};

export default ServiceCard;
