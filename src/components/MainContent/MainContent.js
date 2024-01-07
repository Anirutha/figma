// src/components/MainContent.js
import React from 'react';
import './MainContent.css'

const MainContent = () => {
  return (
    <div className="main-content">
      {/* Section 1 */}
      <div className="section-1">
        <div className="section-1-content">
          <p>Seamless experience</p>
          <h1 className="section-1-title">Unleashing the Next Generation of Card Solutions</h1>
          <p className="section-1-description">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
          <a href="/" className="section-1-button">
            Unlock your Card <span className="arrow">&rarr;</span>
          </a>
          <p>*No credit card required</p>
        </div>
      </div>

      {/* Section 2 */}
      

      {/* Add other sections and components as needed */}
    </div>
  );
};

export default MainContent;
