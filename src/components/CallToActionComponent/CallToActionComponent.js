// src/components/CallToActionComponent.js

import React from 'react';
import './CallToActionComponent.css';

const CallToActionComponent = () => {
  return (
    <div className="call-to-action-container">
      <h2 className="cta-subtitle">Unlock Limitless Possibilities with Our New Card Solutions</h2>
      <div className="cta-buttons">
        <button className="cta-button">
          Unlock your Card
          <span className="cta-icon">&#128179;</span>
        </button>
        <button className="cta-button">
          Customer Support
          <span className="cta-icon">&#128223;</span>
        </button>
      </div>
    </div>
  );
};

export default CallToActionComponent;
