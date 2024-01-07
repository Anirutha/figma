// src/components/FooterComponent.js

import React from 'react';
import './FooterComponent.css';

const FooterComponent = () => {
  return (
    <footer className="footer-container">
      {/* First Content */}
      <div className="footer-content">
        <div className="logo-section">
          <span className="logo-name">Mode UI</span>
        </div>
      </div>

      {/* Second Content */}
      <div className="footer-content">
        <p>Mode UI is a comprehensive design system that
          empowers designers and developers to create cohesive and 
          visually stunning user interfaces across various platforms and devices</p>
      </div>

      {/* Divider */}
      <hr className="footer-divider" />

      {/* Third Content */}
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">Company</h3>
          <p className="footer-subtitle">About us</p>
          <p className="footer-subtitle">Pricing</p>
          <p className="footer-subtitle">Contact us</p>
          <p className="footer-subtitle">Features</p>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Product</h3>
          <p className="footer-subtitle">Figma design system</p>
          <p className="footer-subtitle">IOS Kit</p>
          <p className="footer-subtitle">Android Kit</p>
          <p className="footer-subtitle">Wireframe</p>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Resources</h3>
          <p className="footer-subtitle">Templates</p>
          <p className="footer-subtitle">Landing pages</p>
          <p className="footer-subtitle">Documentation</p>
          <p className="footer-subtitle">Comp library</p>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Legal</h3>
          <p className="footer-subtitle">Privacy policy</p>
          <p className="footer-subtitle">Terms & Conditions</p>
          <p className="footer-subtitle">Disclaimer</p>
          <p className="footer-subtitle">Affiliate programme</p>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Support</h3>
          <p className="footer-subtitle">Help centre</p>
          <p className="footer-subtitle">Raise Ticket</p>
          <p className="footer-subtitle">Report</p>
          <p className="footer-subtitle">Refund</p>
        </div>
      </div>

      {/* Fourth Content */}
      <div className="footer-content">
        <div className="footer-section">
          <div className="social-icons">
            <span className="social-icon">&#128279;</span> {/* LinkedIn */}
            <span className="social-icon">&#128172;</span> {/* Vector */}
            <span className="social-icon">&#127918;</span> {/* Game */}
          </div>
        </div>
        {/* ... (Contact and other sections) ... */}
      </div>

      {/* Copyright */}
      <p className="footer-copyright">© 2024 Mode UI. All rights reserved.</p>
    </footer>
  );
};

export default FooterComponent;
