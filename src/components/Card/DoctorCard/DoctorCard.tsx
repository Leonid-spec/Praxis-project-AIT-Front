import React from 'react';
import styles from './styles'; // Импорт стилей из отдельного файла
import { Link } from 'react-router-dom'; // Импорт Link для маршрутизации

interface DoctorCardProps {
  id: string; // Добавление ID врача
  photo: string;
  degree: string;
  name: string;
  specialization: string;
  onDetailsClick?: () => void;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ id, photo, degree, name, specialization }) => (
  <div style={styles.card}>
    <img src={photo} alt={`Фото ${name}`} style={styles.photo} />
    <div style={styles.info}>
      <h3 style={styles.degree}>{degree}</h3>
      <h2 style={styles.name}>{name}</h2>
      <p style={styles.specialization}>{specialization}</p>
      {/* Добавление ссылки на страницу DoctorPage с ID врача */}
      <Link to={`/doctor/${id}`} style={styles.button}>
           Узнать подробнее
      </Link>

    </div>
  </div>
);

export default DoctorCard;
