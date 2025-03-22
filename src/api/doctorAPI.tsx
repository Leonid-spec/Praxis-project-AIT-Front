const API_URL = "http://localhost:5000/doctors"; 

export const getDoctors = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch doctors");
    }
    return await response.json();
  };

  export const getDoctorById = async (id: number) => {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
      throw new Error("Doctor not found");
    }
    return await response.json();
  };
  
  export const createDoctor = async (doctor: any) => {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(doctor),
    });
    if (!response.ok) {
      throw new Error("Failed to create doctor");
    }
    return await response.json();
  };
  
  export const updateDoctor = async (id: number, doctor: any) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(doctor),
    });
    if (!response.ok) {
      throw new Error("Failed to update doctor");
    }
    return await response.json();
  };
  
  export const deleteDoctor = async (id: number) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete doctor");
    }
    return await response.json();
  };
  