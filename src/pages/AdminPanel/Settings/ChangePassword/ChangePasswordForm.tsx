import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Notification from "../../../../components/Notification/Notification";
import { changePassword } from "../../../../api/adminAPI"; 
import { FormContainer, Label, Input, SubmitButton, Wrapper } from "./styles";
import { ChangePasswordDto } from "../../../../store/types/adminTypes";

const ChangePasswordForm: React.FC = () => {
  const { t } = useTranslation();

  const [login, setLogin] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [notification, setNotification] = useState<{
    message: string;
    type: "error" | "success";
  } | null>(null);

  const handleSubmit = async () => {
    setNotification(null);  

    if (!login.trim() || !currentPassword.trim() || !newPassword.trim()) {
      setNotification({
        message: t("message.adminPanel.appointments.settings.admin.change.fillRequiredFields"),
        type: "error",
      });
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      setNotification({
        message: t("message.adminPanel.appointments.settings.admin.change.noToken"),
        type: "error",
      });
      return;
    }

    const dto: ChangePasswordDto = { login, oldPassword: currentPassword, newPassword };

    try {
      const response = await changePassword(dto, token); 
      setNotification({
        message: t("message.adminPanel.appointments.settings.admin.change.successMessage"),
        type: "success",
      });
      setLogin("");
      setCurrentPassword("");
      setNewPassword("");
    } catch (err: any) {
      let cleanMessage = err.message || t("message.adminPanel.appointments.settings.admin.change.errorMessage");
      setNotification({
        message: cleanMessage,
        type: "error",
      });
    }
  };

  return (
    <>
      <Wrapper>
        <FormContainer onSubmit={(e) => e.preventDefault()}>
          <Label>
            {t("message.adminPanel.appointments.settings.admin.change.loginLabel")}
            <Input
              type="text"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              placeholder={t("message.adminPanel.appointments.settings.admin.change.loginPlaceholder")}
            />
          </Label>
          <Label>
            {t("message.adminPanel.appointments.settings.admin.change.currentPasswordLabel")}
            <Input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder={t("message.adminPanel.appointments.settings.admin.change.currentPasswordPlaceholder")}
            />
          </Label>
          <Label>
            {t("message.adminPanel.appointments.settings.admin.change.newPasswordLabel")}
            <Input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder={t("message.adminPanel.appointments.settings.admin.change.newPasswordPlaceholder")}
            />
          </Label>
          <SubmitButton type="button" onClick={handleSubmit}>
            {t("message.adminPanel.appointments.settings.admin.change.submitButton")}
          </SubmitButton>
        </FormContainer>
      </Wrapper>

      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
    </>
  );
};

export default ChangePasswordForm;
