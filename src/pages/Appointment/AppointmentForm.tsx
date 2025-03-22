import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  FormContainer,
  FormTitle,
  SubmitButton,
  LanguageOptions,
  Label,
  FieldContainer,
  CharacterCounter,
  RequiredMarker,
} from "./styles";
import TextInput from "../../components/Input/TextInput";
import Notification from "../../components/Notification/Notification";
import ServiceDropdown, { Service } from "./ServiceDropdown";
import { useTranslation } from "react-i18next";

interface FormData {
  service: Service | null;
  first_name: string;
  last_name: string;
  email: string;
  phone1: string;
  phone2?: string;
  language?: string | null;
  comment: string;
  available_time: string;
}

const AppointmentForm = () => {
  const { t } = useTranslation();

  const serviceList: Service[] = [
    { id: 1, name: "Vorsorge" },
    { id: 2, name: "Frei lassen" },
  ];

  const [notification, setNotification] = useState<{
    message: string;
    type: "error" | "success";
  } | null>(null);

  const [formData, setFormData] = useState<FormData>({
    service: null,
    first_name: "",
    last_name: "",
    email: "",
    phone1: "",
    phone2: "",
    language: "De",
    comment: "",
    available_time: "",
  });

  const [errors, setErrors] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone1: "",
    phone2: "",
    language: "",
    comment: "",
    available_time: "",
  });

  const validateName = (name: string): string => {
    const regex = /^[A-Z][a-zäöüßÄÖÜ.'\-_]{1,63}$/;
    if (name.length === 0)
      return t("message.other.makeAppointment.errors.nameRequired");
    if (name.length < 2)
      return t("message.other.makeAppointment.errors.nameLength");
    if (!regex.test(name))
      return t("message.other.makeAppointment.errors.nameNotChar");
    return "";
  };

  const validateEmail = (email: string): string => {
    if (!email) return t("message.other.makeAppointment.errors.emailRequired");

    if (!email.includes("@"))
      return t("message.other.makeAppointment.errors.emailWithoutDot");

    const parts = email.split("@");
    if (parts.length > 2 || parts[1].indexOf(".") === -1) {
      return t("message.other.makeAppointment.errors.emailWithoutDot");
    }

    const regex = /^[a-zA-Z0-9._,-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(email))
      return t("message.other.makeAppointment.errors.emailInvalid");

    return "";
  };

  const validatePhone = (phone: string): string => {
    const cleanedPhone = phone.replace(/\s+/g, "");
    if (cleanedPhone.length === 0)
      return t("message.other.makeAppointment.errors.phoneNumberRequired");
    if (cleanedPhone.length < 10)
      return t("message.other.makeAppointment.errors.phoneNumberInvalid");
    return "";
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    let updatedValue = value;
    if (name === "first_name" || name === "last_name") {
      updatedValue = value.charAt(0).toUpperCase() + value.slice(1);
    }
    setFormData({ ...formData, [name]: updatedValue });
  };

  const handlePhoneChange = (value: string, name: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleServiceSelect = (service: Service) => {
    setFormData({ ...formData, service });
  };

  const handleLanguageChange = (lang: string) => {
    setFormData({
      ...formData,
      language: formData.language === lang ? null : lang,
    });
  };

  const formatPhone = (phone: string) => {
    const cleaned = phone.replace(/\s+/g, "");
    return cleaned.startsWith("+") ? cleaned : `+${cleaned}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      first_name: validateName(formData.first_name),
      last_name: validateName(formData.last_name),
      email: validateEmail(formData.email),
      phone1: validatePhone(formData.phone1),
      phone2: "",
      language: "",
      comment: "",
      available_time: "",
    };
    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error !== "");
    if (!hasErrors) {
      const formattedData = {
        service: formData.service,
        first_name: formData.first_name,
        last_name: formData.last_name,
        phone1: formatPhone(formData.phone1),
        phone2: formData.phone2 ? formatPhone(formData.phone2) : "",
        email: formData.email,
        available_time: formData.available_time,
        comment: formData.comment,
        language: formData.language?.toLowerCase() || "de",
      };

      console.log("Form submitted:", JSON.stringify(formattedData, null, 2));

      setNotification({
        message: t("message.other.makeAppointment.messages.success"),
        type: "success",
      });
    } else {
      setNotification({
        message: t("message.other.makeAppointment.messages.error"),
        type: "error",
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
            services={serviceList}
            selectedService={formData.service}
            onSelect={handleServiceSelect}
          />
        </FieldContainer>

        <TextInput
          label={t("message.other.makeAppointment.labelFirstName")}
          type="text"
          id="first_name"
          name="first_name"
          placeholder={t("message.other.makeAppointment.placeholders.")}
          value={formData.first_name}
          onChange={handleChange}
          required
          error={errors.first_name}
        />

        <TextInput
          label={t("message.other.makeAppointment.labelSecondName")}
          type="text"
          id="last_name"
          name="last_name"
          placeholder={t("message.other.makeAppointment.placeholders.")}
          value={formData.last_name}
          onChange={handleChange}
          required
          error={errors.last_name}
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
          <Label htmlFor="phone1">
            {t("message.other.makeAppointment.labelPhoneNumber1")}
            <RequiredMarker>*</RequiredMarker>
          </Label>
          <PhoneInput
            country={"de"}
            value={formData.phone1}
            onChange={(value) => handlePhoneChange(value, "phone1")}
            inputProps={{
              name: "phone1",
              required: true,
            }}
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
            placeholder="Geben Sie eine zusätzliche Telefonnummer ein"
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
          id="available_time"
          name="available_time"
          placeholder={t(
            "message.other.makeAppointment.placeholders.textAreaDate"
          )}
          value={formData.available_time}
          onChange={handleChange}
          maxLength={1024}
          error={errors.available_time}
          rows={5}
        />
        <CharacterCounter>
          {formData.available_time.length}/1024
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
        <CharacterCounter>{formData.comment.length}/1024</CharacterCounter>

        <SubmitButton type="submit">
          {t("message.other.makeAppointment.buttonText")}
        </SubmitButton>
      </FormContainer>

      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
    </>
  );
};

export default AppointmentForm;
