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
  StyledCheckbox,
  TitleBoxText,
  BiographySection,
  TitleSection,
  SpecialisationSection,
  ImageBox,
  MainBox,
  Container,
  GalleryContainer,
  GalleryGrid,
  GalleryImageWrapper,
  TitleBox,
  UploadText,
  CheckboxLabel,
} from "./styles";
import CustomNotification from "../../../../components/CustomNotification/CustomNotification";
import { addImage, pushImageFile } from "../../../../api/imageAPI";
import { GalleryImageCard } from "../Gallery/GalleryImageCard";

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
  const [selectedImageFile, setSelectedImageFile] = useState<File | null>(null);
  const [, setLocalPreviewURL] = useState<string | null>(null);
  const [, setPreviewURLs] = useState<string[]>([]);

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
    }
  };

  // const handleImagePreview = (imageUrl: string) => {
  //   setLocalPreviewURL(imageUrl);
  // };
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
      let uploadedDoctorImageUrl = "";
      if (selectedImageFile) {
        uploadedDoctorImageUrl = await pushImageFile(selectedImageFile, token);
        uploadedDoctorImageUrl = "https://" + uploadedDoctorImageUrl;
      }

      const doctorToSend: Doctor = {
        ...doctorData,
        topImage: uploadedDoctorImageUrl,
        images: [],
      };

      const newDoctor = await createDoctor(doctorToSend, token);
      const doctorId = newDoctor.id;

      for (const file of selectedImages) {
        await addImage(file, 0, doctorId!, token); 
      }

      const fullDoctor = await getDoctorById(doctorId!, token);

      const updatedImages = fullDoctor.images!.map((img: any) => {
        if (!img.path.startsWith("https://")) {
          return { ...img, path: "https://" + img.path };
        }
        return img;
      });

      fullDoctor.images = updatedImages;

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

      console.log("✅ [handleImagesUpload] Обрані файли:", fileArray);
      console.log("✅ [handleImagesUpload] Прев'ю URL-адреси:", urls);

      setSelectedImages((prev) => [...prev, ...fileArray]);
      setPreviewURLs((prev) => [...prev, ...urls]);

      setDoctorData((prev) => ({
        ...prev,
        images: [
          ...(prev.images ?? []),
          ...urls.map((url) => ({
            id: 0, 
            path: url,
            doctorId: doctorData.id,
            dentalServiceId: 0,
          })),
        ],
      }));

      // setDoctorData((prev) => ({
      //   ...prev,
      //   images: [
      //     ...(prev.images ?? []),
      //     ...urls.map((url) => ({
      //       id: Date.now() + Math.random(),
      //       path: url,
      //     })),
      //   ],
      // }));
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

  const handleReplaceImage = (index: number) => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.onchange = () => {
      const file = fileInput.files?.[0];
      if (file) {
        const newUrl = URL.createObjectURL(file);
        console.log(`📝 [handleReplaceImage] Замінюється зображення ${index}:`, newUrl);

        setSelectedImages((prev) => {
          const newFiles = [...prev];
          newFiles[index] = file;
          return newFiles;
        });

        setPreviewURLs((prev) => {
          const newPreviews = [...prev];
          newPreviews[index] = newUrl;
          return newPreviews;
        });

        setDoctorData((prev) => {
          const newImages = [...(prev.images ?? [])];
          newImages[index] = {
            ...newImages[index],
            path: newUrl,
          };
          return { ...prev, images: newImages };
        });
      }
    };
    fileInput.click();
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
                                    setDoctorData({ ...doctorData, isActive: e.target.checked })
                                  }
                                />
                              </CheckboxLabel>
             </MakeCardVisibleBox>

              <EditTopImage>
                <TitlesBox>
                  {t("message.adminPanel.appointments.doctors.uploadImage")}
                </TitlesBox>
                <UploadInput type="file" onChange={handleImageUpload} />
              </EditTopImage>
              <SpecialisationSection>
                <TitlesBox>
                  {t("message.adminPanel.appointments.doctors.title")}
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
                      "message.adminPanel.appointments.doctors.enterDescriptionDe"
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
                      "message.adminPanel.appointments.doctors.enterDescriptionEn"
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
                      "message.adminPanel.appointments.doctors.enterDescriptionRu"
                    )}
                  />
                </InputContainer>
              </SpecialisationSection>
            </div>
            <div>
              <ImageBox>
                {doctorData.topImage ? (
                  <ImagePreview
                    src={doctorData.topImage}
                    alt="Doctor preview"
                  />
                ) : (
                  <ImagePreview
                    src="https://via.placeholder.com/300"
                    alt="Placeholder"
                  />
                )}
              </ImageBox>
            </div>
          </MainBox>
          <div>
            <TitleSection>
              <TitlesBox>
                {t("message.adminPanel.appointments.doctors.specialisation")}
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
                    "message.adminPanel.appointments.doctors.enterDescriptionDe"
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
                    "message.adminPanel.appointments.doctors.enterDescriptionEn"
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
                    "message.adminPanel.appointments.doctors.enterDescriptionRu"
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
            <UploadText>
              {t("message.adminPanel.appointments.services.editGallery") ||
                "Upload Gallery Images"}
            </UploadText>
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
                  onReplace={() => handleReplaceImage(index)}
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
