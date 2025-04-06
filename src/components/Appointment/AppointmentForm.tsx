// import React, { useEffect, useState } from "react";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import {
//   FormContainer,
//   FormTitle,
//   SubmitButton,
//   LanguageOptions,
//   Label,
//   FieldContainer,
//   CharacterCounter,
//   RequiredMarker,
// } from "./styles";
// import TextInput from "../Input/TextInput";
// import Notification from "../Notification/Notification";
// import { useTranslation } from "react-i18next";
// import { ServiceData } from "../../store/types/serviceTypes";
// import { getActiveServices } from "../../api/serviceAPI";
// import ServiceDropdown from "./ServiceDropdown/ServiceDropdown";
// import { createAppointment } from "../../api/appointmentAPI";

// interface FormData {
//   dentalServiceSectionId: ServiceData | null;
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone1: string;
//   phone2?: string;
//   language?: string | null;
//   comment?: string;
//   availableTime?: string;
// }

// const AppointmentForm = () => {
//   const { t } = useTranslation();

//   const [services, setServices] = useState<ServiceData[]>([]);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchServices = async () => {
//       try {
//         const data = await getActiveServices();
//         setServices(data);
//       } catch (err: any) {
//         console.error("Error loading services:", err);
//       }
//     };

//     fetchServices();
//   }, []);

//   const [notification, setNotification] = useState<{
//     message: string;
//     type: "error" | "success";
//   } | null>(null);

//   const [formData, setFormData] = useState<FormData>({
//     dentalServiceSectionId: null,
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone1: "",
//     phone2: "",
//     language: "De",
//     comment: "",
//     availableTime: "",
//     isNew: true,
//   });

//   const [errors, setErrors] = useState({
//     dentalServiceSectionId: null,
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone1: "",
//     phone2: "",
//     comment: "",
//     availableTime: "",
//     isNew: true,
//   });

//   const capitalizeWords = (text: string): string => {
//     return text
//       .split(/\s+/)
//       .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
//       .join(" ");
//   };

//   const validateFirstName = (name: string): string => {
//     const regex = /^[A-Za-zäöüßÄÖÜ.'`\-_]*(\s[A-Za-zäöüßÄÖÜ.'`\-_]*)?$/;

//     if (name.trim().length === 0) {
//       return t("message.other.makeAppointment.errors.firstNameRequired");
//     }

//     if (name[0] === " ") {
//       return t("message.other.makeAppointment.errors.firstCharCannotBeSpace");
//     }

//     if (name.length < 2) {
//       return t("message.other.makeAppointment.errors.firstNameLetterCount");
//     }

//     if (name.length > 64) {
//       return t("message.other.makeAppointment.errors.firstNameLetterCountMax");
//     }

//     if (name.includes("  ")) {
//       return t("message.other.makeAppointment.errors.firstNameExtraSpaces");
//     }

//     if (!regex.test(name)) {
//       return t("message.other.makeAppointment.errors.firstNameInvalid");
//     }

//     return "";
//   };

//   const validateLastName = (name: string): string => {
//     const regex = /^[A-Za-zäöüßÄÖÜ.'`\-_]*(\s[A-Za-zäöüßÄÖÜ.'`\-_]*)?$/;

//     if (name.trim().length === 0) {
//       return t("message.other.makeAppointment.errors.lastNameRequired");
//     }

//     if (name[0] === " ") {
//       return t("message.other.makeAppointment.errors.lastCharCannotBeSpace");
//     }

//     if (name.length < 2) {
//       return t("message.other.makeAppointment.errors.lastNameLetterCount");
//     }

//     if (name.length > 64) {
//       return t("message.other.makeAppointment.errors.lastNameLetterCountMax");
//     }

//     if (name.includes("  ")) {
//       return t("message.other.makeAppointment.errors.lastNameExtraSpaces");
//     }

//     if (!regex.test(name)) {
//       return t("message.other.makeAppointment.errors.lastNameInvalid");
//     }

//     return "";
//   };

