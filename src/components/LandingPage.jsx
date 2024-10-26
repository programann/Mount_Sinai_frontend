import React from 'react';
import '../css/landingPage.css';
import logo from '../assets/logo m.sec.png'; 

const LandingPage = () => {
  return (
    <div className="Image">
      <div className="overlay">
        <img src={logo} alt="Logo" className="landing-logo" />
        <h1>Unlock Your Potential</h1>
        <p>Experience personalized education for a brighter future</p>
        <button className="explore-btn">Explore Now</button>
      </div>
    </div>
  );
};

export default LandingPage;
