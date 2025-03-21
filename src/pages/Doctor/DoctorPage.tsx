import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { fetchDoctorById } from '../../store/slices/doctorSlice';
import { useAppDispatch } from '../../store/hooks';
import './DoctorPage.css';

const DoctorPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const doctor = useSelector((state: any) => state.doctors.selectedDoctor);
  const loading = useSelector((state: any) => state.doctors.loading);

  useEffect(() => {
    if (id) {
      dispatch(fetchDoctorById(Number(id)));
    }
  }, [dispatch, id]);

  if (loading) {
    return <p>Загрузка...</p>;
  }

  if (!doctor) {
    return <p>Доктор не найден</p>;
  }

  return (
    <div className="doctor-page-container">
      <div className="left-container">
        <div className="info-wrapper">
          <h1>
            {doctor.degree} {doctor.name}
          </h1>
          <h2>{doctor.specialization}</h2>
          <p>{doctor.description}</p>
          <button className="placeholder-button">Записаться</button>
        </div>
      </div>
      <div className="right-container">
        <img src={doctor.photo} alt={doctor.name} className="doctor-photo" />
      </div>
    </div>
  );
};

export default DoctorPage;
