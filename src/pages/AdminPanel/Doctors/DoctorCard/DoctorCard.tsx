import React from "react";
import {
  Card,
  PhotoContainer,
  Photo,
  Info,
  FullName,
  Specialization,
  ActionButton,
  InactiveOverlay,
} from "./styles";

interface DoctorCardProps {
  id: number;
  fullName: string;
  topImage?: string; // ✅ Сделал `topImage` необязательным, чтобы избежать ошибок
  specialization: string | number | boolean;
  isActive?: boolean;
  onActionClick: () => void;
  isAdminPanel?: boolean;
}

const DoctorCard: React.FC<DoctorCardProps> = ({
  fullName,
  topImage = "https://via.placeholder.com/150", // ✅ Теперь если `topImage` отсутствует, будет заглушка
  specialization,
  isActive = true,
  onActionClick,
  isAdminPanel = false,
}) => {
  // ✅ Гарантируем, что specialization всегда будет строкой
  const formattedSpecialization = typeof specialization === "string" ? specialization : String(specialization);

  return (
    <Card style={{ opacity: isActive ? 1 : 0.5 }}>
      {!isActive && <InactiveOverlay>Inactive</InactiveOverlay>}
      <PhotoContainer>
        <Photo src={topImage} alt="Doctor preview" />
      </PhotoContainer>
      <Info>
        <FullName>{fullName}</FullName>
        <Specialization>{formattedSpecialization}</Specialization> {/* ✅ Используем исправленный specialization */}
        <ActionButton onClick={onActionClick}>
          {isAdminPanel ? "Edit" : "Details"} {/* ✅ Теперь в админ-панели "Edit", в `Team.tsx` - "Details" */}
        </ActionButton>
      </Info>
    </Card>
  );
};

export default DoctorCard;