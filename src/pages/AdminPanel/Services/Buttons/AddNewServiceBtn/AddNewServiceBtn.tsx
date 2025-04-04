import { StyledAddButton } from "./styles";

interface AddNewServiceBtnProps {
  onAddService: () => void;
}

function AddNewServiceBtn( {onAddService}: AddNewServiceBtnProps) {

  return (
    <StyledAddButton onClick={onAddService}>
      + Add new service
    </StyledAddButton>
  );
};

export default AddNewServiceBtn;