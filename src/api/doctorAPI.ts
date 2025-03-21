import mockDoctors from './mockDatabase';


export const getDoctors = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockDoctors);
    }, 500); // Симуляция задержки ответа сервера
  });
};

export const getDoctorById = (id: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const doctor = mockDoctors.find((doc) => doc.id === id);
      resolve(doctor);
    }, 500); // Симуляция задержки ответа сервера
  });
};
