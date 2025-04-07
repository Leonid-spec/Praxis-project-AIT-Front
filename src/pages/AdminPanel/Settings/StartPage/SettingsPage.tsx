import React, { useState } from "react";
import AddAdminForm from "../AddAdmin/AddAdminForm";
import ChangePasswordForm from "../ChangePassword/ChangePasswordForm";

import {
  ContentContainer,
  Section,
  BackButton,
  ButtonGroup,
  StyledButton,
} from "./styles";
import AdminList from "../AdminList/AdminList";
import DeleteAdminForm from "../DeleteAdminForm/DeleteAdminForm";

const SettingsPage: React.FC = () => {
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
        <BackButton onClick={() => setActiveSection(null)}>← Back</BackButton>
      )}

      {!activeSection && (
        <>
          <h1>Settings</h1>
          <ButtonGroup>
            <StyledButton onClick={() => handleButtonClick("createAdmin")}>
              Create New Admin
            </StyledButton>
            <StyledButton onClick={() => handleButtonClick("changePassword")}>
              Change Password
            </StyledButton>
            <StyledButton onClick={() => handleButtonClick("viewAdmins")}>
              View All Admins
            </StyledButton>
            <StyledButton onClick={() => handleButtonClick("deleteAdmin")}>
              Delete Admin
            </StyledButton>
          </ButtonGroup>
        </>
      )}

      {activeSection === "createAdmin" && (
        <Section>
          <h2>Create New Admin</h2>
          <AddAdminForm onBack={() => setActiveSection(null)} />
        </Section>
      )}

      {activeSection === "changePassword" && (
        <Section>
          <h2>Change Password</h2>
          <ChangePasswordForm onBack={() => setActiveSection(null)} />
        </Section>
      )}

      {activeSection === "viewAdmins" && (
        <Section>
          <h2>All Admins</h2>
          <AdminList />
        </Section>
      )}

      {activeSection === "deleteAdmin" && (
        <Section>
          <h2>Delete Admin</h2>
          <DeleteAdminForm />
        </Section>
      )}
    </ContentContainer>
  );
};

export default SettingsPage;
