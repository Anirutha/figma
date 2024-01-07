import React from 'react'
import './logo.css';
import logo1 from './logo1.jpg'; // Import the image
import logo2 from './logo2.jpg'; // Import another image
import logo3 from './logo3.jpg'; // Import another image
import logo4 from './logo4.jpg'; // Import another image
import logo5 from './logo5.jpg'; // Import another image
import logo6 from './logo6.jpg'; // Import another image
import logo7 from './logo7.jpg'; // Import another image
import logo8 from './logo8.jpg'; // Import another image

const Logo=()=> {
  return (
    <logo className='logo'>
        <div className="section-2">
        <div className="logo-container-section-2">
          <img src={logo1} alt="Logo 1" className="logo-section-2" />
          <img src={logo2} alt="Logo 2" className="logo-section-2" />
          <img src={logo3} alt="Logo 3" className="logo-section-2" />
          <img src={logo4} alt="Logo 4" className="logo-section-2" />
          <img src={logo5} alt="Logo 5" className="logo-section-2" />
          <img src={logo6} alt="Logo 6" className="logo-section-2" />
          <img src={logo7} alt="Logo 7" className="logo-section-2" />
          <img src={logo8} alt="Logo 8" className="logo-section-2" />
        </div>
      </div>
    </logo>
  )
}

export default Logo