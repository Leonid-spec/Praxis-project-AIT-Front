import React, { useEffect } from "react";
import doctorsData from "../api/doctors.json";

const TestJson: React.FC = () => {
  useEffect(() => {
    console.log("Doctors JSON Data:", doctorsData);
  }, []);

  return (
    <>
      <p>Hi!</p>
      <div>Check the console for the JSON data!</div>
      <div>
        {doctorsData.doctors.map((doctor) => (
          <div key={doctor.id}>
            <p>Name: {doctor.full_name}</p>
            <p>Title: {doctor.title_en}</p>
            <img src={doctor.topimage} alt={doctor.full_name} />
          </div>
        ))}
      </div>
    </>
  );
};

export default TestJson;
