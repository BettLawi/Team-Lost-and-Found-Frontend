import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <p>Contact Us: <a href="mailto:lostandfound@gmail.com">lostandfound@gmail.com</a></p>
          <p>Contact Number: <a href="tel:+254718534285">+254 718 534 285</a></p>
        </div>
        <div className="social-media">
          <a href="https://www.facebook.com/your-facebook-page" className="social-link">
            <span>Facebook</span>
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com/your-twitter" className="social-link">
            <span>Twitter</span>
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/your-instagram" className="social-link">
            <span>Instagram</span>
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/your-linkedin" className="social-link">
            <span>LinkedIn</span>
            <i className="fab fa-linkedin"></i>
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
