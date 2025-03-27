import React from 'react';
import '../Carousel/carousel.css';
import './container.css'

const Container = ({ children }) => (
  <div className="my-custom-container w-100">
    {children}
  </div>
);

export default Container;
