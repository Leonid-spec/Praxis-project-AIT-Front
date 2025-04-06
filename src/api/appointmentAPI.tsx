import { AppointmentData } from "../store/types/appointmentTypes";

const API_URL = "http://localhost:8100/api";

const handleFetchError = async (response: Response) => {
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`HTTP error! Status: ${response.status}, Details: ${errorText}`);
  }
  return response.json();
};

export const createAppointment = async (
  appointment: AppointmentData,
): Promise<AppointmentData> => {
  const updatedAppointment = {
    ...appointment,
    id: 1,
  };

  try {
    const response = await fetch(`${API_URL}/appointment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedAppointment),
    });
    return await handleFetchError(response);
  } catch (error) {
    console.log("message app", appointment);
    console.error("Failed to create appointment:", error);
    throw error;
  }
};

export const getAppointments = async (token: string): Promise<AppointmentData[]> => {
  try {
    const response = await fetch(`${API_URL}/appointments`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return await handleFetchError(response);
  } catch (error) {
    console.error("Failed to fetch appointments:", error);
    throw error;
  }
};

export const getAppointmentById = async (
  id: number,
  token: string
): Promise<AppointmentData> => {
  try {
    const response = await fetch(`${API_URL}/appointment/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return await handleFetchError(response);
  } catch (error) {
    console.error(`Failed to fetch appointment with ID ${id}:`, error);
    throw error;
  }
};

// export const updateAppointment = async (
//   id: number,
//   appointment: AppointmentData,
//   token: string
// ): Promise<AppointmentData> => {
//   try {
//     const response = await fetch(`${API_URL}/appointment/${id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify(appointment),
//     });
//     return await handleFetchError(response);
//   } catch (error) {
//     console.error(`Failed to update appointment with ID ${id}:`, error);
//     throw error;
//   }
// };

export const deleteAppointment = async (
  id: number,
  token: string
): Promise<void> => {
  try {
    const response = await fetch(`${API_URL}/appointment/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    await handleFetchError(response);
  } catch (error) {
    console.error(`Failed to delete appointment with ID ${id}:`, error);
    throw error;
  }
};