//   const validateEmail = (email: string): string => {
//     if (!email.trim()) {
//       return t("message.other.makeAppointment.errors.emailRequired");
//     }

//     if (email.includes(" ")) {
//       return t("message.other.makeAppointment.errors.emailWithoutSpaces");
//     }

//     if (!email.includes("@")) {
//       return t("message.other.makeAppointment.errors.emailWithoutAtSymbol");
//     }

//     const parts = email.split("@");
//     if (parts.length !== 2 || parts[1].indexOf(".") === -1) {
//       return t("message.other.makeAppointment.errors.emailWithoutDot");
//     }
//     const regex = /^[a-zA-Z0-9._,-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     if (!regex.test(email)) {
//       return t("message.other.makeAppointment.errors.emailInvalid");
//     }

//     return "";
//   };

//   const validatePhone = (phone: string): string => {
//     const cleanedPhone = phone.replace(/\s+/g, "");
//     if (cleanedPhone.length === 0)
//       return t("message.other.makeAppointment.errors.phoneNumberRequired");
//     if (cleanedPhone.length < 10)
//       return t("message.other.makeAppointment.errors.phoneNumberInvalid");
//     return "";
//   };

//   const handleLanguageChange = (lang: string) => {
//     setFormData({
//       ...formData,
//       language: formData.language === lang ? null : lang,
//     });
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     const formattedValue =
//       name === "firstName" || name === "lastName"
//         ? capitalizeWords(value)
//         : value;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: formattedValue,
//     }));

//     setErrors((prev) => ({
//       ...prev,
//       [name]: validateField(name, formattedValue),
//     }));
//   };

//   const handlePhoneChange = (value: string, name: string) => {
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     setErrors((prev) => ({ ...prev, [name]: validatePhone(value) }));
//   };

//   const isFormValid = (): boolean => {
//     return (
//       formData.firstName.trim().length > 0 &&
//       formData.lastName.trim().length > 0 &&
//       validateFirstName(formData.firstName) === "" &&
//       validateLastName(formData.lastName) === "" &&
//       validateEmail(formData.email) === "" &&
//       validatePhone(formData.phone1) === ""
//     );
//   };

//   const validateField = (fieldName: string, value: string): string => {
//     switch (fieldName) {
//       case "firstName":
//         return validateFirstName(value);
//       case "lastName":
//         return validateLastName(value);
//       case "email":
//         return validateEmail(value);
//       case "phone1":
//       case "phone2":
//         return validatePhone(value);
//       default:
//         return "";
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const newAppointment = await createAppointment(formData);
//       console.log("Appointment created successfully:", newAppointment);
//       setNotification({
//         message: t(
//           "message.other.makeAppointment.messages.appointmentScheduled"
//         ),
//         type: "success",
//       });
//       setFormData({
//         dentalServiceSectionId: null,
//         firstName: "",
//         lastName: "",
//         email: "",
//         phone1: "",
//         phone2: "",
//         language: "de",
//         comment: "",
//         availableTime: "",
//         isNew: true,
//       });
//     } catch (err: any) {
//       setNotification({
//         message: "Failed to create appointment",
//         type: "error",
//       });
//     }

//     const newErrors = {
//       firstName: validateFirstName(formData.firstName),
//       lastName: validateLastName(formData.lastName),
//       email: validateEmail(formData.email),
//       phone1: validatePhone(formData.phone1),
//       phone2: "",
//       language: "",
//       comment: "",
//       availableTime: "",
//       isNew: true,
//     };
//     setErrors(newErrors);

//     const formatPhone = (phone: string) => {
//       const cleaned = phone.replace(/\s+/g, "");
//       return cleaned.startsWith("+") ? cleaned : `+${cleaned}`;
//     };

