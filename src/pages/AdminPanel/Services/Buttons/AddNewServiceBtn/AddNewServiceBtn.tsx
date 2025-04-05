import { useNavigate } from "react-router-dom";
import { StyledAddButton } from "./styles";

function AddNewServiceBtn() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("add-new-service");
  };

  return (
    <StyledAddButton onClick={handleClick}>
      + Add new service
    </StyledAddButton>
  );
}

export default AddNewServiceBtn;
