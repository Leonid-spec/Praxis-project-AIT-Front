import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {AppDispatch, RootState} from "../../store/store";
import {
  fetchActiveServicesFailure,
  fetchActiveServicesStart,
  fetchActiveServicesSuccess,
} from "../../store/slices/serviceSlice";
import ServiceCard from "../../components/Cards/Service/ServiceCard";
import {HeaderTextBox, HighlightedSpan, HighlightText, ServiceContainer, ServicesGrid, ServiceText,} from "./styles";
import {useTranslation} from "react-i18next";
import {ServiceData} from "../../store/types/serviceTypes";

type Language = "En" | "De" | "Ru";

const ServicePage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { services, loading, error } = useSelector(
    (state: RootState) => state.service
  );
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language as Language;

  useEffect(() => {
    const fetchActiveServices = async () => {
      dispatch(fetchActiveServicesStart());
      try {
        // const token = localStorage.getItem("token");
        // if (!token) {
        //   throw new Error(t("missingToken"));
        // }

        const response = await fetch(
          "/api/services/active",
          {
            headers: {
              // Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`HTTP ${response.status}: ${errorText}`);
        }

        const data = await response.json();
        dispatch(fetchActiveServicesSuccess(data));
      } catch (err: any) {
        console.error("Failed to fetch active services:", err);
        dispatch(
          fetchActiveServicesFailure(
            err.message || t("errorFetchingActiveServices")
          )
        );
      }
    };

    fetchActiveServices();
  }, [dispatch, t]);

  const handleDetailsClick = (id: number) => {
    if (id) {
      navigate(`/service/${id}`);
    } else {
      console.error("Service ID is missing");
    }
  };

  const parseSubtitle = (text: string) => {
    return text
      .split(/<HighlightedSpan>|<\/HighlightedSpan>/)
      .map((part, index) =>
        index % 2 === 1 ? (
          <HighlightedSpan key={index}>{part}</HighlightedSpan>
        ) : (
          part
        )
      );
  };

  return (
    <ServiceContainer>
      
      <HeaderTextBox>
        <ServiceText>
          {parseSubtitle(t("message.main.service_page.servicesIntro"))}{" "}
          <HighlightText>
            {parseSubtitle(t("message.header.menu.services"))}
          </HighlightText>{" "}
          
        </ServiceText>
      </HeaderTextBox>

      <ServicesGrid>
        {loading ? (
          <p>{t("loadingServices")}</p>
        ) : error ? (
          <p>{t("errorFetchingServices")}</p>
        ) : services.length > 0 ? (
          services.map((service: ServiceData) => {
            const titleKey = `title${
              currentLanguage.charAt(0).toUpperCase() + currentLanguage.slice(1)
            }` as keyof Pick<ServiceData, "titleDe" | "titleEn" | "titleRu">;
            const title = (service[titleKey] as string) || t("noTitle");

            const descriptionKey = `description${
              currentLanguage.charAt(0).toUpperCase() + currentLanguage.slice(1)
            }` as keyof Pick<
              ServiceData,
              "descriptionDe" | "descriptionEn" | "descriptionRu"
            >;
            const description =
              (service[descriptionKey] as string) || t("noDescription");

            return (
              <ServiceCard
                key={service.id}
                id={service.id!}
                topImage={
                  service.topImage
                    ? service.topImage.replace(/\\/g, "/")
                    : "https://via.placeholder.com/150"
                }
                title={title}
                description={description}
                onDetailsClick={() => handleDetailsClick(service.id!)}
              />
            );
          })
        ) : (
          <p>{t("noServicesAvailable")}</p>
        )}
      </ServicesGrid>
    </ServiceContainer>
  );
};

export default ServicePage;