//     const hasErrors = Object.values(newErrors).some((error) => error !== "");
//     if (!hasErrors) {
//       const formattedData = {
//         dentalServiceSectionId: formData.dentalServiceSectionId?.id ?? 1,
//         firstName: formData.firstName,
//         lastName: formData.lastName,
//         phone1: formatPhone(formData.phone1),
//         phone2: formData.phone2 ? formatPhone(formData.phone2) : "",
//         email: formData.email,
//         availableTime: formData.availableTime,
//         comment: formData.comment,
//         language: formData.language?.toLowerCase() || "de",
//         isNew: true,
//       };
//       setNotification({
//         message: t(
//           "message.other.makeAppointment.messages.appointmentScheduled"
//         ),
//         type: "success",
//       });
//     } else {
//       setNotification({
//         message: t("message.other.makeAppointment.messages.appointmentFailed"),
//         type: "error",
//       });
//     }
//   };

//   return (
//     <>
//       <FormContainer onSubmit={handleSubmit}>
//         <FormTitle>{t("message.other.makeAppointment.formTitle")}</FormTitle>

//         <FieldContainer>
//           <Label>{t("message.other.makeAppointment.labelService")}</Label>
//           <ServiceDropdown
//             services={services}
//             selectedService={formData.dentalServiceSectionId}
//             onSelect={(dentalServiceSectionId) => setFormData({ ...formData, dentalServiceSectionId })}
//           />
//         </FieldContainer>

//         <TextInput
//           label={t("message.other.makeAppointment.labelFirstName")}
//           type="text"
//           id="firstName"
//           name="firstName"
//           placeholder={t(
//             "message.other.makeAppointment.placeholders.firstName"
//           )}
//           value={formData.firstName}
//           onChange={handleChange}
//           required
//           error={errors.firstName}
//         />

//         <TextInput
//           label={t("message.other.makeAppointment.labelLastName")}
//           type="text"
//           id="lastName"
//           name="lastName"
//           placeholder={t("message.other.makeAppointment.placeholders.lastName")}
//           value={formData.lastName}
//           onChange={handleChange}
//           required
//           error={errors.lastName}
//         />

//         <TextInput
//           label="E-Mail:"
//           type="email"
//           id="email"
//           name="email"
//           placeholder="yourname@example.com"
//           value={formData.email}
//           onChange={handleChange}
//           required
//           error={errors.email}
//         />

//         <FieldContainer>
//           <Label>
//             {t("message.other.makeAppointment.labelPhoneNumber1")}
//             <RequiredMarker>*</RequiredMarker>
//           </Label>
//           <PhoneInput
//             country={"de"}
//             value={formData.phone1}
//             onChange={(value) => handlePhoneChange(value, "phone1")}
//             inputProps={{ name: "phone1", required: true }}
//             placeholder="Geben Sie Ihre Telefonnummer ein"
//           />
//           {errors.phone1 && (
//             <span
//               style={{
//                 color: "#e74c3c",
//                 marginTop: "5px",
//                 fontSize: "12px",
//                 fontWeight: "normal",
//               }}
//             >
//               {errors.phone1}
//             </span>
//           )}
//         </FieldContainer>

//         <FieldContainer>
//           <Label htmlFor="phone2">
//             {t("message.other.makeAppointment.labelPhoneNumber2")}
//           </Label>
//           <PhoneInput
//             country={"de"}
//             value={formData.phone2 || ""}
//             onChange={(value) => handlePhoneChange(value, "phone2")}
//             inputProps={{ name: "phone2" }}
//           />
//         </FieldContainer>

//         <FieldContainer>
//           <Label>{t("message.other.makeAppointment.language")}</Label>
//           <LanguageOptions>
//             {["De", "En", "Ru"].map((lang) => (
//               <label key={lang}>
//                 <input
//                   type="checkbox"
//                   checked={formData.language === lang}
//                   onChange={() => handleLanguageChange(lang)}
//                 />
//                 {lang}
//               </label>
//             ))}
//           </LanguageOptions>
//         </FieldContainer>

//         <TextInput
//           label={t("message.other.makeAppointment.textAreaDate")}
//           type="textarea"
//           id="availableTime"
//           name="availableTime"
//           placeholder={t(
//             "message.other.makeAppointment.placeholders.textAreaDate"
//           )}
//           value={formData.availableTime}
//           onChange={handleChange}
//           maxLength={1024}
//           error={errors.availableTime}
//           rows={5}
//         />
//         <CharacterCounter>
//           {formData.comment ? formData.comment.length : 0}/1024
//         </CharacterCounter>

