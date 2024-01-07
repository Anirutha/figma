// src/components/FeatureComponent2.js

import React from 'react';
import './FeatureComponent2.css'; // Import styles
import image1 from './Image1.jpg'
import image2 from './Image2.jpg'

const FeatureComponent2 = () => {
  return (
    <div className="feature-component-2">
      <div className="feature-content-2">
        <h2 className="feature-subtitle-2">Elevating Card Programs with Cutting-Edge Technology</h2>
        <p className="feature-paragraph-2">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <a href="/" className="feature-button-2">
        Compare all Pro features <span className="arrow">&rarr;</span>
        </a>
      </div>

      <div className="feature-columns-2">
        <div className="feature-column-2">
          <img src={image1} alt="Image 1" className="feature-image" />
        </div>

        <div className="feature-column-2">
          <img src={image2} alt="Image 2" className="feature-image" />
        </div>
      </div>
    </div>
  );
};

export default FeatureComponent2;
