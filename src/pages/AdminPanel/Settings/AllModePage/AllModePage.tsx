import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  Container,
  Title,
  FormSection,
  FieldGroup,
  Label,
  Input,
  TextArea,
  SaveButtonContainer,
  SaveButton,
  Notification,
} from "./styles";

const defaultSettings = {
  address: {
    street: "Breslauer Str. 17",
    city: "Konstanz",
    zipCode: "78467",
    gps: "47.68549067995246, 9.151141373012225",
    phone: "+49 75 31 7 72 73",
    email: "praxis.sofia.abramian@gmail.com",
  },
  workingHours: {
    monday: "09:00–18:00",
    tuesday: "09:00–18:00",
    wednesday: "09:00–18:00",
    thursday: "09:00–18:00",
    friday: "09:00–18:00",
  },
  runningText: "Herzlich Willkommen in unserer Klinik!",
};

const AddressWorkingModePage: React.FC = () => {
  const { t } = useTranslation();

  const [settings, setSettings] = useState(defaultSettings);
  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("settings");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setSettings({
          address: { ...defaultSettings.address, ...parsed.address },
          workingHours: { ...defaultSettings.workingHours, ...parsed.workingHours },
          runningText: parsed.runningText || defaultSettings.runningText,
        });
      } catch (error) {
        console.error("Fehler beim Laden der Einstellungen:", error);
      }
    }
  }, []);

  const handleAddressChange = (field: keyof typeof defaultSettings.address, value: string) => {
    setSettings((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        [field]: value,
      },
    }));
  };

  const handleWorkingHoursChange = (day: keyof typeof defaultSettings.workingHours, value: string) => {
    setSettings((prev) => ({
      ...prev,
      workingHours: {
        ...prev.workingHours,
        [day]: value,
      },
    }));
  };

  const handleSave = () => {
    setNotification(null);

    try {
      localStorage.setItem("settings", JSON.stringify(settings));
      console.log("Erfolgreich gespeichert:", settings);
      setNotification({
        message: t("message.adminPanel.appointments.settings.admin.settingsPage.address.successMessage"),
        type: "success",
      });
    } catch (error) {
      console.error("Fehler beim Speichern:", error);
      setNotification({
        message: t("message.adminPanel.appointments.settings.admin.settingsPage.address.errorMessage"),
        type: "error",
      });
    }
  };

  return (
    <Container>
      <Title>{t("message.adminPanel.appointments.settings.admin.settingsPage.workingMode.title")}</Title>
      <FormSection>
        {Object.entries(settings.workingHours).map(([day, value]) => (
          <FieldGroup key={day}>
            <Label>{t(`message.adminPanel.appointments.settings.admin.settingsPage.workingMode.days.${day}`)}</Label>
            <Input
              type="text"
              value={value}
              onChange={(e) => handleWorkingHoursChange(day as keyof typeof defaultSettings.workingHours, e.target.value)}
              placeholder={t("message.adminPanel.appointments.settings.admin.settingsPage.workingMode.placeholder")}
            />
          </FieldGroup>
        ))}
      </FormSection>

      <Title>{t("message.adminPanel.appointments.settings.admin.settingsPage.runningLine.title")}</Title>
      <FormSection>
        <TextArea
          value={settings.runningText}
          onChange={(e) => setSettings((prev) => ({ ...prev, runningText: e.target.value }))}
          placeholder={t("message.adminPanel.appointments.settings.admin.settingsPage.runningLine.placeholder")}
        />
      </FormSection>

      <Title>{t("message.adminPanel.appointments.settings.admin.settingsPage.address.title")}</Title>
      <FormSection>
        {Object.entries(settings.address).map(([key, value]) => (
          <FieldGroup key={key}>
            <Label>{t(`message.adminPanel.appointments.settings.admin.settingsPage.address.${key}`)}</Label>
            <Input
              type={key === "email" ? "email" : "text"}
              value={value}
              onChange={(e) => handleAddressChange(key as keyof typeof defaultSettings.address, e.target.value)}
              placeholder={t(`message.adminPanel.appointments.settings.admin.settingsPage.address.placeholder.${key}`)}
            />
          </FieldGroup>
        ))}
      </FormSection>

      <SaveButtonContainer>
        <SaveButton onClick={handleSave}>
          {t("message.adminPanel.appointments.settings.admin.settingsPage.address.saveButton")}
        </SaveButton>
      </SaveButtonContainer>

      {notification && (
        <Notification $type={notification.type}>
          {notification.message}
        </Notification>
      )}
    </Container>
  );
};

export default AddressWorkingModePage;
