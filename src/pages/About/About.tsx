import React from "react";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./aboutModule.css";
import { useTranslation } from "react-i18next";
import { AboutContainer, HeaderTextBox, HighlightedSpan, ServiceText } from "./styles";
import { HighlightText } from "../Team/styles";
import Carousel from "../../components/Carousel/Carousel";

const About: React.FC = () => {
  const { t } = useTranslation();
  // const sliderRef = React.useRef<Slider>(null);

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 1500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   centerMode: true,
  //   centerPadding: "0",
  //   autoplay: true,
  //   autoplaySpeed: 4000,
  //   arrows: false,
  //   swipe: true,
  //   touchMove: true,
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //         centerMode: false,
  //       },
  //     },
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         centerMode: false,
  //       },
  //     },
  //   ],
  // };

  // const images = [
  //   "/src/public/depositphotos_159678230-stock-photo-empty-dentist-office.jpg",
  //   "/src/public/depositphotos_24829235-stock-photo-dentist-office.jpg",
  //   "/src/public/depositphotos_93803168-stock-photo-modern-dental-office-interior.jpg",
  //   "/src/public/mwwh3sospdtz1mgfd2e70f3pl24stnq4.jpg",
  // ];

  // const handlePrev = () => {
  //   sliderRef.current?.slickPrev();
  // };

  // const handleNext = () => {
  //   sliderRef.current?.slickNext();
  // };

  const parseSubtitle = (text: string) => {
    return text
      .split(/<HighlightedSpan><\/HighlightedSpan>/)
      .map((part, index) =>
        index % 2 === 1 ? (
          <HighlightedSpan key={index}>{part}</HighlightedSpan>
        ) : (
          part
        )
      );
  };

  return (
    <>
      <AboutContainer>
    
          <HeaderTextBox>
            <ServiceText>
            {t("message.header.menu.praxis")}{" "}
              <HighlightText>
                {parseSubtitle(t("message.header.menu.cabinets"))}
              </HighlightText>{" "}
             
            </ServiceText>
          </HeaderTextBox>
    
          {/* <div className="carousel-container">
            <button
              className="carousel-arrow carousel-arrow-left"
              onClick={handlePrev}
            >
              ‹
            </button>
            <Slider {...settings} ref={sliderRef}>
              {images.map((src, index) => (
                <div key={index} className="carousel-slide">
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="carousel-image"
                  />
                </div>
              ))}
            </Slider>
            <button
              className="carousel-arrow carousel-arrow-right"
              onClick={handleNext}
            >
              ›
            </button>
          </div> */}
    
          <Carousel />

      </AboutContainer>
    </>
  );
};

export default About;
