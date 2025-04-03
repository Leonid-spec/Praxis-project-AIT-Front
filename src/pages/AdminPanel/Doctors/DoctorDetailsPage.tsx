import React, { useState, useEffect } from "react";
import styles from "./doctorDetailsPage.module.css";

interface DoctorDetailsPageProps {
  doctor: any;
  onBackToMenu: () => void;
  onUpdateDoctor: (updatedDoctor: any) => void;
}

const DoctorDetailsPage: React.FC<DoctorDetailsPageProps> = ({
  doctor,
  onBackToMenu,
  onUpdateDoctor,
}) => {
  const [editable, setEditable] = useState(false); // Режим редактирования
  const [updatedDoctor, setUpdatedDoctor] = useState({ ...doctor }); // Копия данных врача

  // Обновляем локальное состояние, если `doctor` в пропсах изменяется
  useEffect(() => {
    setUpdatedDoctor({ ...doctor });
  }, [doctor]);

  const handleEditToggle = () => {
    setEditable(!editable); // Включаем или выключаем режим редактирования
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const newPhoto = URL.createObjectURL(e.target.files[0]);
      const updated = { ...updatedDoctor, photo: newPhoto };
      setUpdatedDoctor(updated);
      onUpdateDoctor(updated); // Синхронизация изменений с глобальным состоянием
    }
  };

  const handleBiographyChange = (field: string, value: string) => {
    const updated = { ...updatedDoctor, [field]: value };
    setUpdatedDoctor(updated);
    onUpdateDoctor(updated); // Обновляем глобальное состояние при каждом изменении
  };

  const handleSaveChanges = () => {
    try {
      const [name, ...surnameParts] = updatedDoctor.fullname.trim().split(" ");
      const surname = surnameParts.join(" ");
      const combinedBiography = [
        updatedDoctor.BiographyDe,
        updatedDoctor.BiographyEn,
        updatedDoctor.BiographyRu,
      ]
        .filter((bio) => bio && bio.trim() !== "") // Исключаем пустые биографии
        .join("\n"); // Объединяем все биографии через перенос строки

      const updated = { ...updatedDoctor, name, surname, biography: combinedBiography };

      setUpdatedDoctor(updated);
      onUpdateDoctor(updated); // Финальное обновление глобального состояния
      setEditable(false);
    } catch (error) {
      console.error("Error saving changes:", error); // Лог ошибок
    }
  };

  const handleBackToMenu = () => {
    onUpdateDoctor(updatedDoctor); // Убедимся, что состояние обновлено перед выходом
    onBackToMenu(); // Возврат в главное меню
  };

  return (
    <div className={styles.page}>
      {/* Поле Full Name */}
      <div className={styles.fullNameSection}>
        <label className={styles.fullNameLabel}>
          Full Name:
          <input
            type="text"
            className={styles.fullNameInput}
            value={updatedDoctor.fullname || ""}
            disabled={!editable}
            onChange={(e) =>
              handleBiographyChange("fullname", e.target.value) // Автоматическая синхронизация
            }
          />
        </label>
      </div>

      <div className={styles.topSection}>
        <div className={styles.photoSection}>
          <img src={updatedDoctor.photo} alt="Doctor" className={styles.photo} />
          {editable && (
            <label className={styles.addPhotoButton}>
              Add Photo:
              <input type="file" onChange={handlePhotoChange} />
            </label>
          )}
        </div>

        <div className={styles.infoSection}>
          {[
            "NameDe",
            "NameEn",
            "NameRu",
            "SpecialisationDe",
            "SpecialisationEn",
            "SpecialisationRu",
          ].map((field, index) => (
            <label key={index} className={styles.label}>
              {field}:
              <input
                type="text"
                className={styles.input}
                value={updatedDoctor[field] || ""}
                disabled={!editable}
                onChange={(e) =>
                  handleBiographyChange(field, e.target.value) // Обновление данных
                }
              />
            </label>
          ))}
        </div>
      </div>

      {/* Поле для основной биографии */}
      <div className={styles.biographyPreviewSection}>
        <p className={styles.biographyHeader}>Biography:</p>
        <div className={styles.biographyPreview}>
          {updatedDoctor.biography || "Biography not provided"}
        </div>
      </div>

      {/* Три поля для ввода биографии */}
      <div className={styles.biographySection}>
        {["BiographyDe", "BiographyEn", "BiographyRu"].map((field, index) => (
          <div key={index} className={styles.biographyField}>
            <p className={styles.biographyLabel}>{field}</p>
            <textarea
              className={styles.biographyTextarea}
              value={updatedDoctor[field] || ""}
              disabled={!editable}
              onChange={(e) => handleBiographyChange(field, e.target.value)}
            />
          </div>
        ))}
      </div>

      {/* Кнопки */}
      <div className={styles.buttonsSection}>
        <button onClick={handleBackToMenu} className={styles.backButton}>
          Back to Menu
        </button>
        {editable ? (
          <button onClick={handleSaveChanges} className={styles.saveButton}>
            Save Changes
          </button>
        ) : (
          <button onClick={handleEditToggle} className={styles.editButton}>
            ✏️ Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default DoctorDetailsPage;