import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./WorkingModePage.css";

interface WorkingHours {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
}

  const [notification, setNotification] = useState<{
    message: string;
    type: "error" | "success";
  } | null>(null);


const WorkingModePage: React.FC = () => {
  const { t } = useTranslation();
  const [workingHours, setWorkingHours] = useState<WorkingHours>({
    monday: "",
    tuesday: "",
    wednesday: "",
    thursday: "",
    friday: "",
  });

  useEffect(() => {
    const savedHours = localStorage.getItem("workingHours");
    if (savedHours) {
      setWorkingHours(JSON.parse(savedHours));
    }
  }, []);

  const handleInputChange = (day: keyof WorkingHours, value: string) => {
    setWorkingHours((prev) => ({ ...prev, [day]: value }));
  };

  const handleSave = () => {
    const allFieldsFilled = Object.values(workingHours).every((time) => time.trim() !== "");

    if (!allFieldsFilled) {
      setNotification({
        message: t(
          "message.adminPanel.appointments.settings.admin.settingsPage.workingMode.errorMessage"
        ),
        type: "success",
      });
      // alert(t("message.adminPanel.appointments.settings.admin.settingsPage.workingMode.errorMessage"));
      return;
    }

    try {
      localStorage.setItem("workingHours", JSON.stringify(workingHours));
      setNotification({
        message: t("message.adminPanel.appointments.settings.admin.settingsPage.workingMode.successMessage"),
        type: "success",
      });
      // alert(t("message.adminPanel.appointments.settings.admin.settingsPage.workingMode.successMessage"));
    } catch (error) {
      setNotification({
        message: t("Ошибка при сохранении данных в localStorage:"),
        type: "error",
      });
    }
  };

  return (
    <div className="working-mode-page-container">
      <h2 className="title">{t("message.adminPanel.appointments.settings.admin.settingsPage.workingMode.title")}</h2>
      <div className="working-mode-form">
        {Object.keys(workingHours).map((day) => (
          <div key={day} className="day-input">
            <label className="label">
              {t(`message.adminPanel.appointments.settings.admin.settingsPage.workingMode.days.${day}`)}:
            </label>
            <input
              className="input"
              type="text"
              value={workingHours[day as keyof WorkingHours]}
              onChange={(e) => handleInputChange(day as keyof WorkingHours, e.target.value)}
              placeholder={t("message.adminPanel.appointments.settings.admin.settingsPage.workingMode.placeholder")}
            />
          </div>
        ))}
      </div>
      <div className="save-button-container">
        <button className="save-button" onClick={handleSave}>
          {t("message.adminPanel.appointments.settings.admin.settingsPage.workingMode.saveButton")}
        </button>
      </div>
    </div>
  );
};

export default WorkingModePage;