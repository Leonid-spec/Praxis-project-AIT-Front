import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState, AppDispatch } from "../../store/store";
import {
  fetchActiveServicesFailure,
  fetchActiveServicesStart,
  fetchActiveServicesSuccess,
} from "../../store/slices/serviceSlice";
import ServiceCard from "../../components/Cards/Service/ServiceCard";
import {
  ServiceContainer,
  HighlightText,
  HeaderTextBox,
  ServiceText,
  ServicesGrid,
  LeftContainer,
  RightContainer,
  RightContainerPhoto,
  ServiceContainerMainPhoto,
  WelcomeTextSubtitle,
  HighlightedSpan,
} from "./styles";
import { useTranslation } from "react-i18next";
import { Service } from "../../store/types/serviceTypes";
import MakeAppointmentBtn from "../../components/Button/MakeAppointmentBtn/MakeAppointmentBtn";

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
        const token = localStorage.getItem("token");
        const response = await fetch(
          "http://localhost:8100/api/services/active",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`HTTP ${response.status}: ${errorText}`);
        }

        const data = await response.json();
        // console.log("Services data:", data);
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
  }, [dispatch]);

  const handleDetailsClick = (id: number) => {
    navigate(`/services/${id}`);
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
      <ServiceContainerMainPhoto>
        <LeftContainer>
          <WelcomeTextSubtitle>
            {parseSubtitle(t("message.main.service_page.subtitle"))}
          </WelcomeTextSubtitle>
          <MakeAppointmentBtn text={t("message.main.use_oft.button.title")} />
        </LeftContainer>

        <RightContainer>
          <RightContainerPhoto
            src="https://denticus-lb.de/wp-content/uploads/2017/10/MG_3734.jpg"
            alt="Service"
          />
        </RightContainer>
      </ServiceContainerMainPhoto>

      <HeaderTextBox>
        <ServiceText>
        {parseSubtitle(t("message.main.service_page.servicesIntro"))}{" "}
        <HighlightText>{parseSubtitle(t("message.header.menu.services"))}</HighlightText> |
        </ServiceText>
      </HeaderTextBox>

      <ServicesGrid>
        {loading ? (
          <p>{t("loadingServices")}</p>
        ) : error ? (
          <p>{t("errorFetchingServices")}</p>
        ) : services.length > 0 ? (
          services.map((service: Service) => {
            const titleKey = `title${
              currentLanguage.charAt(0).toUpperCase() + currentLanguage.slice(1)
            }` as keyof Pick<Service, "titleDe" | "titleEn" | "titleRu">;
            const title = (service[titleKey] as string) || t("noTitle");
            const descriptionKey = `description${
              currentLanguage.charAt(0).toUpperCase() + currentLanguage.slice(1)
            }` as keyof Pick<
              Service,
              "descriptionDe" | "descriptionEn" | "descriptionRu"
            >;
            const description =
              (service[descriptionKey] as string) || t("noDescription");

            return (
              <ServiceCard
                key={service.id}
                id={service.id}
                photo={
                  service.topImage
                    ? service.topImage.replace(/\\/g, "/")
                    : "https://via.placeholder.com/150"
                }
                title={title || t("noTitle")}
                description={description || t("noDescription")}
                onDetailsClick={() => handleDetailsClick(service.id)}
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
