// const defaultSettings = {
//   address: {
//     street: "Breslauer Str. 17",
//     city: "Konstanz",
//     zipCode: "78467",
//     gps: "47.68549067995246, 9.151141373012225",
//     phone: "+49 75 31 7 72 73",
//     email: "praxis.sofia.abramian@gmail.com",
//   },
//   workingHours: {
//     monday: "09:00–18:00",
//     tuesday: "09:00–18:00",
//     wednesday: "09:00–18:00",
//     thursday: "09:00–18:00",
//     friday: "09:00–18:00",
//   },
//   runningText: "Herzlich Willkommen in unserer Klinik!",
// };

// import React, { useState, useEffect } from "react";
// import { useTranslation } from "react-i18next";
// import {
//   Container,
//   Title,
//   FormSection,
//   FieldGroup,
//   Label,
//   Input,
//   TextArea,
//   SaveButtonContainer,
//   SaveButton,
//   Notification,
// } from "./styles";

// const defaultSettings = {
//   street: "Breslauer Str. 17",
//   city: "Konstanz",
//   zipCode: "78467",
//   gps: "47.68549067995246, 9.151141373012225",
//   phone: "+49 75 31 7 72 73",
//   email: "praxis.sofia.abramian@gmail.com",
//   monday: "09:00–18:00",
//   tuesday: "09:00–18:00",
//   wednesday: "09:00–18:00",
//   thursday: "09:00–18:00",
//   friday: "09:00–18:00",
//   runningText: "Herzlich Willkommen in unserer Klinik!",
// };

// const AddressWorkingModePage: React.FC = () => {
//   const { t } = useTranslation();

//   const [settings, setSettings] = useState(defaultSettings);
//   const [notification, setNotification] = useState<{
//     message: string;
//     type: "success" | "error";
//   } | null>(null);

//   useEffect(() => {
//     const saved = localStorage.getItem("settings");
//     if (saved) {
//       try {
//         const parsed = JSON.parse(saved);
//         setSettings({
//           address: { ...defaultSettings.address, ...parsed.address },
//           workingHours: {
//             ...defaultSettings.workingHours,
//             ...parsed.workingHours,
//           },
//           runningText: parsed.runningText || defaultSettings.runningText,
//         });
//       } catch (error) {
//         console.error("Fehler beim Laden der Einstellungen:", error);
//       }
//     }
//   }, []);

//   const handleAddressChange = (
//     field: keyof typeof defaultSettings.address,
//     value: string
//   ) => {
//     setSettings((prev) => ({
//       ...prev,
//       address: {
//         ...prev.address,
//         [field]: value,
//       },
//     }));
//   };

//   const handleWorkingHoursChange = (
//     day: keyof typeof defaultSettings.workingHours,
//     value: string
//   ) => {
//     setSettings((prev) => ({
//       ...prev,
//       workingHours: {
//         ...prev.workingHours,
//         [day]: value,
//       },
//     }));
//   };

//   const handleSave = () => {
//     setNotification(null);

//     try {
//       localStorage.setItem("settings", JSON.stringify(settings));
//       console.log("Erfolgreich gespeichert:", settings);
//       setNotification({
//         message: t(
//           "message.adminPanel.appointments.settings.admin.settingsPage.address.successMessage"
//         ),
//         type: "success",
//       });
//     } catch (error) {
//       console.error("Fehler beim Speichern:", error);
//       setNotification({
//         message: t(
//           "message.adminPanel.appointments.settings.admin.settingsPage.address.errorMessage"
//         ),
//         type: "error",
//       });
//     }
//   };

//   return (
//     <Container>
//       <Title>
//         {t(
//           "message.adminPanel.appointments.settings.admin.settingsPage.workingMode.title"
//         )}
//       </Title>
//       <FormSection>
//         {Object.entries(settings.workingHours).map(([day, value]) => (
//           <FieldGroup key={day}>
//             <Label>
//               {t(
//                 `message.adminPanel.appointments.settings.admin.settingsPage.workingMode.days.${day}`
//               )}
//             </Label>
//             <Input
//               type="text"
//               value={value}
//               onChange={(e) =>
//                 handleWorkingHoursChange(
//                   day as keyof typeof defaultSettings.workingHours,
//                   e.target.value
//                 )
//               }
//               placeholder={t(
//                 "message.adminPanel.appointments.settings.admin.settingsPage.workingMode.placeholder"
//               )}
//             />
//           </FieldGroup>
//         ))}
//       </FormSection>

