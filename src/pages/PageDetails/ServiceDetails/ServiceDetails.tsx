import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import servicesData from "../../../api/service.json";
import {
  Container,
  ContentWrapper,
  ImageWrapper,
  MainImage,
  InfoWrapper,
  Title,
  Description,
  GalleryWrapper,
  GalleryTitle,
  ImagesGrid,
  GalleryImage,
} from "./styles";

type Language = "en" | "de" | "ru";

const ServiceDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language as Language;

  const service = servicesData.services.find((srv) => srv.id === Number(id));

  if (!service) {
    return (
      <Container>
        <p>{t("serviceNotFound")}</p>
      </Container>
    );
  }

  const descriptionKey = `description_${currentLanguage}` as keyof typeof service;
  const description =
    typeof service[descriptionKey] === "string"
      ? service[descriptionKey]
      : t("noDescription");

  return (
    <Container>
      <ContentWrapper>
        <ImageWrapper>
          <MainImage
            src={service.topimage || "https://via.placeholder.com/400"}
            alt={service.name}
          />
        </ImageWrapper>
        <InfoWrapper>
          <Title>{service.name}</Title>
          <Description>{description}</Description>
        </InfoWrapper>
      </ContentWrapper>

      <GalleryWrapper>
        <GalleryTitle>{t("gallery")}</GalleryTitle>
        <ImagesGrid>
          {service.images && service.images.length > 0 ? (
            service.images.map((img) => (
              <GalleryImage key={img.id} src={img.path} alt="Service gallery" />
            ))
          ) : (
            <p>{t("noImages")}</p>
          )}
        </ImagesGrid>
      </GalleryWrapper>
    </Container>
  );
};

export default ServiceDetails;

