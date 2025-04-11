import { Doctor } from "../store/types/doctorTypes";

const API_URL = "http://localhost:8080/api"; // ✅ Убедимся, что API_URL существует
if (!API_URL) throw new Error("API_URL is not set!");

const handleFetchError = async (response: Response) => {
  if (!response.ok) {
    console.error("API error:", response.status, response.statusText); // ✅ Улучшенный лог
    const errorText = await response.text();
    throw new Error(`HTTP error! Status: ${response.status}, Details: ${errorText}`);
  }
  return response.json();
};

// Get active doctors
export const getActiveDoctors = async (): Promise<Doctor[]> => {
  try {
    const response = await fetch(`${API_URL}/doctors/active`);
    return await handleFetchError(response);
  } catch (error) {
    console.error("Failed to fetch active doctors:", error);
    throw error;
  }
};

// Get all doctors
export const getAllDoctors = async (token: string): Promise<Doctor[]> => {
  try {
    const response = await fetch(`${API_URL}/doctors`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return await handleFetchError(response);
  } catch (error) {
    console.error("Failed to fetch all doctors:", error);
    throw error;
  }
};

// Get doctor by ID
export const getDoctorById = async (id: number, token: string): Promise<Doctor> => {
  if (!id) throw new Error("Doctor ID is required!");
  
  try {
    console.log(`Fetching doctor data from ${API_URL}/doctor/${id}`);

    const response = await fetch(`${API_URL}/doctor/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return await handleFetchError(response);
  } catch (error) {
    console.error(`Failed to fetch doctor with ID ${id}:`, error);
    throw error;
  }
};

// Create doctor
export const createDoctor = async (doctor: Partial<Doctor>, token: string): Promise<Doctor> => {
  if (!doctor) throw new Error("Doctor data is required!");

  try {
    const response = await fetch(`${API_URL}/doctor`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(doctor),
    });

    console.log("Creating doctor:", doctor);
    return await handleFetchError(response);
  } catch (error) {
    console.error("Failed to create doctor:", error);
    throw error;
  }
};

export const updateDoctor = async (doctor: Partial<Doctor>, token: string): Promise<Doctor> => {
  if (!doctor) throw new Error("Doctor data is required for update!");

  try {
    console.log(`Updating doctor at ${API_URL}/doctor`);

    const response = await fetch(`${API_URL}/doctor`, { // ✅ Убираем ID из URL, как в API-контроллере
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(doctor),
    });

    return await handleFetchError(response);
  } catch (error) {
    console.error(`Failed to update doctor`, error);
    throw error;
  }
};

// Delete doctor
export const deleteDoctor = async (id: number, token: string): Promise<void> => {
  if (!id) throw new Error("Doctor ID is required for deletion!");

  try {
    console.log(`Deleting doctor at ${API_URL}/doctor/${id}`);

    const response = await fetch(`${API_URL}/doctor/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    await handleFetchError(response);
  } catch (error) {
    console.error(`Failed to delete doctor with ID ${id}:`, error);
    throw error;
  }
};