import React, { useState } from "react";
import styles from "./doctorsPage.module.css";
import DoctorForm from "./DoctorForm";
import DoctorCard from "./DoctorCard";

const DoctorsPage: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [doctors, setDoctors] = useState<any[]>([]);

  const addDoctorCard = (doctorData: any) => {
    setDoctors([...doctors, doctorData]);
  };

  return (
    <div className={styles.container}>
      {!isFormOpen ? (
        <>
          <button onClick={() => setIsFormOpen(true)} className={styles.addDoctor}>Add Doctor ➕</button>
          <input type="text" placeholder="Search doctor..." className={styles.searchBox} />

          {/* Список докторов */}
          <div className={styles.doctorsList}>
            {doctors.map((doctor, index) => (
              <DoctorCard key={index} doctorData={doctor} openDetails={() => setIsFormOpen(true)} />
            ))}
          </div>
        </>
      ) : (
        <DoctorForm closeForm={() => setIsFormOpen(false)} addDoctorCard={addDoctorCard} />
      )}
    </div>
  );
};

export default DoctorsPage;