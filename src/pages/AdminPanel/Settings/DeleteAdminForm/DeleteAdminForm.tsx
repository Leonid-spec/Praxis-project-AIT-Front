import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FormContainer, Input, DeleteButton } from "./styles";

const DeleteAdminForm = () => {
  const { t } = useTranslation();
  const [login, setLogin] = useState("");

  const handleDelete = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Deleting admin with login:", login);
    alert(t("message.adminPanel.appointments.settings.admin.delete.success", { login }));
    setLogin("");
  };

  return (
    <FormContainer onSubmit={handleDelete}>
      <Input
        type="text"
        placeholder={t("message.adminPanel.appointments.settings.admin.delete.placeholder")}
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        required
      />
      <DeleteButton type="submit">
        {t("message.adminPanel.appointments.settings.admin.delete.button")}
      </DeleteButton>
    </FormContainer>
  );
};

export default DeleteAdminForm;
