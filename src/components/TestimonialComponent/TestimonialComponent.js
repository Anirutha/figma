// src/components/TestimonialComponent.js

import React from 'react';
import './TestimonialComponent.css';
import logo from './logo.jpg';
import image from './Image.jpg' 

const TestimonialComponent = () => {
  return (
    <div className="testimonial-container">
      <img src={logo} alt="Company Logo" className="company-logo" />
      <p className="testimonial-paragraph">
        "I had the pleasure of experiencing the next generation of card solutions with this incredible product. It's refreshing to see such innovation in the financial industry."
      </p>
      <div className="avatar-container">
        <img src={image} alt="Avatar" className="avatar-image" />
        <div className="avatar-details">
          <h3 className="avatar-name">Nick Babich</h3>
          <p className="avatar-description">Lead Designer</p>
        </div>
      </div>
      <div className="rating-container">
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
      </div>
    </div>
  );
};

export default TestimonialComponent;
