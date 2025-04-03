import React from "react";
import styles from "./doctorDetails.module.css";

interface DoctorDetailsProps {
  doctor: any;
  onBackToMenu: () => void;
  onEdit: () => void; // Добавляем функцию редактирования
}

const DoctorDetails: React.FC<DoctorDetailsProps> = ({ doctor, onBackToMenu, onEdit }) => {
  return (
    <div className={styles.modal}>
      <img src={doctor.photo} alt="Doctor Photo" className={styles.modalPhoto} />
      <div className={styles.modalContent}>
        <h3>Name: {doctor.name}</h3>
        <h3>Surname: {doctor.surname}</h3>
        <p>Position: {doctor.position}</p>
        <p>Biography: {doctor.biography}</p>
        <button onClick={onBackToMenu} className={styles.applyButton}>
          Back to Menu
        </button>
        <button onClick={onEdit} className={styles.editButton}>
          ✏️ Edit
        </button>
      </div>
    </div>
  );
};

export default DoctorDetails;