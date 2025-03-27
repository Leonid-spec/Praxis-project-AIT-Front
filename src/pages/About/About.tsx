// import React, { useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import styles from "./about.module.css";

// interface ImageData {
//   src: string;
// }

// const Arrow: React.FC<{ direction: "left" | "right"; onClick?: () => void }> = ({ direction, onClick }) => (
//   <div
//     className={`${styles.arrow} ${direction === "left" ? styles.arrowLeft : styles.arrowRight}`}
//     onClick={onClick}
//   >
//     {direction === "left" ? "‹" : "›"}
//   </div>
// );

// const About: React.FC = () => {
//   const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     centerMode: true,
//     centerPadding: "0",
//     prevArrow: <Arrow direction="left" />,
//     nextArrow: <Arrow direction="right" />,
//   };

//   const images: ImageData[] = [
//     { src: "/src/public/depositphotos_159678230-stock-photo-empty-dentist-office.jpg" },
//     { src: "/src/public/depositphotos_24829235-stock-photo-dentist-office.jpg" },
//     { src: "/src/public/depositphotos_93803168-stock-photo-modern-dental-office-interior.jpg" },
//     { src: "/src/public/mwwh3sospdtz1mgfd2e70f3pl24stnq4.jpg" },
//   ];

//   const handleClick = (index: number) => {
//     setSelectedIndex(index === selectedIndex ? null : index);
//   };

//   return (
//     <div className={styles.aboutContainer}>
//       <h2>
//         Unsere <span className={styles.textKabinet}>Kabinette</span> sind mit <span className={styles.modern}>modernen</span> Geräten{" "}
//         <span className={styles.ausgestattet}>ausgestattet</span>
//       </h2>
//       <div className={styles.sliderWrapper}>
//         <Slider {...settings}>
//           {images.map((image, index) => (
//             <div
//               key={index}
//               className={`${styles.slide} ${index === selectedIndex ? styles.activeSlide : ""}`}
//               onClick={() => handleClick(index)}
//             >
//               <img src={image.src} alt={`Clinic Image ${index}`} className={styles.image} />
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default About;


import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./About.css"; 
interface ImageData {
  src: string;
}

const Arrow: React.FC<{ direction: "left" | "right"; onClick?: () => void }> = ({ direction, onClick }) => (
  <div className={`arrow ${direction === "left" ? "arrowLeft" : "arrowRight"}`} onClick={onClick}>
    {direction === "left" ? "‹" : "›"}
  </div>
);

const About: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    prevArrow: <Arrow direction="left" />,
    nextArrow: <Arrow direction="right" />,
    beforeChange: (_current: number, next: number) => {
      const slides = document.querySelectorAll(".slide");
      slides.forEach((slide, index) => {
        if (index === next) {
          slide.classList.add("activeSlide");
        } else {
          slide.classList.remove("activeSlide");
        }
      });
    },
  };

  const images: ImageData[] = [
    { src: "https://build-hancock.s3.amazonaws.com/wp-content/uploads/2021/12/20155956/1HVD1-scaled.jpeg" },
    { src: "https://www.crushpixel.com/big-static20/preview4/modern-dental-clinic-office-4857250.jpg" },
    { src: "https://https://th.bing.com/th/id/R.57a45029a8c7045a8240183c7c27a940?rik=SlA0P%2f%2bKbY3nug&pid=ImgRaw&r=0" },
    { src: "https://kannoarquitetura.com.br/wp-content/uploads/2021/06/consultorios-odontologicos.jpg" },
    { src: "https://i.pinimg.com/originals/bc/05/84/bc0584107c12f828193df0dcb05aa5d3.png" },
  ];

  return (
    <div className="aboutContainer">
      <h2>
        Unsere <span className="textKabinet">Kabinette</span> sind mit <span className="modern">modernen</span> Geräten{" "}
        <span className="ausgestattet">ausgestattet</span>
      </h2>
      <div className="sliderWrapper">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className={`slide ${index === 0 ? "activeSlide" : ""}`}>
              <img src={image.src} alt={`Clinic Image ${index}`} className="image" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default About;
