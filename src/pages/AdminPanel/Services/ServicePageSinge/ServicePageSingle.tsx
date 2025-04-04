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
} from "./style";
import CustomNotification from "./CustomNotification/CustomNotification";
import { createService } from "../../../../api/serviceAPI";
import EditServicePage from "../EditServicePage/EditServicePage";

interface ServiceData {
  id?: number | null;
  titleDe: string;
  titleEn: string;
  titleRu: string;
  descriptionDe: string;
  descriptionEn: string;
  descriptionRu: string;
  topImage?: string | null;
  isActive?: boolean;
  images?: string[];
}

interface ServicePageSingleProps {
  onReturnBack: () => void;
}

export const ServicePageSingle: React.FC<ServicePageSingleProps> = ({
  onReturnBack,
}) => {
  const [serviceData, setServiceData] = useState<ServiceData>({
    titleDe: "",
    titleEn: "",
    titleRu: "",
    descriptionDe: "",
    descriptionEn: "",
    descriptionRu: "",
    topImage: null,
    isActive: true,
    images: [],
  });

  const [notification, setNotification] = useState<{
    message: string;
    type: "error" | "success";
  } | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const token = localStorage.getItem("token"); 

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

  const handleSave = async () => {
    if (isSaving) {
      return; 
    }

    if (!token) {
      setNotification({
        message: "Authorization token is missing. Please log in again.",
        type: "error",
      });
      return;
    }

    if (!serviceData.titleEn.trim()) {
      setNotification({
        message: "Title (En) is required.",
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
        onReturnBack(); 
      }, 1500);
    } catch (error: any) {
      console.error("Error creating service:", error.message);
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
        <StyledReturnButton onClick={onReturnBack}>
          ← Return back
        </StyledReturnButton>
        <StyledSaveButton onClick={handleSave} disabled={isSaving}>
          {isSaving ? "Saving..." : "Save all"}
        </StyledSaveButton>
      </HeaderBox>

      {notification && (
        <CustomNotification
          message={notification.message}
          type={notification.type}
        />
      )}

      <MainBox>
        <MainBoxText>
          <MakeCardVisibleBox>
            <TitlesBox>Make card visible for users:</TitlesBox>
            <StyledCheckbox
              type="checkbox"
              checked={serviceData.isActive}
              onChange={(e) => handleChange("isActive", e.target.checked)}
            />
          </MakeCardVisibleBox>

          <EditTopImage>
            <TitlesBox>Edit top image</TitlesBox>
            <UploadInput
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </EditTopImage>

          <TitleSection>
            <TitlesBox>Titles:</TitlesBox>
            <InputContainer>
              <TitleBoxText>De</TitleBoxText>
              <Input
                type="text"
                placeholder="Enter title (De)"
                value={serviceData.titleDe}
                onChange={(e) => handleChange("titleDe", e.target.value)}
              />
            </InputContainer>
            <InputContainer>
              <TitleBoxText>En</TitleBoxText>
              <Input
                type="text"
                placeholder="Enter title (En)"
                value={serviceData.titleEn}
                onChange={(e) => handleChange("titleEn", e.target.value)}
              />
            </InputContainer>
            <InputContainer>
              <TitleBoxText>Ru</TitleBoxText>
              <Input
                type="text"
                placeholder="Enter title (Ru)"
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
        <TitlesBox>Descriptions:</TitlesBox>
        <InputContainer>
          <TitleBoxText>De</TitleBoxText>
          <textarea
            placeholder="Enter description (De)"
            rows={5}
            value={serviceData.descriptionDe}
            onChange={(e) => handleChange("descriptionDe", e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <TitleBoxText>En</TitleBoxText>
          <textarea
            placeholder="Enter description (En)"
            rows={5}
            value={serviceData.descriptionEn}
            onChange={(e) => handleChange("descriptionEn", e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <TitleBoxText>Ru</TitleBoxText>
          <textarea
            placeholder="Enter description (Ru)"
            rows={5}
            value={serviceData.descriptionRu}
            onChange={(e) => handleChange("descriptionRu", e.target.value)}
          />
        </InputContainer>
      </DescriptionSection>
      
    </ServicePageSingleContainer>
  );
};
