import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Notification from "../../../../components/Notification/Notification";
import {
  FormContainer,
  Label,
  Input,
  SubmitButton,
  Wrapper,
} from "./styles";
import { createAdmin } from "../../../../api/adminAPI";
import { AdminDto } from "../../../../store/types/adminTypes";

const AddAdminForm: React.FC = () => {
  const { t } = useTranslation();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState<{
    message: string;
    type: "error" | "success";
  } | null>(null);

  const handleSubmit = async () => {
    // Очистити попереднє повідомлення
    setNotification(null);

    if (!login.trim() || !password.trim()) {
      setNotification({
        message: t("message.adminPanel.appointments.settings.admin.create.fillRequiredFields"),
        type: "error",
      });
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      setNotification({
        message: t("message.adminPanel.appointments.settings.admin.create.noToken"),
        type: "error",
      });
      return;
    }

    const newAdmin: AdminDto = { login, password };

    try {
      await createAdmin(newAdmin, token);
      setNotification({
        message: t("message.adminPanel.appointments.settings.admin.create.successMessage"),
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
        message: cleanMessage || t("message.adminPanel.appointments.settings.admin.create.errorMessage"),
        type: "error",
      });
    }
  };

  return (
    <Wrapper>
      <FormContainer onSubmit={(e) => e.preventDefault()}>
        <Label>
          {t("message.adminPanel.appointments.settings.admin.create.loginLabel")}
          <Input
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            placeholder={t("message.adminPanel.appointments.settings.admin.create.loginPlaceholder")}
          />
        </Label>
        <Label>
          {t("message.adminPanel.appointments.settings.admin.create.passwordLabel")}
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={t("message.adminPanel.appointments.settings.admin.create.passwordPlaceholder")}
          />
        </Label>

        <SubmitButton type="button" onClick={handleSubmit}>
          {t("message.adminPanel.appointments.settings.admin.create.createAdminButton")}
        </SubmitButton>

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

export default AddAdminForm;
