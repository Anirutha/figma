// src/components/Announcement.js

import React from 'react';
import './Announcement.css';

const Announcement = () => {
  return (
    <div className="announcement">
      <div className="badge">Announcement</div>
      <p className="announcement-text">We are happy to announce that we have raised $2 Million in Seed Funding.</p>
    </div>
  );
};

export default Announcement;
