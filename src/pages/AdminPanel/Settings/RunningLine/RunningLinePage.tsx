import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Notification from "../../../../components/Notification/Notification";
import "./RunningLinePage.css";

const RunningLinePage: React.FC = () => {
  const { t } = useTranslation();
  const [runningText, setRunningText] = useState("");
  const [notification, setNotification] = useState<{
    message: string;
    type: "error" | "success";
  } | null>(null);

  useEffect(() => {
    const savedText = localStorage.getItem("runningLineText");
    if (savedText) {
      setRunningText(savedText);
    }
  }, []);

  const handleSave = () => {
    try {
      localStorage.setItem("runningLineText", runningText);
      setNotification({
        message: t("message.adminPanel.appointments.settings.admin.settingsPage.runningLine.successMessage"),
        type: "success",
      });
    } catch (error) {
      console.error("Ошибка при сохранении в localStorage:", error);
      setNotification({
        message: t("message.adminPanel.appointments.settings.admin.settingsPage.runningLine.errorMessage"),
        type: "error",
      });
    }
  };

  return (
    <div className="running-line-page-container">
      <h2 className="title">{t("message.adminPanel.appointments.settings.admin.settingsPage.runningLine.title")}</h2>
      <textarea
        className="text-area"
        value={runningText}
        onChange={(e) => setRunningText(e.target.value)}
        placeholder={t("message.adminPanel.appointments.settings.admin.settingsPage.runningLine.placeholder")}
      />
      <div className="save-button-container">
        <button className="save-button" onClick={handleSave}>
          {t("message.adminPanel.appointments.settings.admin.settingsPage.runningLine.saveButton")}
        </button>
      </div>
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
    </div>
  );
};

export default RunningLinePage;