import React from "react";
import {
  Card,
  PhotoContainer,
  Photo,
  Info,
  FullName,
  DetailsButton,
  InactiveOverlay,
} from "./styles";

interface DoctorCardProps {
  id: number;
  fullName: string;
  topImage: string;
  isActive: boolean;
  onEditClick: () => void;
}

const DoctorCardAdmin: React.FC<DoctorCardProps> = ({ fullName, topImage, isActive, onEditClick }) => {
  return (
    <Card>
      {!isActive && <InactiveOverlay>Inactive</InactiveOverlay>}
      <PhotoContainer>
        <Photo src={topImage || "https://via.placeholder.com/150"} alt="Doctor preview" />
      </PhotoContainer>
      <Info>
        <FullName>{fullName}</FullName>
        <DetailsButton onClick={onEditClick}>Edit</DetailsButton>
      </Info>
    </Card>
  );
};

export default DoctorCardAdmin;