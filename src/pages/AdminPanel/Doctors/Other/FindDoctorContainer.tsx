import { ImageItem, InputBox, StyledButton } from "./styles";
interface FindDoctorContainerProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const FindDoctorContainer: React.FC<FindDoctorContainerProps> = ({ searchTerm, setSearchTerm }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <StyledButton>
      <ImageItem
        src="https://static.vecteezy.com/system/resources/previews/011/947/136/original/silver-search-icon-free-png.png"
        alt="Search"
      />
      <InputBox
        type="text"
        placeholder="Enter doctor's name"
        value={searchTerm}
        onChange={handleInputChange}
      />
    </StyledButton>
  );
};