//         <TextInput
//           label={t("message.other.makeAppointment.labelComment")}
//           type="textarea"
//           id="comment"
//           name="comment"
//           placeholder={t(
//             "message.other.makeAppointment.placeholders.textAreaComment"
//           )}
//           value={formData.comment}
//           onChange={handleChange}
//           maxLength={1024}
//           error={errors.comment}
//           rows={5}
//         />
//         <CharacterCounter>
//           {(formData.comment ?? "").length}/1024
//         </CharacterCounter>

//         <SubmitButton
//           type="submit"
//           disabled={!isFormValid()}
//           style={{
//             backgroundColor: !isFormValid() ? "#ccc" : "#007bff",
//             cursor: !isFormValid() ? "not-allowed" : "pointer",
//           }}
//         >
//           {!isFormValid()
//             ? t("message.other.makeAppointment.buttonDisabledText")
//             : t("message.other.makeAppointment.buttonText")}
//         </SubmitButton>
//       </FormContainer>

//       {notification && (
//         <Notification
//           message={notification.message}
//           type={notification.type}
//           onClose={() => setNotification(null)}
//         />
//       )}
//     </>
//   );
// };

// export default AppointmentForm;


export interface AppointmentData {
  id?: number | null;
  dentalServiceSectionId: number;
  firstName: string;
  lastName: string;
  phone1: string;
  phone2?: string;  
  email: string;
  availableTime: string;
  comment?: string; 
  language?: string;
  isNew?: boolean;
  createdAt?: string;
}


import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import PhoneInput from "react-phone-input-2";
import { FormContainer, FormTitle, FieldContainer, Label, RequiredMarker, LanguageOptions, CharacterCounter, SubmitButton } from "./styles";
import { createAppointment } from "../../api/appointmentAPI";
import { getActiveServices } from "../../api/serviceAPI";
import { ServiceData } from "../../store/types/serviceTypes";
import TextInput from "../Input/TextInput";
import ServiceDropdown from "./ServiceDropdown/ServiceDropdown";

interface FormData {
  dentalServiceSectionId: ServiceData | null;
  firstName: string;
  lastName: string;
  email: string;
  phone1: string;
  phone2?: string;
  language?: string | null;
  comment?: string;
  availableTime?: string;
}

