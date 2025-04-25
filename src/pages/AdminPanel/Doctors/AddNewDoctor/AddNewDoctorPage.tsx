import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { createDoctor, getDoctorById } from "../../../../api/doctorAPI";
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
  TitleBoxText,
  BiographySection,
  TitleSection,
  SpecialisationSection,
  MainBox,
  Container,
  GalleryContainer,
  GalleryGrid,
  GalleryImageWrapper,
  TitleBox,
  CheckboxLabel,
  EditTopImageWrapper,
  EditPhotoSection,
} from "./styles";
import CustomNotification from "../../../../components/CustomNotification/CustomNotification";
import { addImage } from "../../../../api/imageAPI";
import { GalleryImageCard } from "../Gallery/GalleryImageCard";
import TopImageUploader from "../EditDoctor/TopImageUploader";

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
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [, setSelectedImageFile] = useState<File | null>(null);
  const [, setLocalPreviewURL] = useState<string | null>(null);
  const [, setPreviewURLs] = useState<string[]>([]);

  const [, setPreviewImage] = useState<string | null>(null);
  const [croppedImageFile, setCroppedImageFile] = useState<File | null>(null);
  const [originalImageSrc, setOriginalImageSrc] = useState<string | null>(null);
  const [showCropper, setShowCropper] = useState(false);

  const handleReturn = () => {
    navigate("/admin-panel/doctors");
  };

  const handleChange = (field: keyof Doctor, value: string | boolean) => {
    setDoctorData((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      setSelectedImageFile(file);
      const imageUrl = URL.createObjectURL(file);
      setLocalPreviewURL(imageUrl);
      setDoctorData((prev) => ({
        ...prev,
        topImage: imageUrl,
      }));
      setOriginalImageSrc(imageUrl);
      setShowCropper(true);

      console.log("imageUrl - blob: ", imageUrl);
    }
  };

  const handleSave = async () => {
    if (!token) {
      setNotification({
        message: "Authorization token is missing. Please log in again.",
        type: "error",
      });
      return;
    }

    setIsSaving(true);

    try {
      let uploadedTopImageUrl = doctorData.topImage;
      if (croppedImageFile) {
        const uploaded = await addImage(croppedImageFile, 0, 0, token);
        uploadedTopImageUrl = `https://${uploaded.path}`;
      console.log("uploadedTopImageUrl - real url: ", uploadedTopImageUrl);

      }

      const doctorToSend: Doctor = {
        ...doctorData,
        topImage: uploadedTopImageUrl,
        images: [],
      };
      const newDoctor = await createDoctor(doctorToSend, token);
      const doctorId = newDoctor.id;

      for (const file of selectedImages) {
        await addImage(file, 0, doctorId!, token);
      }

      const fullDoctor = await getDoctorById(doctorId!, token);

      fullDoctor.images = fullDoctor.images?.map((img) => ({
        ...img,
        path: img.path.startsWith("https://")
          ? img.path
          : `https://${img.path}`,
      }));

      console.log("fullDoctor: ", fullDoctor);


      setNotification({
        message: `Doctor "${fullDoctor.fullName}" created successfully!`,
        type: "success",
      });

      setTimeout(() => {
        setIsSaving(false);
        handleReturn();
      }, 1500);
    } catch (error) {
      console.error("❌ Error creating doctor:", error);
      setNotification({
        message: "Failed to create doctor.",
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

      setDoctorData((prev) => ({
        ...prev,
        images: [
          ...(prev.images ?? []),
          ...urls.map((url) => ({
            id: 0,
            path: url,
            dentalServiceId: 0,
            doctorId: doctorData.id,
          })),
        ],
      }));
    }
  };

  const handleDeleteImage = (index: number) => {
    setDoctorData((prev) => {
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
    <DoctorPageContainer>
      <HeaderBox>
        <StyledReturnButton onClick={handleReturn}>
          ← {t("message.adminPanel.appointments.doctors.returnBack")}
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
        <Container>
          <MainBox>
            <div>
              <TitlesBox>
                {t("message.adminPanel.appointments.doctors.fullName")}
              </TitlesBox>
              <InputContainer>
                <Input
                  type="text"
                  value={doctorData.fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  placeholder={t(
                    "message.adminPanel.appointments.doctors.placeholder"
                  )}
                />
              </InputContainer>

              <MakeCardVisibleBox>
                <CheckboxLabel>
                  {t("message.adminPanel.appointments.doctors.makeCardVisible")}

                  <input
                    type="checkbox"
                    checked={doctorData.isActive}
                    onChange={(e) =>
                      setDoctorData({
                        ...doctorData,
                        isActive: e.target.checked,
                      })
                    }
                  />
                </CheckboxLabel>
              </MakeCardVisibleBox>

              <SpecialisationSection>
                <TitlesBox>
                  {t("message.adminPanel.appointments.doctors.specialisation")}
                </TitlesBox>
                <InputContainer>
                  <TitleBoxText>DE</TitleBoxText>
                  <Input
                    type="text"
                    value={doctorData.specialisationDe}
                    onChange={(e) =>
                      handleChange("specialisationDe", e.target.value)
                    }
                    placeholder={t(
                      "message.adminPanel.appointments.doctors.enterSpecialisationDe"
                    )}
                  />
                </InputContainer>
                <InputContainer>
                  <TitleBoxText>EN</TitleBoxText>
                  <Input
                    type="text"
                    value={doctorData.specialisationEn}
                    onChange={(e) =>
                      handleChange("specialisationEn", e.target.value)
                    }
                    placeholder={t(
                      "message.adminPanel.appointments.doctors.enterSpecialisationEn"
                    )}
                  />
                </InputContainer>
                <InputContainer>
                  <TitleBoxText>RU</TitleBoxText>
                  <Input
                    type="text"
                    value={doctorData.specialisationRu}
                    onChange={(e) =>
                      handleChange("specialisationRu", e.target.value)
                    }
                    placeholder={t(
                      "message.adminPanel.appointments.doctors.enterSpecialisationRu"
                    )}
                  />
                </InputContainer>
              </SpecialisationSection>
            </div>

            <EditTopImageWrapper>
              <TitlesBox>
                {t("message.adminPanel.appointments.doctors.uploadImage")}
              </TitlesBox>
              <UploadInput type="file" onChange={handleImageUpload} />

              <EditPhotoSection>
                {/* <ImageBox>
                  {doctorData.topImage ? (
                    <ImagePreview
                      src={doctorData.topImage}
                      alt="Doctor preview"
                    />
                  ) : (
                    <ImagePreview
                      src="https://via.placeholder.com/600x400"
                      alt="Doctor preview"
                    />
                  )}
                </ImageBox> */}

                {!showCropper && (
                  <ImagePreview
                    src={
                      doctorData.topImage ||
                      "https://via.placeholder.com/600x400"
                    }
                    alt="Doctor preview"
                  />
                )}
                {showCropper && originalImageSrc && (
                  <TopImageUploader
                    imageSrc={originalImageSrc}
                    onCropComplete={(croppedFile: File) => {
                      const previewUrl = URL.createObjectURL(croppedFile);

                      setCroppedImageFile(croppedFile);
                      setPreviewImage(previewUrl);
                      setDoctorData((prev) => {
                        if (!prev) return prev;
                        return {
                          ...prev,
                          topImage: previewUrl,
                        };
                      });

                      setShowCropper(false);
                    }}
                  />
                )}
              </EditPhotoSection>
            </EditTopImageWrapper>
          </MainBox>

          <div>
            <TitleSection>
              <TitlesBox>
                {t("message.adminPanel.appointments.doctors.title")}
              </TitlesBox>
              <InputContainer>
                <TitleBoxText>DE</TitleBoxText>
                <Input
                  type="text"
                  value={doctorData.titleDe}
                  onChange={(e) => handleChange("titleDe", e.target.value)}
                  placeholder={t(
                    "message.adminPanel.appointments.doctors.enterTitleDe"
                  )}
                />
              </InputContainer>
              <InputContainer>
                <TitleBoxText>EN</TitleBoxText>
                <Input
                  type="text"
                  value={doctorData.titleEn}
                  onChange={(e) => handleChange("titleEn", e.target.value)}
                  placeholder={t(
                    "message.adminPanel.appointments.doctors.enterTitleEn"
                  )}
                />
              </InputContainer>
              <InputContainer>
                <TitleBoxText>RU</TitleBoxText>
                <Input
                  type="text"
                  value={doctorData.titleRu}
                  onChange={(e) => handleChange("titleRu", e.target.value)}
                  placeholder={t(
                    "message.adminPanel.appointments.doctors.enterTitleRu"
                  )}
                />
              </InputContainer>
            </TitleSection>

            <BiographySection>
              <TitlesBox>
                {t("message.adminPanel.appointments.doctors.biography")}
              </TitlesBox>
              <InputContainer>
                <TitleBoxText>DE</TitleBoxText>
                <textarea
                  value={doctorData.biographyDe}
                  onChange={(e) => handleChange("biographyDe", e.target.value)}
                  placeholder={t(
                    "message.adminPanel.appointments.doctors.enterBiographyDe"
                  )}
                  rows={5}
                />
              </InputContainer>
              <InputContainer>
                <TitleBoxText>EN</TitleBoxText>
                <textarea
                  value={doctorData.biographyEn}
                  onChange={(e) => handleChange("biographyEn", e.target.value)}
                  placeholder={t(
                    "message.adminPanel.appointments.doctors.enterBiographyEn"
                  )}
                  rows={5}
                />
              </InputContainer>
              <InputContainer>
                <TitleBoxText>RU</TitleBoxText>
                <textarea
                  value={doctorData.biographyRu}
                  onChange={(e) => handleChange("biographyRu", e.target.value)}
                  placeholder={t(
                    "message.adminPanel.appointments.doctors.enterBiographyRu"
                  )}
                  rows={5}
                />
              </InputContainer>
            </BiographySection>
          </div>
        </Container>

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
            {doctorData.images?.map((img, index) => (
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
    </DoctorPageContainer>
  );
};

export default AddNewDoctorPage;
