// src/components/MetricsComponent.js

import React from 'react';
import MetricBoxComponent from './MetricBoxComponent'; // Assuming you have a MetricBox component
import './MetricsComponent.css'; // Import styles

const MetricsComponent = () => {
  return (
    <div className="metrics-container">
      <MetricBoxComponent number="2 Million" title="Customers" description="consectetur adipiscing elit, sed do eiusmod tempor incididunt ut" />
      <MetricBoxComponent number="1K" title="Downloads" description="consectetur adipiscing elit, sed do eiusmod tempor incididunt ut" />
      <MetricBoxComponent number="$73Million" title="Transaction" description="consectetur adipiscing elit, sed do eiusmod tempor incididunt ut" />
      <MetricBoxComponent number="2.0" title="Latest Version" description="consectetur adipiscing elit, sed do eiusmod tempor incididunt ut" />
    </div>
  );
};

export default MetricsComponent;
