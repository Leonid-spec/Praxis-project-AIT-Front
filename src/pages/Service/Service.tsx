import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState, AppDispatch } from "../../store/store";
import {
  fetchServicesStart,
  fetchServicesSuccess,
  fetchServicesFailure,
} from "../../store/slices/serviceSlice";
import ServiceCard from "../../components/Cards/Service/ServiceCard";
import {
  ServiceContainer,
  WelcomeSection,
  ServiceHeaderText,
  HighlightText,
  ServicePhoto,
  HeaderTextBox,
  ServiceText,
  ServicesGrid,
} from "./styles";
import { useTranslation } from "react-i18next";
import { Service } from "../../store/slices/serviceSlice";

type Language = "en" | "de" | "ru";

const ServicePage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { services, loading, error } = useSelector(
    (state: RootState) => state.service // Убедитесь, что поле "service" определено в store
  );
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language as Language;

  useEffect(() => {
    const fetchServices = async () => {
      dispatch(fetchServicesStart());
      try {
        const response = await fetch("http://localhost:5000/services");
        const data = await response.json();
        dispatch(fetchServicesSuccess(data));
      } catch (err: any) {
        dispatch(fetchServicesFailure(err.message || t("errorFetchingServices")));
      }
    };

    fetchServices();
  }, [dispatch]);

  const handleDetailsClick = (id: number) => {
    navigate(`/service/${id}`);
  };

  return (
    <ServiceContainer>
      <WelcomeSection>
        <ServiceHeaderText>
          {t("message.main.service_page.welcome")}{" "}
          <HighlightText>Abramian Dental</HighlightText>
        </ServiceHeaderText>
      </WelcomeSection>

      <ServicePhoto
        src="https://example.com/service-photo.jpg"
        alt="Service"
      />

      <HeaderTextBox>
        <ServiceText>
          Unsere <HighlightText>Leistungen</HighlightText> |
        </ServiceText>
      </HeaderTextBox>

      <ServicesGrid>
        {loading ? (
          <p>{t("loadingServices")}</p>
        ) : error ? (
          <p>{t("errorFetchingServices")}</p>
        ) : services.length > 0 ? (
          services.map((service: Service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              photo={
                service.topimage
                  ? service.topimage.replace(/\\/g, "/")
                  : "https://via.placeholder.com/150"
              }
              name={service.name}
              description={service.description_en || ""}
              onDetailsClick={() => handleDetailsClick(service.id)}
            />
          ))
        ) : (
          <p>{t("noServicesAvailable")}</p>
        )}
      </ServicesGrid>
    </ServiceContainer>
  );
};

export default ServicePage;
