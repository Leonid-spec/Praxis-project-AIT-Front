import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Doctor } from "../doctorTypes";
import { getDoctorById, updateDoctor } from "../../../../api/doctorAPI";
import {
  EditDoctorContainer,
  HeaderBox,
  StyledReturnButton,
  StyledSaveButton,
  InputContainer,
  Input,
  TitleBoxText,
  UploadInput,
  PhotoPreview,
  EditPhotoSection,
  TopContainer,
  BottomContainer,
  MainBoxText,
  CheckboxLabel,
  BiographySection,
  BiographyLabel,
  BiographyTextareaDe,
  BiographyTextareaEn,
  BiographyTextareaRu,
} from "./styles";
import CustomNotification from "../../../../components/CustomNotification/CustomNotification";

const EditDoctorPage: React.FC = () => {
  const { t } = useTranslation();
  const [notification, setNotification] = useState<{
    message: string;
    type: "error" | "success";
  } | null>(null);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [doctorData, setDoctorData] = useState<Doctor | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!id || !token) return;

    const fetchDoctorData = async () => {
      try {
        const data = await getDoctorById(Number(id), token);
        setDoctorData(data);
      } catch (err: any) {
        console.error(t("message.adminPanel.appointments.doctors.errorLoadingDoctorData"), err);
        setNotification({
          message: err.message || t("message.adminPanel.appointments.doctors.errorLoadingDoctorData"),
          type: "error",
        });
      }
    };

    fetchDoctorData();
  }, [id, token, t]);

  const handleSave = async () => {
    if (isSaving || !doctorData) return;
    setIsSaving(true);
    try {
      await updateDoctor(doctorData, token!);
      setNotification({
        message: t("message.adminPanel.appointments.doctors.doctorUpdatedSuccessfully", {
          fullName: doctorData.fullName,
        }),
        type: "success",
      });
      navigate("/admin-panel/doctors");
      setTimeout(() => {
        setIsSaving(false);
      }, 1500);
    } catch (error: any) {
      setNotification({
        message: `${t("message.adminPanel.appointments.doctors.errorUpdating")}: ${error.message}`,
        type: "error",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setDoctorData((prev) => (prev ? { ...prev, topImage: imageUrl } : prev));
    }
  };

  if (!doctorData) {
    return <p>{t("message.adminPanel.appointments.doctors.loadingDoctorData")}</p>;
  }

  return (
    <EditDoctorContainer>
      <HeaderBox>
        <StyledReturnButton onClick={() => navigate("/admin-panel/doctors")}>
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
      <TopContainer>
        <MainBoxText>
          <InputContainer>
            <TitleBoxText>{t("message.adminPanel.appointments.doctors.fullName")}</TitleBoxText>
            <Input
              type="text"
              value={doctorData.fullName}
              onChange={(e) => setDoctorData({ ...doctorData, fullName: e.target.value })}
            />
          </InputContainer>

          <InputContainer>
            <TitleBoxText>{t("message.adminPanel.appointments.doctors.uploadImage")}</TitleBoxText>
            <UploadInput type="file" accept="image/*" onChange={handlePhotoUpload} />
          </InputContainer>

          <CheckboxLabel>
            <input
              type="checkbox"
              checked={doctorData.isActive}
              onChange={(e) => setDoctorData({ ...doctorData, isActive: e.target.checked })}
            />
            {t("message.adminPanel.appointments.doctors.makeCardVisibleCheckbox")}
          </CheckboxLabel>

          <InputContainer>
            <TitleBoxText>{t("message.adminPanel.appointments.doctors.specialisation")}</TitleBoxText>
            <TitleBoxText>DE</TitleBoxText>
            <Input
              type="text"
              value={doctorData.specialisationDe || ""}
              onChange={(e) => setDoctorData({ ...doctorData, specialisationDe: e.target.value })}
            />
            <TitleBoxText>EN</TitleBoxText>
            <Input
              type="text"
              value={doctorData.specialisationEn || ""}
              onChange={(e) => setDoctorData({ ...doctorData, specialisationEn: e.target.value })}
            />
            <TitleBoxText>RU</TitleBoxText>
            <Input
              type="text"
              value={doctorData.specialisationRu || ""}
              onChange={(e) => setDoctorData({ ...doctorData, specialisationRu: e.target.value })}
            />
          </InputContainer>

          <InputContainer>
            <TitleBoxText>{t("message.adminPanel.appointments.doctors.titles")}</TitleBoxText>
            <TitleBoxText>DE</TitleBoxText>
            <Input
              type="text"
              value={doctorData.titleDe || ""}
              onChange={(e) => setDoctorData({ ...doctorData, titleDe: e.target.value })}
            />
            <TitleBoxText>EN</TitleBoxText>
            <Input
              type="text"
              value={doctorData.titleEn || ""}
              onChange={(e) => setDoctorData({ ...doctorData, titleEn: e.target.value })}
            />
            <TitleBoxText>RU</TitleBoxText>
            <Input
              type="text"
              value={doctorData.titleRu || ""}
              onChange={(e) => setDoctorData({ ...doctorData, titleRu: e.target.value })}
            />
          </InputContainer>
        </MainBoxText>

        <EditPhotoSection>
          <PhotoPreview
            src={doctorData.topImage || "https://via.placeholder.com/600x400"}
            alt={t("message.adminPanel.appointments.doctors.doctorPreview")}
          />
        </EditPhotoSection>
      </TopContainer>

      <BottomContainer>
        <TitleBoxText>{t("message.adminPanel.appointments.doctors.biography")}</TitleBoxText>

        <BiographySection>
          <BiographyLabel>DE</BiographyLabel>
          <BiographyTextareaDe
            value={doctorData.biographyDe || ""}
            onChange={(e) => setDoctorData({ ...doctorData, biographyDe: e.target.value })}
          />
        </BiographySection>

        <BiographySection>
          <BiographyLabel>EN</BiographyLabel>
          <BiographyTextareaEn
            value={doctorData.biographyEn || ""}
            onChange={(e) => setDoctorData({ ...doctorData, biographyEn: e.target.value })}
          />
        </BiographySection>

        <BiographySection>
          <BiographyLabel>RU</BiographyLabel>
          <BiographyTextareaRu
            value={doctorData.biographyRu || ""}
            onChange={(e) => setDoctorData({ ...doctorData, biographyRu: e.target.value })}
          />
        </BiographySection>
      </BottomContainer>
    </EditDoctorContainer>
  );
};

export default EditDoctorPage;

