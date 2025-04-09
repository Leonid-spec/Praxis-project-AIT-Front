import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
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
  MainBox,
} from "./styles";
import CustomNotification from "../../../../components/CustomNotification/CustomNotification";

const AddNewDoctorPage: React.FC = () => {
  const { t } = useTranslation();
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

  const handleSave = async () => {
    if (!token) {
      setNotification({
        message: t("message.adminPanel.appointments.doctors.errorLoadingDoctorData"),
        type: "error",
      });
      return;
    }

    setIsSaving(true);
    try {
      await createDoctor(doctorData, token);
      setNotification({
        message: t("message.adminPanel.appointments.doctors.doctorUpdatedSuccessfully"),
        type: "success",
      });
      navigate("/admin-panel/doctors");
    } catch (error: any) {
      setNotification({
        message: t("message.adminPanel.appointments.doctors.errorUpdating"),
        type: "error",
      });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <DoctorPageContainer>
      <HeaderBox>
        <StyledReturnButton onClick={handleReturn}>
          {t("message.adminPanel.appointments.doctors.returnBack")}
        </StyledReturnButton>
        <StyledSaveButton onClick={handleSave} disabled={isSaving}>
          {isSaving
            ? t("message.adminPanel.appointments.doctors.saving")
            : t("message.adminPanel.appointments.doctors.saveAll")}
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
            <TitlesBox>{t("message.adminPanel.appointments.doctors.fullName")}</TitlesBox>
            <InputContainer>
              <Input
                type="text"
                value={doctorData.fullName}
                onChange={(e) => handleChange("fullName", e.target.value)}
                placeholder={t("message.adminPanel.appointments.doctors.placeholder")}
              />
            </InputContainer>

            <MakeCardVisibleBox>
              <TitlesBox>{t("message.adminPanel.appointments.doctors.makeCardVisibleCheckbox")}</TitlesBox>
              <StyledCheckbox
                type="checkbox"
                checked={doctorData.isActive}
                onChange={(e) => handleChange("isActive", e.target.checked)}
              />
            </MakeCardVisibleBox>

            <EditTopImage>
              <TitlesBox>{t("message.adminPanel.appointments.doctors.uploadImage")}</TitlesBox>
              <UploadInput type="file" onChange={handleImageUpload} />
            </EditTopImage>

            <SpecialisationSection>
              <TitlesBox>{t("message.adminPanel.appointments.doctors.specialisation")}</TitlesBox>
              <InputContainer>
                <TitleBoxText>DE</TitleBoxText>
                <Input
                  type="text"
                  value={doctorData.specialisationDe}
                  onChange={(e) => handleChange("specialisationDe", e.target.value)}
                  placeholder={t("message.adminPanel.appointments.doctors.enterDescriptionDe")}
                />
              </InputContainer>
              <InputContainer>
                <TitleBoxText>EN</TitleBoxText>
                <Input
                  type="text"
                  value={doctorData.specialisationEn}
                  onChange={(e) => handleChange("specialisationEn", e.target.value)}
                  placeholder={t("message.adminPanel.appointments.doctors.enterDescriptionEn")}
                />
              </InputContainer>
              <InputContainer>
                <TitleBoxText>RU</TitleBoxText>
                <Input
                  type="text"
                  value={doctorData.specialisationRu}
                  onChange={(e) => handleChange("specialisationRu", e.target.value)}
                  placeholder={t("message.adminPanel.appointments.doctors.enterDescriptionRu")}
                />
              </InputContainer>
            </SpecialisationSection>

            <TitleSection>
              <TitlesBox>{t("message.adminPanel.appointments.doctors.titles")}</TitlesBox>
              <InputContainer>
                <TitleBoxText>DE</TitleBoxText>
                <Input
                  type="text"
                  value={doctorData.titleDe}
                  onChange={(e) => handleChange("titleDe", e.target.value)}
                  placeholder={t("message.adminPanel.appointments.doctors.enterTitleDe")}
                />
              </InputContainer>
              <InputContainer>
                <TitleBoxText>EN</TitleBoxText>
                <Input
                  type="text"
                  value={doctorData.titleEn}
                  onChange={(e) => handleChange("titleEn", e.target.value)}
                  placeholder={t("message.adminPanel.appointments.doctors.enterTitleEn")}
                />
              </InputContainer>
              <InputContainer>
                <TitleBoxText>RU</TitleBoxText>
                <Input
                  type="text"
                  value={doctorData.titleRu}
                  onChange={(e) => handleChange("titleRu", e.target.value)}
                  placeholder={t("message.adminPanel.appointments.doctors.enterTitleRu")}
                />
              </InputContainer>
            </TitleSection>

            <BiographySection>
              <TitlesBox>{t("message.adminPanel.appointments.doctors.biography")}</TitlesBox>
              <InputContainer>
                <TitleBoxText>DE</TitleBoxText>
                <textarea
                  value={doctorData.biographyDe}
                  onChange={(e) => handleChange("biographyDe", e.target.value)}
                  placeholder={t("message.adminPanel.appointments.doctors.enterDescriptionDe")}
                />
              </InputContainer>
              <InputContainer>
                <TitleBoxText>EN</TitleBoxText>
                <textarea
                  value={doctorData.biographyEn}
                  onChange={(e) => handleChange("biographyEn", e.target.value)}
                  placeholder={t("message.adminPanel.appointments.doctors.enterDescriptionEn")}
                />
              </InputContainer>
              <InputContainer>
                <TitleBoxText>RU</TitleBoxText>
                <textarea
                  value={doctorData.biographyRu}
                  onChange={(e) => handleChange("biographyRu", e.target.value)}
                  placeholder={t("message.adminPanel.appointments.doctors.enterDescriptionRu")}
                />
              </InputContainer>
            </BiographySection>
          </div>

          <ImageBox>
            {doctorData.topImage ? (
              <ImagePreview src={doctorData.topImage} alt="Doctor preview" />
            ) : (
              <ImagePreview src="https://via.placeholder.com/300" alt="Placeholder" />
            )}
          </ImageBox>
        </MainBox>
      </ScrollContainer>
    </DoctorPageContainer>
  );
};

export default AddNewDoctorPage;
