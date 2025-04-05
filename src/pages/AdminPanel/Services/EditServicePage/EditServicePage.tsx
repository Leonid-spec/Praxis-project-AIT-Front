import React, { useState, useEffect } from "react";
import {
  getServiceById,
  updateService,
} from "../../../../api/serviceAPI";
import CustomNotification from "../ServicePageSinge/CustomNotification/CustomNotification";
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
import { Service } from "../../../Appointment/ServiceDropdown";
import { ServiceData } from "../../../../store/types/serviceTypes";

const EditServicePage: React.FC<{ onReturnBack: () => void; serviceId: number }> = ({
  onReturnBack,
  serviceId,
}) => {
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

  const handleChange = (field: keyof Service, value: any) => {
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
        errors[field] = "This field is required";
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
      setNotification({ message: `Service "${serviceData.titleEn}" updated successfully!`, type: "success" });
      setTimeout(() => {
        setIsSaving(false);
        onReturnBack();
      }, 1500);
    } catch (error: any) {
      setNotification({ message: `Error updating service: ${error.message}`, type: "error" });
      setIsSaving(false);
    }
  };

  return (
    <ServicePageSingleContainer>
      <HeaderBox>
        <StyledReturnButton onClick={onReturnBack}>← Return back</StyledReturnButton>
        <StyledSaveButton onClick={handleSave} disabled={!isFormValid() || isSaving}>
          {isSaving ? "Saving..." : "Save all"}
        </StyledSaveButton>
      </HeaderBox>

      <MainBox>
        <MainBoxText>
          <MakeCardVisibleBox>
            <TitlesBox>Make card visible for users:</TitlesBox>
            <StyledCheckbox
              type="checkbox"
              checked={serviceData?.isActive || false}
              onChange={(e) => handleChange("isActive", e.target.checked)}
            />
          </MakeCardVisibleBox>

          <EditTopImage>
            <TitlesBox>Edit top image</TitlesBox>
            <UploadInput type="file" accept="image/*" onChange={handleImageUpload} />
          </EditTopImage>

          <TitleSection>
            <TitlesBox>Titles:</TitlesBox>
            {["titleDe", "titleEn", "titleRu"].map((lang) => (
              <InputContainer key={lang}>
                <TitleBoxText>{lang.slice(-2).toUpperCase()}</TitleBoxText>
                <Input
                  type="text"
                  placeholder={`Enter title (${lang.slice(-2).toUpperCase()})`}
                  value={serviceData?.[lang as keyof ServiceData] || ""}
                  onChange={(e) => handleChange(lang as keyof Service, e.target.value)}
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
        <TitlesBox>Descriptions:</TitlesBox>
        {["descriptionDe", "descriptionEn", "descriptionRu"].map((lang) => (
          <InputContainer key={lang}>
            <TitleBoxText>{lang.slice(-2).toUpperCase()}</TitleBoxText>
            <textarea
              placeholder={`Enter description (${lang.slice(-2).toUpperCase()})`}
              rows={5}
              value={serviceData?.[lang as keyof ServiceData] || ""}
              onChange={(e) => handleChange(lang as keyof Service, e.target.value)}
            />
            {fieldErrors[lang] && (
              <span style={{ color: "red", fontSize: "0.8rem" }}>{fieldErrors[lang]}</span>
            )}
          </InputContainer>
        ))}
      </DescriptionSection>

      {notification && <CustomNotification message={notification.message} type={notification.type} />}
    </ServicePageSingleContainer>
  );
};

export default EditServicePage;
