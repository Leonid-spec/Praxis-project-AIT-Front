import React, { useState } from "react";
import "./../Styles/GlobalStyles.css";

interface AddAdminFormProps {
  onBack: () => void;
}

const AddAdminForm: React.FC<AddAdminFormProps> = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [adminRights, setAdminRights] = useState(false);

  const handleSubmit = async () => {
    const response = await fetch("/api/admins", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ login, password, adminRights }),
    });

    const result = await response.json();
    alert(result.message);
  };

  return (
    <div className="content-container">
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Login:
          <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <label>
          Admin Rights:
          <input
            type="checkbox"
            checked={adminRights}
            onChange={(e) => setAdminRights(e.target.checked)}
          />
        </label>
        <button type="button" onClick={handleSubmit}>Create Admin</button>
      </form>
    </div>
  );
};

export default AddAdminForm;
