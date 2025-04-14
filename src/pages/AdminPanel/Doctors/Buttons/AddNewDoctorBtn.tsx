import { StyledAddButton } from "./styles";
import { useTranslation } from "react-i18next";

interface AddNewDoctorBtnProps {
  onAddDoctor: () => void;  
}

const AddNewDoctorBtn: React.FC<AddNewDoctorBtnProps> = ({ onAddDoctor }) => {
  const { t } = useTranslation();

  return (
    <StyledAddButton onClick={onAddDoctor}>
      {t("message.adminPanel.appointments.doctors.addNewDoctor")}
    </StyledAddButton>
  );
};

export default AddNewDoctorBtn;
