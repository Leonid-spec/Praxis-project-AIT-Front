import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getServices } from "../../../../api/serviceAPI";
import { Service } from "../../../Appointment/ServiceDropdown";
import AddNewServiceBtn from "../Buttons/AddNewServiceBtn/AddNewServiceBtn";
import { FindServiceContainer } from "../Other/FindServiceContainer/FindServiceContainer";
import ServiceCard from "../Other/ServiceCard/ServiceCard";
import { FaSyncAlt } from "react-icons/fa";

import {
  ServicesPageAllContainer,
  CardsMainContainer,
  ScrollContainer,
  HeaderMainBtnsContainer,
  ServiceCardsMainContainer,
  RefreshIconBox,
} from "./styles";
import EditServicePage from "../EditServicePage/EditServicePage";
import { ServiceData } from "../../../../store/types/serviceTypes";
import { Outlet } from "react-router-dom";

export const ServicesPageAll = () => {
  const [isEditingService, setIsEditingService] = useState<number | null>(null);
  const [isAddingNewService, setIsAddingNewService] = useState(false); 
  const [services, setServices] = useState<ServiceData[]>([]);
  const [filteredServices, setFilteredServices] = useState<Service[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const fetchServices = async () => {
    try {
      if (!token) {
        setError("Access token is missing");
        return;
      }
      const data = await getServices(token);
      setServices(data);
      setFilteredServices(data? [] : data);
      setError(null);
      console.log("message", data);
    } catch (err: any) {
      setError(err.message || "Dental service loading error");
    }
  };

  useEffect(() => {
    fetchServices();
  } , [token]);

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

              <FindServiceContainer searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            </HeaderMainBtnsContainer>

            <Outlet />
  
            <ScrollContainer>
              <ServiceCardsMainContainer>
                {error && <p style={{ color: "red" }}>{error}</p>}
                {!error &&
                  filteredServices.map((service) => (
                    <ServiceCard
                      key={service.id}
                      id={service.id}
                      title={service.titleEn}
                      topImage={service.topImage}
                      onEditClick={handleEditClick.bind(null, service.id)}
                    />
                  ))}
              </ServiceCardsMainContainer>
            </ScrollContainer>
        </>
      )}
    </ServicesPageAllContainer>
  );
};
