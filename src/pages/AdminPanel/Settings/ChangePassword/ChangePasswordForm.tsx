import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FormContainer,
  Label,
  Input,
  SubmitButton,
  Wrapper,
} from "./styles";

const ChangePasswordForm: React.FC<{ onBack: () => void }> = () => {
  const { t } = useTranslation();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async () => {
    if (newPassword !== confirmPassword) {
      alert(t("message.adminPanel.appointments.settings.admin.change.passwordsDoNotMatch"));
      return;
    }

    const response = await fetch("/api/change-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ currentPassword, newPassword }),
    });

    const result = await response.json();
    alert(result.message); // при необходимости — локализовать через ключ
  };

  return (
    <Wrapper>
      <FormContainer onSubmit={(e) => e.preventDefault()}>
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
        <Label>
          {t("message.adminPanel.appointments.settings.admin.change.confirmPasswordLabel")}
          <Input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder={t("message.adminPanel.appointments.settings.admin.change.confirmPasswordPlaceholder")}
          />
        </Label>
        <SubmitButton type="button" onClick={handleSubmit}>
          {t("message.adminPanel.appointments.settings.admin.change.submitButton")}
        </SubmitButton>
      </FormContainer>
    </Wrapper>
  );
};

export default ChangePasswordForm;
