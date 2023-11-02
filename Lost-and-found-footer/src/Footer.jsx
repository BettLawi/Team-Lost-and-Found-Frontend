import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <p>Email Us: <a href="mailto:lostfound656@gmail.com" className="contact-link">lostfound656@gmail.com</a></p>
          <p>Contact Us:  <a href="tel:+254718534285"><span className="contact-link">+254718534285</span></a></p>
        </div>
        <div className="social-media">
          <a href="https://www.facebook.com/profile.php?id=61552465873026" className="social-link">
            <span>Facebook</span>
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com/lostfound656" className="social-link">
            <span>Twitter</span>
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/lostfound656/" className="social-link">
            <span>Instagram</span>
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2023 Lost and Found App. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
