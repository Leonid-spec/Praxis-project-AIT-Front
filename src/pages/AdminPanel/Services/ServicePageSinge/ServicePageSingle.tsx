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
import { getFile, pushImageFile } from "../../../../api/imageAPI";
import { ServiceData } from "../../../../store/types/serviceTypes";
import { useNavigate } from "react-router-dom";
import CustomNotification from "../../../../components/CustomNotification/CustomNotification";
import { useTranslation } from "react-i18next";
import GalleryServices from "../Gallery/GalleryServices";

export const ServicePageSingle: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [localPreviewURL, setLocalPreviewURL] = useState<string | null>(null);

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

  const [selectedImageFile, setSelectedImageFile] = useState<File | null>(null);
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
      setSelectedImageFile(file);
      const imageUrl = URL.createObjectURL(file);
      setLocalPreviewURL(imageUrl);
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
    } = serviceData;

    return (
      (titleDe ?? "").trim() !== "" &&
      (titleEn ?? "").trim() !== "" &&
      (titleRu ?? "").trim() !== "" &&
      (descriptionDe ?? "").trim() !== "" &&
      (descriptionEn ?? "").trim() !== "" &&
      (descriptionRu ?? "").trim() !== "" &&
      selectedImageFile !== null
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
      let uploadedTopImageUrl = "";
      if (selectedImageFile) {
        uploadedTopImageUrl = await pushImageFile(selectedImageFile, token);
        uploadedTopImageUrl = "https://" + uploadedTopImageUrl;
        console.log("Uploaded image URL:", uploadedTopImageUrl);
      }

      const serviceToSend: ServiceData = {
        ...serviceData,
        topImage: uploadedTopImageUrl,
      };

      const newService = await createService(serviceToSend, token);
      setNotification({
        message: `Service "${newService.titleEn}" created successfully!`,
        type: "success",
      });

      setServiceData((prev) => ({
        ...prev,
        topImage: newService.topImage,
      }));
      console.log("Image fetched from server 2:", newService);
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
        <StyledSaveButton
          onClick={handleSave}
          disabled={!isFormValid() || isSaving}
        >
          {isSaving
            ? t("message.adminPanel.appointments.services.savingButton")
            : t("message.adminPanel.appointments.services.saveButton")}
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
              <TitlesBox>
                {t("message.adminPanel.appointments.services.makeCardVisible")}
              </TitlesBox>
              <StyledCheckbox
                type="checkbox"
                checked={serviceData.isActive}
                onChange={(e) => handleChange("isActive", e.target.checked)}
              />
            </MakeCardVisibleBox>

            <EditTopImage>
              <TitlesBox>
                {t("message.adminPanel.appointments.services.editTopImage")}
              </TitlesBox>
              <UploadInput
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </EditTopImage>

            <TitleSection>
              <TitlesBox>
                {t("message.adminPanel.appointments.services.titles")}
              </TitlesBox>
              {["De", "En", "Ru"].map((lang) => (
                <InputContainer key={lang}>
                  <TitleBoxText>{lang}</TitleBoxText>
                  <Input
                    type="text"
                    placeholder={t(
                      `message.adminPanel.appointments.services.enterTitle${lang}`
                    )}
                    value={serviceData[`title${lang as "De" | "En" | "Ru"}`]}
                    onChange={(e) =>
                      handleChange(
                        `title${lang as keyof ServiceData}`,
                        e.target.value
                      )
                    }
                  />
                </InputContainer>
              ))}
            </TitleSection>
          </MainBoxText>

          <ImageBox>
            <ImagePreview
              src={
                serviceData.topImage ||
                localPreviewURL ||
                "https://via.placeholder.com/300"
              }
              alt="Uploaded preview"
            />
          </ImageBox>
        </MainBox>

        <DescriptionSection>
          <TitlesBox>
            {t("message.adminPanel.appointments.services.descriptions")}
          </TitlesBox>
          {["De", "En", "Ru"].map((lang) => (
            <InputContainer key={lang}>
              <TitleBoxText>{lang}</TitleBoxText>
              <textarea
                placeholder={t(
                  `message.adminPanel.appointments.services.enterDescription${lang}`
                )}
                rows={5}
                value={serviceData[`description${lang as "De" | "En" | "Ru"}`]}
                onChange={(e) =>
                  handleChange(
                    `description${lang as keyof ServiceData}`,
                    e.target.value
                  )
                }
              />
            </InputContainer>
          ))}
        </DescriptionSection>

        <GalleryServices />

      </ScrollContainer>
    </ServicePageSingleContainer>
  );
};
