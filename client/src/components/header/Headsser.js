import React from 'react';
import '../styles/header.css';
import wasteLogo from '../images/waste.jpg';
import logo from '../images/RVS-logo.jpg';

function Header() {
  return (
    <header>
      <div className="header__container">
        <div className="header__background__image">
          <div className="main-title">
            <p>Rapid</p>
            <p>Van</p>
            <p>Solutions</p>
          </div>

          <div className="contact-info">
            <h3>Contact me now!</h3>
            <p>email: test @email.com</p>
            <p>phone: 07463463454</p>
          </div>

          <div className="lowerBanner">
            <p>Van services from Devon and Cornwall available across the UK</p>
            <img
              src={wasteLogo}
              alt="Rapid van solutions logo - link to website cat1"
            />
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;