const AppointmentForm = () => {
  const { t } = useTranslation();

  const [services, setServices] = useState<ServiceData[]>([]);
  const [notification, setNotification] = useState<{ message: string; type: "error" | "success" } | null>(null);

  const [formData, setFormData] = useState<FormData>({
    dentalServiceSectionId: null,
    firstName: "",
    lastName: "",
    email: "",
    phone1: "",
    phone2: "",
    language: "de",
    comment: "",
    availableTime: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getActiveServices();
        setServices(data);
      } catch (err: any) {
        console.error("Error loading services:", err);
      }
    };

    fetchServices();
  }, []);

  const capitalizeWords = (text: string): string =>
    text
      .split(/\s+/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");

  const validateFirstName = (name: string): string => {
    const regex = /^[A-Za-zäöüßÄÖÜ.'\-_]*(\s[A-Za-zäöüßÄÖÜ.'\-_]*)?$/;
    if (name.trim().length === 0) return t("message.other.makeAppointment.errors.firstNameRequired");
    if (name[0] === " ") return t("message.other.makeAppointment.errors.firstCharCannotBeSpace");
    if (name.length < 2) return t("message.other.makeAppointment.errors.firstNameLetterCount");
    if (name.length > 64) return t("message.other.makeAppointment.errors.firstNameLetterCountMax");
    if (name.includes("  ")) return t("message.other.makeAppointment.errors.firstNameExtraSpaces");
    if (!regex.test(name)) return t("message.other.makeAppointment.errors.firstNameInvalid");
    return "";
  };

  const validateLastName = (name: string): string => {
    const regex = /^[A-Za-zäöüßÄÖÜ.'\-_]*(\s[A-Za-zäöüßÄÖÜ.'\-_]*)?$/;
    if (name.trim().length === 0) return t("message.other.makeAppointment.errors.lastNameRequired");
    if (name[0] === " ") return t("message.other.makeAppointment.errors.lastCharCannotBeSpace");
    if (name.length < 2) return t("message.other.makeAppointment.errors.lastNameLetterCount");
    if (name.length > 64) return t("message.other.makeAppointment.errors.lastNameLetterCountMax");
    if (name.includes("  ")) return t("message.other.makeAppointment.errors.lastNameExtraSpaces");
    if (!regex.test(name)) return t("message.other.makeAppointment.errors.lastNameInvalid");
    return "";
  };

  const validateEmail = (email: string): string => {
    if (!email.trim()) return t("message.other.makeAppointment.errors.emailRequired");
    if (email.includes(" ")) return t("message.other.makeAppointment.errors.emailWithoutSpaces");
    if (!email.includes("@")) return t("message.other.makeAppointment.errors.emailWithoutAtSymbol");
    const parts = email.split("@");
    if (parts.length !== 2 || parts[1].indexOf(".") === -1) return t("message.other.makeAppointment.errors.emailWithoutDot");
    const regex = /^[a-zA-Z0-9._,-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(email)) return t("message.other.makeAppointment.errors.emailInvalid");
    return "";
  };

  const validatePhone = (phone: string): string => {
    const cleanedPhone = phone.replace(/\s+/g, "");
    if (cleanedPhone.length === 0) return t("message.other.makeAppointment.errors.phoneNumberRequired");
    if (cleanedPhone.length < 10) return t("message.other.makeAppointment.errors.phoneNumberInvalid");
    return "";
  };

  const validateField = (fieldName: string, value: string): string => {
    switch (fieldName) {
      case "firstName":
        return validateFirstName(value);
      case "lastName":
        return validateLastName(value);
      case "email":
        return validateEmail(value);
      case "phone1":
      case "phone2":
        return validatePhone(value);
      default:
        return "";
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const formattedValue = ["firstName", "lastName"].includes(name) ? capitalizeWords(value) : value;

    setFormData((prev) => ({ ...prev, [name]: formattedValue }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, formattedValue) }));
  };

  const handlePhoneChange = (value: string, name: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validatePhone(value) }));
  };

  const handleLanguageChange = (lang: string) => {
    setFormData((prev) => ({ ...prev, language: prev.language === lang.toLowerCase() ? null : lang.toLowerCase() }));
  };

  const isFormValid = (): boolean => {
    return (
      validateFirstName(formData.firstName) === "" &&
      validateLastName(formData.lastName) === "" &&
      validateEmail(formData.email) === "" &&
      validatePhone(formData.phone1) === ""
    );
  };

  // const formatPhone = (phone: string) => {
  //   const cleaned = phone.replace(/\s+/g, "");
  //   return cleaned.startsWith("+") ? cleaned : +${cleaned};
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
      
    const newErrors = {
      firstName: validateFirstName(formData.firstName),
      lastName: validateLastName(formData.lastName),
      email: validateEmail(formData.email),
      phone1: validatePhone(formData.phone1),
      phone2: formData.phone2 ? validatePhone(formData.phone2) : "",
    };
    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error !== "");
    if (hasErrors) {
      setNotification({
        message: t("message.other.makeAppointment.messages.appointmentFailed"),
        type: "error"
      });
      return;
    }
  

    const formattedData = {
      dentalServiceSectionId: formData.dentalServiceSectionId?.id ?? 1,
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone1: formatPhone(formData.phone1),
      phone2: formData.phone2 ? formatPhone(formData.phone2) : "",
      email: formData.email,
      availableTime: formData.availableTime ?? "",
      comment: formData.comment,
      language: formData.language || "de",
    };

    try {
      await createAppointment(formattedData);
      setNotification({
        message: t("message.other.makeAppointment.messages.appointmentScheduled"),
        type: "success",
      });

      setFormData({
        dentalServiceSectionId: null,
        firstName: "",
        lastName: "",
        email: "",
        phone1: "",
        phone2: "",
        language: "de",
        comment: "",
        availableTime: "",
      });
    } catch (err) {
      setNotification({
        message: t("message.other.makeAppointment.messages.appointmentFailed"),
        type: "error"
      });
    }
  };

  return (
      <>
        <FormContainer onSubmit={handleSubmit}>
          <FormTitle>{t("message.other.makeAppointment.formTitle")}</FormTitle>
  
          <FieldContainer>
            <Label>{t("message.other.makeAppointment.labelService")}</Label>
            <ServiceDropdown
              services={services}
              selectedService={formData.dentalServiceSectionId}
              onSelect={(dentalServiceSectionId) => setFormData({ ...formData, dentalServiceSectionId })}
            />
          </FieldContainer>
  
          <TextInput
            label={t("message.other.makeAppointment.labelFirstName")}
            type="text"
            id="firstName"
            name="firstName"
            placeholder={t(
              "message.other.makeAppointment.placeholders.firstName"
            )}
            value={formData.firstName}
            onChange={handleChange}
            required
            error={errors.firstName}
          />
  
          <TextInput
            label={t("message.other.makeAppointment.labelLastName")}
            type="text"
            id="lastName"
            name="lastName"
            placeholder={t("message.other.makeAppointment.placeholders.lastName")}
            value={formData.lastName}
            onChange={handleChange}
            required
            error={errors.lastName}
          />
  
          <TextInput
            label="E-Mail:"
            type="email"
            id="email"
            name="email"
            placeholder="yourname@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            error={errors.email}
          />
  
          <FieldContainer>
            <Label>
              {t("message.other.makeAppointment.labelPhoneNumber1")}
              <RequiredMarker>*</RequiredMarker>
            </Label>
            <PhoneInput
              country={"de"}
              value={formData.phone1}
              onChange={(value) => handlePhoneChange(value, "phone1")}
              inputProps={{ name: "phone1", required: true }}
              placeholder="Geben Sie Ihre Telefonnummer ein"
            />
            {errors.phone1 && (
              <span
                style={{
                  color: "#e74c3c",
                  marginTop: "5px",
                  fontSize: "12px",
                  fontWeight: "normal",
                }}
              >
                {errors.phone1}
              </span>
            )}
          </FieldContainer>
  
          <FieldContainer>
            <Label htmlFor="phone2">
              {t("message.other.makeAppointment.labelPhoneNumber2")}
            </Label>
            <PhoneInput
              country={"de"}
              value={formData.phone2 || ""}
              onChange={(value) => handlePhoneChange(value, "phone2")}
              inputProps={{ name: "phone2" }}
            />
          </FieldContainer>
  
          <FieldContainer>
            <Label>{t("message.other.makeAppointment.language")}</Label>
            <LanguageOptions>
              {["De", "En", "Ru"].map((lang) => (
                <label key={lang}>
                  <input
                    type="checkbox"
                    checked={formData.language === lang}
                    onChange={() => handleLanguageChange(lang)}
                  />
                  {lang}
                </label>
              ))}
            </LanguageOptions>
          </FieldContainer>
  
          <TextInput
            label={t("message.other.makeAppointment.textAreaDate")}
            type="textarea"
            id="availableTime"
            name="availableTime"
            placeholder={t(
              "message.other.makeAppointment.placeholders.textAreaDate"
            )}
            value={formData.availableTime}
            onChange={handleChange}
            maxLength={1024}
            error={errors.availableTime}
            rows={5}
          />
          <CharacterCounter>
            {formData.comment ? formData.comment.length : 0}/1024
          </CharacterCounter>
  
          <TextInput
            label={t("message.other.makeAppointment.labelComment")}
            type="textarea"
            id="comment"
            name="comment"
            placeholder={t(
              "message.other.makeAppointment.placeholders.textAreaComment"
            )}
            value={formData.comment}
            onChange={handleChange}
            maxLength={1024}
            error={errors.comment}
            rows={5}
          />
          <CharacterCounter>
            {(formData.comment ?? "").length}/1024
          </CharacterCounter>
  
          <SubmitButton
            type="submit"
            disabled={!isFormValid()}
            style={{
              backgroundColor: !isFormValid() ? "#ccc" : "#007bff",
              cursor: !isFormValid() ? "not-allowed" : "pointer",
            }}
          >
            {!isFormValid()
              ? t("message.other.makeAppointment.buttonDisabledText")
              : t("message.other.makeAppointment.buttonText")}
          </SubmitButton>
        </FormContainer>
  
        {/* {notification && (
          <Notification
            message={notification.message}
            type={notification.type}
            onClose={() => setNotification(null)}
          />
        )} */}
      </>
    );
  };
  
  export default AppointmentForm;



  // ... (імпорти без змін)

