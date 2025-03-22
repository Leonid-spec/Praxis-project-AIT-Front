import React from 'react';
import {
  Card,
  Photo,
  Info,
  FullName,
  Specialization,
  DetailsButton,
} from './styles';

interface DoctorCardProps {
  id: number;
  photo: string;
  fullName: string;
  specialization: string | string[];
  onDetailsClick: (id: number) => void;
}

const DoctorCard: React.FC<DoctorCardProps> = ({
  id,
  photo,
  fullName,
  specialization,
  onDetailsClick,
}) => (
  <Card>
    <Photo src={photo} alt={`Photo of ${fullName}`} />
    <Info>
      <FullName>{fullName}</FullName>
      <Specialization>{specialization}</Specialization>
      <DetailsButton onClick={() => onDetailsClick(id)}>Mehr erfahren</DetailsButton>
    </Info>
  </Card>
);

export default DoctorCard;
