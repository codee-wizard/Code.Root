import React from 'react';
import '../styles/Home.css';

function Navbar() {
  return (
    <header className="navbar">
        <div className="container">
          <div className="logo">
            <div className="logo-icon">&lt;/&gt;</div>
            <span className="logo-text">CodeRoot</span>
          </div>
          <nav className="nav-links">
            <a href="#" className="active">Home</a>
            <a href="#">About</a>
            <a href="#">Practice</a>
            <a href="#">Roadmap</a>
            <a href="#">Explore</a>
            <a href="#">Profile</a>
          </nav>
          <div className="auth-buttons">
            <button className="btn-link">Login</button>
            <button className="btn-primary">Sign Up</button>
          </div>
          <button className="mobile-menu-button">
            <span>☰</span>
          </button>
        </div>
      </header>
  );
}

export default Navbar;