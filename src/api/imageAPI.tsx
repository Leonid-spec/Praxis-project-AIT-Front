// const API_URL = "/api/image";

// const handleFetchError = async (response: Response) => {
//   if (!response.ok) {
//     const errorText = await response.text();
//     throw new Error(`HTTP error! Status: ${response.status}, Details: ${errorText}`);
//   }
//   return response.json();
// };

// export const addImage = async (file: File, dentalServiceId: number, doctorId: number, token: string): Promise<any> => {
//   try {
//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("dentalServiceId", dentalServiceId.toString());
//     formData.append("doctorId", doctorId.toString());

//     const response = await fetch(`${API_URL}`, {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//       body: formData,
//     });
//     return await handleFetchError(response);
//   } catch (error) {
//     console.error("Failed to add image:", error);
//     throw error;
//   }
// };

// export const updateImage = async (file: File, imageId: number, token: string): Promise<any> => {
//   try {
//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("image_id", imageId.toString());

//     const response = await fetch(`${API_URL}`, {
//       method: "PUT",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//       body: formData,
//     });
//     return await handleFetchError(response);
//   } catch (error) {
//     console.error("Failed to update image:", error);
//     throw error;
//   }
// };

// export const deleteImage = async (imageId: number, token: string): Promise<void> => {
//   try {
//     const response = await fetch(`${API_URL}/${imageId}`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     await handleFetchError(response);
//   } catch (error) {
//     console.error(`Failed to delete image with ID ${imageId}:`, error);
//     throw error;
//   }
// };

// export const findImageById = async (imageId: number, token: string): Promise<any> => {
//   try {
//     const response = await fetch(`${API_URL}/${imageId}`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     return await handleFetchError(response);
//   } catch (error) {
//     console.error(`Failed to fetch image with ID ${imageId}:`, error);
//     throw error;
//   }
// };

// export const pushImageFile = async (file: File, token: string): Promise<string> => {
//   try {
//     const formData = new FormData();
//     formData.append("file", file);

//     const response = await fetch(`${API_URL}/file`, {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//       body: formData,
//     });

//     if (!response.ok) {
//       const errorText = await response.text();
//       throw new Error(`HTTP error! Status: ${response.status}, Details: ${errorText}`);
//     }
//     return await response.text();
//   } catch (error) {
//     console.error("Failed to push image file:", error);
//     throw error;
//   }
// };

// export const deleteImageFile = async (link: string, token: string): Promise<void> => {
//   try {
//     const response = await fetch(`${API_URL}/file`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({ link }),
//     });

//     await handleFetchError(response);
//   } catch (error) {
//     console.error("Failed to delete image file:", error);
//     throw error;
//   }
// };

// export const getFile = async (filename: string, token: string): Promise<string> => {
//   try {
//     const response = await fetch(`${API_URL}/file/${filename}`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     if (!response.ok) {
//       const errorText = await response.text();
//       throw new Error(`HTTP error! Status: ${response.status}, Details: ${errorText}`);
//     }

//     const blob = await response.blob();
//     return URL.createObjectURL(blob);
//   } catch (error) {
//     console.error(`Failed to get file with filename ${filename}:`, error);
//     throw error;
//   }
// };

const handleFetchError = async (response: Response) => {
  if (!response.ok) {
    const contentType = response.headers.get("Content-Type");
    const isJson = contentType && contentType.includes("application/json");
    const errorText = isJson ? JSON.stringify(await response.json()) : await response.text();
    throw new Error(`HTTP error! Status: ${response.status}, Details: ${errorText}`);
  }
  return response;
};


const API_URL = "/api/image";

export const addImage = async (
  file: File,
  dentalServiceId: number,
  doctorId: number,
  token: string
): Promise<any> => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("dentalServiceId", dentalServiceId.toString());
  formData.append("doctorId", doctorId.toString());

  const response = await fetch(`${API_URL}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });
  return (await handleFetchError(response)).json();
};

export const updateImage = async (file: File, imageId: number, token: string) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(`http://localhost:5173/api/image/${imageId}`, {  // Додаємо imageId у URL
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData, 
  });

  if (!response.ok) {
    throw new Error("Failed to update image");
  }

  const updatedImage = await response.json();
  return updatedImage;
};

export const deleteImage = async (
  imageId: number,
  token: string
): Promise<void> => {
  const response = await fetch(`${API_URL}/${imageId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  await handleFetchError(response);
};

export const findImageById = async (
  imageId: number,
  token: string
): Promise<any> => {
  const response = await fetch(`${API_URL}/${imageId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return (await handleFetchError(response)).json();
};

export const pushImageFile = async (
  file: File,
  token: string
): Promise<string> => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(`${API_URL}/file`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });
  return (await handleFetchError(response)).text();
};

export const deleteImageFile = async (
  link: string,
  token: string
): Promise<void> => {
  const response = await fetch(`${API_URL}/file`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ link }),
  });
  await handleFetchError(response);
};

export const getFile = async (
  filename: string,
  token: string
): Promise<string> => {
  const response = await fetch(`${API_URL}/file/${filename}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const blob = await (await handleFetchError(response)).blob();
  return URL.createObjectURL(blob);
};
