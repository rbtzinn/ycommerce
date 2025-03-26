import { useEffect, useState } from "react";
import React from "react";
import "./carousel.css";
import Sdk from "../../sdk";

const Carousel = () => {
  const api = new Sdk();
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const bannersData = await api.getBanners();
      console.log('banners:');
      setBanners(bannersData);
      console.log(bannersData);
    };
    fetchData();
  }, []);

  return (
    <div className="carousel-container">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner" id="carousel-items">
          {banners.map((banner, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={banner.image}
            >
              <img
                src={banner.image}
                className="d-block w-100"
                alt={banner.alt}
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
