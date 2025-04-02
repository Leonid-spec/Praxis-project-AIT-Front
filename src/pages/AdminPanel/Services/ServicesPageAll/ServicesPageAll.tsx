import { AddNewServiceBtn } from "../Buttons/AddNewServiceBtn/AddNewServiceBtn";
import { FindServiceContainer } from "../Other/FindServiceContainer/FindServiceContainer";
import { 
  CardsMainContainer,
  HeaderMainBtnsContainer, 
  ServicesPageAllContainer 
} from "./styles";

export const ServicesPageAll = () => {
  return (
    <ServicesPageAllContainer>

      <HeaderMainBtnsContainer>

        <AddNewServiceBtn />
        <FindServiceContainer/>

      </HeaderMainBtnsContainer>
      
      <CardsMainContainer>
      </CardsMainContainer>

    </ServicesPageAllContainer>
  );
};