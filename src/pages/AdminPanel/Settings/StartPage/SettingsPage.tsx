import React, { useEffect, useState } from "react";
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
  MainWelcomeText,
  SectionTitle,
  ScrollContainer,
  MainFunctionsText,
} from "./styles";

import { AdminDto } from "../../../../store/types/adminTypes";
import { getAllAdmins } from "../../../../api/adminAPI";
import AllModePage from "../AllModePage/AllModePage";
import KillAdminForm from "../KillAdminForm/KillAdminForm";

interface SettingsPageProps {
  adminLogin: string;
}

const SettingsPage: React.FC<SettingsPageProps> = () => {
  const { t } = useTranslation();
  const [, setAdmins] = useState<AdminDto[]>([]);
  const [, setError] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<
    | "createAdmin"
    | "changePassword"
    | "viewAdmins"
    | "deleteAdmin"
    | "killAdmin"
    | "welcome"
    | "workingMode"
    | null
  >("welcome");

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
    if (activeSection === "viewAdmins" || activeSection === "deleteAdmin" || activeSection === "killAdmin") {
      fetchAdmins();
    }
  }, [activeSection]);

  // const handleRefreshBtn = () => {
  //   if (activeSection === "viewAdmins" || activeSection === "deleteAdmin") {
  //     fetchAdmins();
  //   }
  // };

  return (
    <ContentContainer>
      <WelcomeTextBox>
        <MainWelcomeText>
          {parseSubtitle(
            t(
              "message.adminPanel.appointments.settings.admin.settingsPage.greeting"
            )
          )}
          {activeSection === "welcome" && (
          <MainFunctionsText>
            {t(
              "message.adminPanel.appointments.settings.admin.settingsPage.capabilities"
            )}
          </MainFunctionsText>
        )}
        </MainWelcomeText>
      </WelcomeTextBox>

      <ButtonGroup>
        <StyledButton onClick={() => setActiveSection("createAdmin")}>
          {t(
            "message.adminPanel.appointments.settings.admin.settingsPage.buttons.create"
          )}
        </StyledButton>
        <StyledButton onClick={() => setActiveSection("changePassword")}>
          {t(
            "message.adminPanel.appointments.settings.admin.settingsPage.buttons.changePassword"
          )}
        </StyledButton>
        <StyledButton onClick={() => setActiveSection("viewAdmins")}>
          {t(
            "message.adminPanel.appointments.settings.admin.settingsPage.buttons.viewAll"
          )}
        </StyledButton>
        <StyledButton onClick={() => setActiveSection("deleteAdmin")}>
          {t(
            "message.adminPanel.appointments.settings.admin.settingsPage.buttons.delete"
          )}
        </StyledButton>
        <StyledButton onClick={() => setActiveSection("killAdmin")}>
          {t(
            "message.adminPanel.appointments.settings.admin.settingsPage.buttons.kill"
          )}
        </StyledButton>
        <StyledButton onClick={() => setActiveSection("workingMode")}>
          {t(
            "message.adminPanel.appointments.settings.admin.settingsPage.buttons.workingMode"
          )}
        </StyledButton>
     
        </ButtonGroup>
     

      <ScrollContainer>
        <Section>
          {activeSection === "createAdmin" && (
            <>
              <SectionTitle>
                {t(
                  "message.adminPanel.appointments.settings.admin.settingsPage.sections.create"
                )}
              </SectionTitle>
              <AddAdminForm />
            </>
          )}

          {activeSection === "changePassword" && (
            <>
              <SectionTitle>
                {t(
                  "message.adminPanel.appointments.settings.admin.settingsPage.sections.changePassword"
                )}
              </SectionTitle>
              <ChangePasswordForm />
            </>
          )}

          {activeSection === "viewAdmins" && (
            <>
              <SectionTitle>
                {t(
                  "message.adminPanel.appointments.settings.admin.settingsPage.sections.viewAll"
                )}
              </SectionTitle>
              <AdminList />
            </>
          )}

          {activeSection === "deleteAdmin" && (
            <>
              <SectionTitle>
                {t(
                  "message.adminPanel.appointments.settings.admin.settingsPage.sections.delete"
                )}
              </SectionTitle>
              <DeleteAdminForm />
            </>
          )}
          
          {activeSection === "killAdmin" && (
            <>
              <SectionTitle>
                {t(
                  "message.adminPanel.appointments.settings.admin.kill.kill"
                )}
              </SectionTitle>
              <KillAdminForm />
            </>
          )}
          {activeSection === "workingMode" && (
            <>
              <SectionTitle></SectionTitle>
              <AllModePage />
            </>
          )}
        </Section>
      </ScrollContainer>
    </ContentContainer>
  );
};

export default SettingsPage;
