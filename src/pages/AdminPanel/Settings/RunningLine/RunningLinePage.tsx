import React, { useState, useEffect } from "react";
import "./RunningLinePage.css";
import Notification from "../../../../components/Notification/Notification";

const RunningLinePage: React.FC = () => {
  const [runningText, setRunningText] = useState("");
  const [notification, setNotification] = useState<{
    message: string;
    type: "error" | "success";
  } | null>(null);

  // Загружаем текст из localStorage при первом рендере
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
        message: "Бегущая строка успешно сохранена!",
        type: "success",
      });
    } catch (error) {
      console.error("Ошибка при сохранении в localStorage:", error);
      setNotification({
        message: "Произошла ошибка при сохранении. Попробуйте снова.",
        type: "error",
      });
    }
  };

  return (
    <div className="running-line-page-container">
      <h2 className="title">Настройка бегущей строки</h2>
      <textarea
        className="text-area"
        value={runningText}
        onChange={(e) => setRunningText(e.target.value)}
        placeholder="Введите текст для бегущей строки..."
      />
      <div className="save-button-container">
        <button className="save-button" onClick={handleSave}>
          Сохранить
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
