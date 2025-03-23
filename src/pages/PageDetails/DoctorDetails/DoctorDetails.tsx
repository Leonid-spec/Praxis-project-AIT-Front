import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import doctorsData from "../../../api/doctors.json";
import {
  Container,
  ContentWrapper,
  ImageWrapper,
  MainImage,
  InfoWrapper,
  Title,
  Specialization,
  Biography,
  GalleryWrapper,
  GalleryTitle,
  ImagesGrid,
  GalleryImage,
} from "./styles";

type Language = "en" | "de" | "ru";

const DoctorDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language as Language;

  const doctor = doctorsData.doctors.find((doc) => doc.id === Number(id));

  if (!doctor) {
    return (
      <Container>
        <p>{t("doctorNotFound")}</p>
      </Container>
    );
  }

  const specializationKey = `specialisation_${currentLanguage}` as keyof typeof doctor;
  const specialization =
    typeof doctor[specializationKey] === "string"
      ? doctor[specializationKey]
      : t("noSpecialization");

  const biographyKey = `biogrphy_${currentLanguage}` as keyof typeof doctor;
  const biography =
    typeof doctor[biographyKey] === "string"
      ? doctor[biographyKey]
      : t("noBiography");

  return (
    <Container>
      <ContentWrapper>
        <ImageWrapper>
          <MainImage
            src={doctor.topimage || "https://via.placeholder.com/400"}
            alt={doctor.full_name}
          />
        </ImageWrapper>
        <InfoWrapper>
          <Title>{doctor.full_name}</Title>
          <Specialization>{specialization}</Specialization>
          <Biography>{biography}</Biography>
        </InfoWrapper>
      </ContentWrapper>

      <GalleryWrapper>
        <GalleryTitle>{t("gallery")}</GalleryTitle>
        <ImagesGrid>
          {doctor.images && doctor.images.length > 0 ? (
            doctor.images.map((img) => (
              <GalleryImage key={img.id} src={img.path} alt="Doctor's work" />
            ))
          ) : (
            <p>{t("noImages")}</p>
          )}
        </ImagesGrid>
      </GalleryWrapper>
    </Container>
  );
};

export default DoctorDetails;
