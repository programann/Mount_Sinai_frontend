import React from 'react';
import '../css/NavBar.css'; // Ensure the path is correct

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button className="home-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Home
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
