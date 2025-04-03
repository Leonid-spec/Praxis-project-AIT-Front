import React from "react";
import styles from "./doctorForm.module.css";

interface DoctorFormProps {
  newDoctor: any;
  setNewDoctor: (doctor: any) => void;
  handleApplySettings: () => void;
  onClose: () => void;
}

const DoctorForm: React.FC<DoctorFormProps> = ({
  newDoctor,
  setNewDoctor,
  handleApplySettings,
  onClose,
}) => {
  // Функция для обновления Specialisation, убирая пустые значения
  const handleSpecialisationChange = (value: string) => {
    const combinedSpecialisation = [
      newDoctor.SpecialisationDe,
      newDoctor.SpecialisationEn,
      newDoctor.SpecialisationRu,
      value,
    ]
      .filter((spec) => spec && spec.trim() !== "")
      .join(" / ");

    setNewDoctor({ ...newDoctor, specialisation: combinedSpecialisation });
  };

  return (
    <div className={styles.form}>
      {/* Чёрный крестик для закрытия */}
      <button onClick={onClose} className={styles.closeButton}>
        ✖
      </button>

      <h2 className={styles.formHeader}>
        {newDoctor.id ? "Edit Doctor" : "Add Doctor"}
      </h2>

      {/* Поле Full Name */}
      <label className={styles.formLabel}>
        Full Name:
        <input
          type="text"
          className={`${styles.formInput} ${styles.smallInput}`}
          value={newDoctor.fullname || ""}
          onChange={(e) =>
            setNewDoctor({ ...newDoctor, fullname: e.target.value })
          }
        />
      </label>

      {/* Поле Specialisation */}
      <label className={styles.formLabel}>
        Specialisation:
        <input
          type="text"
          className={`${styles.formInput} ${styles.smallInput}`}
          value={newDoctor.specialisation || ""}
          onChange={(e) => handleSpecialisationChange(e.target.value)}
        />
      </label>

      {/* Поле Photo */}
      <label className={styles.formLabel}>
        Photo:
        <input
          type="file"
          className={styles.formInput}
          onChange={(e) =>
            e.target.files?.[0] &&
            setNewDoctor({
              ...newDoctor,
              photo: URL.createObjectURL(e.target.files[0]),
            })
          }
        />
      </label>

      {/* Кнопка Apply */}
      <button onClick={handleApplySettings} className={styles.applyButton}>
        Apply
      </button>
    </div>
  );
};

export default DoctorForm;