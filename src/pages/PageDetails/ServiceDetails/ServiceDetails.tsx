import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Container,
  ContentWrapper,
  Description,
  DescriptionWrapper,
  GalleryGrid,
  GalleryImage,
  ImageSectionWrapper,
  ImageWrapper,
  InfoWrapper,
  LabelWrapper,
  MainImage,
  Title,
  TitleWrapper,
} from "./styles";
import { AppDispatch, RootState } from "../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { ServiceData } from "../../../store/types/serviceTypes";
import {
  fetchActiveServicesStart,
  fetchServicesFailure,
  fetchServicesSuccess,
} from "../../../store/slices/serviceSlice";
import { getActiveServices } from "../../../api/serviceAPI";

type Language = "De" | "En" | "Ru";

const ServiceDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language as Language;
  const dispatch: AppDispatch = useDispatch();
  const [mainImage, setMainImage] = useState<string | null>(null);
  const [, setPrevImage] = useState<string | null>(null);

  const { services, loading, error } = useSelector(
    (state: RootState) => state.service
  );
  const service = services.find((srv) => srv.id === Number(id));

  useEffect(() => {
    if (services.length === 0) {
      dispatch(fetchActiveServicesStart());
      const fetchDoctors = async () => {
        try {
          const data = await getActiveServices();

          dispatch(fetchServicesSuccess(data));
        } catch (err: any) {
          dispatch(
            fetchServicesFailure(err.message || t("errorFetchingServices"))
          );
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

  const handleImageClick = (imgPath: string) => {
    setPrevImage(mainImage);
    setMainImage(imgPath);
  };

  const resetImage = () => {
    setMainImage(service.topImage || "https://via.placeholder.com/400");
    setPrevImage(null);
  };

  return (
    <Container>
      <ImageSectionWrapper>
        <ImageWrapper>
          <MainImage
            src={
              mainImage || service.topImage || "https://via.placeholder.com/400"
            }
            alt="Main image of service"
          />
        </ImageWrapper>
        <GalleryGrid>
          {service.images && service.images.length > 0 ? (
            <>
              {service.images.map((img) => (
                <GalleryImage
                  key={img.id}
                  src={
                    img.path.startsWith("https://")
                      ? img.path
                      : `https://${img.path}`
                  }
                  alt="Service thumbnail"
                  onClick={() =>
                    handleImageClick(
                      img.path.startsWith("https://")
                        ? img.path
                        : `https://${img.path}`
                    )
                  }
                />
              ))}

              {service.topImage && (
                <GalleryImage
                  src={
                    service.topImage.startsWith("https://")
                      ? service.topImage
                      : `https://${service.topImage}`
                  }
                  alt="Reset to main"
                  title={t("reset")}
                  onClick={resetImage}
                  style={{
                    border: "2px solid #641230", 
                    cursor: "pointer",
                  }}
                />
              )}
            </>
          ) : (
            <p>{t("noImages")}</p>
          )}
        </GalleryGrid>

      </ImageSectionWrapper>

      <ContentWrapper>
        <InfoWrapper>
          <TitleWrapper>
            <LabelWrapper>
              {t("message.main.service_page.servicerDetails.title")}
            </LabelWrapper>
            <Title>{title}</Title>
          </TitleWrapper>
          <DescriptionWrapper>
            <LabelWrapper>
              {t("message.main.service_page.servicerDetails.specialization")}
            </LabelWrapper>
            <Description>{description}</Description>
          </DescriptionWrapper>
        </InfoWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default ServiceDetails;
