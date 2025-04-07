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

export const ServicePageSingle: React.FC = () => {
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
          ← Return back
        </StyledReturnButton>
        <StyledSaveButton onClick={handleSave}
          disabled={!isFormValid() || isSaving}>
          {isSaving ? "Saving..." : "Save all"}
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
                accept="topImage/*"
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
  
     </ScrollContainer>

    </ServicePageSingleContainer>
  );
};