//       <Title>
//         {t(
//           "message.adminPanel.appointments.settings.admin.settingsPage.runningLine.title"
//         )}
//       </Title>
//       <FormSection>
//         <TextArea
//           value={settings.runningText}
//           onChange={(e) =>
//             setSettings((prev) => ({ ...prev, runningText: e.target.value }))
//           }
//           placeholder={t(
//             "message.adminPanel.appointments.settings.admin.settingsPage.runningLine.placeholder"
//           )}
//           rows={3}
//         />
//       </FormSection>

//       <Title>
//         {t(
//           "message.adminPanel.appointments.settings.admin.settingsPage.address.title"
//         )}
//       </Title>
//       <FormSection>
//         {Object.entries(settings.address).map(([key, value]) => (
//           <FieldGroup key={key}>
//             <Label>
//               {t(
//                 `message.adminPanel.appointments.settings.admin.settingsPage.address.${key}`
//               )}
//             </Label>
//             <Input
//               type={key === "email" ? "email" : "text"}
//               value={value}
//               onChange={(e) =>
//                 handleAddressChange(
//                   key as keyof typeof defaultSettings.address,
//                   e.target.value
//                 )
//               }
//               placeholder={t(
//                 `message.adminPanel.appointments.settings.admin.settingsPage.address.placeholder.${key}`
//               )}
//             />
//           </FieldGroup>
//         ))}
//       </FormSection>

//       <SaveButtonContainer>
//         <SaveButton onClick={handleSave}>
//           gi
//         </SaveButton>
//       </SaveButtonContainer>

//       {notification && (
//         <Notification $type={notification.type}>
//           {notification.message}
//         </Notification>
//       )}
//     </Container>
//   );
// };

// export default AddressWorkingModePage;

// 2 works - loading
// import React, { useState, useEffect } from "react";
// import { useTranslation } from "react-i18next";
// import { SettingsStringDto } from "../../../../store/types/settingsTypes";
// import {
//   Container,
//   Title,
//   FormSection,
//   FieldGroup,
//   Label,
//   Input,
//   TextArea,
//   SaveButtonContainer,
//   SaveButton,
//   Notification,
// } from "./styles";
// import { getSettings, updateSettings } from "../../../../api/settingsAPI";

// let cachedSettings: SettingsStringDto | null = null;

// const AddressWorkingModePage: React.FC = () => {
//   const { t } = useTranslation();
//   const [settings, setSettings] = useState<SettingsStringDto | null>(null);
//   const [notification, setNotification] = useState<{
//     message: string;
//     type: "success" | "error";
//   } | null>(null);

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     const loadSettings = async () => {
//       try {
//         if (token) {
//           const fetchedSettings = await getSettingsFromCacheOrApi(token);
//           setSettings(fetchedSettings);
//         } else {
//           console.error("Token is missing");
//         }
//       } catch (error) {
//         console.error("Error loading settings:", error);
//       }
//     };

//     loadSettings();
//   }, []);

//   const getSettingsFromCacheOrApi = async (token: string): Promise<SettingsStringDto> => {
//     if (cachedSettings) {
//       return cachedSettings;
//     }

//     try {
//       const fetchedSettings = await getSettings(token);
//       cachedSettings = fetchedSettings;
//       return fetchedSettings;
//     } catch (error) {
//       console.error("Error loading settings:", error);
//       throw error;
//     }
//   };

//   const handleSettingsChange = (key: keyof SettingsStringDto, value: string) => {
//     setSettings((prev) => {
//       if (!prev) return prev;
//       return {
//         ...prev,
//         [key]: value,
//       };
//     });
//   };

//   const handleSave = async () => {
//     if (!settings) return;

//     setNotification(null);

//     try {
//       const token = localStorage.getItem("token");

//       if (token) {
//         const updatedSettings = await updateSettings(settings, token);

//         cachedSettings = updatedSettings;
//         setSettings(updatedSettings);

//         setNotification({
//           message: t("message.success"),
//           type: "success",
//         });
//       } else {
//         console.error("Token is missing");
//       }
//     } catch (error) {
//       console.error("Failed to save settings:", error);
//       setNotification({
//         message: t("message.error"),
//         type: "error",
//       });
//     }
//   };

//   if (!settings) return <div>Loading...</div>;

//   return (
//     <Container>
//       <Title>{t("message.settings.title")}</Title>
//       <FormSection>
//         {["monday", "tuesday", "wednesday", "thursday", "friday"].map((day) => (
//           <FieldGroup key={day}>
//             <Label>{t(`message.settings.workingMode.days.${day}`)}</Label>
//             <Input
//               type="text"
//               value={settings[day as keyof SettingsStringDto] || ""}
//               onChange={(e) =>
//                 handleSettingsChange(day as keyof SettingsStringDto, e.target.value)
//               }
//             />
//           </FieldGroup>
//         ))}
//       </FormSection>

//       <Title>{t("message.settings.runningText.title")}</Title>
//       <FormSection>
//         <TextArea
//           value={settings.runningText || ""}
//           onChange={(e) => handleSettingsChange("runningText", e.target.value)}
//         />
//       </FormSection>

//       <Title>{t("message.settings.address.title")}</Title>
//       <FormSection>
//         {["street", "city", "zipCode", "gps", "phone", "email"].map((key) => (
//           <FieldGroup key={key}>
//             <Label>{t(`message.settings.address.${key}`)}</Label>
//             <Input
//               type={key === "email" ? "email" : "text"}
//               value={settings[key as keyof SettingsStringDto] || ""}
//               onChange={(e) =>
//                 handleSettingsChange(key as keyof SettingsStringDto, e.target.value)
//               }
//             />
//           </FieldGroup>
//         ))}
//       </FormSection>

//       <SaveButtonContainer>
//         <SaveButton onClick={handleSave}>{t("message.settings.saveButton")}</SaveButton>
//       </SaveButtonContainer>

//       {notification && (
//         <Notification $type={notification.type}>{notification.message}</Notification>
//       )}
//     </Container>
//   );
// };

// export default AddressWorkingModePage;

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
} from "./styles";
import { getSettings, updateSettings } from "../../../../api/settingsAPI";

