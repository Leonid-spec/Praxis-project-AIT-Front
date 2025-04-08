import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Notification from "../../../../components/Notification/Notification";
import { deleteAdmin } from "../../../../api/adminAPI";
import { AdminDto } from "../../../../store/types/adminTypes";
import { FormContainer, Input, DeleteButton, Wrapper } from "./styles";

const DeleteAdminForm: React.FC = () => {
  const { t } = useTranslation();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState<{
    message: string;
    type: "error" | "success";
  } | null>(null);

  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();
    setNotification(null);

    if (!login.trim() || !password.trim()) {
      setNotification({
        message: t("message.adminPanel.appointments.settings.admin.delete.fillRequired"),
        type: "error",
      });
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      setNotification({
        message: t("message.adminPanel.appointments.settings.admin.delete.noToken"),
        type: "error",
      });
      return;
    }

    const adminToDelete: AdminDto = { login, password }; 

    try {
      await deleteAdmin(adminToDelete, token);
      setNotification({
        message: t("message.adminPanel.appointments.settings.admin.delete.success", { login }),
        type: "success",
      });
      setLogin("");
      setPassword(""); 
    } catch (err: any) {
      let cleanMessage = err.message;

      const detailsIndex = cleanMessage.indexOf("Details:");
      if (detailsIndex !== -1) {
        cleanMessage = cleanMessage.slice(detailsIndex + 8).trim();
        if (cleanMessage.startsWith("Invalid request:")) {
          cleanMessage = cleanMessage.replace("Invalid request:", "").trim();
        }
      }

      setNotification({
        message: cleanMessage || t("message.adminPanel.appointments.settings.admin.delete.error"),
        type: "error",
      });
    }
  };

  return (
    <>
      <Wrapper>
        <FormContainer onSubmit={handleDelete}>
          <Input
            type="text"
            placeholder={t("message.adminPanel.appointments.settings.admin.delete.loginPlaceholder")}
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder={t("message.adminPanel.appointments.settings.admin.delete.passwordPlaceholder")}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <DeleteButton type="submit">
            {t("message.adminPanel.appointments.settings.admin.delete.button")}
          </DeleteButton>
          {notification && (
            <Notification
              message={notification.message}
              type={notification.type}
              onClose={() => setNotification(null)}
            />
          )}
        </FormContainer>
      </Wrapper>
    </>
  );
};

export default DeleteAdminForm;
