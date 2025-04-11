import { AdminDto, TokenResponseDto, ChangePasswordDto } from "../store/types/adminTypes";

const API_URL = "http://localhost:8100/api";

const handleFetchError = async (response: Response) => {
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`HTTP error! Status: ${response.status}, Details: ${errorText}`);
  }
  return response.json();
};

// ===== Auth =====

export const login = async (adminDto: AdminDto): Promise<TokenResponseDto> => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(adminDto),
    });
    return await handleFetchError(response);
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};

export const refreshToken = async (refreshToken: string): Promise<TokenResponseDto> => {
  try {
    const response = await fetch(`${API_URL}/refresh`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken }),
    });
    return await handleFetchError(response);
  } catch (error) {
    console.error("Failed to refresh token:", error);
    throw error;
  }
};

// ===== Admins =====

export const getAllAdmins = async (token: string): Promise<AdminDto[]> => {
  try {
    const response = await fetch(`${API_URL}/admins`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return await handleFetchError(response);
    
  } catch (error) {
    console.error("Failed to fetch admins:", error);
    throw error;
  }
};

export const createAdmin = async (adminDto: AdminDto, token: string): Promise<AdminDto> => {
  try {
    const response = await fetch(`${API_URL}/admin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(adminDto),
    });
    console.log("Add admins: ", response)

    return await handleFetchError(response);
  } catch (error) {
    console.error("Failed to create admin:", error);
    throw error;
  }
};

export const deleteAdmin = async (adminDto: AdminDto, token: string): Promise<AdminDto> => {
  try {
    const response = await fetch(`${API_URL}/admin`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(adminDto),
    });
    return await handleFetchError(response);
  } catch (error) {
    console.error("Failed to delete admin:", error);
    throw error;
  }
};

export const changePassword = async (dto: ChangePasswordDto, token: string): Promise<string> => {
  try {
    const response = await fetch(`${API_URL}/mypassword`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(dto),
    });
    const text = await response.text(); 
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}, Details: ${text}`);
    }
    return text;
  } catch (error) {
    console.error("Failed to change password:", error);
    throw error;
  }
};
