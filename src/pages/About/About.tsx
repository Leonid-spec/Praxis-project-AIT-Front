import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./about.module.css";


interface ImageData {
    src: string;
}


const ArrowLeft: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
    <div className={`${styles.arrow} ${styles.arrowLeft}`} onClick={onClick}>
        ‹
    </div>
);

const ArrowRight: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
    <div className={`${styles.arrow} ${styles.arrowRight}`} onClick={onClick}>
        ›
    </div>
);

const About: React.FC = () => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px",
        prevArrow: <ArrowLeft />, 
        nextArrow: <ArrowRight />, 
    };

    const images: ImageData[] = [
        { src: "/src/public/depositphotos_159678230-stock-photo-empty-dentist-office.jpg" },
        { src: "/src/public/depositphotos_24829235-stock-photo-dentist-office.jpg" },
        { src: "/src/public/depositphotos_93803168-stock-photo-modern-dental-office-interior.jpg" },
        { src: "/src/public/mwwh3sospdtz1mgfd2e70f3pl24stnq4.jpg" },
    ];

    const handleClick = (index: number) => {
        setSelectedIndex(index === selectedIndex ? null : index); // 
        
    };

    return (
        <div className={styles.aboutContainer}>
            <h2>
                Unsere <span className={styles.textKabinet}>Kabinette</span> sind mit <span className={styles.modern}>modernen</span> Geräten <span className={styles.ausgestattet}>ausgestattet</span>
            </h2>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`${styles.slide} ${index === selectedIndex ? styles.activeSlide : ""}`}
                        onClick={() => handleClick(index)}
                    >
                        <img src={image.src} alt={`Clinic Image ${index}`} className={styles.image} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default About;