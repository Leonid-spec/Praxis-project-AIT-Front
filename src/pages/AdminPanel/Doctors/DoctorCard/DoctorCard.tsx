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
import { useTranslation } from "react-i18next";

interface DoctorCardProps {
  id: number;
  fullName: string;
  topImage?: string; // ✅ Сделал `topImage` необязательным
  specialization: string | number | boolean;
  isActive?: boolean;
  onActionClick: () => void;
  isAdminPanel?: boolean;
  buttonLabel?: string; // ✅ Добавлено для возможного перевода кнопки
}

const DoctorCard: React.FC<DoctorCardProps> = ({
  fullName,
  topImage = "https://via.placeholder.com/150", // ✅ Заглушка для отсутствующего изображения
  specialization,
  isActive = true,
  onActionClick,
  isAdminPanel = false,
  buttonLabel,
}) => {
  const { t } = useTranslation(); // Подключаем `t()` для переводов

  // ✅ Гарантируем, что specialization всегда будет строкой
  const formattedSpecialization = typeof specialization === "string" ? specialization : String(specialization);

  return (
    <Card style={{ opacity: isActive ? 1 : 0.5 }}>
      {!isActive && <InactiveOverlay>{t("message.adminPanel.appointments.doctors.inactive")}</InactiveOverlay>}
      <PhotoContainer>
        <Photo src={topImage} alt="Doctor preview" />
      </PhotoContainer>
      <Info>
        <FullName>{fullName}</FullName>
        <Specialization>{formattedSpecialization}</Specialization> {/* ✅ Используем исправленный specialization */}
        <ActionButton onClick={onActionClick}>
          {buttonLabel || (isAdminPanel ? t("message.adminPanel.appointments.doctors.edit") : t("message.adminPanel.appointments.doctors.details"))}
        </ActionButton>
      </Info>
    </Card>
  );
};

export default DoctorCard;
