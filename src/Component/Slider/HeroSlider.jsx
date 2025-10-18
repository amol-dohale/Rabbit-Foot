// src/components/Slider/HeroSlider.jsx
import React, { useState, useEffect } from "react";
import "./HeroSlider.css";

import slide1 from "../../assets/slide1.png";
import slide2 from "../../assets/slide2.png";
import slide3 from "../../assets/slide3.png";

const HeroSlider = () => {
  const slides = [slide1, slide2, slide3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // auto-slide every 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-slider">
      <div
        className="slider-image"
        style={{ backgroundImage: `url(${slides[currentIndex]})` }}
      >
        <div className="slider-overlay">
          <h1 className="slider-text">CRAFTED WITH SOUL, SERVED WITH JOY.</h1>
        </div>

        {/* Navigation Buttons */}
        <button className="nav-btn prev-btn" onClick={prevSlide}>
          ←
        </button>
        <button className="nav-btn next-btn" onClick={nextSlide}>
          →
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;
