// src/components/FeatureComponent.js

import React from 'react';
import './FeatureComponent.css';
import Icon1 from './Icons1.jpg'
import Icon2 from './Icons2.jpg'
import Icon3 from './Icons3.jpg'

const FeatureComponent = () => {
  return (
    <div className="feature-component">
      <div className="feature-content">
        <h2 className="feature-subtitle">Elevating Card Programs with Cutting-Edge Technology</h2>
        <p className="feature-paragraph">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button className="feature-button">
        Compare all Pro features<span className="arrow">&rarr;</span>
        </button>
      </div>

      <div className="feature-columns">
        <div className="feature-column">
          <img src={Icon1} alt="Icon 1" className="feature-icon" />
          <h2 className='feature-subtitle'>Globally Accepted</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
        </div>

        <div className="feature-column">
          <img src={Icon2} alt="Icon 2" className="feature-icon" />
          <h2 className='feature-subtitle'>Biometric Integrated</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
        </div>

        <div className="feature-column">
          <img src={Icon3} alt="Icon 3" className="feature-icon" />
          <h2 className='feature-subtitle'>Fully Secured</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureComponent;
