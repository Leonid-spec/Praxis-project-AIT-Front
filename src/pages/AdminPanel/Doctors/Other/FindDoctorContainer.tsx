import { ImageItem, InputBox, StyledButton } from "./styles";
import { useTranslation } from "react-i18next";
interface FindDoctorContainerProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const FindDoctorContainer: React.FC<FindDoctorContainerProps> = ({ searchTerm, setSearchTerm }) => {
  const { t } = useTranslation();
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <StyledButton>
      <ImageItem
        src="https://static.vecteezy.com/system/resources/previews/011/947/136/original/silver-search-icon-free-png.png"
        alt={t("message.adminPanel.appointments.doctors.searchIconAlt")}
      />
      <InputBox
        type="text"
        placeholder={t("message.adminPanel.appointments.doctors.searchPlaceholder")}
        value={searchTerm}
        onChange={handleInputChange}
      />
    </StyledButton>
  );
};