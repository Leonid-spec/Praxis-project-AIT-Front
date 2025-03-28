import { Doctor } from "../store/types/doctorTypes";  

const API_URL = "/api/doctors";

const handleFetchError = (response: Response) => {
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
};

  export const getDoctors = async (): Promise<Doctor[]> => {
  try {
    const response = await fetch(API_URL);
    handleFetchError(response);
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch doctors:", error);
    throw error;
  }
};

export const getDoctorById = async (id: number): Promise<any> => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    handleFetchError(response);
    return await response.json();
  } catch (error) {
    console.error(`Failed to fetch doctor with ID ${id}:`, error);
    throw error;
  }
};

export const createDoctor = async (doctor: any): Promise<any> => {
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

export const updateDoctor = async (
  id: number,
  doctor: any
): Promise<any> => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
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

export const deleteDoctor = async (id: number): Promise<any> => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    handleFetchError(response);
    return await response.json();
  } catch (error) {
    console.error(`Failed to delete doctor with ID ${id}:`, error);
    throw error;
  }
};
