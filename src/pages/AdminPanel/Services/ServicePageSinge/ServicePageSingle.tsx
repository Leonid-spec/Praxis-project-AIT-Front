import React, { useState } from "react";
import {
  StyledReturnButton,
  StyledSaveButton,
  ServicePageSingleContainer,
  Input,
  MainBox,
  TitlesBox,
  StyledCheckbox,
  TitleBoxText,
  ImagePreview,
  UploadInput,
  DescriptionSection,
  EditTopImage,
  HeaderBox,
  ImageBox,
  InputContainer,
  MainBoxText,
  MakeCardVisibleBox,
  TitleSection,
  ScrollContainer,
} from "./style";
import { createService } from "../../../../api/serviceAPI";
import { ServiceData } from "../../../../store/types/serviceTypes";
import { useNavigate } from "react-router-dom";
import CustomNotification from "../../../../components/CustomNotification/CustomNotification";
import { useTranslation } from "react-i18next";

export const ServicePageSingle: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [serviceData, setServiceData] = useState<ServiceData>({
    titleDe: "",
    titleEn: "",
    titleRu: "",
    descriptionDe: "",
    descriptionEn: "",
    descriptionRu: "",
    topImage: "",
    isActive: true,
    images: [],
  });

  const [notification, setNotification] = useState<{
    message: string;
    type: "error" | "success";
  } | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const token = localStorage.getItem("token");

  const handleReturn = () => {
    navigate(-1);
  };

  const handleChange = (field: keyof ServiceData, value: string | boolean) => {
    setServiceData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setServiceData((prev) => ({
        ...prev,
        topImage: imageUrl,
      }));
    }
  };

  const isFormValid = (): boolean => {
    const {
      titleDe,
      titleEn,
      titleRu,
      descriptionDe,
      descriptionEn,
      descriptionRu,
      topImage,
    } = serviceData;

    return (
      (titleDe ?? "").trim() !== "" &&
      (titleEn ?? "").trim() !== "" &&
      (titleRu ?? "").trim() !== "" &&
      (descriptionDe ?? "").trim() !== "" &&
      (descriptionEn ?? "").trim() !== "" &&
      (descriptionRu ?? "").trim() !== "" &&
      (topImage ?? "") !== ""
    );
  };

  const handleSave = async () => {
    if (!isFormValid()) return;

    if (!token) {
      setNotification({
        message: "Authorization token is missing. Please log in again.",
        type: "error",
      });
      return;
    }

    setIsSaving(true);

    try {
      const newService = await createService(serviceData, token);
      setNotification({
        message: `Service "${newService.titleEn}" created successfully!`,
        type: "success",
      });

      setTimeout(() => {
        setIsSaving(false);
        handleReturn();
      }, 1500);
    } catch (error: any) {
      setNotification({
        message: `Error creating service: ${error.message}`,
        type: "error",
      });
      setIsSaving(false);
    }
  };

  return (
    <ServicePageSingleContainer>
      <HeaderBox>
        <StyledReturnButton onClick={handleReturn}>
          ← {t("message.adminPanel.appointments.services.returnBack")}
        </StyledReturnButton>
        <StyledSaveButton onClick={handleSave} disabled={!isFormValid() || isSaving}>
          {isSaving ? t("message.adminPanel.appointments.services.savingButton") : 
          t("message.adminPanel.appointments.services.saveButton")}
        </StyledSaveButton>
      </HeaderBox>

      {notification && (
        <CustomNotification
          message={notification.message}
          type={notification.type}
        />
      )}

      <ScrollContainer>
        <MainBox>
          <MainBoxText>
            <MakeCardVisibleBox>
              <TitlesBox>{t("message.adminPanel.appointments.services.makeCardVisible")}</TitlesBox>
              <StyledCheckbox
                type="checkbox"
                checked={serviceData.isActive}
                onChange={(e) => handleChange("isActive", e.target.checked)}
              />
            </MakeCardVisibleBox>

            <EditTopImage>
              <TitlesBox>{t("message.adminPanel.appointments.services.editTopImage")}</TitlesBox>
              <UploadInput
                type="file"
                accept="topImage/*"
                onChange={handleImageUpload}
              />
            </EditTopImage>

            <TitleSection>
              <TitlesBox>{t("message.adminPanel.appointments.services.titles")}</TitlesBox>
              <InputContainer>
                <TitleBoxText>De</TitleBoxText>
                <Input
                  type="text"
                  placeholder={t("message.adminPanel.appointments.services.enterTitleDe")}
                  value={serviceData.titleDe}
                  onChange={(e) => handleChange("titleDe", e.target.value)}
                />
              </InputContainer>
              <InputContainer>
                <TitleBoxText>En</TitleBoxText>
                <Input
                  type="text"
                  placeholder={t("message.adminPanel.appointments.services.enterTitleEn")}
                  value={serviceData.titleEn}
                  onChange={(e) => handleChange("titleEn", e.target.value)}
                />
              </InputContainer>
              <InputContainer>
                <TitleBoxText>Ru</TitleBoxText>
                <Input
                  type="text"
                  placeholder={t("message.adminPanel.appointments.services.enterTitleRu")}
                  value={serviceData.titleRu}
                  onChange={(e) => handleChange("titleRu", e.target.value)}
                />
              </InputContainer>
            </TitleSection>
          </MainBoxText>

          <ImageBox>
            {serviceData.topImage ? (
              <ImagePreview src={serviceData.topImage} alt="Uploaded preview" />
            ) : (
              <ImagePreview src="https://via.placeholder.com/300" alt="Image" />
            )}
          </ImageBox>
        </MainBox>

        <DescriptionSection>
          <TitlesBox>{t("message.adminPanel.appointments.services.descriptions")}</TitlesBox>
          <InputContainer>
            <TitleBoxText>De</TitleBoxText>
            <textarea
              placeholder={t("message.adminPanel.appointments.services.enterDescriptionDe")}
              rows={5}
              value={serviceData.descriptionDe}
              onChange={(e) => handleChange("descriptionDe", e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <TitleBoxText>En</TitleBoxText>
            <textarea
              placeholder={t("message.adminPanel.appointments.services.enterDescriptionEn")}
              rows={5}
              value={serviceData.descriptionEn}
              onChange={(e) => handleChange("descriptionEn", e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <TitleBoxText>Ru</TitleBoxText>
            <textarea
              placeholder={t("message.adminPanel.appointments.services.enterDescriptionRu")}
              rows={5}
              value={serviceData.descriptionRu}
              onChange={(e) => handleChange("descriptionRu", e.target.value)}
            />
          </InputContainer>
        </DescriptionSection>
      </ScrollContainer>
    </ServicePageSingleContainer>
  );
};
