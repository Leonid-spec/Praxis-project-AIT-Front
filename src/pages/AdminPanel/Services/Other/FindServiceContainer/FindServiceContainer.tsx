import { useTranslation } from "react-i18next";  
import { FaSearch } from "react-icons/fa";
import { InputBox, SearchIcon, StyledButton } from "../../../AppointmentsPage/MainPage/FindByTime/styles";

interface FindServiceContainerProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  placeholder?: string;
}

export const FindServiceContainer: React.FC<FindServiceContainerProps> = ({ searchTerm, setSearchTerm }) => {
  const { t } = useTranslation();  

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value); 
  };

  return (
    <StyledButton>
      <SearchIcon>
        <FaSearch style={{ color: "white" }} />
      </SearchIcon>
      <InputBox 
        type="text" 
        placeholder={t("message.adminPanel.appointments.services.placeholder")} 
        value={searchTerm}
        onChange={handleInputChange}
      />
    </StyledButton>
  );
};
