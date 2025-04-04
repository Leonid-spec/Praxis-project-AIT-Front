import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { getServices } from "../../../../api/serviceAPI";
import { Service } from "../../../Appointment/ServiceDropdown";
import AddNewServiceBtn from "../Buttons/AddNewServiceBtn/AddNewServiceBtn";
import { FindServiceContainer } from "../Other/FindServiceContainer/FindServiceContainer";
import ServiceCard from "../Other/ServiceCard/ServiceCard";
import {
  ServicesPageAllContainer,
  CardsMainContainer,
  ScrollContainer,
  HeaderMainBtnsContainer,
  ServiceCardsMainContainer,
  RefreshIconBox,
  RefreshIconImage,
} from "./styles";
import EditServicePage from "../EditServicePage/EditServicePage";

export const ServicesPageAll = () => {
  const [isEditingService, setIsEditingService] = useState<number | null>(null);
  const [services, setServices] = useState<Service[]>([]);
  const [filteredServices, setFilteredServices] = useState<Service[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchServices = async () => {
      try {
        if (!token) {
          setError("Access token is missing");
          return;
        }
        const data = await getServices(token);
        setServices(data);
        setFilteredServices(data);
      } catch (err: any) {
        setError(err.message || "Dental service loading error");
      }
    };

    fetchServices();
  }, [token]);

  useEffect(() => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filtered = services.filter((service) =>
      service.titleEn?.toLowerCase().includes(lowerCaseSearchTerm)
    );
    setFilteredServices(filtered);
  }, [searchTerm, services]);

  const handleEditClick = (id: number) => {
    setIsEditingService(id);
  };

  const handleBackToMainClick = () => {
    setIsEditingService(null);
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
        <ScrollContainer>
          <HeaderMainBtnsContainer>
            <AddNewServiceBtn
              onAddService={() => navigate("/add-new-service")}
            />
            <RefreshIconBox>
              <RefreshIconImage
                src="https://www.svgrepo.com/show/22749/refresh.svg"
                alt=""
              />
            </RefreshIconBox>
            <FindServiceContainer
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          </HeaderMainBtnsContainer>

          <ServiceCardsMainContainer>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {!error &&
              filteredServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  id={service.id}
                  title={service.titleEn || "No Title"}
                  photo={service.topImage || "https://via.placeholder.com/300"}
                  onEditClick={handleEditClick.bind(null, service.id)}
                />
              ))}
          </ServiceCardsMainContainer>
        </ScrollContainer>
      )}
    </ServicesPageAllContainer>
  );
};