const defaultSettingsNow: SettingsStringDto = {
  street: "Breslauer Str. 17",
  city: "Konstanz",
  zipCode: "78467",
  gps: "47.68549067995246, 9.151141373012225",
  phone: "+49 75 31 7 72 73",
  email: "praxis.sofia.abramian@gmail.com",
  monday: "09:00–18:00",
  tuesday: "09:00–18:00",
  wednesday: "09:00–18:00",
  thursday: "09:00–18:00",
  friday: "09:00–18:00",
  runningText: "Herzlich Willkommen in unserer Klinik!",
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
  runningText: "",
};

let cachedSettings: SettingsStringDto | null = null;

const AddressWorkingModePage: React.FC = () => {
  const { t } = useTranslation();
  const [settings, setSettings] = useState<SettingsStringDto | null>(null);
  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    const loadSettings = async () => {
      try {
        if (token) {
          const fetchedSettings = await getSettingsFromCacheOrApi(token);
          setSettings(fetchedSettings);
        } else {
          console.error("Token is missing");
        }
      } catch (error) {
        console.error("Error loading settings:", error);
        setSettings(defaultSettings);
      }
    };

    loadSettings();
  }, []);

  const getSettingsFromCacheOrApi = async (
    token: string
  ): Promise<SettingsStringDto> => {
    if (cachedSettings) {
      return cachedSettings; 
    }

    try {
      const fetchedSettings = await getSettings(token);
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

      console.log("Settings up: ", updatedSettings)

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
      <Title>
        {t(
          "message.adminPanel.appointments.settings.admin.settingsPage.workingMode.title"
        )}
      </Title>
      <FormSection>
        {["monday", "tuesday", "wednesday", "thursday", "friday"].map((day) => (
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
              placeholder={defaultSettingsNow[day as keyof SettingsStringDto]}
              onChange={(e) =>
                handleSettingsChange(
                  day as keyof SettingsStringDto,
                  e.target.value
                )
              }
            />
          </FieldGroup>
        ))}
      </FormSection>

      <Title>
        {t(
          "message.adminPanel.appointments.settings.admin.settingsPage.runningLine.title"
        )}
      </Title>
      <FormSection>
        <TextArea
          value={settings.runningText || defaultSettings.runningText}
          onChange={(e) => handleSettingsChange("runningText", e.target.value)}
          placeholder={defaultSettingsNow.runningText} 
        />
      </FormSection>

      <Title>
        {t(
          "message.adminPanel.appointments.settings.admin.settingsPage.address.title"
        )}
      </Title>
      <FormSection>
        {["street", "city", "zipCode", "gps", "phone", "email"].map((key) => (
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
              placeholder={defaultSettingsNow[key as keyof SettingsStringDto]}
              onChange={(e) =>
                handleSettingsChange(
                  key as keyof SettingsStringDto,
                  e.target.value
                )
              }
            />
          </FieldGroup>
        ))}
      </FormSection>

      <SaveButtonContainer>
        <SaveButton onClick={handleSave}>
          {t(
            "message.adminPanel.appointments.settings.admin.settingsPage.address.saveButton"
          )}
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