// interface FormData {
//   dentalServiceSectionId: ServiceData | null;
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone1: string;
//   phone2?: string;
//   language?: string | null;
//   comment?: string;
//   availableTime?: string;
// }

// const AppointmentForm = () => {
//   const { t } = useTranslation();

//   const [services, setServices] = useState<ServiceData[]>([]);
//   const [notification, setNotification] = useState<{ message: string; type: "error" | "success" } | null>(null);

//   const [formData, setFormData] = useState<FormData>({
//     dentalServiceSectionId: null,
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone1: "",
//     phone2: "",
//     language: "de",
//     comment: "",
//     availableTime: "",
//   });

//   const [errors, setErrors] = useState<Record<string, string>>({});

//   useEffect(() => {
//     const fetchServices = async () => {
//       try {
//         const data = await getActiveServices();
//         setServices(data);
//       } catch (err: any) {
//         console.error("Error loading services:", err);
//       }
//     };

//     fetchServices();
//   }, []);

//   const capitalizeWords = (text: string): string =>
//     text
//       .split(/\s+/)
//       .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
//       .join(" ");

//   const validateFirstName = (name: string): string => {
//     const regex = /^[A-Za-zäöüßÄÖÜ.'`\-_]*(\s[A-Za-zäöüßÄÖÜ.'`\-_]*)?$/;
//     if (name.trim().length === 0) return t("message.other.makeAppointment.errors.firstNameRequired");
//     if (name[0] === " ") return t("message.other.makeAppointment.errors.firstCharCannotBeSpace");
//     if (name.length < 2) return t("message.other.makeAppointment.errors.firstNameLetterCount");
//     if (name.length > 64) return t("message.other.makeAppointment.errors.firstNameLetterCountMax");
//     if (name.includes("  ")) return t("message.other.makeAppointment.errors.firstNameExtraSpaces");
//     if (!regex.test(name)) return t("message.other.makeAppointment.errors.firstNameInvalid");
//     return "";
//   };

