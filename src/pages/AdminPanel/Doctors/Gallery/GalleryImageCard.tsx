import { 
  FaTrashAlt, 
  // FaHandPaper, 
  FaArrowsAlt } from "react-icons/fa";
import styled from "styled-components";

type GalleryImageCardProps = {
  url: string;
  onDelete: () => void;
};

const ImageCard = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  width: 160px;
  height: 120px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ButtonGroup = styled.div`
  position: absolute;
  top: 6px;
  right: 6px;
  display: flex;
  gap: 6px;
`;

const IconBtn = styled.button`
  background: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 6px;
  padding: 4px;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: white;
  }

  svg {
    color: #333;
    width: 16px;
    height: 16px;
  }
`;

export const GalleryImageCard = ({ url, onDelete }: GalleryImageCardProps) => {
  return (
    <ImageCard>
      <Img src={url} alt="Gallery image" />
      <ButtonGroup>
        {/* <IconBtn><FaHandPaper /></IconBtn> */}
        <IconBtn><FaArrowsAlt /></IconBtn>

        <IconBtn onClick={onDelete}><FaTrashAlt /></IconBtn>
      </ButtonGroup>
    </ImageCard>
  );
};
