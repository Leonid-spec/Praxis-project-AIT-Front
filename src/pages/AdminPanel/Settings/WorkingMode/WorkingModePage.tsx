import React, { useState, useEffect } from "react";
import "./WorkingModePage.css";

const WorkingModePage: React.FC = () => {
  const [workingHours, setWorkingHours] = useState({
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

  const handleInputChange = (day: string, value: string) => {
    setWorkingHours((prev) => ({ ...prev, [day]: value }));
  };

  const handleSave = () => {
    localStorage.setItem("workingHours", JSON.stringify(workingHours));
    alert("Режим работы успешно сохранён!");
  };

  return (
    <div className="working-mode-page-container">
      <h2 className="title">Редактирование режима работы</h2>
      <div className="working-mode-form">
        {Object.keys(workingHours).map((day) => (
          <div key={day} className="day-input">
            <label className="label">
              {day.charAt(0).toUpperCase() + day.slice(1)}:
            </label>
            <input
              className="input"
              type="text"
              value={(workingHours as any)[day]}
              onChange={(e) => handleInputChange(day, e.target.value)}
              placeholder="Введите часы работы..."
            />
          </div>
        ))}
      </div>
      <button className="save-button" onClick={handleSave}>
        Сохранить
      </button>
    </div>
  );
};

export default WorkingModePage;
