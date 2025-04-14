import React, { useState } from "react";
import "./RunningLinePage.css";

const RunningLinePage: React.FC = () => {
  const [runningText, setRunningText] = useState("");

  const handleSave = () => {
    localStorage.setItem("runningLineText", runningText);
    alert("Бегущая строка успешно сохранена!");
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
      <button className="save-button" onClick={handleSave}>Сохранить</button>
    </div>
  );
};

export default RunningLinePage;
