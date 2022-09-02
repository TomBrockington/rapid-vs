import React from "react";
import "../styles/header.css";
import wasteLogo from "../images/waste.jpg";
import logo from "../images/RVS-logo.jpg";

function Header() {
  return (
    <header>
      <div className="header__container">
        <div className="header__background__image">
          <div className="main__logo">
            <div></div>
            <img src={logo} alt="logo" />
          </div>

          <div className="header__info">
            <div id="test">One</div>
            <div>
              <img
                src={wasteLogo}
                alt="Rapid van solutions logo - link to website cat1"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
