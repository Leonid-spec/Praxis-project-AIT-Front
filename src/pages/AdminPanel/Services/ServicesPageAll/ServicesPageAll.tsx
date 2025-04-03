import { useState } from "react";
import { FindServiceContainer } from "../Other/FindServiceContainer/FindServiceContainer";
import { ServicePageSingle } from "../ServicePageSinge/ServicePageSingle";
import { 
  CardsMainContainer,
  HeaderMainBtnsContainer, 
  ServicesPageAllContainer 
} from "./styles";
import { Outlet } from "react-router-dom";
import AddNewServiceBtn from "../Buttons/AddNewServiceBtn/AddNewServiceBtn";

export const ServicesPageAll = () => {
  const [isAddingNewService, setIsAddingNewService] = useState(false);

  const handleAddServiceClick = () => {
    setIsAddingNewService(true); 
  };

  const handleBackToMainClick = () => {
    setIsAddingNewService(false); 
  };

  return (
    <ServicesPageAllContainer>
    {isAddingNewService ? (
      <CardsMainContainer>
        <ServicePageSingle onReturnBack={handleBackToMainClick}/>
        <Outlet />
      </CardsMainContainer>
    ) : (
      <>
        <HeaderMainBtnsContainer>
          <AddNewServiceBtn onAddService={handleAddServiceClick}/>
          <FindServiceContainer />
        </HeaderMainBtnsContainer>
      </>
    )}
  </ServicesPageAllContainer>
  );
};