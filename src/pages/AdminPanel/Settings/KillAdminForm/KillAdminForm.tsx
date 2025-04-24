import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Notification from "../../../../components/Notification/Notification";
import { killAdmin } from "../../../../api/adminAPI"; 
import { Wrapper, FormContainer, Input, DeleteButton } from "./styles";

const KillAdminForm: React.FC = () => {
  const { t } = useTranslation();
  const [login, setLogin] = useState("");
  const [notification, setNotification] = useState<{
    message: string;
    type: "error" | "success";
  } | null>(null);

  const handleKill = async (e: React.FormEvent) => {
    e.preventDefault();
    setNotification(null);

    if (!login.trim()) {
      setNotification({
        message: t("message.adminPanel.appointments.settings.admin.kill.fillRequired"),
        type: "error",
      });
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      setNotification({
        message: t("message.adminPanel.appointments.settings.admin.kill.noToken"),
        type: "error",
      });
      return;
    }

    try {
      await killAdmin(login, token);
      setNotification({
        message: t("message.adminPanel.appointments.settings.admin.kill.success", { login }),
        type: "success",
      });
      setLogin("");
    } catch (err: any) {
      let cleanMessage = err.message;
      const detailsIndex = cleanMessage.indexOf("Details:");
      if (detailsIndex !== -1) {
        cleanMessage = cleanMessage.slice(detailsIndex + 8).trim();
      }

      setNotification({
        message: cleanMessage || t("message.adminPanel.appointments.settings.admin.kill.error"),
        type: "error",
      });
    }
  };

  return (
    <Wrapper>
      <FormContainer onSubmit={handleKill}>
        <Input
          type="text"
          placeholder={t("message.adminPanel.appointments.settings.admin.kill.loginPlaceholder")}
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          required
        />
        <DeleteButton type="submit">
          {t("message.adminPanel.appointments.settings.admin.kill.button")}
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
  );
};

export default KillAdminForm;
