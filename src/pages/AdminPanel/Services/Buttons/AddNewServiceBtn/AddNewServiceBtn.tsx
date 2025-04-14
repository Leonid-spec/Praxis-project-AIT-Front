import { StyledAddButton } from "./styles";
import { useTranslation } from "react-i18next";

interface AddNewServiceBtnProps {
  onAddService: () => void;  
}

function AddNewServiceBtn({ onAddService }: AddNewServiceBtnProps) {
  const { t } = useTranslation(); 
 
  return (
    <StyledAddButton onClick={onAddService}>
       {t("message.adminPanel.appointments.services.addNewService")} 
    </StyledAddButton>
  );
}

export default AddNewServiceBtn;
