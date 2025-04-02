import { 
  ImageItem, 
  InputBox, 
  StyledButton 
} from "./styles";

export const FindServiceContainer = () => {
  const handleClick = () => {};

  return (
    <StyledButton>
      <ImageItem
        src="https://static.vecteezy.com/system/resources/previews/011/947/136/original/silver-search-icon-free-png.png"
        alt="Search"
      />
      <InputBox type="text" placeholder="Enter the service title"/>
    </StyledButton>
  );
};
