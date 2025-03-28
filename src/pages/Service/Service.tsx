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
import { Service } from "../../store/slices/serviceSlice";
import servicesData from "../../api/service.json"; 
import MakeAppointmentBtn from "../../components/Button/MakeAppointmentBtn/MakeAppointmentBtn";

type Language = "en" | "de" | "ru";

const ServicePage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { services, loading, error } = useSelector(
    (state: RootState) => state.service
  );
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language as Language;

  useEffect(() => {
    const fetchServices = async () => {
      dispatch(fetchServicesStart());
      try {
        // Используем локальные данные вместо API-запроса
        dispatch(fetchServicesSuccess(servicesData.services));
      } catch (err: any) {
        dispatch(fetchServicesFailure(t("message.main.service_page.errorFetchingServices") || "Ошибка при загрузке услуг"));

      }
    };

    fetchServices();
  }, [dispatch]);

  const handleDetailsClick = (id: number) => {
    navigate(`/service/${id}`);
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
          Unsere <HighlightText>Leistungen</HighlightText> |
        </ServiceText>
      </HeaderTextBox>

      <ServicesGrid>
        {loading ? (
          <p>{t("loadingServices")}</p>
        ) : error ? (
          <p>{t("errorFetchingServices")}</p>
        ) : services.length > 0 ? (
          services.map((service: Service) => {
            const descriptionKey = `description_${currentLanguage}` as keyof Service;
            const description = service[descriptionKey] || t("message.main.service_page.noDescription");
            const validDescription =
              typeof description === "string" ? description : t("noDescription"); 

            return (
              <ServiceCard
                key={service.id}
                id={service.id}
                photo={
                  service.topimage
                    ? service.topimage.replace(/\\/g, "/")
                    : "https://via.placeholder.com/150"
                }
                name={service.name}
                description={validDescription} 
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