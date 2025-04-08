import { Doctor } from "../store/types/doctorTypes";

const API_URL = "http://localhost:8080/api";

const handleFetchError = async (response: Response) => {
  if (!response.ok) {
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
  try {
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
  try {
    const response = await fetch(`${API_URL}/doctor`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(doctor),
    });
    return await handleFetchError(response);
  } catch (error) {
    console.error("Failed to create doctor:", error);
    throw error;
  }
};

// Update doctor 
export const updateDoctor = async (
  id: number,
  doctor: Partial<Doctor>,
  token: string
): Promise<Doctor> => {
  try {
    const response = await fetch(`${API_URL}/doctor/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(doctor),
    });
    return await handleFetchError(response);
  } catch (error) {
    console.error(`Failed to update doctor with ID ${id}:`, error);
    throw error;
  }
};

//  Delete doctor (with token)
// export const deleteDoctor = async (id: number, token: string): Promise<void> => {
//   try {
//     const response = await fetch(`${API_URL}/doctors/${id}`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     await handleFetchError(response);
//   } catch (error) {
//     console.error(`Failed to delete doctor with ID ${id}:`, error);
//     throw error;
//   }
// };