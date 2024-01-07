// src/components/Header.js

import React from 'react';
import './Header.css';


const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <span className="logo-name">Mode UI</span>
      </div>
      
      <div className="header-right">
        <div className="card-access">
          <span className="dropdown-icon">▼</span>
          <span>Card Access</span>
        </div>
        
        <nav className="nav-links">
          <a href="/">Banking</a>
          <a href="/">Processing</a>
          <a href="/">About</a>
          <a href="/">Careers</a>
          <a href="/">Contact</a>
        </nav>
        
        <button className="login-button">Login</button>
      </div>
    </header>
  );
};

export default Header;
