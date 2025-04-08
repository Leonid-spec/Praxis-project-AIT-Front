import React, { useState, useEffect } from "react";
import {
  getServiceById,
  updateService,
} from "../../../../api/serviceAPI";
import {
  ServicePageSingleContainer,
  HeaderBox,
  StyledReturnButton,
  StyledSaveButton,
  EditTopImage,
  ImageBox,
  ImagePreview,
  Input,
  InputContainer,
  MainBox,
  MainBoxText,
  MakeCardVisibleBox,
  StyledCheckbox,
  TitleBoxText,
  TitlesBox,
  TitleSection,
  UploadInput,
  DescriptionSection,
} from "../ServicePageSinge/style";
import { ServiceData } from "../../../../store/types/serviceTypes";
import CustomNotification from "../../../../components/CustomNotification/CustomNotification";
import { useTranslation } from "react-i18next";

const EditServicePage: React.FC<{ onReturnBack: () => void; serviceId: number }> = ({
  onReturnBack,
  serviceId,
}) => {
  const { t } = useTranslation();
  const [serviceData, setServiceData] = useState<ServiceData | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [notification, setNotification] = useState<{ message: string; type: "error" | "success" } | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchServiceData = async () => {
      if (!token) return;
      try {
        const data = await getServiceById(serviceId, token);
        setServiceData(data);
      } catch (err: any) {
        setNotification({ message: err.message || "Failed to fetch data", type: "error" });
      }
    };

    fetchServiceData();
  }, [serviceId, token]);

  const handleChange = (field: keyof ServiceData, value: any) => {
    setServiceData((prev) => prev ? { ...prev, [field]: value } : prev);
    setFieldErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      handleChange("topImage", imageUrl);
    }
  };

  const validateFields = (): boolean => {
    if (!serviceData) return false;

    const requiredFields: (keyof ServiceData)[] = [
      "titleDe", "titleEn", "titleRu",
      "descriptionDe", "descriptionEn", "descriptionRu",
    ];

    const errors: Record<string, string> = {};
    requiredFields.forEach((field) => {
      const value = serviceData[field];
      if (typeof value !== "string" || value.trim() === "") {
        errors[field] = t("message.adminPanel.appointments.services.requiredField");
      }
    });

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isFormValid = (): boolean => {
    if (!serviceData) return false;

    return (
      !!serviceData.titleDe?.trim() &&
      !!serviceData.titleEn?.trim() &&
      !!serviceData.titleRu?.trim() &&
      !!serviceData.descriptionDe?.trim() &&
      !!serviceData.descriptionEn?.trim() &&
      !!serviceData.descriptionRu?.trim()
    );
  };

  const handleSave = async () => {
    if (isSaving || !serviceData) return;
    if (!validateFields()) return;

    setIsSaving(true);
    try {
      await updateService(serviceData, token!);
      setNotification({ message: `${t("message.adminPanel.appointments.services.updated")} "${serviceData.titleEn}"`, type: "success" });
      setTimeout(() => {
        setIsSaving(false);
        onReturnBack();
      }, 1500);
    } catch (error: any) {
      setNotification({ message: `${t("message.adminPanel.appointments.services.errorUpdating")}: ${error.message}`, type: "error" });
      setIsSaving(false);
    }
  };

  return (
    <>
      <ServicePageSingleContainer>
        <div>
          <HeaderBox>
            <StyledReturnButton onClick={onReturnBack}>{t("message.adminPanel.appointments.services.returnBack")}</StyledReturnButton>
            <StyledSaveButton onClick={handleSave} disabled={!isFormValid() || isSaving}>
              {isSaving ? t("message.adminPanel.appointments.services.saving") : t("message.adminPanel.appointments.services.saveAll")}
            </StyledSaveButton>
          </HeaderBox>
    
          <MainBox>
            <MainBoxText>
              <MakeCardVisibleBox>
                <TitlesBox>{t("message.adminPanel.appointments.services.makeCardVisible")}</TitlesBox>
                <StyledCheckbox
                  type="checkbox"
                  checked={serviceData?.isActive || false}
                  onChange={(e) => handleChange("isActive", e.target.checked)}
                />
              </MakeCardVisibleBox>
    
              <EditTopImage>
                <TitlesBox>{t("message.adminPanel.appointments.services.editTopImage")}</TitlesBox>
                <UploadInput type="file" accept="image/*" onChange={handleImageUpload} />
              </EditTopImage>
    
              <TitleSection>
                <TitlesBox>{t("message.adminPanel.appointments.services.titles")}</TitlesBox>
                {["titleDe", "titleEn", "titleRu"].map((lang) => (
                  <InputContainer key={lang}>
                    <TitleBoxText>{lang.slice(-2).toUpperCase()}</TitleBoxText>
                    <Input
                      type="text"
                      placeholder={t("message.adminPanel.appointments.services.enterTitle", { lang: lang.slice(-2).toUpperCase() })}
                      value={serviceData?.[lang as keyof ServiceData] || ""}
                      onChange={(e) => handleChange(lang as keyof ServiceData, e.target.value)}
                    />
                    {fieldErrors[lang] && (
                      <span style={{ color: "red", fontSize: "0.8rem" }}>{fieldErrors[lang]}</span>
                    )}
                  </InputContainer>
                ))}
              </TitleSection>
            </MainBoxText>
    
            <ImageBox>
              {serviceData?.topImage ? (
                <ImagePreview src={serviceData.topImage} alt="Uploaded preview" />
              ) : (
                <ImagePreview src="https://via.placeholder.com/300" alt="Image" />
              )}
            </ImageBox>
          </MainBox>
    
          <DescriptionSection>
            <TitlesBox>{t("message.adminPanel.appointments.services.descriptions")}</TitlesBox>
            {["descriptionDe", "descriptionEn", "descriptionRu"].map((lang) => (
              <InputContainer key={lang}>
                <TitleBoxText>{lang.slice(-2).toUpperCase()}</TitleBoxText>
                <textarea
                  placeholder={t("message.adminPanel.appointments.services.enterDescription", { lang: lang.slice(-2).toUpperCase() })}
                  rows={5}
                  value={serviceData?.[lang as keyof ServiceData] || ""}
                  onChange={(e) => handleChange(lang as keyof ServiceData, e.target.value)}
                />
                {fieldErrors[lang] && (
                  <span style={{ color: "red", fontSize: "0.8rem" }}>{fieldErrors[lang]}</span>
                )}
              </InputContainer>
            ))}
          </DescriptionSection>
        </div>
  
        {notification && <CustomNotification message={notification.message} type={notification.type} />}
      </ServicePageSingleContainer>
    </>
  );
};

export default EditServicePage;
