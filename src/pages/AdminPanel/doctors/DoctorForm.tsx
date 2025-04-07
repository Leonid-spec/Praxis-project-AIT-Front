import React, { useState } from "react";
import styles from "./doctorForm.module.css";

const DoctorForm: React.FC<{ closeForm: () => void; addDoctorCard: (doctorData: any) => void; doctorData?: any }> = ({ closeForm, addDoctorCard, doctorData }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [formData, setFormData] = useState<Record<string, string>>(doctorData || {
    name: "",
    titleDe: "",
    titleEn: "",
    titleRu: "",
    specialisationDe: "",
    specialisationEn: "",
    specialisationRu: "",
    biographyDe: "",
    biographyEn: "",
    biographyRu: "",
    photo: "",
  });

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFormData({ ...formData, photo: URL.createObjectURL(file) });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isAllFieldsFilled = Object.entries(formData).every(([key, value]) => key === "photo" || value.trim() !== "");

  const handleSave = () => {
    if (!isAllFieldsFilled) return;
    setIsEditing(false);
    addDoctorCard({ ...formData, isActive });
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.header}>
        <button onClick={closeForm} className={styles.backButton}>← Return Back</button>

        {isEditing && (
          <button className={`${styles.activeButton} ${isActive ? styles.green : styles.red}`} onClick={() => setIsActive(!isActive)}>
            {isActive ? "Active" : "No Active"}
          </button>
        )}

        <button onClick={isEditing ? handleSave : () => setIsEditing(true)} className={styles.editButton} disabled={isEditing && !isAllFieldsFilled}>
          {isEditing ? "✅ Save All" : "✏️ Edit"}
        </button>
      </div>

      <div className={styles.formContent}>
        <div className={styles.leftColumn}>
          {isEditing ? (
            <input type="text" name="name" placeholder="Doctor's Name" className={`${styles.input} ${styles.editMode}`} onChange={handleInputChange} value={formData.name} />
          ) : (
            <p className={styles.nameDisplay}>{formData.name || "Doctor's Name"}</p>
          )}

          <div className={styles.fieldGroup}>
            <label className={styles.sectionTitle}>Titles:</label>
            {["titleDe", "titleEn", "titleRu"].map((field) => (
              <div key={field} className={styles.inputRow}>
                <label>{field.slice(-2).toUpperCase()}</label>
                <input type="text" name={field} className={isEditing && formData[field]?.trim() === "" ? styles.errorBorder : ""} disabled={!isEditing} onChange={handleInputChange} value={formData[field]} />
              </div>
            ))}
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.sectionTitle}>Specialisation:</label>
            {["specialisationDe", "specialisationEn", "specialisationRu"].map((field) => (
              <div key={field} className={styles.inputRow}>
                <label>{field.slice(-2).toUpperCase()}</label>
                <input type="text" name={field} className={isEditing && formData[field]?.trim() === "" ? styles.errorBorder : ""} disabled={!isEditing} onChange={handleInputChange} value={formData[field]} />
              </div>
            ))}
          </div>

          {/* Biography */}
          <label className={styles.sectionTitle}>Biography:</label>
          <div className={styles.biography}>
            {["biographyDe", "biographyEn", "biographyRu"].map((field) => (
              <div key={field} className={styles.bioColumn}>
                <label>{field.slice(-2).toUpperCase()}</label>
                <textarea name={field} className={isEditing && formData[field]?.trim() === "" ? styles.errorBorder : ""} disabled={!isEditing} onChange={handleInputChange} value={formData[field]} />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.photoContainer}>
          <div className={styles.photoPlaceholder}>
            {formData.photo ? <img src={formData.photo} alt="Doctor's Photo" className={styles.photoPreview} /> : "Photo"}
          </div>
          {isEditing && (
            <button className={styles.photoButton} onClick={() => document.getElementById("photoUpload")?.click()}>Add Photo 📷</button>
          )}
          <input type="file" id="photoUpload" onChange={handlePhotoUpload} accept="image/*" className={styles.hiddenInput} />
        </div>
      </div>
    </div>
  );
};

export default DoctorForm;