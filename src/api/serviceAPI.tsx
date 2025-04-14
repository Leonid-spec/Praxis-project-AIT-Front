import {ServiceData} from "../store/types/serviceTypes";

const API_URL = "/api";

const handleFetchError = async (response: Response) => {
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`HTTP error! Status: ${response.status}, Details: ${errorText}`);
  }
  return response.json();
};

export const getActiveServices = async (): Promise<ServiceData[]> => {
  try {
    const response = await fetch(`${API_URL}/services/active`);
    return await handleFetchError(response);
  } catch (error) {
    console.error("Failed to fetch active services:", error);
    throw error;
  }
};

export const getServices = async (token: string): Promise<ServiceData[]> => {
  try {
    const response = await fetch(`${API_URL}/services`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch services:", error);
    throw error;
  }
};

export const getServiceById = async (id: number, token: string): Promise<ServiceData> => {
  try {
    const response = await fetch(`${API_URL}/service/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return await response.json();
  } catch (error) {
    console.error(`Failed to fetch service with ID ${id}:`, error);
    throw error;
  }
};

export const createService = async (service: Partial<ServiceData>, token: string): Promise<ServiceData> => {
  try {
    const response = await fetch(`${API_URL}/service`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(service),
    });
    return await handleFetchError(response);
  } catch (error) {
    console.error("Failed to create service:", error);
    throw error;
  }
};

export const updateService = async (
service: Partial<ServiceData>, token: string): Promise<ServiceData> => {
  try {
    const response = await fetch(`${API_URL}/service`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, 
      },
      body: JSON.stringify(service),
    });
    return await handleFetchError(response);
  } catch (error) {
    console.error(`Failed to update service:`, error);
    throw error;
  }
};


// export const deleteService = async (id: number, token: string): Promise<void> => {
//   try {
//     const response = await fetch(`${API_URL}/services/${id}`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`, 
//       },
//     });
//     await handleFetchError(response);
//   } catch (error) {
//     console.error(`Failed to delete service with ID ${id}:`, error);
//     throw error;
//   }
// };

