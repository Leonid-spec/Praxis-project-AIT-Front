import React, { useEffect, useState } from "react";
import {
  CarouselContainer,
  MainImageContainer,
  SideImagesContainer,
  SideImage,
  NavButton,
  DotsContainer,
  Dot,
} from "./styles";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const photos = [
  "/src/public/photo_5456500184721778858_y.jpg",
  "/src/public/photo_5456500184721778860_y.jpg",
  "/src/public/photo_5456500184721778861_y.jpg",
  "/src/public/photo_5456500184721778863_y.jpg",
  "/src/public/depositphotos_159678230-stock-photo-empty-dentist-office.jpg",
  "/src/public/depositphotos_24829235-stock-photo-dentist-office.jpg",
  "/src/public/depositphotos_93803168-stock-photo-modern-dental-office-interior.jpg",
  "/src/public/mwwh3sospdtz1mgfd2e70f3pl24stnq4.jpg",
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <CarouselContainer>
        <NavButton onClick={prevSlide}>
          <FaArrowLeft style={{ color: "white" }} />
        </NavButton>
        <SideImagesContainer>
          <SideImage
            src={photos[(currentIndex - 1 + photos.length) % photos.length]}
            alt="Previous Image"
          />
        </SideImagesContainer>
        <MainImageContainer>
          <img src={photos[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        </MainImageContainer>
        <SideImagesContainer>
          <SideImage
            src={photos[(currentIndex + 1) % photos.length]}
            alt="Next Image"
          />
        </SideImagesContainer>
        <NavButton onClick={nextSlide}>
          <FaArrowRight style={{ color: "white" }} />
        </NavButton>
      </CarouselContainer>
      <DotsContainer>
        {photos.map((_, index) => (
          <Dot
            key={index}
            isActive={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </DotsContainer>
    </>
  );
};

export default Carousel;
