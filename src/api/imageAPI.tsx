const API_URL = "/api";

const handleFetchError = async (response: Response) => {
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`HTTP error! Status: ${response.status}, Details: ${errorText}`);
  }
  return response.json();
};

export const addImage = async (
  file: File,
  dentalServiceId: number,
  doctorId: number,
  token: string
) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("dentalServiceId", dentalServiceId.toString());
  formData.append("doctorId", doctorId.toString());

  const response = await fetch(`${API_URL}/image`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  return await handleFetchError(response);
};

export const getImageById = async (id: number, token: string) => {
  const response = await fetch(`${API_URL}/image/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await handleFetchError(response);
};

export const updateImage = async (
  file: File,
  image_id: number,
  token: string
) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("image_id", image_id.toString());

  const response = await fetch(`${API_URL}/image`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  return await handleFetchError(response);
};

export const deleteImage = async (id: number, token: string) => {
  const response = await fetch(`${API_URL}/image/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await handleFetchError(response);
};

export const pushImageToCloudinary = async (file: File, token: string) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(`${API_URL}/image/file`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  return await handleFetchError(response);
};

export const deleteCloudinaryImage = async (link: string, token: string) => {
  const response = await fetch(`${API_URL}/image/file`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(link),
  });

  return await handleFetchError(response);
};

export const getImageFile = async (filename: string, token: string) => {
  const response = await fetch(`${API_URL}/image/file/${filename}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch image file: ${response.statusText}`);
  }

  return await response.blob();
};
