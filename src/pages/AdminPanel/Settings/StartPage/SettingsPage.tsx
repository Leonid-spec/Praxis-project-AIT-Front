import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import AddAdminForm from "../AddAdmin/AddAdminForm";
import ChangePasswordForm from "../ChangePassword/ChangePasswordForm";
import AdminList from "../AdminList/AdminList";
import DeleteAdminForm from "../DeleteAdminForm/DeleteAdminForm";

import {
  ContentContainer,
  Section,
  BackButton,
  ButtonGroup,
  StyledButton,
} from "./styles";

const SettingsPage: React.FC = () => {
  const { t } = useTranslation();

  const [activeSection, setActiveSection] = useState<
    null | "createAdmin" | "changePassword" | "viewAdmins" | "deleteAdmin"
  >(null);

  const handleButtonClick = (
    section: "createAdmin" | "changePassword" | "viewAdmins" | "deleteAdmin"
  ) => {
    setActiveSection(section);
  };

  return (
    <ContentContainer>
      {activeSection && (
        <BackButton onClick={() => setActiveSection(null)}>
          ← {t("message.adminPanel.appointments.settings.admin.settingsPage.back")}
        </BackButton>
      )}

      {!activeSection && (
        <>
          <h1>{t("message.adminPanel.appointments.settings.admin.settingsPage.title")}</h1>
          <ButtonGroup>
            <StyledButton onClick={() => handleButtonClick("createAdmin")}>
              {t("message.adminPanel.appointments.settings.admin.settingsPage.buttons.create")}
            </StyledButton>
            <StyledButton onClick={() => handleButtonClick("changePassword")}>
              {t("message.adminPanel.appointments.settings.admin.settingsPage.buttons.changePassword")}
            </StyledButton>
            <StyledButton onClick={() => handleButtonClick("viewAdmins")}>
              {t("message.adminPanel.appointments.settings.admin.settingsPage.buttons.viewAll")}
            </StyledButton>
            <StyledButton onClick={() => handleButtonClick("deleteAdmin")}>
              {t("message.adminPanel.appointments.settings.admin.settingsPage.buttons.delete")}
            </StyledButton>
          </ButtonGroup>
        </>
      )}

      {activeSection === "createAdmin" && (
        <Section>
          <h2>{t("message.adminPanel.appointments.settings.admin.settingsPage.sections.create")}</h2>
          <AddAdminForm onBack={() => setActiveSection(null)} />
        </Section>
      )}

      {activeSection === "changePassword" && (
        <Section>
          <h2>{t("message.adminPanel.appointments.settings.admin.settingsPage.sections.changePassword")}</h2>
          <ChangePasswordForm onBack={() => setActiveSection(null)} />
        </Section>
      )}

      {activeSection === "viewAdmins" && (
        <Section>
          <h2>{t("message.adminPanel.appointments.settings.admin.settingsPage.sections.viewAll")}</h2>
          <AdminList />
        </Section>
      )}

      {activeSection === "deleteAdmin" && (
        <Section>
          <h2>{t("message.adminPanel.appointments.settings.admin.settingsPage.sections.delete")}</h2>
          <DeleteAdminForm />
        </Section>
      )}
    </ContentContainer>
  );
};

export default SettingsPage;
