import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FormContainer,
  Label,
  Input,
  Checkbox,
  SubmitButton,
  Wrapper,
} from "./styles";

interface AddAdminFormProps {
  onBack: () => void;
}

const AddAdminForm: React.FC<AddAdminFormProps> = () => {
  const { t } = useTranslation(); // Получаем функцию t для перевода
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
    <Wrapper>
      <FormContainer onSubmit={(e) => e.preventDefault()}>
        <Label>
          {t('message.adminPanel.appointments.settings.admin.create.loginLabel')}
          <Input
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            placeholder={t('message.adminPanel.appointments.settings.admin.create.loginPlaceholder')}
          />
        </Label>
        <Label>
          {t('message.adminPanel.appointments.settings.admin.create.passwordLabel')}
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={t('message.adminPanel.appointments.settings.admin.create.passwordPlaceholder')}
          />
        </Label>
        {/* <Label>
          <Checkbox
            type="checkbox"
            checked={adminRights}
            onChange={(e) => setAdminRights(e.target.checked)}
          />
          {t('message.adminPanel.settings.admin.create.grantAdminRights')}
        </Label> */}
        <SubmitButton type="button" onClick={handleSubmit}>
          {t('message.adminPanel.appointments.settings.admin.create.createAdminButton')}
        </SubmitButton>
      </FormContainer>
    </Wrapper>
  );
};

export default AddAdminForm;
