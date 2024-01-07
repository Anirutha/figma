// src/components/MetricBoxComponent.js

import React from 'react';
import './MetricBoxComponent.css'; // Import styles

const MetricBoxComponent = ({ number, title, description }) => {
  return (
    <div className="metric-box">
      <div className="metric-content">
        <p className="metric-number">{number}</p>
        <h3 className="metric-title">{title}</h3>
        <p className="metric-description">{description}</p>
      </div>
    </div>
  );
};

export default MetricBoxComponent;
