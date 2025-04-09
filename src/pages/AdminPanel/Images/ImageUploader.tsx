import React, { useState } from "react";
import { pushImageFile } from "../../../api/imageAPI";
const ImageUploader = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const getToken = (): string | null => {
    return localStorage.getItem("token"); 
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
      setError(null);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setError("Виберіть файл для завантаження.");
      return;
    }

    const token = getToken();

    if (!token) {
      setError("Токен не знайдено. Будь ласка, увійдіть у систему.");
      return;
    }

    try {
      const uploadedUrl = await pushImageFile(selectedFile, token);
      setUploadedImageUrl(uploadedUrl);
      setError(null);
    } catch (err: any) {
      setError(err.message || "Помилка при завантаженні зображення.");
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Завантаження зображення</h2>
      <input
        type="file"
        onChange={handleFileChange}
        accept="image/*"
        style={{ margin: "10px 0" }}
      />
      <button onClick={handleUpload} style={{ margin: "10px 0" }}>
        Завантажити
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {uploadedImageUrl && (
        <div>
          <h3>Результат:</h3>
          <img src={uploadedImageUrl} alt="Завантажене зображення" style={{ maxWidth: "100%", height: "auto" }} />
          <p>
            Посилання:{" "}
            <a href={uploadedImageUrl} target="_blank" rel="noopener noreferrer">
              {uploadedImageUrl}
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
