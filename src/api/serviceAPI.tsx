//import { Service } from "../store/types/";


const API_URL = "http://localhost:5000/services";

interface Service {
  id: number;
  name: string;
  topimage?: string;
  description_de?: string;
  description_en?: string;
  description_ru?: string;
}

const handleFetchError = (response: Response) => {
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
};

export const getServices = async (): Promise<Service[]> => {
  try {
    const response = await fetch(API_URL);
    handleFetchError(response);
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch services:", error);
    throw error;
  }
};

export const getServiceById = async (id: number): Promise<Service> => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    handleFetchError(response);
    return await response.json();
  } catch (error) {
    console.error(`Failed to fetch service with ID ${id}:`, error);
    throw error;
  }
};

export const createService = async (service: Partial<Service>): Promise<Service> => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(service),
    });
    handleFetchError(response);
    return await response.json();
  } catch (error) {
    console.error("Failed to create service:", error);
    throw error;
  }
};

export const updateService = async (
  id: number,
  service: Partial<Service>
): Promise<Service> => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(service),
    });
    handleFetchError(response);
    return await response.json();
  } catch (error) {
    console.error(`Failed to update service with ID ${id}:`, error);
    throw error;
  }
};

export const deleteService = async (id: number): Promise<void> => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    handleFetchError(response);
  } catch (error) {
    console.error(`Failed to delete service with ID ${id}:`, error);
    throw error;
  }
};

