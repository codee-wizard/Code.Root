import React from 'react';

function Footer() {
  return (
    <footer className="footer">
        <div className="container">
          <div className="footer-sections">
            <div className="footer-about">
              <div className="logo">
                <div className="logo-icon light">&lt;/&gt;</div>
                <span className="logo-text">CodeRoot</span>
              </div>
              <p>Empowering students with coding skills for the future, one step at a time.</p>
              <div className="social-links">
                <a href="#" className="social-icon">f</a>
                <a href="#" className="social-icon">t</a>
                <a href="#" className="social-icon">in</a>
                <a href="#" className="social-icon">yt</a>
              </div>
            </div>

            <div className="footer-links">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Roadmaps</a></li>
                <li><a href="#">Practice</a></li>
                <li><a href="#">Explore</a></li>
              </ul>
            </div>

            <div className="footer-links">
              <h3>Resources</h3>
              <ul>
                <li><a href="#">Coding Guides</a></li>
                <li><a href="#">Project Ideas</a></li>
                <li><a href="#">Student Showcase</a></li>
                <li><a href="#">Parent Resources</a></li>
                <li><a href="#">Teacher Tools</a></li>
              </ul>
            </div>

            <div className="footer-contact">
              <h3>Contact Us</h3>
              <ul>
                <li><a href="mailto:info@coderoot.edu">info@coderoot.edu</a></li>
                <li><a href="tel:+919876543210">+91 98765 43210</a></li>
                <li>123 Education Lane, Tech Park, Bengaluru, India</li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} CodeRoot. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
  );
}

export default Footer;