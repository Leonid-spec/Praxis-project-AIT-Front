import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Doctor } from "../doctorTypes"
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
  MainBox,
  MainBoxText,
  CheckboxLabel,
} from "./styles";

const EditDoctorPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [doctorData, setDoctorData] = useState<Doctor | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!id || !token) return;
    console.log("Editing doctor ID:", id);

    const fetchDoctorData = async () => {
      try {
        const data = await getDoctorById(Number(id), token);
        setDoctorData(data);
      } catch (err: any) {
        console.error("Error loading doctor data:", err);
      }
    };

    fetchDoctorData();
  }, [id, token]);

  const handleSave = async () => {
    if (isSaving || !doctorData) return;
    setIsSaving(true);
    try {
      await updateDoctor(Number(id), doctorData, token!);
      alert(`Doctor "${doctorData.fullName}" updated successfully!`);
      navigate("/admin-panel/doctors");
    } catch (error: any) {
      alert(`Error updating doctor: ${error.message}`);
    } finally {
      setIsSaving(false);
    }
  };

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setDoctorData((prev) => prev ? { ...prev, topImage: imageUrl } : prev);
    }
  };

  if (!doctorData) {
    return <p>Loading doctor data...</p>;
  }

  return (
    <EditDoctorContainer>
      <HeaderBox>
        <StyledReturnButton onClick={() => navigate("/admin-panel/doctors")}>← Return back</StyledReturnButton>
        <StyledSaveButton onClick={handleSave} disabled={isSaving}>
          {isSaving ? "Saving..." : "Save changes"}
        </StyledSaveButton>
      </HeaderBox>

      <MainBox>
        <MainBoxText>
          <InputContainer>
            <TitleBoxText>Full Name</TitleBoxText>
            <Input
              type="text"
              value={doctorData.fullName}
              onChange={(e) => setDoctorData({ ...doctorData, fullName: e.target.value })}
            />
          </InputContainer>

          <CheckboxLabel>
            <input
              type="checkbox"
              checked={doctorData.isActive}
              onChange={(e) => setDoctorData({ ...doctorData, isActive: e.target.checked })}
            />
            Make card visible for users
          </CheckboxLabel>

          <InputContainer>
            <TitleBoxText>Specialisation</TitleBoxText>
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
            <TitleBoxText>Title</TitleBoxText>
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

          <InputContainer>
            <TitleBoxText>Biography</TitleBoxText>
            <TitleBoxText>DE</TitleBoxText>
            <Input
              type="text"
              value={doctorData.biographyDe || ""}
              onChange={(e) => setDoctorData({ ...doctorData, biographyDe: e.target.value })}
            />
            <TitleBoxText>EN</TitleBoxText>
            <Input
              type="text"
              value={doctorData.biographyEn || ""}
              onChange={(e) => setDoctorData({ ...doctorData, biographyEn: e.target.value })}
            />
            <TitleBoxText>RU</TitleBoxText>
            <Input
              type="text"
              value={doctorData.biographyRu || ""}
              onChange={(e) => setDoctorData({ ...doctorData, biographyRu: e.target.value })}
            />
          </InputContainer>
        </MainBoxText>

        <EditPhotoSection>
          <TitleBoxText>Edit Top Image</TitleBoxText>
          <UploadInput type="file" accept="image/*" onChange={handlePhotoUpload} />
          <PhotoPreview src={doctorData.topImage || "https://via.placeholder.com/300"} alt="Doctor preview" />
        </EditPhotoSection>
      </MainBox>
    </EditDoctorContainer>
  );
};

export default EditDoctorPage;