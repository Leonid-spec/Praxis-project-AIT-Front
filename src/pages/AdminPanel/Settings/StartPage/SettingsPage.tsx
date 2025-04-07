import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import AddAdminForm from "../AddAdmin/AddAdminForm";
import ChangePasswordForm from "../ChangePassword/ChangePasswordForm";
import AdminList from "../AdminList/AdminList";
import DeleteAdminForm from "../DeleteAdminForm/DeleteAdminForm";

import {
  ContentContainer,
  Section,
  ButtonGroup,
  StyledButton,
} from "./styles";

// Интерфейс пропсов для передачи логина администратора
interface SettingsPageProps {
  adminLogin: string; // Логин администратора
}

const SettingsPage: React.FC<SettingsPageProps> = ({ adminLogin }) => { // Получаем adminLogin через пропсы
  const { t } = useTranslation();

  // Состояние для отслеживания активной секции
  const [activeSection, setActiveSection] = useState<
    "createAdmin" | "changePassword" | "viewAdmins" | "deleteAdmin" | null
  >(null);

  return (
    <ContentContainer>
      {/* Заголовок страницы */}
      <h1 style={{ textAlign: "center" }}>
        {t("message.adminPanel.appointments.settings.admin.settingsPage.title")}
      </h1>

      {/* Контейнер с текстом на разных языках */}
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        {/* Приветствие */}
        <p>{t("message.adminPanel.appointments.settings.admin.settingsPage.greeting")}</p>

        {/* Имя администратора */}
        <p>
          {t("message.adminPanel.appointments.settings.admin.settingsPage.loggedInAs")}{" "}
          <strong>{adminLogin}</strong> {/* Имя администратора отображается в тексте */}
        </p>

        {/* Текст возможностей */}
        <p>{t("message.adminPanel.appointments.settings.admin.settingsPage.capabilities")}</p>
      </div>

      {/* Группа кнопок */}
      <ButtonGroup>
        <StyledButton onClick={() => setActiveSection("createAdmin")}>
          {t("message.adminPanel.appointments.settings.admin.settingsPage.buttons.create")}
        </StyledButton>
        <StyledButton onClick={() => setActiveSection("changePassword")}>
          {t("message.adminPanel.appointments.settings.admin.settingsPage.buttons.changePassword")}
        </StyledButton>
        <StyledButton onClick={() => setActiveSection("viewAdmins")}>
          {t("message.adminPanel.appointments.settings.admin.settingsPage.buttons.viewAll")}
        </StyledButton>
        <StyledButton onClick={() => setActiveSection("deleteAdmin")}>
          {t("message.adminPanel.appointments.settings.admin.settingsPage.buttons.delete")}
        </StyledButton>
      </ButtonGroup>

      {/* Секции с контентом */}
      <Section>
        {activeSection === "createAdmin" && (
          <>
            <h2>{t("message.adminPanel.appointments.settings.admin.settingsPage.sections.create")}</h2>
            <AddAdminForm />
          </>
        )}

        {activeSection === "changePassword" && (
          <>
            <h2>{t("message.adminPanel.appointments.settings.admin.settingsPage.sections.changePassword")}</h2>
            <ChangePasswordForm />
          </>
        )}

        {activeSection === "viewAdmins" && (
          <>
            <h2>{t("message.adminPanel.appointments.settings.admin.settingsPage.sections.viewAll")}</h2>
            <AdminList />
          </>
        )}

        {activeSection === "deleteAdmin" && (
          <>
            <h2>{t("message.adminPanel.appointments.settings.admin.settingsPage.sections.delete")}</h2>
            <DeleteAdminForm />
          </>
        )}
      </Section>
    </ContentContainer>
  );
};

export default SettingsPage;
