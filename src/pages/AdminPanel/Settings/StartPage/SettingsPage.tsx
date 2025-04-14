import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import AddAdminForm from "../AddAdmin/AddAdminForm";
import ChangePasswordForm from "../ChangePassword/ChangePasswordForm";
import AdminList from "../AdminList/AdminList";
import DeleteAdminForm from "../DeleteAdminForm/DeleteAdminForm";
import RunningLinePage from "../RunningLine/RunningLinePage";
import WorkingModePage from "../WorkingMode/WorkingModePage";
import AddressPage from "../AddressPages/AddressPage";

import {
  ContentContainer,
  Section,
  ButtonGroup,
  StyledButton,
  HighlightedSpan,
  WelcomeTextBox,
  MainWelcomeText,
  SectionTitle,
  MainFunctionsText,
  BodyLayout, // добавлен сюда
} from "./styles";

import { AdminDto } from "../../../../store/types/adminTypes";
import { getAllAdmins } from "../../../../api/adminAPI";

interface SettingsPageProps {
  adminLogin: string;
}

const SettingsPage: React.FC<SettingsPageProps> = () => {
  const { t } = useTranslation();
  const [admins, setAdmins] = useState<AdminDto[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<
    | "createAdmin"
    | "changePassword"
    | "viewAdmins"
    | "deleteAdmin"
    | "workingMode"
    | "address"
    | "runningLine"
    | null
  >(null);

  const token = localStorage.getItem("token");

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

  const fetchAdmins = async () => {
    try {
      if (!token) {
        setError(
          t("message.adminPanel.appointments.services.addServices.errorLoading")
        );
        return;
      }
      const data = await getAllAdmins(token);
      setAdmins(data);
    } catch (err: any) {
      setError(
        err.message ||
          t("message.adminPanel.appointments.services.addServices.errorLoading")
      );
    }
  };

  useEffect(() => {
    if (activeSection === "viewAdmins" || activeSection === "deleteAdmin") {
      fetchAdmins();
    }
  }, [activeSection]);

  return (
    <ContentContainer>
      <WelcomeTextBox>
        <MainWelcomeText>
          {parseSubtitle(
            t(
              "message.adminPanel.appointments.settings.admin.settingsPage.greeting"
            )
          )}
        </MainWelcomeText>
        <MainFunctionsText>
          {t(
            "message.adminPanel.appointments.settings.admin.settingsPage.capabilities"
          )}
        </MainFunctionsText>
      </WelcomeTextBox>

      <BodyLayout>
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
          <StyledButton onClick={() => setActiveSection("workingMode")}>
            {t("message.adminPanel.appointments.settings.admin.settingsPage.buttons.workingMode")}
          </StyledButton>
          <StyledButton onClick={() => setActiveSection("address")}>
            {t("message.adminPanel.appointments.settings.admin.settingsPage.buttons.address")}
          </StyledButton>
          <StyledButton onClick={() => setActiveSection("runningLine")}>
            {t("message.adminPanel.appointments.settings.admin.settingsPage.buttons.runningLine")}
          </StyledButton>
        </ButtonGroup>

        <Section>
          {activeSection === "createAdmin" && (
            <>
              <SectionTitle>
                {t("message.adminPanel.appointments.settings.admin.settingsPage.sections.create")}
              </SectionTitle>
              <AddAdminForm />
            </>
          )}

          {activeSection === "changePassword" && (
            <>
              <SectionTitle>
                {t("message.adminPanel.appointments.settings.admin.settingsPage.sections.changePassword")}
              </SectionTitle>
              <ChangePasswordForm />
            </>
          )}

          {activeSection === "viewAdmins" && (
            <>
              <SectionTitle>
                {t("message.adminPanel.appointments.settings.admin.settingsPage.sections.viewAll")}
              </SectionTitle>
              <AdminList admins={admins} />
            </>
          )}

          {activeSection === "deleteAdmin" && (
            <>
              <SectionTitle>
                {t("message.adminPanel.appointments.settings.admin.settingsPage.sections.delete")}
              </SectionTitle>
              <DeleteAdminForm admins={admins} />
            </>
          )}

          {activeSection === "workingMode" && (
            <>
              <WorkingModePage />
            </>
          )}

          {activeSection === "address" && (
            <>
              <AddressPage />
            </>
          )}

          {activeSection === "runningLine" && (
            <>
              <RunningLinePage />
            </>
          )}
        </Section>
      </BodyLayout>
    </ContentContainer>
  );
};

export default SettingsPage;
