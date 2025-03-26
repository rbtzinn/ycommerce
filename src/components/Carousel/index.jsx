import { useEffect, useState } from "react";
import React from "react";
import createDOMPurify from 'dompurify'
import default_ from "dompurify";
import "./carousel.css";
import Sdk from "../../sdk";

const Carousel = () => {
  const api = new Sdk();
  const [banners, setBanners] = useState([])
  const main = () => {
    useEffect(() => {
      const fetchData = async () => {
        const banners = await api.getBanners()
        console.log('banners:')
        setBanners(banners)
        console.log(banners)
      }
      fetchData()
    }, [])
  }

  main()


  return (

    <div className="carousel-container" >
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner" id="carousel-items">
          {banners.map(banner => (
            <div className="carousel-item active" key={banner.image}>
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
    </div >

  );
};

export default Carousel;
