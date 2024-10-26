import React from 'react';
import '../css/landingPage.css';
import logo from '../assets/logo m.sec.png'; 


const LandingPage = () => {
  return (
    <>
    <div className="Image">
      <div className="overlay">
        <img src={logo} alt="Logo" className="landing-logo" />
        <h1>Unlock Your Potential</h1>
        <p>Experience personalized education for a brighter future</p>
        <button className="explore-btn" onClick={() => window.scrollTo({ top: 500, behavior: 'smooth' })}>Explore Now</button>
      </div>
    </div>
      <div id='more-info' className='more-info'>
        <div className='info-content'>
            <div className='info-image'>
                <img src={logo} alt="school logo" className='more-info-image' />
                <div className='info-text'>
                    <h2>Nurturing kids into greatness</h2>
                    <p>
                    At Mount Sinai Education Centre, we offer a comprehensive academic curriculum combined 
                with Christ-centered values and engaging co-curricular activities. Our mission is to 
                empower children to reach their full potential and become leaders of tomorrow.
                    </p>
                </div>
            </div>
        </div>

      </div>
    </>
      
  );
};

export default LandingPage;
