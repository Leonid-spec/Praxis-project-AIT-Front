import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarouselSlick.css"; 

const CarouselSlick: React.FC = () => {
  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    prevArrow: <div className="slick-prev custom-arrow-left">‹</div>, 
    nextArrow: <div className="slick-next custom-arrow-right">›</div>,
  };

  return (
    <div className="slick-container"> 
      <Slider {...slickSettings}>
        {[...Array(5)].map((_, index) => (
          <div key={index} className="slick-slide"> 
            <img
              src={`https://via.placeholder.com/400x300?text=Photo+${index + 1}`}
              alt={`Photo ${index + 1}`}
              className="slick-image" 
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselSlick;
