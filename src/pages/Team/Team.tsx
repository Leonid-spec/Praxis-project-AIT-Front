import React from 'react';
import { useNavigate } from 'react-router-dom';
import DoctorCard from '../../components/Card/DoctorCard/DoctorCard';
import mockDoctors from '../../api/mockDatabase';
import './Team.css';

const Team: React.FC = () => {
  const navigate = useNavigate();

  const handleDetailsClick = (id: number) => {
    navigate(`/doctor/${id}`);
  };

  return (
    <div className="team-page">
      <div className="team-header">
        <h1>
          Unsere <strong>Team</strong> |
        </h1>
      </div>
      <div className="team-photo-text-block">
  <img
    src="./src/assets/team.jpg" // Здесь указан ваш путь к изображению
    alt="Team"
    className="team-photo"
  />
  <div className="team-welcome-text">
    Welcome to Abramian Dental!
  </div>
</div>

      <div className="team-container">
        {mockDoctors.map((doctor) => (
          <div key={doctor.id} className="doctor-card">
            <DoctorCard
              id={doctor.id.toString()}
              photo={doctor.photo}
              degree={doctor.degree}
              name={doctor.name}
              specialization={doctor.specialization}
              onDetailsClick={() => handleDetailsClick(doctor.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
