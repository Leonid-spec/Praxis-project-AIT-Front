import { t } from "i18next";
import {
  EditTopImage,
  GalleryContainer,
  TitleBox,
  UploadInput,
  GalleryGrid,
  GalleryImageWrapper,
  // PreviewImage,
} from "./styles";
import { useState } from "react";
import { ServiceData } from "../../../../store/types/serviceTypes";
import { GalleryImageCard } from "./GalleryImageCard";

function GalleryServices() {
  const [, setSelectedImages] = useState<File[]>([]);
  const [, setPreviewURLs] = useState<string[]>([]);
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
    const files = event.target.files;
    if (files && files.length > 0) {
      const fileArray = Array.from(files);
      const urls = fileArray.map((file) => URL.createObjectURL(file));

      setSelectedImages((prev) => [...prev, ...fileArray]);
      setPreviewURLs((prev) => [...prev, ...urls]);

      setServiceData((prev) => ({
        ...prev,
        images: [
          ...(prev.images ?? []),
          ...urls.map((url) => ({ id: 0, path: url })),
        ],
      }));
    }
  };

  const handleReplaceImage = (index: number) => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.onchange = () => {
      const file = fileInput.files?.[0];
      if (file) {
        const newUrl = URL.createObjectURL(file);
        setServiceData((prev) => {
          const newImages = [...(prev.images ?? [])];
          newImages[index] = { ...newImages[index], path: newUrl };
          return { ...prev, images: newImages };
        });
      }
    };
    fileInput.click();
  };

  const handleDeleteImage = (index: number) => {
    setServiceData((prev) => {
      const newImages = [...(prev.images ?? [])];
      newImages.splice(index, 1);
      return { ...prev, images: newImages };
    });
  };

  return (
    <GalleryContainer>
      <TitleBox>
        {t("message.adminPanel.appointments.services.gallery") || "Gallery"}
      </TitleBox>

      <EditTopImage>
        <UploadInput
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageUpload}
        />
      </EditTopImage>

      <GalleryGrid>
        {serviceData.images?.map((img, index) => (
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
  );
}

export default GalleryServices;
