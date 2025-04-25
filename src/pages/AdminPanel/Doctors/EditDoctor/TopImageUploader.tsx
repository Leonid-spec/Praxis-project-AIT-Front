import Cropper, { Area } from "react-easy-crop";
import { useState, useCallback } from "react";
import getCroppedImg from "../../../../utils/cropImage";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

type TopImageUploaderProps = {
  imageSrc: string;
  onCropComplete: (croppedFile: File) => void;
};

const CropperWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 300px; 
  border-radius: 10px;
  overflow: hidden;
`;

const TopImageUploader: React.FC<TopImageUploaderProps> = ({
  imageSrc,
  onCropComplete,
}) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const { t } = useTranslation();

  const onCropCompleteInternal = useCallback((_: Area, croppedPixels: Area) => {
    setCroppedAreaPixels(croppedPixels);
  }, []);

  const handleCrop = async () => {
    if (!croppedAreaPixels) return;
    const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
    onCropComplete(croppedImage);
  };

  return (
    <>
      <CropperWrapper>
        <Cropper
          image={imageSrc}
          crop={crop}
          zoom={zoom}
          aspect={3 / 4}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={onCropCompleteInternal}
          showGrid={false}
        />
      </CropperWrapper>
      <button onClick={handleCrop}>{t("message.adminPanel.apply")}</button>
    </>
  );
};

export default TopImageUploader;
