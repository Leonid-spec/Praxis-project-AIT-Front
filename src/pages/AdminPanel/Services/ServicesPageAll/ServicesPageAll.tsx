import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getServices } from "../../../../api/serviceAPI";
import AddNewServiceBtn from "../Buttons/AddNewServiceBtn/AddNewServiceBtn";
import { FindServiceContainer } from "../Other/FindServiceContainer/FindServiceContainer";
import ServiceCard from "../Other/ServiceCard/ServiceCard";
import { FaSyncAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

import {
  ServicesPageAllContainer,
  CardsMainContainer,
  ScrollContainer,
  HeaderMainBtnsContainer,
  ServiceCardsMainContainer,
  RefreshIconBox,
  ServiceCardStyled,
} from "./styles";
import EditServicePage from "../EditServicePage/EditServicePage";
import { ServiceData } from "../../../../store/types/serviceTypes";
import { Outlet } from "react-router-dom";
// import { GalleryContainer } from "../Gallery/styles";

export const ServicesPageAll = () => {
  const { t } = useTranslation();
  const [isEditingService, setIsEditingService] = useState<number | null>(null);
  const [, setIsAddingNewService] = useState(false);
  const [services, setServices] = useState<ServiceData[]>([]);
  const [filteredServices, setFilteredServices] = useState<ServiceData[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const fetchServices = async () => {
    try {
      if (!token) {
        setError(
          t("message.adminPanel.appointments.services.addServices.errorLoading")
        );
        return;
      }
      const data = await getServices(token);
      setServices(data);
      setFilteredServices(data || []);
      setError(null);
    } catch (err: any) {
      setError(
        err.message ||
          t("message.adminPanel.appointments.services.addServices.errorLoading")
      );
    }
  };

  useEffect(() => {
    fetchServices();
  }, [token]);

  useEffect(() => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filtered = services.filter((service) =>
      service.titleEn?.toLowerCase().includes(lowerCaseSearchTerm)
    );
    setFilteredServices(filtered);
  }, [searchTerm, services]);

  const handleAddServiceClick = () => {
    setIsAddingNewService(true);
    navigate("add-new-service");
  };

  const handleEditClick = (id: number) => {
    setIsEditingService(id);
  };

  const handleBackToMainClick = () => {
    setIsEditingService(null);
    setIsAddingNewService(false);
  };

  const handleRefreshBtn = () => {
    fetchServices();
  };

  return (
    <ServicesPageAllContainer>
      {isEditingService ? (
        <CardsMainContainer>
          <EditServicePage
            onReturnBack={handleBackToMainClick}
            serviceId={isEditingService}
          />
        </CardsMainContainer>
      ) : (
        <>
          <HeaderMainBtnsContainer>
            <AddNewServiceBtn onAddService={handleAddServiceClick} />
            <RefreshIconBox onClick={handleRefreshBtn}>
              <FaSyncAlt size={24} color="#20b1b7" />
            </RefreshIconBox>
            <FindServiceContainer
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              placeholder={t(
                "message.adminPanel.appointments.services.addServices.searchPlaceholder"
              )}
            />
          </HeaderMainBtnsContainer>

          <Outlet />

          <ScrollContainer>
            <ServiceCardsMainContainer>
              {error && <p style={{ color: "red" }}>{error}</p>}
              {filteredServices.map(
                (service) =>
                  service.id !== undefined && service.isActive !== undefined ? (
                    <ServiceCardStyled
                      key={service.id}
                      id={service.id}
                      title={service.titleEn || "Untitled Service"} 
                      topImage={service.topImage || ""}
                      onClick={() => handleEditClick(service.id!)}
                      isActive={service.isActive}
                    >
                      <ServiceCard
                        key={service.id}
                        id={service.id}
                        title={service.titleEn}
                        topImage={service.topImage}
                        onEditClick={handleEditClick.bind(null, service.id)}
                      />
                    </ServiceCardStyled>
                  ) : null
              )}
            </ServiceCardsMainContainer>

          </ScrollContainer>
        </>
      )}
    </ServicesPageAllContainer>
  );
};
