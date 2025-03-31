import React from "react";
import styles from "./doctorCard.module.css";

// Интерфейс для компонента DoctorCardProps
interface Doctor {
  id: number;
  name: string;
  surname: string;
  fullname?: string; // Полное имя врача
  photo: string;
  active: boolean;
  specialisation?: string;
}

interface DoctorCardProps {
  doctor: Doctor; // Типизация врача
  onMoreInfo: () => void;
  onToggleActive: () => void;
  onDelete: () => void;
  onShowConfirmation: (id: number | null) => void;
  confirmationVisible: boolean;
}

const DoctorCard: React.FC<DoctorCardProps> = ({
  doctor,
  onMoreInfo,
  onToggleActive,
  onDelete,
  onShowConfirmation,
  confirmationVisible,
}) => {
  return (
    <div className={`${styles.card} ${!doctor.active ? styles.inactive : ""}`}>
      {/* Содержимое карточки */}
      <div
        className={`${styles.cardContent} ${
          !doctor.active ? styles.blurredContent : ""
        }`}
      >
        <div className={styles.photoContainer}>
          {doctor.photo ? (
            <img
              src={doctor.photo}
              alt={`Doctor: ${doctor.fullname || `${doctor.name} ${doctor.surname}`}`}
              className={styles.photo}
            />
          ) : (
            <div className={styles.placeholder}>No Photo</div> // Заполнитель, если фото отсутствует
          )}
        </div>
        <div className={styles.infoColumn}>
          <p>
            <strong>Full Name:</strong> {doctor.fullname || `${doctor.name} ${doctor.surname}`}
          </p>
          <p>
            <strong>Specialisation:</strong> {doctor.specialisation || "Not specified"}
          </p>
        </div>
      </div>

      {/* Кнопки действий */}
      <div className={styles.cardButtonRow}>
        <button
          onClick={() => onShowConfirmation(doctor.id)}
          className={styles.delete}
        >
          🗑 Delete
        </button>
        <button onClick={() => onToggleActive()} className={styles.toggle}>
          🔄 Toggle Active
        </button>
        <button onClick={() => onMoreInfo()} className={styles.moreInfo}>
          📄 More Info
        </button>
      </div>

      {/* Окно подтверждения */}
      {confirmationVisible && (
        <div className={styles.confirmation}>
          <p>Are you sure you want to delete this doctor?</p>
          <button onClick={() => onDelete()} className={styles.yesButton}>
            Yes
          </button>
          <button
            onClick={() => onShowConfirmation(null)}
            className={styles.noButton}
          >
            No
          </button>
        </div>
      )}
    </div>
  );
};

export default DoctorCard;