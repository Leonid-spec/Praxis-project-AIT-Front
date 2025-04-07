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

interface ServiceData {
  id?: number;
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
    try {
      const response = await fetch("http://localhost:8100/api/service", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(serviceData),
      });

      if (!response.ok) {
        throw new Error(`Failed to save: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Data successfully sent:", data);
      setNotification({
        message: "Service saved successfully!",
        type: "success",
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error saving:", error.message);
        setNotification({
          message: "Error saving service: " + error.message,
          type: "error",
        });
      } else {
        console.error("An unexpected error occurred:", error);
        setNotification({
          message: "An unexpected error occurred.",
          type: "error",
        });
      }
    }
  };

  return (
    <ServicePageSingleContainer>
      <HeaderBox>
        <StyledReturnButton onClick={onReturnBack}>
          ← Return back 
        </StyledReturnButton>
        <StyledSaveButton onClick={handleSave}>Save all</StyledSaveButton>
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
            <TitlesBox>Make card visible for user:</TitlesBox>
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
            <ImagePreview
              src="https://via.placeholder.com/300"
              alt="Placeholder image"
            />
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
