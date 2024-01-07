// src/components/LandingPage.js
import React from 'react';
import Header from '../Header/Header';
import MainContent from '../MainContent/MainContent';
import Footer from '../Footer/Footer';
import Announcement from '../Announcement/Announcement';
import Logo from '../logo/logo';
import FeatureComponent from '../FeatureComponent/FeatureComponent';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Announcement/>
      <Header />
      <MainContent />
      <Logo/>
      <FeatureComponent/>
      <Footer />
    </div>
  );
};

export default LandingPage;