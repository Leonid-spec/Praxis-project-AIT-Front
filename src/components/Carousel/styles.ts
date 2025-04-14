import styled from "styled-components";

export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  height: 450px;
  background-color: #f8f8f8; 
  padding: 30px;

  @media (max-width: 1024px) {
    height: 350px;
    padding: 20px;
  }

  @media (max-width: 768px) {
    height: 300px;
    padding: 20px;
  }

  @media (max-width: 480px) {
    height: 250px;
    padding: 10px;
  }
`;

export const MainImageContainer = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;

    @media (max-width: 768px) {
      border-radius: 8px;
    }

    @media (max-width: 480px) {
      border-radius: 5px;
    }
  }
`;

export const SideImagesContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
  margin: 0 10px;

  @media (max-width: 768px) {
    margin: 0 15px;
  }

  @media (max-width: 480px) {
    margin: 0 5px;
  }
`;

export const SideImage = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
  border-radius: 5px;
  opacity: 0.7;

  @media (max-width: 768px) {
    height: 60%; 
  }

  @media (max-width: 480px) {
    height: 50%; 
  }
`;

export const NavButton = styled.button`
  background-color: #9ceef1; 
  border: none;
  color: white; 
  font-size: 1.5rem; 
  cursor: pointer;
  border-radius: 50%; 
  width: 50px; 
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 

  &:hover {
    background-color: #88d4e6; 
  }

  &:nth-child(1) {
    left: -30px; 
  }

  &:nth-child(5) {
    right: -30px; 
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1.2rem; 
  }

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
    font-size: 1rem; 
  }
`;

export const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-top: 15px;
  }

  @media (max-width: 480px) {
    margin-top: 10px;
  }
`;

export const Dot = styled.div<{ isActive: boolean }>`
  width: 10px;
  height: 10px;
  background-color: ${(props) => (props.isActive ? "#9ceef1" : "#d3d3d3")};
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #88d4e6;
  }
`;

export const CloseButton = styled.button`
  position: relative;
  top: 10px;
  right: 10px;
  background-color: #9ceef1; 
  border: none;
  color: white; 
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #88d4e6;
  }

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }

  @media (max-width: 480px) {
    width: 20px;
    height: 20px;
  }
`;
