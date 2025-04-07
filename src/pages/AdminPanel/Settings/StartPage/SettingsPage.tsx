import React, { useState } from "react";
import AddAdminForm from "../AddAdmin/AddAdminForm";
import ChangePasswordForm from "../ChangePassword/ChangePasswordForm";
import "./../Styles/GlobalStyles.css";

const SettingsPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<null | "createAdmin" | "changePassword">(null);

  const handleButtonClick = (section: "createAdmin" | "changePassword") => {
    setActiveSection(section);
  };

  return (
    <div className="content-container">
      {activeSection && (
        <button className="back-btn" onClick={() => setActiveSection(null)}>
          ← Back
        </button>
      )}

      {!activeSection && (
        <>
          <h1>Settings</h1>
          <div className="buttons">
            <button onClick={() => handleButtonClick("createAdmin")}>Create New Admin</button>
            <button onClick={() => handleButtonClick("changePassword")}>Change Password</button>
          </div>
        </>
      )}

      {activeSection === "createAdmin" && (
        <div className="section">
          <h2>Create New Admin</h2>
          <AddAdminForm onBack={() => setActiveSection(null)} />
        </div>
      )}

      {activeSection === "changePassword" && (
        <div className="section">
          <h2>Change Password</h2>
          <ChangePasswordForm onBack={() => setActiveSection(null)} />
        </div>
      )}
    </div>
  );
};

export default SettingsPage;
