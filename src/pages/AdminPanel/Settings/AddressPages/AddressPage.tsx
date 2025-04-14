import React, { useState, useEffect } from "react";
import "./AddressPage.css";

const AddressPage: React.FC = () => {
  const [address, setAddress] = useState({
    street: "",
    city: "",
    zipCode: "",
    gps: "",
    phone: "",
    email: "",
  });

  const [notification, setNotification] = useState<{
    message: string;
    type: "error" | "success";
  } | null>(null);

  useEffect(() => {
    const savedAddress = localStorage.getItem("address");
    if (savedAddress) {
      setAddress(JSON.parse(savedAddress));
    }
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setAddress((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    setNotification(null); // Очистить предыдущее уведомление

    try {
      localStorage.setItem("address", JSON.stringify(address));
      setNotification({
        message: "Адрес успешно сохранён!",
        type: "success",
      });
    } catch (error) {
      console.error("Ошибка при сохранении данных в localStorage:", error);
      setNotification({
        message: "Произошла ошибка при сохранении. Попробуйте снова.",
        type: "error",
      });
    }
  };

  return (
    <div className="address-page-container">
      <h2 className="title">Редактирование адреса</h2>
      <div className="address-form">
        <div className="field-input">
          <label className="label">Улица:</label>
          <input
            className="input"
            type="text"
            value={address.street}
            onChange={(e) => handleInputChange("street", e.target.value)}
            placeholder="Введите улицу..."
          />
        </div>
        <div className="field-input">
          <label className="label">Город:</label>
          <input
            className="input"
            type="text"
            value={address.city}
            onChange={(e) => handleInputChange("city", e.target.value)}
            placeholder="Введите город..."
          />
        </div>
        <div className="field-input">
          <label className="label">Индекс:</label>
          <input
            className="input"
            type="text"
            value={address.zipCode}
            onChange={(e) => handleInputChange("zipCode", e.target.value)}
            placeholder="Введите индекс..."
          />
        </div>
        <div className="field-input">
          <label className="label">GPS:</label>
          <input
            className="input"
            type="text"
            value={address.gps}
            onChange={(e) => handleInputChange("gps", e.target.value)}
            placeholder="Введите GPS-координаты..."
          />
        </div>
        <div className="field-input">
          <label className="label">Телефон:</label>
          <input
            className="input"
            type="text"
            value={address.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            placeholder="Введите телефон..."
          />
        </div>
        <div className="field-input">
          <label className="label">Email:</label>
          <input
            className="input"
            type="email"
            value={address.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            placeholder="Введите email..."
          />
        </div>
      </div>
      <div className="save-button-container">
        <button className="save-button" onClick={handleSave}>
          Сохранить
        </button>
      </div>
      {notification && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}
    </div>
  );
};

export default AddressPage;
