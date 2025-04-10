import { t } from "i18next";
import {
  EditTopImage,
  GalleryContainer,
  TitleBox,
  TitleSection,
  UploadInput,
  UploadText,
} from "./styles";
import { useState } from "react";
import { ServiceData } from "../../../../store/types/serviceTypes";

function GalleryServices() {
  const [selectedImageFile, setSelectedImageFile] = useState<File | null>(null);
  const [localPreviewURL, setLocalPreviewURL] = useState<string | null>(null);
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

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImageFile(file);
      const imageUrl = URL.createObjectURL(file);
      setLocalPreviewURL(imageUrl);
      setServiceData((prev) => ({
        ...prev,
        topImage: imageUrl,
      }));
    }
  };

  return (
    <GalleryContainer>

        <TitleBox>
          {/* {t("message.adminPanel.appointments.services.gallery")} */}
          Gallery
        </TitleBox>

        <EditTopImage>
          <UploadText>
            {t("message.adminPanel.appointments.services.editTopImage")}
          </UploadText>
          <UploadInput
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </EditTopImage>


    </GalleryContainer>
  );
}

export default GalleryServices;
