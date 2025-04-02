import { StyledAddButton } from "./styles";

export const AddNewServiceBtn = () => {
  const handleClick = () => {
    console.log("Adding new service...");
  };

  return (
    <StyledAddButton onClick={handleClick}>
      <span>+ Add new service</span>
    </StyledAddButton>
  );
};
