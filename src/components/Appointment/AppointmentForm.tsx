import React, { useEffect, useState } from "react";
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
import TextInput from "../Input/TextInput";
import Notification from "../Notification/Notification";
import { useTranslation } from "react-i18next";
import { ServiceData } from "../../store/types/serviceTypes";
import { getActiveServices } from "../../api/serviceAPI";
import ServiceDropdown from "./ServiceDropdown/ServiceDropdown";
import { createAppointment } from "../../api/appointmentAPI";
import { AppointmentData } from "../../store/types/appointmentTypes";

const AppointmentForm = ({ onSuccess }: { onSuccess?: () => void }) => {
  const { t } = useTranslation();

  const [services, setServices] = useState<ServiceData[]>([]);

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

  const [notification, setNotification] = useState<{
    message: string;
    type: "error" | "success";
  } | null>(null);

  const [formData, setFormData] = useState<
    AppointmentData & { dentalServiceSectionId: ServiceData | null | number }
  >({
    dentalServiceSectionId: null,
    firstName: "",
    lastName: "",
    email: "",
    phone1: "",
    phone2: "",
    language: "De",
    comment: "",
    availableTime: "",
    isNew: true,
  });

  const [errors, setErrors] = useState({
    dentalServiceSectionId: null,
    firstName: "",
    lastName: "",
    email: "",
    phone1: "",
    phone2: "",
    comment: "",
    availableTime: "",
    isNew: true,
  });

  const capitalizeWords = (text: string): string => {
    return text
      .split(/\s+/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  const handlePhoneChange = (value: string, name: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validatePhone(value) }));
  };

  const validatePhone = (phone: string): string => {
    const cleanedPhone = phone.replace(/\s+/g, "");
    if (cleanedPhone.length === 0)
      return t("message.other.makeAppointment.errors.phoneNumberRequired");
    if (cleanedPhone.length < 10)
      return t("message.other.makeAppointment.errors.phoneNumberInvalid");
    return "";
  };

  const isFormValid = (): boolean => {
    return (
      formData.firstName.trim().length > 0 &&
      formData.lastName.trim().length > 0 &&
      validatePhone(formData.phone1) === "" &&
      formData.email.trim().length > 0
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid()) return;

    const formatPhone = (phone: string) => {
      const cleaned = phone.replace(/\s+/g, "");
      return cleaned.startsWith("+") ? cleaned : `+${cleaned}`;
    };

    const serviceId =
      typeof formData.dentalServiceSectionId === "object" &&
      formData.dentalServiceSectionId !== null &&
      "id" in formData.dentalServiceSectionId
        ? (formData.dentalServiceSectionId as ServiceData).id
        : formData.dentalServiceSectionId ?? null;
    console.log("Service ID:", serviceId);
    try {
      const newAppointment = await createAppointment({
        dentalServiceSectionId:
          typeof formData.dentalServiceSectionId === "object" &&
          formData.dentalServiceSectionId !== null &&
          "id" in formData.dentalServiceSectionId
            ? (formData.dentalServiceSectionId as ServiceData).id
            : formData.dentalServiceSectionId ?? 1,
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone1: formatPhone(formData.phone1),
        phone2: formData.phone2 ? formatPhone(formData.phone2) : "",
        email: formData.email,
        availableTime: formData.availableTime || "",
        comment: formData.comment || "",
        language: formData.language?.toLowerCase() || "de",
        isNew: true,
      });
    console.log("newAppointment:", newAppointment);

      // console.log("Appointment created successfully:", newAppointment);
      setNotification({
        message: t(
          "message.other.makeAppointment.messages.appointmentScheduled"
        ),
        type: "success",
      });

      setFormData({
        dentalServiceSectionId: null,
        firstName: "",
        lastName: "",
        email: "",
        phone1: "",
        phone2: "",
        language: "De",
        comment: "",
        availableTime: "",
        isNew: true,
      });

      setTimeout(() => {
        if (onSuccess) onSuccess();
      }, 2000);
    } catch (err: any) {
      setNotification({
        message: t("message.other.makeAppointment.messages.appointmentFailed"),
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
            services={services}
            selectedService={formData.dentalServiceSectionId}
            onSelect={(dentalServiceSectionId) =>
              setFormData({ ...formData, dentalServiceSectionId })
            }
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
          onChange={(e) =>
            setFormData({
              ...formData,
              firstName: capitalizeWords(e.target.value),
            })
          }
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
          onChange={(e) =>
            setFormData({
              ...formData,
              lastName: capitalizeWords(e.target.value),
            })
          }
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
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
          {errors.phone1 && <span>{errors.phone1}</span>}
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
                  onChange={() => setFormData({ ...formData, language: lang })}
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
          onChange={(e) =>
            setFormData({ ...formData, availableTime: e.target.value })
          }
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
          onChange={(e) =>
            setFormData({ ...formData, comment: e.target.value })
          }
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
