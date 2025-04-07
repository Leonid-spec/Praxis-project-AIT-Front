import React, { useState } from "react";
import styles from "./doctorCard.module.css";

const DoctorCard: React.FC<{ doctorData: any; openDetails: (doctorData: any) => void }> = ({ doctorData, openDetails }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(doctorData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className={`${styles.doctorCard} ${formData.isActive ? styles.activeCard : styles.inactiveCard}`}>
      {/* Блюр только на фото, если карточка неактивна */}
      <img src={formData.photo} alt="Doctor's Photo" className={formData.isActive ? styles.cardPhoto : styles.cardPhotoBlur} />

      {/* Имя без рамки, но при "Edit" рамка появляется */}
      {isEditing ? (
        <input type="text" name="name" className={styles.cardName} value={formData.name} onChange={handleInputChange} />
      ) : (
        <div className={styles.cardName}>{formData.name}</div>
      )}

      {/* Передача данных врача в "More Info" */}
      <button className={styles.moreInfoButton} onClick={() => openDetails(doctorData)}>More Info</button>

      {isEditing && <button className={styles.saveButton} onClick={() => setIsEditing(false)}>Save</button>}
    </div>
  );
};

export default DoctorCard;