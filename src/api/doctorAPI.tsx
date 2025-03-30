import { Doctor } from "../store/types/doctorTypes";

const API_URL = "/api";

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
export const getAllDoctors = async (): Promise<Doctor[]> => {
  try {
    const response = await fetch(`{API_URL}/doctors`);
    handleFetchError(response);
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch all doctors:", error);
    throw error;
  }
};

// Get doctor by id
export const getDoctorById = async (id: number): Promise<Doctor> => {
  try {
    const response = await fetch(`${API_URL}/doctors/${id}`);
    handleFetchError(response);
    return await response.json();
  } catch (error) {
    console.error(`Failed to fetch doctor with ID ${id}:`, error);
    throw error;
  }
};

// Create doctor
export const createDoctor = async (doctor: Doctor): Promise<Doctor> => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(doctor),
    });
    handleFetchError(response);
    return await response.json();
  } catch (error) {
    console.error("Failed to create doctor:", error);
    throw error;
  }
};

// Update doctor
export const updateDoctor = async (id: number, doctor: Doctor): Promise<Doctor> => {
  try {
    const response = await fetch(`${API_URL}/doctors/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(doctor),
    });
    handleFetchError(response);
    return await response.json();
  } catch (error) {
    console.error(`Failed to update doctor with ID ${id}:`, error);
    throw error;
  }
};

// Delete doctor
// export const deleteDoctor = async (id: number): Promise<any> => {
//   try {
//     const response = await fetch(`${API_URL}/${id}`, {
//       method: "DELETE",
//     });
//     handleFetchError(response);
//     return await response.json();
//   } catch (error) {
//     console.error(`Failed to delete doctor with ID ${id}:`, error);
//     throw error;
//   }
// };