//   const validateLastName = (name: string): string => {
//     const regex = /^[A-Za-zäöüßÄÖÜ.'`\-_]*(\s[A-Za-zäöüßÄÖÜ.'`\-_]*)?$/;
//     if (name.trim().length === 0) return t("message.other.makeAppointment.errors.lastNameRequired");
//     if (name[0] === " ") return t("message.other.makeAppointment.errors.lastCharCannotBeSpace");
//     if (name.length < 2) return t("message.other.makeAppointment.errors.lastNameLetterCount");
//     if (name.length > 64) return t("message.other.makeAppointment.errors.lastNameLetterCountMax");
//     if (name.includes("  ")) return t("message.other.makeAppointment.errors.lastNameExtraSpaces");
//     if (!regex.test(name)) return t("message.other.makeAppointment.errors.lastNameInvalid");
//     return "";
//   };

//   const validateEmail = (email: string): string => {
//     if (!email.trim()) return t("message.other.makeAppointment.errors.emailRequired");
//     if (email.includes(" ")) return t("message.other.makeAppointment.errors.emailWithoutSpaces");
//     if (!email.includes("@")) return t("message.other.makeAppointment.errors.emailWithoutAtSymbol");
//     const parts = email.split("@");
//     if (parts.length !== 2 || parts[1].indexOf(".") === -1) return t("message.other.makeAppointment.errors.emailWithoutDot");
//     const regex = /^[a-zA-Z0-9._,-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     if (!regex.test(email)) return t("message.other.makeAppointment.errors.emailInvalid");
//     return "";
//   };

