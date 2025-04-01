// src/api/appointmentAPI.ts
import axios from "axios";

export const fetchAppointments = async () => {
  try {
    const response = await axios.get("/api/appointments");
    return response.data;
  } catch (error) {
    console.error("Ошибка при загрузке встреч:", error);
    throw error;
  }
};

export const fetchAppointmentById = async (id: string) => {
  try {
    const response = await axios.get(`/api/appointments/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Ошибка при загрузке данных встречи с ID ${id}:`, error);
    throw error;
  }
};
