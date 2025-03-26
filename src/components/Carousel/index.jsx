import { useEffect, useState } from "react";
import React from "react";
import createDOMPurify from 'dompurify'
import default_ from "dompurify";
import "./carousel.css";
import Sdk from "../../sdk";

const Carousel = () => {
  useEffect(() => {
    const fetchData = async () => {
      const api = new Sdk();
    }
    fetchData()

  })
  let firstBanner = ' active'
  let banners_ = ''


  return (

    <div className="carousel-container">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner" id="carousel-items">

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
