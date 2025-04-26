import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { SettingsStringDto } from "../../../../store/types/settingsTypes";
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
  AdressContainer,
  HoursContainer,
  LineContainer,
  TopContainer,
  Button,
  ButtonGroup,
  List,
  ListItem,
  Modal,
  ModalTitle,
  Overlay,
} from "./styles";
import { getSettings, updateSettings } from "../../../../api/settingsAPI";

const defaultSettingsNow: SettingsStringDto = {
  street: "Breslauer Str. 17",
  city: "Konstanz",
  zipCode: "78467",
  gps: "47.68549067995246, 9.151141373012225",
  phone: "+49 75 31 7 72 73",
  email: "praxis.sofia.abramian@gmail.com",
  monday: "08:30–15:00",
  tuesday: "08:30–15:00",
  wednesday: "08:30–19:00",
  thursday: "08:30–19:00",
  friday: "08:30–12:00",
  runningTextDe: "Herzlich Willkommen in unserer Klinik!",
  runningTextEn: "Herzlich Willkommen in unserer Klinik!",
  runningTextRu: "Herzlich Willkommen in unserer Klinik!",
};

const defaultSettings: SettingsStringDto = {
  street: "",
  city: "",
  zipCode: "",
  gps: "",
  phone: "",
  email: "",
  monday: "",
  tuesday: "",
  wednesday: "",
  thursday: "",
  friday: "",
  runningTextDe: "",
  runningTextEn: "",
  runningTextRu: "",
};

let cachedSettings: SettingsStringDto | null = null;

const AddressWorkingModePage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [settings, setSettings] = useState<SettingsStringDto | null>(null);
  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const fetchedSettings = await getSettingsFromCacheOrApi();
        setSettings(fetchedSettings);
      } catch (error) {
        console.error("Error loading settings:", error);
        setSettings(defaultSettings);
      }
    };

    loadSettings();
  }, []);

  const getSettingsFromCacheOrApi = async (): Promise<SettingsStringDto> => {
    if (cachedSettings) {
      return cachedSettings;
    }

    try {
      const fetchedSettings = await getSettings();
      cachedSettings = fetchedSettings;
      return fetchedSettings;
    } catch (error) {
      console.error("Error loading settings:", error);
      return defaultSettings;
    }
  };

  const handleSettingsChange = (
    key: keyof SettingsStringDto,
    value: string
  ) => {
    setSettings((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  const handleSave = async () => {
    if (!settings) return;

    setNotification(null);

    try {
      const token = localStorage.getItem("token");

      if (token) {
        //
        localStorage.setItem("settings", JSON.stringify(settings));
        console.log("Settings saved in localStorage:", settings);

        const updatedSettings = await updateSettings(settings, token);

        cachedSettings = updatedSettings;
        setSettings(updatedSettings);

        setNotification({
          message: t(
            "message.adminPanel.appointments.settings.admin.settingsPage.address.successMessage"
          ),
          type: "success",
        });

        console.log("Settings up: ", updatedSettings);
      } else {
        console.error("Token is missing");
      }
    } catch (error) {
      console.error("Failed to save settings:", error);
      setNotification({
        message: t(
          "message.adminPanel.appointments.settings.admin.settingsPage.address.errorMessage"
        ),
        type: "error",
      });
    }
  };

  if (!settings) return <div>Loading...</div>;

  return (
    <Container>
      <TopContainer>
        <HoursContainer>
          <Title>
            {t(
              "message.adminPanel.appointments.settings.admin.settingsPage.workingMode.title"
            )}
          </Title>
          <FormSection>
            {["monday", "tuesday", "wednesday", "thursday", "friday"].map(
              (day) => (
                <FieldGroup key={day}>
                  <Label>
                    {t(
                      `message.adminPanel.appointments.settings.admin.settingsPage.workingMode.days.${day}`
                    )}
                  </Label>
                  <Input
                    type="text"
                    value={
                      settings[day as keyof SettingsStringDto] ||
                      defaultSettings[day as keyof SettingsStringDto]
                    }
                    placeholder={
                      defaultSettingsNow[day as keyof SettingsStringDto]
                    }
                    onChange={(e) =>
                      handleSettingsChange(
                        day as keyof SettingsStringDto,
                        e.target.value
                      )
                    }
                  />
                </FieldGroup>
              )
            )}
          </FormSection>
        </HoursContainer>

        <AdressContainer>
          <Title>
            {t(
              "message.adminPanel.appointments.settings.admin.settingsPage.address.title"
            )}
          </Title>
          <FormSection>
            {["street", "city", "zipCode", "gps", "phone", "email"].map(
              (key) => (
                <FieldGroup key={key}>
                  <Label>
                    {t(
                      `message.adminPanel.appointments.settings.admin.settingsPage.address.${key}`
                    )}
                  </Label>
                  <Input
                    type={key === "email" ? "email" : "text"}
                    value={
                      settings[key as keyof SettingsStringDto] ||
                      defaultSettings[key as keyof SettingsStringDto]
                    }
                    placeholder={
                      defaultSettingsNow[key as keyof SettingsStringDto]
                    }
                    onChange={(e) =>
                      handleSettingsChange(
                        key as keyof SettingsStringDto,
                        e.target.value
                      )
                    }
                  />
                </FieldGroup>
              )
            )}
          </FormSection>
        </AdressContainer>
      </TopContainer>
      <LineContainer>
        <Title>
          {t(
            "message.adminPanel.appointments.settings.admin.settingsPage.runningLine.title"
          )}
        </Title>
        <FormSection>
          <TextArea
            value={settings.runningTextDe || defaultSettings.runningTextDe}
            onChange={(e) =>
              handleSettingsChange("runningTextDe", e.target.value)
            }
            placeholder={defaultSettingsNow.runningTextDe}
          />
        </FormSection>
      </LineContainer>

      <SaveButtonContainer>
        <SaveButtonContainer>
          <SaveButton onClick={() => setShowConfirmationModal(true)}>
            {t(
              "message.adminPanel.appointments.settings.admin.settingsPage.address.checkButton"
            )}
          </SaveButton>
        </SaveButtonContainer>
      </SaveButtonContainer>

      {showConfirmationModal && settings && (
        <Overlay>
          <Modal>
            <ModalTitle>
              {t(
                "message.adminPanel.appointments.settings.admin.settingsPage.address.confirmSettingsTitle"
              )}
            </ModalTitle>
            <List>
              {Object.entries(settings).map(([key, value]) => (
                <ListItem key={key}>
                  <strong>{key}</strong>: {value}
                </ListItem>
              ))}
            </List>
            <ButtonGroup>
              <Button onClick={() => setShowConfirmationModal(false)}>
                {t(
                  "message.adminPanel.appointments.settings.admin.settingsPage.address.cancelButton"
                )}
              </Button>
              <Button
                onClick={() => {
                  setShowConfirmationModal(false);
                  handleSave();
                }}
              >
                {t(
                  "message.adminPanel.appointments.settings.admin.settingsPage.address.confirmButton"
                )}
              </Button>
            </ButtonGroup>
          </Modal>
        </Overlay>
      )}

      {notification && (
        <Notification $type={notification.type}>
          {notification.message}
        </Notification>
      )}
    </Container>
  );
};

export default AddressWorkingModePage;
