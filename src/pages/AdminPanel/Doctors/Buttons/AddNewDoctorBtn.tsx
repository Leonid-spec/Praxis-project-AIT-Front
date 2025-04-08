import { StyledAddButton } from "./styles";

interface AddNewDoctorBtnProps {
  onAddDoctor: () => void;  
}

const AddNewDoctorBtn: React.FC<AddNewDoctorBtnProps> = ({ onAddDoctor }) => {
  return (
    <StyledAddButton onClick={onAddDoctor}>
      + Add new doctor
    </StyledAddButton>
  );
};

export default AddNewDoctorBtn;