//   const validatePhone = (phone: string): string => {
//     const cleanedPhone = phone.replace(/\s+/g, "");
//     if (cleanedPhone.length === 0) return t("message.other.makeAppointment.errors.phoneNumberRequired");
//     if (cleanedPhone.length < 10) return t("message.other.makeAppointment.errors.phoneNumberInvalid");
//     return "";
//   };

//   const validateField = (fieldName: string, value: string): string => {
//     switch (fieldName) {
//       case "firstName":
//         return validateFirstName(value);
//       case "lastName":
//         return validateLastName(value);
//       case "email":
//         return validateEmail(value);
//       case "phone1":
//       case "phone2":
//         return validatePhone(value);
//       default:
//         return "";
//     }
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     const formattedValue = ["firstName", "lastName"].includes(name) ? capitalizeWords(value) : value;

//     setFormData((prev) => ({ ...prev, [name]: formattedValue }));
//     setErrors((prev) => ({ ...prev, [name]: validateField(name, formattedValue) }));
//   };

//   const handlePhoneChange = (value: string, name: string) => {
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     setErrors((prev) => ({ ...prev, [name]: validatePhone(value) }));
//   };

//   const handleLanguageChange = (lang: string) => {
//     setFormData((prev) => ({ ...prev, language: prev.language === lang.toLowerCase() ? null : lang.toLowerCase() }));
//   };

//   const isFormValid = (): boolean => {
//     return (
//       validateFirstName(formData.firstName) === "" &&
//       validateLastName(formData.lastName) === "" &&
//       validateEmail(formData.email) === "" &&
//       validatePhone(formData.phone1) === ""
//     );
//   };

//   const formatPhone = (phone: string) => {
//     const cleaned = phone.replace(/\s+/g, "");
//     return cleaned.startsWith("+") ? cleaned : `+${cleaned}`;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const newErrors = {
//       firstName: validateFirstName(formData.firstName),
//       lastName: validateLastName(formData.lastName),
//       email: validateEmail(formData.email),
//       phone1: validatePhone(formData.phone1),
//       phone2: formData.phone2 ? validatePhone(formData.phone2) : "",
//     };
//     setErrors(newErrors);

//     const hasErrors = Object.values(newErrors).some((error) => error !== "");
//     if (hasErrors) {
//       setNotification({
//         message: t("message.other.makeAppointment.messages.appointmentFailed"),
//         type: "error",
//       });
//       return;
//     }

//     const formattedData = {
//       dentalServiceSectionId: formData.dentalServiceSectionId?.id ?? 0,
//       firstName: formData.firstName,
//       lastName: formData.lastName,
//       phone1: formatPhone(formData.phone1),
//       phone2: formData.phone2 ? formatPhone(formData.phone2) : "",
//       email: formData.email,
//       availableTime: formData.availableTime,
//       comment: formData.comment,
//       language: formData.language || "de",
//     };

//     try {
//       await createAppointment(formattedData);
//       setNotification({
//         message: t("message.other.makeAppointment.messages.appointmentScheduled"),
//         type: "success",
//       });

//       setFormData({
//         dentalServiceSectionId: null,
//         firstName: "",
//         lastName: "",
//         email: "",
//         phone1: "",
//         phone2: "",
//         language: "de",
//         comment: "",
//         availableTime: "",
//       });
//     } catch (err) {
//       setNotification({
//         message: t("message.other.makeAppointment.messages.appointmentFailed"),
//         type: "error",
//       });
//     }
//   };

//   return (
//     <>
//       {/* JSX — без змін, лишив твій варіант, він добре структурований */}
//     </>
//   );
// };

// export default AppointmentForm;
