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
  HighlightedSpan,
  WelcomeTextBox,
  MainFunctionsText,
  MainWelcomeText,
  SectionTitle,
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

 const parseSubtitle = (text: string) => {
    return text
      .split(/<HighlightedSpan>|<\/HighlightedSpan>/)
      .map((part, index) =>
        index % 2 === 1 ? (
          <HighlightedSpan key={index}>{part}</HighlightedSpan>
        ) : (
          part
        )
      );
  };

  return (
    <ContentContainer>
      {/* Заголовок страницы */}
      {/* <h1 style={{ textAlign: "center" }}>
        {t("message.adminPanel.appointments.settings.admin.settingsPage.title")}
      </h1> */}

      {/* Контейнер с текстом на разных языках */}
      <WelcomeTextBox>
        {/* Приветствие */}
        <MainWelcomeText>{parseSubtitle(t("message.adminPanel.appointments.settings.admin.settingsPage.greeting"))}</MainWelcomeText>

        {/* Текст возможностей */}
        <MainFunctionsText>{t("message.adminPanel.appointments.settings.admin.settingsPage.capabilities")}</MainFunctionsText>
      </WelcomeTextBox>

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
            <SectionTitle>{t("message.adminPanel.appointments.settings.admin.settingsPage.sections.create")}</SectionTitle>
            <AddAdminForm />
          </>
        )}

        {activeSection === "changePassword" && (
          <>
            <SectionTitle>{t("message.adminPanel.appointments.settings.admin.settingsPage.sections.changePassword")}</SectionTitle>
            <ChangePasswordForm />
          </>
        )}

        {activeSection === "viewAdmins" && (
          <>
            <SectionTitle>{t("message.adminPanel.appointments.settings.admin.settingsPage.sections.viewAll")}</SectionTitle>
            <AdminList />
          </>
        )}

        {activeSection === "deleteAdmin" && (
          <>
            <SectionTitle>{t("message.adminPanel.appointments.settings.admin.settingsPage.sections.delete")}</SectionTitle>
            <DeleteAdminForm />
          </>
        )}
      </Section>
    </ContentContainer>
  );
};

export default SettingsPage;
