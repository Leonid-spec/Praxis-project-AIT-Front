import React, { useState } from "react";
import {
  StyledReturnButton,
  StyledSaveButton,
  ServicePageSingleContainer,
  Input,
  MainBox,
  TitlesBox,
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
  GalleryContainer,
  GalleryGrid,
  GalleryImageWrapper,
  TitleBox,
  CheckboxLabel,
} from "./style";
import { createService, getServiceById } from "../../../../api/serviceAPI";
import { addImage, pushImageFile } from "../../../../api/imageAPI";
import { ServiceData } from "../../../../store/types/serviceTypes";
import { useNavigate } from "react-router-dom";
import CustomNotification from "../../../../components/CustomNotification/CustomNotification";
import { useTranslation } from "react-i18next";
import { GalleryImageCard } from "../Gallery/GalleryImageCard";

export const ServicePageSingle: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [localPreviewURL, setLocalPreviewURL] = useState<string | null>(null);
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [, setPreviewURLs] = useState<string[]>([]);
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
      }

      const serviceToSend: ServiceData = {
        ...serviceData,
        topImage: uploadedTopImageUrl,
        images: [],
      };

      const newService = await createService(serviceToSend, token);

      const dentalServiceId = newService.id;

      for (const file of selectedImages) {
        await addImage(file, dentalServiceId!, 0, token);
      }

      setNotification({
        message: `Service "${newService.titleEn}" created successfully!`,
        type: "success",
      });

      const getServiceByIdAll = await getServiceById(newService.id!, token);

      const updatedImages = getServiceByIdAll.images!.map((img: any) => {
        if (!img.path.startsWith("https://")) {
          return { ...img, path: "https://" + img.path };
        }
        return img;
      });

      getServiceByIdAll.images = updatedImages;

      setTimeout(() => {
        setIsSaving(false);
        handleReturn();
      }, 1500);
    } catch (error) {
      console.error("❌ Error creating service:", error);
      setNotification({
        message: "Failed to create service.",
        type: "error",
      });
      setIsSaving(false);
    }
  };

  const handleImagesUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const fileArray = Array.from(files);
      const urls = fileArray.map((file) => URL.createObjectURL(file));

      setSelectedImages((prev) => [...prev, ...fileArray]);
      setPreviewURLs((prev) => [...prev, ...urls]);

      setServiceData((prev) => ({
        ...prev,
        images: [
          ...(prev.images ?? []),
          ...urls.map((url) => ({
            id: 0,
            path: url,
            dentalServiceId: serviceData.id,
            doctorId: 0,
          })),
        ],
      }));

      console.log("Selected images:", fileArray);
    }
  };

  const handleDeleteImage = (index: number) => {
    setServiceData((prev) => {
      const newImages = [...(prev.images ?? [])];
      newImages.splice(index, 1);
      return { ...prev, images: newImages };
    });
    setSelectedImages((prev) => {
      const updated = [...prev];
      updated.splice(index, 1);
      return updated;
    });

    setPreviewURLs((prev) => {
      const updated = [...prev];
      updated.splice(index, 1);
      return updated;
    });
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
              <CheckboxLabel>
                {t("message.adminPanel.appointments.doctors.makeCardVisible")}
                <input
                  type="checkbox"
                  checked={serviceData?.isActive}
                  onChange={(e) =>
                    setServiceData({
                      ...serviceData,
                      isActive: e.target.checked,
                    })
                  }
                />
              </CheckboxLabel>
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

        <GalleryContainer>
          <TitleBox>
            {t("message.adminPanel.appointments.services.gallery") || "Gallery"}
          </TitleBox>

          <EditTopImage>
            <UploadInput
              type="file"
              accept="image/*"
              multiple
              onChange={handleImagesUpload}
            />
          </EditTopImage>

          <GalleryGrid>
            {serviceData.images?.map((img, index) => (
              <GalleryImageWrapper key={index}>
                <GalleryImageCard
                  url={img.path}
                  onDelete={() => handleDeleteImage(index)}
                />
              </GalleryImageWrapper>
            ))}
          </GalleryGrid>
        </GalleryContainer>
      </ScrollContainer>
    </ServicePageSingleContainer>
  );
};
