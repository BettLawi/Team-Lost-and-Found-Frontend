

import React, { useEffect, useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className={showFooter ? 'footer' : 'footer hidden'}>
      <div className="footer-content">
        <div className="contact-info">
          <p>Contact Us: <a href="mailto:lostfound656@gmail.com">lostfound656@gmail.com</a></p>
          <p>Contact Number: <a href="tel:+254718534285">+254 718 534 285</a></p>
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
