import React from "react";
import { MainFunctionsText } from "./styles";
import { useTranslation } from "react-i18next";

const HelloAdminText: React.FC = () => {
 
  const { t } = useTranslation();

  return (
    <>
      <MainFunctionsText>
          {t("message.adminPanel.appointments.settings.admin.settingsPage.capabilities")}
        </MainFunctionsText>
    </>
  );
};

export default HelloAdminText;
