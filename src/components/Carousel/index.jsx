import React, { useState } from "react";
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

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
