import React, { useState } from "react";
import DoctorCard from "./DoctorCard";
import DoctorDetailsPage from "./DoctorDetailsPage";
import DoctorForm from "./DoctorForm";
import { useDoctors } from "./DoctorsContext";
import styles from "./doctorPage.module.css";

const DoctorsPage: React.FC = () => {
  const { doctors, setDoctors } = useDoctors(); // Получаем данные врачей из контекста
  const [formVisible, setFormVisible] = useState(false);
  const [detailsVisible, setDetailsVisible] = useState<number | null>(null); // ID врача с подробностями
  const [confirmationVisible, setConfirmationVisible] = useState<number | null>(
    null
  ); // ID врача для подтверждения удаления
  const [currentDoctorId, setCurrentDoctorId] = useState<number | null>(null);

  const [newDoctor, setNewDoctor] = useState({
    id: 0,
    name: "",
    surname: "",
    fullname: "",
    position: "",
    biography: "",
    photo: "",
    active: true,
    SpecialisationDe: "",
    SpecialisationEn: "",
    SpecialisationRu: "",
  });

  // Добавление нового врача
  const handleAddDoctor = () => {
    setFormVisible(true);
    setCurrentDoctorId(null);
    setNewDoctor({
      id: 0,
      name: "",
      surname: "",
      fullname: "",
      position: "",
      biography: "",
      photo: "",
      active: true,
      SpecialisationDe: "",
      SpecialisationEn: "",
      SpecialisationRu: "",
    });
  };

  // Применение нового врача
  const handleApplySettings = () => {
    const [name, ...surnameParts] = newDoctor.fullname?.trim().split(" ") || ["", ""];
    const surname = surnameParts.join(" ");
    const combinedSpecialisation = [
      newDoctor.SpecialisationDe,
      newDoctor.SpecialisationEn,
      newDoctor.SpecialisationRu,
    ]
      .filter((spec) => spec && spec.trim() !== "")
      .join(" / ");

    setDoctors((prevDoctors) =>
      currentDoctorId !== null
        ? prevDoctors.map((doc) =>
            doc.id === currentDoctorId
              ? { ...newDoctor, id: doc.id, name, surname, specialisation: combinedSpecialisation }
              : doc
          )
        : [
            ...prevDoctors,
            {
              ...newDoctor,
              id: Date.now(),
              name,
              surname,
              specialisation: combinedSpecialisation,
            },
          ]
    );
    setFormVisible(false);
  };

  // Удаление врача
  const handleDeleteDoctor = (id: number) => {
    setDoctors((prevDoctors) => prevDoctors.filter((doc) => doc.id !== id));
    setConfirmationVisible(null); // Закрываем окно подтверждения
  };

  // Переключение активности врача
  const handleToggleActive = (id: number) => {
    setDoctors((prevDoctors) =>
      prevDoctors.map((doc) =>
        doc.id === id ? { ...doc, active: !doc.active } : doc
      )
    );
  };

  // Отображение подробностей врача
  const handleMoreInfo = (doctorId: number) => {
    setDetailsVisible(doctorId);
  };

  // Закрытие окна подробностей
  const handleBackToMenu = () => {
    setDetailsVisible(null);
  };

  // Обновление информации врача
  const handleUpdateDoctor = (updatedDoctor: any) => {
    const combinedSpecialisation = [
      updatedDoctor.SpecialisationDe,
      updatedDoctor.SpecialisationEn,
      updatedDoctor.SpecialisationRu,
    ]
      .filter((spec) => spec && spec.trim() !== "")
      .join(" / ");

    setDoctors((prevDoctors) =>
      prevDoctors.map((doc) =>
        doc.id === updatedDoctor.id
          ? { ...updatedDoctor, specialisation: combinedSpecialisation }
          : doc
      )
    );
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Doctors Management</h1>
      </header>

      {!detailsVisible && (
        <button onClick={handleAddDoctor} className={styles.addButton}>
          Add Doctor
        </button>
      )}

      {formVisible && (
        <DoctorForm
          newDoctor={newDoctor}
          setNewDoctor={setNewDoctor}
          handleApplySettings={handleApplySettings}
          onClose={() => setFormVisible(false)}
        />
      )}

      {!detailsVisible && (
        <div className={styles.list}>
          {doctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              onMoreInfo={() => handleMoreInfo(doctor.id)}
              onToggleActive={() => handleToggleActive(doctor.id)}
              onDelete={() => handleDeleteDoctor(doctor.id)}
              onShowConfirmation={(id) => setConfirmationVisible(id)}
              confirmationVisible={confirmationVisible === doctor.id}
            />
          ))}
        </div>
      )}

      {detailsVisible && (
        <DoctorDetailsPage
          doctor={doctors.find((doc) => doc.id === detailsVisible)!}
          onBackToMenu={handleBackToMenu}
          onUpdateDoctor={handleUpdateDoctor} // Синхронизация изменений
        />
      )}
    </div>
  );
};

export default DoctorsPage;