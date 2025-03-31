// const API_URL = "http://localhost:5000/doctors"; 
import { Doctor } from "../store/types/doctorTypes";


// export const getDoctors = async () => {
//     const response = await fetch(API_URL);
//     if (!response.ok) {
//       throw new Error("Failed to fetch doctors");
//     }
//     return await response.json();
//   };

//   export const getDoctorById = async (id: number) => {
//     const response = await fetch(`${API_URL}/${id}`);
//     if (!response.ok) {
//       throw new Error("Doctor not found");
//     }
//     return await response.json();
//   };
  
//   export const createDoctor = async (doctor: any) => {
//     const response = await fetch(API_URL, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(doctor),
//     });
//     if (!response.ok) {
//       throw new Error("Failed to create doctor");
//     }
//     return await response.json();
//   };
  
//   export const updateDoctor = async (id: number, doctor: any) => {
//     const response = await fetch(`${API_URL}/${id}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(doctor),
//     });
//     if (!response.ok) {
//       throw new Error("Failed to update doctor");
//     }
//     return await response.json();
//   };
  
//   export const deleteDoctor = async (id: number) => {
//     const response = await fetch(`${API_URL}/${id}`, {
//       method: "DELETE",
//     });
//     if (!response.ok) {
//       throw new Error("Failed to delete doctor");
//     }
//     return await response.json();
//   };
  

const API_URL = "http://localhost:5000/doctors";

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
