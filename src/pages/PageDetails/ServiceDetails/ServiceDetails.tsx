import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Container,
  ContentWrapper,
  ImageWrapper,
  MainImage,
  InfoWrapper,
  Title,
  GalleryWrapper,
  GalleryTitle,
  ImagesGrid,
  GalleryImage,
  DescriptionWrapper,
  LabelWrapper,
  TitleWrapper,
  Description,
} from "./styles";
import { AppDispatch, RootState } from "../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { ServiceData } from "../../../store/types/serviceTypes";
import { fetchActiveServicesStart, fetchServicesFailure, fetchServicesSuccess } from "../../../store/slices/serviceSlice";

type Language = "De" | "En" | "Ru";

const ServiceDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language as Language;
  const dispatch: AppDispatch = useDispatch();

  const { services, loading, error } = useSelector(
    (state: RootState) => state.service
  );
  const service = services.find((srv) => srv.id === Number(id));

  useEffect(() => {
    if (services.length === 0) {
      dispatch(fetchActiveServicesStart());
      const fetchDoctors = async () => {
        try {
          const response = await fetch("http://localhost:8100/api/services/active");
          if (!response.ok) {
            throw new Error("Failed to fetch services");
          }
          const data = await response.json();
          dispatch(fetchServicesSuccess(data));
        } catch (err: any) {
          dispatch(fetchServicesFailure(err.message || t("errorFetchingServices")));
        }
      };
      fetchDoctors();
    }
  }, [dispatch, services.length, t]);

  if (loading) return <p>{t("loadingServices")}</p>;
  if (error) return <p>{t("errorFetchingServices")}</p>;

  if (!service) {
    return (
      <Container>
        <p>{t("serviceNotFound")}</p>
      </Container>
    );
  }

  const descriptionKey = `description${
    currentLanguage.charAt(0).toUpperCase() + currentLanguage.slice(1)
  }` as keyof ServiceData;
  const description =
    typeof service[descriptionKey] === "string"
      ? service[descriptionKey]
      : t("noDescription");

  const titleKey = `title${
    currentLanguage.charAt(0).toUpperCase() + currentLanguage.slice(1)
  }` as keyof ServiceData;
  const title =
    typeof service[titleKey] === "string" ? service[titleKey] : t("noTitle");

  return (
    <Container>
      <ContentWrapper>
        <ImageWrapper>
          <MainImage
            src={service.topImage || "https://via.placeholder.com/400"}
            alt="Main image of service"
          />
        </ImageWrapper>
        <InfoWrapper>
          <TitleWrapper>
            <LabelWrapper> 
              {t("message.main.service_page.servicerDetails.title")}</LabelWrapper>
            <Title>{title}</Title>
          </TitleWrapper>
          <DescriptionWrapper>
            <LabelWrapper>
              {t("message.main.service_page.servicerDetails.specialization")}</LabelWrapper>
            <Description>{description}</Description>
          </DescriptionWrapper>
        </InfoWrapper>
      </ContentWrapper>

      <GalleryWrapper>
        <GalleryTitle>{t("gallery")}</GalleryTitle>
        <ImagesGrid>
          {service.images && service.images.length > 0 ? (
            service.images.map((img) => (
              <GalleryImage key={img.id} src={img.path} alt="Service's work" />
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
