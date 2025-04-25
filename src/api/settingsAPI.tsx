import { SettingsStringDto } from "../store/types/settingsTypes";

const API_URL = "/api";

const handleFetchError = async (response: Response) => {
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `HTTP error! Status: ${response.status}, Details: ${errorText}`
    );
  }
  return response.json();
};

export const getSettings = async (): Promise<SettingsStringDto> => {
  try {
    const response = await fetch(`${API_URL}/settings`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await handleFetchError(response);
  } catch (error) {
    console.error("Failed to fetch settings:", error);
    throw error;
  }
};

export const updateSettings = async (
  settings: Partial<SettingsStringDto>,
  token: string
): Promise<SettingsStringDto> => {
  try {
    const response = await fetch(`${API_URL}/settings`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(settings),
    });
    return await handleFetchError(response);
  } catch (error) {
    console.error("Failed to update settings:", error);
    throw error;
  }
};
