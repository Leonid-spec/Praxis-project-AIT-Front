import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./AddressPage.css";

const AddressPage: React.FC = () => {
  const { t } = useTranslation();
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
    setNotification(null);

    try {
      localStorage.setItem("address", JSON.stringify(address));
      setNotification({
        message: t("message.adminPanel.appointments.settings.admin.settingsPage.address.successMessage"),
        type: "success",
      });
    } catch (error) {
      console.error("Ошибка при сохранении данных в localStorage:", error);
      setNotification({
        message: t("message.adminPanel.appointments.settings.admin.settingsPage.address.errorMessage"),
        type: "error",
      });
    }
  };

  return (
    <div className="address-page-container">
      <h2 className="title">{t("message.adminPanel.appointments.settings.admin.settingsPage.address.title")}</h2>
      <div className="address-form">
        <div className="field-input">
          <label className="label">{t("message.adminPanel.appointments.settings.admin.settingsPage.address.street")}</label>
          <input
            className="input"
            type="text"
            value={address.street}
            onChange={(e) => handleInputChange("street", e.target.value)}
            placeholder={t("message.adminPanel.appointments.settings.admin.settingsPage.address.placeholder.street")}
          />
        </div>
        <div className="field-input">
          <label className="label">{t("message.adminPanel.appointments.settings.admin.settingsPage.address.city")}</label>
          <input
            className="input"
            type="text"
            value={address.city}
            onChange={(e) => handleInputChange("city", e.target.value)}
            placeholder={t("message.adminPanel.appointments.settings.admin.settingsPage.address.placeholder.city")}
          />
        </div>
        <div className="field-input">
          <label className="label">{t("message.adminPanel.appointments.settings.admin.settingsPage.address.zipCode")}</label>
          <input
            className="input"
            type="text"
            value={address.zipCode}
            onChange={(e) => handleInputChange("zipCode", e.target.value)}
            placeholder={t("message.adminPanel.appointments.settings.admin.settingsPage.address.placeholder.zipCode")}
          />
        </div>
        <div className="field-input">
          <label className="label">{t("message.adminPanel.appointments.settings.admin.settingsPage.address.gps")}</label>
          <input
            className="input"
            type="text"
            value={address.gps}
            onChange={(e) => handleInputChange("gps", e.target.value)}
            placeholder={t("message.adminPanel.appointments.settings.admin.settingsPage.address.placeholder.gps")}
          />
        </div>
        <div className="field-input">
          <label className="label">{t("message.adminPanel.appointments.settings.admin.settingsPage.address.phone")}</label>
          <input
            className="input"
            type="text"
            value={address.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            placeholder={t("message.adminPanel.appointments.settings.admin.settingsPage.address.placeholder.phone")}
          />
        </div>
        <div className="field-input">
          <label className="label">{t("message.adminPanel.appointments.settings.admin.settingsPage.address.email")}</label>
          <input
            className="input"
            type="email"
            value={address.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            placeholder={t("message.adminPanel.appointments.settings.admin.settingsPage.address.placeholder.email")}
          />
        </div>
      </div>
      <div className="save-button-container">
        <button className="save-button" onClick={handleSave}>
          {t("message.adminPanel.appointments.settings.admin.settingsPage.address.saveButton")}
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