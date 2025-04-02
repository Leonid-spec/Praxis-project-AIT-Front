import { useState } from "react";
import { AddNewServiceBtn } from "../Buttons/AddNewServiceBtn/AddNewServiceBtn";
import { FindServiceContainer } from "../Other/FindServiceContainer/FindServiceContainer";
import { ServicePageSingle } from "../ServicePageSinge/ServicePageSingle";
import { 
  CardsMainContainer,
  HeaderMainBtnsContainer, 
  ServicesPageAllContainer 
} from "./styles";

export const ServicesPageAll = () => {
  const [isAddingNewService, setIsAddingNewService] = useState(false);

  return (
    <ServicesPageAllContainer>

      <HeaderMainBtnsContainer>

        <AddNewServiceBtn />
        <FindServiceContainer/>

      </HeaderMainBtnsContainer>
      
      <CardsMainContainer>
        {/* <ServicePageSingle /> */}
      </CardsMainContainer>

    </ServicesPageAllContainer>
  );
};