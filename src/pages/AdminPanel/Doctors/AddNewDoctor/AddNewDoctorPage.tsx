import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createDoctor } from "../../../../api/doctorAPI";
import { Doctor } from "../../../../store/types/doctorTypes";
import { 
  StyledReturnButton, 
  StyledSaveButton, 
  DoctorPageContainer, 
  Input, 
  TitlesBox, 
  ImagePreview, 
  UploadInput, 
  HeaderBox, 
  InputContainer, 
  ScrollContainer, 
  EditTopImage, 
  MakeCardVisibleBox, 
  StyledCheckbox, 
  TitleBoxText, 
  BiographySection, 
  TitleSection, 
  SpecialisationSection,
  ImageBox, 
  MainBox 
} from "./styles";
import CustomNotification from "../../../../components/CustomNotification/CustomNotification";

const AddNewDoctorPage: React.FC = () => {
  const [notification, setNotification] = useState<{
    message: string;
    type: "error" | "success";
  } | null>(null);
  const navigate = useNavigate();
  const [doctorData, setDoctorData] = useState<Doctor>({
    fullName: "",
    topImage: "",
    specialisationDe: "",
    specialisationEn: "",
    specialisationRu: "",
    titleDe: "",
    titleEn: "",
    titleRu: "",
    biographyDe: "",
    biographyEn: "",
    biographyRu: "",
    isActive: true,
    images: [],
  });

  const [isSaving, setIsSaving] = useState(false);
  const token = localStorage.getItem("token");

  const handleReturn = () => {
    navigate("/admin-panel/doctors"); 
  };

  const handleChange = (field: keyof Doctor, value: string | boolean) => {
    setDoctorData((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setDoctorData((prev) => ({ ...prev, topImage: imageUrl }));
    }
  };

  const isFieldValid = (value: string): boolean => value.trim().length >= 2;

  const isFormValid = (): boolean => {
    return isFieldValid(doctorData.fullName) &&
      isFieldValid(doctorData.specialisationDe) &&
      isFieldValid(doctorData.specialisationEn) &&
      isFieldValid(doctorData.specialisationRu) &&
      isFieldValid(doctorData.titleDe) &&
      isFieldValid(doctorData.titleEn) &&
      isFieldValid(doctorData.titleRu) &&
      isFieldValid(doctorData.biographyDe) &&
      isFieldValid(doctorData.biographyEn) &&
      isFieldValid(doctorData.biographyRu);
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
    if (!token) return alert("Authorization token is missing!");
    setIsSaving(true);
    try {
      const requestData = {
        titleDe: doctorData.titleDe, 
        titleEn: doctorData.titleEn,
        titleRu: doctorData.titleRu,
        fullName: doctorData.fullName,
        biographyDe: doctorData.biographyDe,
        biographyEn: doctorData.biographyEn,
        biographyRu: doctorData.biographyRu,
        specialisationDe: doctorData.specialisationDe,
        specialisationEn: doctorData.specialisationEn,
        specialisationRu: doctorData.specialisationRu,
        topImage: doctorData.topImage,
        isActive: doctorData.isActive,
        images: doctorData.images
      };

      await createDoctor(requestData, token);
      // alert("Doctor added successfully!");
      setNotification({
        message: `Doctor created successfully!`,
        type: "success",
      });
      navigate("/admin-panel/doctors"); 
    } catch (error: any) {
      // alert(`Error creating doctor: ${error.message}`);
      setNotification({
        message: `Error creating doctor: ${error.message}`,
        type: "error",
      });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <DoctorPageContainer>
      <HeaderBox>
        <StyledReturnButton onClick={handleReturn}>← Return back</StyledReturnButton>
        <StyledSaveButton onClick={handleSave} disabled={!isFormValid() || isSaving}>
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
          <div>
            <TitlesBox>Full Name:</TitlesBox>
            <InputContainer>
              <Input 
                type="text" 
                placeholder="Enter full name" 
                value={doctorData.fullName} 
                onChange={(e) => handleChange("fullName", e.target.value)} 
                style={{ borderColor: isFieldValid(doctorData.fullName) ? "#ccc" : "red" }}
              />
            </InputContainer>

            <MakeCardVisibleBox>
              <TitlesBox>Make card visible for users:</TitlesBox>
              <StyledCheckbox 
                type="checkbox" 
                checked={doctorData.isActive} 
                onChange={(e) => handleChange("isActive", e.target.checked)} 
              />
            </MakeCardVisibleBox>

            <EditTopImage>
              <TitlesBox>Edit top image</TitlesBox>
              <UploadInput type="file" accept="image/*" onChange={handleImageUpload} />
            </EditTopImage>

            <SpecialisationSection>
              <TitlesBox>Specialisation:</TitlesBox>
              {["specialisationDe", "specialisationEn", "specialisationRu"].map((lang) => (
                <InputContainer key={lang}>
                  <TitleBoxText>{lang.slice(-2).toUpperCase()}</TitleBoxText>
                  <Input 
                    type="text" 
                    placeholder={`Enter specialisation (${lang.slice(-2).toUpperCase()})`} 
                    value={doctorData[lang as keyof Doctor]} 
                    onChange={(e) => handleChange(lang as keyof Doctor, e.target.value)} 
                    style={{ borderColor: isFieldValid(doctorData[lang as keyof Doctor]) ? "#ccc" : "red" }}
                  />
                </InputContainer>
              ))}
            </SpecialisationSection>

            <TitleSection>
              <TitlesBox>Title:</TitlesBox>
              {["titleDe", "titleEn", "titleRu"].map((lang) => (
                <InputContainer key={lang}>
                  <TitleBoxText>{lang.slice(-2).toUpperCase()}</TitleBoxText>
                  <Input 
                    type="text" 
                    placeholder={`Enter title (${lang.slice(-2).toUpperCase()})`} 
                    value={doctorData[lang as keyof Doctor]} 
                    onChange={(e) => handleChange(lang as keyof Doctor, e.target.value)} 
                    style={{ borderColor: isFieldValid(doctorData[lang as keyof Doctor]) ? "#ccc" : "red" }}
                  />
                </InputContainer>
              ))}
            </TitleSection>

            <BiographySection>
              <TitlesBox>Biography:</TitlesBox>
              {["biographyDe", "biographyEn", "biographyRu"].map((lang) => (
                <InputContainer key={lang}>
                  <TitleBoxText>{lang.slice(-2).toUpperCase()}</TitleBoxText>
                  <textarea 
                    placeholder={`Enter biography (${lang.slice(-2).toUpperCase()})`} 
                    rows={15} 
                    value={doctorData[lang as keyof Doctor]} 
                    onChange={(e) => handleChange(lang as keyof Doctor, e.target.value)} 
                    style={{ borderColor: isFieldValid(doctorData[lang as keyof Doctor]) ? "#ccc" : "red" }}
                  />
                </InputContainer>
              ))}
            </BiographySection>
          </div>

          <ImageBox>
            {doctorData.topImage ? (
              <ImagePreview src={doctorData.topImage} alt="Doctor preview" />
            ) : (
              <ImagePreview src="https://via.placeholder.com/300" alt="Default Image" />
            )}
          </ImageBox>
        </MainBox>
      </ScrollContainer>
    </DoctorPageContainer>
  );
};

export default AddNewDoctorPage;