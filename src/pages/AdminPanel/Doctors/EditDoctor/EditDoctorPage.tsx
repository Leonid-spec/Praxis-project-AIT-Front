import { useParams, useNavigate } from "react-router-dom";
import { Doctor } from "../doctorTypes";
import { getAllDoctors, getDoctorById, updateDoctor } from "../../../../api/doctorAPI";
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
  ScrollContainer,
  Section,
  MiddleContainer,
  Container,
  MainTextContainer,
  InputContainerFullName,
  SectionTitles,
} from "./styles";
import CustomNotification from "../../../../components/CustomNotification/CustomNotification";
import { useState, useEffect } from "react";
import { addImage } from "../../../../api/imageAPI";
import { useTranslation } from "react-i18next"; 
import { EditTopImage, TitlesBox } from "../../Services/ServicePageSinge/style";

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
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [selectedImageFile, setSelectedImageFile] = useState<File | null>(null);
  const [previousFullName, setPreviousFullName] = useState<string | null>(null);

  useEffect(() => {
    if (!id || !token) return;

    const fetchDoctorData = async () => {
      try {
        const data = await getDoctorById(Number(id), token);
        setDoctorData(data);
        setPreviousFullName(data.fullName);
      } catch (err: any) {
        console.error("Error loading doctor data:", err);
        setNotification({
          message: err.message || "Failed to fetch data",
          type: "error",
        });
      }
    };

    fetchDoctorData();
  }, [id, token]);

  const handleSave = async () => {
    if (isSaving || !doctorData) return;
    setIsSaving(true);
  
    if (doctorData.fullName !== previousFullName) {
      try {
        const doctors = await getAllDoctors(token!);
        const isNameDuplicate = doctors.some(
          (doc) => doc.fullName === doctorData.fullName && doc.id !== doctorData.id
        );
  
        if (isNameDuplicate) {
          throw new Error(`Doctor with name ${doctorData.fullName} already exists.`);
        }
      } catch (error) {
        setNotification({
          message: `${t("message.adminPanel.appointments.doctors.errorCheckingName")}: ${(error as Error).message}`,
          type: "error",
        });
        setIsSaving(false);
        return;
      }
    }
  
    let uploadedImageUrl = doctorData.topImage;
    if (previewImage) {
      console.log("Image preview is available, starting upload... previewImage: ", previewImage);
      const cloudImageUrl = await uploadImageToCloud();
      if (cloudImageUrl) {
        uploadedImageUrl = cloudImageUrl;
      }
    }
  
    try {
      await updateDoctor({ ...doctorData, topImage: uploadedImageUrl }, token!);
      setNotification({
        message: `${t("message.adminPanel.appointments.doctors.updated")} "${doctorData.fullName}"`,
        type: "success",
      });
      navigate("/admin-panel/doctors");
    } catch (error: any) {
      setNotification({
        message: `${t("message.adminPanel.appointments.doctors.errorUpdating")}: ${error.message}`,
        type: "error",
      });
    } finally {
      setIsSaving(false);
    }
  };
  
  
   

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
      setSelectedImageFile(file);
    }
  };

  const uploadImageToCloud = async () => {
    if (!selectedImageFile) return;

    if (!previewImage || !doctorData?.id) return;
    const file = await fetch(previewImage)
      .then((res) => res.blob())
      .then((blob) => new File([blob], "image.jpg", { type: "image/jpeg" }));

    try {
      const uploadedImageUrl = await addImage(file, doctorData.id, 0, token!);
      console.log("Uploaded image URL:", uploadedImageUrl);
      return `https://${uploadedImageUrl.path}`;
    } catch (error) {
      console.error("Failed to upload image:", error);
      setNotification({
        message: `Failed to upload image: ${(error as Error).message}`,
        type: "error",
      });
    }
  };

  if (!doctorData) {
    return <p>Loading doctor data...</p>;
  }

  return (
    <EditDoctorContainer>
      <HeaderBox>
        <StyledReturnButton onClick={() => navigate("/admin-panel/doctors")}>
          ← {t("message.adminPanel.appointments.doctors.returnBack")} 
        </StyledReturnButton>
        <StyledSaveButton onClick={handleSave} disabled={isSaving}>
          {isSaving ? t("message.adminPanel.appointments.doctors.savingButton") : t("message.adminPanel.appointments.doctors.saveButton")} {/* Використано t */}
        </StyledSaveButton>
      </HeaderBox>
      {notification && (
        <CustomNotification
          message={notification.message}
          type={notification.type}
        />
      )}
      <ScrollContainer>
        <MainTextContainer>
          <TopContainer>
            <MainBoxText>
              <InputContainerFullName>
                <SectionTitles>{t("message.adminPanel.appointments.doctors.fullName")}</SectionTitles> 
                <Input
                  type="text"
                  value={doctorData.fullName}
                  onChange={(e) =>
                    setDoctorData({ ...doctorData, fullName: e.target.value })
                  }
                />
              </InputContainerFullName>
    
              <EditTopImage>
                <TitlesBox>{t("message.adminPanel.appointments.doctors.editTopImage")}</TitlesBox> 
                <UploadInput
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </EditTopImage>
    
              <CheckboxLabel>
                <input
                  type="checkbox"
                  checked={doctorData.isActive}
                  onChange={(e) =>
                    setDoctorData({ ...doctorData, isActive: e.target.checked })
                  }
                />
                {t("message.adminPanel.appointments.doctors.makeCardVisible")} 
              </CheckboxLabel>
    
              <Container>
                <SectionTitles>{t("message.adminPanel.appointments.doctors.title")}</SectionTitles>
                <Section>
                  <TitleBoxText>DE</TitleBoxText>
                  <Input
                    type="text"
                    value={doctorData.titleDe || ""}
                    onChange={(e) =>
                      setDoctorData({
                        ...doctorData,
                        titleDe: e.target.value,
                      })
                    }
                  />
                </Section>
                <Section>
                  <TitleBoxText>EN</TitleBoxText>
                  <Input
                    type="text"
                    value={doctorData.titleEn || ""}
                    onChange={(e) =>
                      setDoctorData({
                        ...doctorData,
                        titleEn: e.target.value,
                      })
                    }
                  />
                </Section>
                <Section>
                  <TitleBoxText>RU</TitleBoxText>
                  <Input
                    type="text"
                    value={doctorData.titleRu || ""}
                    onChange={(e) =>
                      setDoctorData({
                        ...doctorData,
                        titleRu: e.target.value,
                      })
                    }
                  />
                </Section>
              </Container>
            </MainBoxText>
    
            <EditPhotoSection>
              <PhotoPreview
                src={previewImage || doctorData.topImage || "https://via.placeholder.com/600x400"}
                alt="Doctor preview"
              />
            </EditPhotoSection>
          </TopContainer>
    
  
         <Container>
         <SectionTitles>{t("message.adminPanel.appointments.doctors.specialisation")}</SectionTitles>
  
                <Section>
                <TitleBoxText>DE</TitleBoxText>
                  <Input
                    type="text"
                    value={doctorData.specialisationDe || ""}
                    onChange={(e) =>
                      setDoctorData({
                        ...doctorData,
                        specialisationDe: e.target.value,
                      })
                    }
                  />
                </Section>
                <Section>
                  <TitleBoxText>EN</TitleBoxText>
                  <Input
                    type="text"
                    value={doctorData.specialisationEn || ""}
                    onChange={(e) =>
                      setDoctorData({
                        ...doctorData,
                        specialisationEn: e.target.value,
                      })
                    }
                  />
                </Section>
                <Section>
                  <TitleBoxText>RU</TitleBoxText>
                  <Input
                    type="text"
                    value={doctorData.specialisationRu || ""}
                    onChange={(e) =>
                      setDoctorData({
                        ...doctorData,
                        specialisationRu: e.target.value,
                      })
                    }
                  />
                </Section>
  
         </Container>
  
          <BottomContainer>
  
            <SectionTitles>{t("message.adminPanel.appointments.doctors.biography")}</SectionTitles> 
    
            <BiographySection>
              <TitleBoxText>DE</TitleBoxText>
              <BiographyTextareaDe
                value={doctorData.biographyDe || ""}
                onChange={(e) =>
                  setDoctorData({ ...doctorData, biographyDe: e.target.value })
                }
              />
            </BiographySection>
    
            <BiographySection>
              <TitleBoxText>EN</TitleBoxText>
              <BiographyTextareaEn
                value={doctorData.biographyEn || ""}
                onChange={(e) =>
                  setDoctorData({ ...doctorData, biographyEn: e.target.value })
                }
              />
            </BiographySection>
    
            <BiographySection>
              <TitleBoxText>RU</TitleBoxText>
              <BiographyTextareaRu
                value={doctorData.biographyRu || ""}
                onChange={(e) =>
                  setDoctorData({ ...doctorData, biographyRu: e.target.value })
                }
              />
            </BiographySection>
          </BottomContainer>
        </MainTextContainer>
      </ScrollContainer>
    </EditDoctorContainer>
  );
};

export default EditDoctorPage;
