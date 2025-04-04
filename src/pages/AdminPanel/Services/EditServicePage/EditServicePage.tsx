import React, { useState, useEffect } from "react";
import { Service } from "../../../../store/types/serviceTypes";
import { getServiceById, updateService } from "../../../../api/serviceAPI";
import CustomNotification from "../ServicePageSinge/CustomNotification/CustomNotification";
import { 
  ServicePageSingleContainer, HeaderBox, StyledReturnButton, StyledSaveButton,
  EditTopImage, ImageBox, ImagePreview, Input, InputContainer, MainBox, 
  MainBoxText, MakeCardVisibleBox, StyledCheckbox, TitleBoxText, TitlesBox, 
  TitleSection, UploadInput, DescriptionSection 
} from "../ServicePageSinge/style";

const EditServicePage: React.FC<{ onReturnBack: () => void; serviceId: number }> = ({ onReturnBack, serviceId }) => {
  const [serviceData, setServiceData] = useState<Service | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [notification, setNotification] = useState<{ message: string; type: "error" | "success" } | null>(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        if (!token) {
          setError("Access token is missing");
          return;
        }
        const data = await getServiceById(serviceId, token); 
        setServiceData(data); 
      } catch (err: any) {
        console.error(`Failed to fetch service data:`, err);
        setError(err.message || "Failed to fetch data");
      }
    };

    fetchServiceData();
  }, [serviceId, token]); 

  const handleChange = (field: keyof Service, value: any) => {
    setServiceData((prev) => prev ? { ...prev, [field]: value } : prev);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      handleChange("topImage", imageUrl);
    }
  };

  const handleSave = async () => {
    if (isSaving || !serviceData) return;

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
        <h1>Edit Service</h1>
        <StyledSaveButton onClick={handleSave} disabled={isSaving}>
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
                <TitleBoxText>{lang.toUpperCase().slice(5)}</TitleBoxText>
                <Input
                  type="text"
                  placeholder={`Enter title (${lang.slice(-2).toUpperCase()})`}
                  value={serviceData?.[lang] || ""}
                  onChange={(e) => handleChange(lang as keyof Service, e.target.value)}
                />
              </InputContainer>
            ))}
          </TitleSection>
        </MainBoxText>

        <ImageBox>
          {serviceData?.topImage ? (
            <ImagePreview src={serviceData?.topImage} alt="Uploaded preview" />
          ) : (
            <ImagePreview src="https://via.placeholder.com/300" alt="Image" />
          )}
        </ImageBox>
      </MainBox>

      <DescriptionSection>
        <TitlesBox>Descriptions:</TitlesBox>
        {["descriptionDe", "descriptionEn", "descriptionRu"].map((lang) => (
          <InputContainer key={lang}>
            <TitleBoxText>{lang.toUpperCase().slice(11)}</TitleBoxText>
            <textarea
              placeholder={`Enter description (${lang.slice(-2).toUpperCase()})`}
              rows={5}
              value={serviceData?.[lang] || ""}
              onChange={(e) => handleChange(lang as keyof Service, e.target.value)}
            />
          </InputContainer>
        ))}
      </DescriptionSection>

      {notification && <CustomNotification message={notification.message} type={notification.type} />}
    </ServicePageSingleContainer>
  );
};

export default EditServicePage;
