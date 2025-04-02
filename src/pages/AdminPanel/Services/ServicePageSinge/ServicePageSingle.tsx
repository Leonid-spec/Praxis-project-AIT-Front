import { useNavigate } from "react-router-dom";
import { 
  AddNewServicePageContainer, 
  HeaderBox 
} from "./style";

export const ServicePageSingle = () => {

  const navigate = useNavigate();

  return (
          <AddNewServicePageContainer>
            <HeaderBox>
              <div onClick={() => navigate("/adminServices")} style={{cursor: "pointer"}}>← Return back</div>
              <div>Make card unvisible</div>
              <button>Save all</button>
            </HeaderBox>
          </AddNewServicePageContainer>
  );
};