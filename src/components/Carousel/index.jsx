import React from "react";
import "./carousel.css";
import slide1 from "../../assets/images/carousel/slide1.jpg";
import slide2 from "../../assets/images/carousel/slide2.jpg";
import slide3 from "../../assets/images/carousel/slide3.jpg";

const Carousel = () => {
  const slides = [slide1, slide2, slide3];

  return (
    <div className="carousel-container">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        {/* Indicadores do Carrossel */}
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Slides do Carrossel */}
        <div className="carousel-inner" id="carousel-items">
          {slides.map((slide, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <img
                src={slide}
                className="d-block w-100"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
