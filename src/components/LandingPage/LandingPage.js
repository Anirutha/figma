// src/components/LandingPage.js
import React from 'react';
import Header from '../Header/Header';
import MainContent from '../MainContent/MainContent';
import Footer from '../FooterComponent/FooterComponent';
import Announcement from '../Announcement/Announcement';
import Logo from '../logo/logo';
import FeatureComponent from '../FeatureComponent/FeatureComponent';
import FeatureComponent2 from '../FeatureComponent2/FeatureComponent2';
import MetricsComponent from '../MetricsComponent/MetricsComponent';
import TestimonialComponent from '../TestimonialComponent/TestimonialComponent';
import CallToActionComponent from '../CallToActionComponent/CallToActionComponent';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Announcement/>
      <Header />
      <MainContent />
      <Logo/>
      <FeatureComponent/>
      <FeatureComponent2/>
      <MetricsComponent/>
      <TestimonialComponent/>
      <CallToActionComponent/>
      <Footer />
    </div>
  );
};

export default LandingPage;
