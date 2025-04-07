import React, { useState } from "react";
import { FormContainer, Input, DeleteButton } from "./styles";

const DeleteAdminForm = () => {
  const [login, setLogin] = useState("");

  const handleDelete = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Deleting admin with login:", login);
    alert(`Admin ${login} видалений (заглушка).`);
    setLogin("");
  };

  return (
    <FormContainer onSubmit={handleDelete}>
      <Input
        type="login"
        placeholder="Admin Login"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        required
      />
      <DeleteButton type="submit">Delete Admin</DeleteButton>
    </FormContainer>
  );
};

export default DeleteAdminForm;
