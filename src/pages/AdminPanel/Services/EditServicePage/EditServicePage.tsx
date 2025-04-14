import React, { useState, useEffect } from "react";
import { getServiceById, updateService } from "../../../../api/serviceAPI";
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
  GalleryGrid,
  GalleryImageWrapper,
} from "../ServicePageSinge/style";
import { ServiceData } from "../../../../store/types/serviceTypes";
import CustomNotification from "../../../../components/CustomNotification/CustomNotification";
import { useTranslation } from "react-i18next";
import { addImage } from "../../../../api/imageAPI";
import { GalleryContainer, TitleBox, UploadText } from "../Gallery/styles";
import { GalleryImageCard } from "../Gallery/GalleryImageCard";

const EditServicePage: React.FC<{
  onReturnBack: () => void;
  serviceId: number;
}> = ({ onReturnBack, serviceId }) => {
  const { t } = useTranslation();
  const [serviceData, setServiceData] = useState<ServiceData | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [notification, setNotification] = useState<{
    message: string;
    type: "error" | "success";
  } | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const token = localStorage.getItem("token");
  const [selectedImageFile, setSelectedImageFile] = useState<File | null>(null);
  const [galleryFiles, setGalleryFiles] = useState<File[]>([]);
  const [galleryPreviews, setGalleryPreviews] = useState<string[]>([]);

  useEffect(() => {
    const fetchServiceData = async () => {
      if (!token) return;
      try {
        const data = await getServiceById(serviceId, token);
        setServiceData(data);
        if (data.images) {
          setGalleryPreviews(
            data.images.map((img) =>
              img.path.startsWith("https://") ? img.path : "https://" + img.path
            )
          );
        }
      } catch (err: any) {
        setNotification({
          message: err.message || "Failed to fetch data",
          type: "error",
        });
      }
    };
    fetchServiceData();
  }, [serviceId, token]);

  const handleChange = (field: keyof ServiceData, value: any) => {
    setServiceData((prev) => (prev ? { ...prev, [field]: value } : prev));
    setFieldErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
      setSelectedImageFile(file);
    }
  };

  const uploadImageToCloud = async () => {
    if (!selectedImageFile) return;

    if (!previewImage || !serviceData?.id) return;
    const file = await fetch(previewImage)
      .then((res) => res.blob())
      .then((blob) => new File([blob], "image.jpg", { type: "image/jpeg" }));

    try {
      const uploadedImageUrl = await addImage(file, serviceData.id, 0, token!);
      console.log("Uploaded image URL:", uploadedImageUrl);
      return `https://${uploadedImageUrl.path}`;
    } catch (error) {
      console.error("Failed to upload image:", error);
      setNotification({
        message: `Failed to upload image: ${(error as Error).message}`,
        type: "error",
      });
    }
  };

  const validateFields = (): boolean => {
    if (!serviceData) return false;

    const requiredFields: (keyof ServiceData)[] = [
      "titleDe",
      "titleEn",
      "titleRu",
      "descriptionDe",
      "descriptionEn",
      "descriptionRu",
    ];

    const errors: Record<string, string> = {};
    requiredFields.forEach((field) => {
      const value = serviceData[field];
      if (typeof value !== "string" || value.trim() === "") {
        errors[field] = t(
          "message.adminPanel.appointments.services.requiredField"
        );
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

    let uploadedImageUrl = serviceData.topImage;
    if (previewImage) {
      console.log(
        "Image preview is available, starting upload... previewImage: ",
        previewImage
      );
      const cloudImageUrl = await uploadImageToCloud();
      if (cloudImageUrl) {
        uploadedImageUrl = cloudImageUrl;
      }
    }

    try {
      console.log("Updating service data...");
      await updateService(
        { ...serviceData, topImage: uploadedImageUrl },
        token!
      );
      console.log("Service updated successfully!", serviceData);
      setNotification({
        message: `${t("message.adminPanel.appointments.services.updated")} "${
          serviceData.titleEn
        }"`,
        type: "success",
      });
      setTimeout(() => {
        setIsSaving(false);
        onReturnBack();
      }, 1500);
    } catch (error: any) {
      setNotification({
        message: `${t(
          "message.adminPanel.appointments.services.errorUpdating"
        )}: ${error.message}`,
        type: "error",
      });
      setIsSaving(false);
    }
  };

  const handleReplaceGalleryImage = (index: number) => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.onchange = () => {
      const file = fileInput.files?.[0];
      if (file) {
        const newUrl = URL.createObjectURL(file);

        setGalleryFiles((prev) => {
          const updated = [...prev];
          updated[index] = file;
          return updated;
        });

        setGalleryPreviews((prev) => {
          const updated = [...prev];
          updated[index] = newUrl;
          return updated;
        });
      }
    };
    fileInput.click();
  };

  const handleDeleteGalleryImage = (index: number) => {
    setGalleryFiles((prev) => {
      const updated = [...prev];
      updated.splice(index, 1);
      return updated;
    });

    setGalleryPreviews((prev) => {
      const updated = [...prev];
      updated.splice(index, 1);
      return updated;
    });

    setServiceData((prev) => {
      if (!prev) return prev;
      const newImages = [...(prev.images || [])];
      newImages.splice(index, 1);
      return { ...prev, images: newImages };
    });
  };

  const handleAddGalleryImages = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (files && files.length > 0 && serviceData?.id) {
      const fileArray = Array.from(files);
      const urls = fileArray.map((file) => URL.createObjectURL(file));

      setGalleryFiles((prev) => [...prev, ...fileArray]);
      setGalleryPreviews((prev) => [...prev, ...urls]);

      fileArray.forEach(async (file) => {
        await addImage(file, serviceData.id!, 0, token!);
      });

      setNotification({
        message: `${fileArray.length} ${t(
          "message.adminPanel.appointments.services.imagesAdded"
        )}`,
        type: "success",
      });
    }
  };

  return (
    <ServicePageSingleContainer>
      <div>
        <HeaderBox>
          <StyledReturnButton onClick={onReturnBack}>
            ← {t("message.adminPanel.appointments.services.returnBack")}
          </StyledReturnButton>
          <StyledSaveButton
            onClick={handleSave}
            disabled={!isFormValid() || isSaving}
          >
            {isSaving
              ? t("message.adminPanel.appointments.services.saving")
              : t("message.adminPanel.appointments.services.saveAll")}
          </StyledSaveButton>
        </HeaderBox>

        <MainBox>
          <MainBoxText>
            <MakeCardVisibleBox>
              <TitlesBox>
                {t("message.adminPanel.appointments.services.makeCardVisible")}
              </TitlesBox>
              <StyledCheckbox
                type="checkbox"
                checked={serviceData?.isActive || false}
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
              {["titleDe", "titleEn", "titleRu"].map((lang) => (
                <InputContainer key={lang}>
                  <TitleBoxText>{lang.slice(-2).toUpperCase()}</TitleBoxText>
                  <Input
                    type="text"
                    placeholder={t(
                      "message.adminPanel.appointments.services.enterTitle",
                      { lang: lang.slice(-2).toUpperCase() }
                    )}
                    value={serviceData?.[lang as keyof ServiceData] || ""}
                    onChange={(e) =>
                      handleChange(lang as keyof ServiceData, e.target.value)
                    }
                  />
                  {fieldErrors[lang] && (
                    <span style={{ color: "red", fontSize: "0.8rem" }}>
                      {fieldErrors[lang]}
                    </span>
                  )}
                </InputContainer>
              ))}
            </TitleSection>
          </MainBoxText>

          <ImageBox>
            {previewImage ? (
              <ImagePreview src={previewImage} alt="Image preview" />
            ) : (
              <ImagePreview src={serviceData?.topImage} alt="Image" />
            )}
          </ImageBox>
        </MainBox>

        <DescriptionSection>
          <TitlesBox>
            {t("message.adminPanel.appointments.services.descriptions")}
          </TitlesBox>
          {["descriptionDe", "descriptionEn", "descriptionRu"].map((lang) => (
            <InputContainer key={lang}>
              <TitleBoxText>{lang.slice(-2).toUpperCase()}</TitleBoxText>
              <textarea
                placeholder={t(
                  "message.adminPanel.appointments.services.enterDescription",
                  { lang: lang.slice(-2).toUpperCase() }
                )}
                rows={5}
                value={serviceData?.[lang as keyof ServiceData] || ""}
                onChange={(e) =>
                  handleChange(lang as keyof ServiceData, e.target.value)
                }
              />
              {fieldErrors[lang] && (
                <span style={{ color: "red", fontSize: "0.8rem" }}>
                  {fieldErrors[lang]}
                </span>
              )}
            </InputContainer>
          ))}
        </DescriptionSection>
      </div>

      {notification && (
        <CustomNotification
          message={notification.message}
          type={notification.type}
        />
      )}

      <GalleryContainer>
        <TitleBox>
          {t("message.adminPanel.appointments.services.gallery") || "Gallery"}
        </TitleBox>

        <EditTopImage>
          <UploadText>
            {t("message.adminPanel.appointments.services.editGallery") ||
              "Upload Gallery Images"}
          </UploadText>
          <UploadInput
            type="file"
            accept="image/*"
            multiple
            onChange={handleAddGalleryImages}
          />
        </EditTopImage>

        {galleryPreviews.length > 0 && (
          <GalleryGrid>
            {galleryPreviews.map((url, index) => (
              <GalleryImageWrapper key={index}>
                <GalleryImageCard
                  url={url}
                  onReplace={() => handleReplaceGalleryImage(index)}
                  onDelete={() => handleDeleteGalleryImage(index)}
                />
              </GalleryImageWrapper>
            ))}
          </GalleryGrid>
        )}
      </GalleryContainer>
    </ServicePageSingleContainer>
  );
};

export default EditServicePage;
