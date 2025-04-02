import { useNavigate } from "react-router-dom";
import { StyledAddButton } from "./styles";

export const AddNewServiceBtn = () => {
  const navigate = useNavigate();

  return (
    <StyledAddButton onClick={() => navigate("/add-new-service")}>
      <span>+ Add new service</span>
    </StyledAddButton>
  );
};
