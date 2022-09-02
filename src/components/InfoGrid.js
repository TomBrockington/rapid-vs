import React from "react";
import logo from "../images/RVS-logo.jpg";
import van from '../images/disposal.jpg'
import spacious from '../images/spacious-bike.jpg'
import whiteGoods from '../images/white-goods.jpg'
import vanLogo from '../images/van_logo.jpg'
import "../styles/infoGrid.css";

function InfoGrid() {
  return (
    <section className="info_container">
      <div>
        <h2> Main info</h2>
        <p>
          {/* <strong>Welcome</strong>to RapidVanSolutions.com */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque deleniti facilis voluptates, voluptas accusantium harum impedit odit qui tempora debitis fuga eveniet, nemo consequatur nam? Sed facilis, odit possimus earum, repellendus alias quis eos officiis vitae vero voluptate debitis beatae. Quas voluptas hic maxime laudantium repudiandae sapiente qui voluptate itaque?
          consequatur nam? Sed facilis, odit possimus earum, repellendus alias quis eos officiis vitae vero voluptate debitis beatae. Quas voluptas hic maxime laudantium repudiandae sapiente qui voluptate itaque?
        </p>
      </div>
      <div className="van__image">
        {/* <img src={van} alt="Rapid van solutions logo" /> */}
        <p>Van Man!</p>
      </div>
      <div>
        <img src={spacious} alt="Rapid van solutions logo" />
      </div>
      <div>
        <h2> Speciality Items</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque deleniti facilis voluptates, voluptas accusantium harum impedit odit qui tempora debitis fuga eveniet, nemo consequatur nam? Sed facilis, odit possimus earum, repellendus alias quis eos officiis vitae vero voluptate debitis beatae. Quas voluptas hic maxime laudantium repudiandae sapiente qui voluptate itaque?
          consequatur nam? Sed facilis, odit possimus earum, repellendus alias quis eos officiis vitae vero voluptate debitis beatae. Quas voluptas hic maxime laudantium repudiandae sapiente qui voluptate itaque?
        </p>
      </div>
      <div>
        <h2> Long Haul </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque deleniti facilis voluptates, voluptas accusantium harum impedit odit qui tempora debitis fuga eveniet, nemo consequatur nam? Sed facilis, odit possimus earum, repellendus alias quis eos officiis vitae vero voluptate debitis beatae. Quas voluptas hic maxime laudantium repudiandae sapiente qui voluptate itaque?
          consequatur nam? Sed facilis, odit possimus earum, repellendus alias quis eos officiis vitae vero voluptate debitis beatae. Quas voluptas hic maxime laudantium repudiandae sapiente qui voluptate itaque?
        </p>
      </div>
      <div>
        <img src={whiteGoods} alt="Rapid van solutions logo" />
      </div>
      <div>
        <img src={vanLogo} alt="Rapid van solutions logo" />
      </div>
      <div>
      <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque deleniti facilis voluptates, voluptas accusantium harum impedit odit qui tempora debitis fuga eveniet, nemo consequatur nam? Sed facilis, odit possimus earum, repellendus alias quis eos officiis vitae vero voluptate debitis beatae. Quas voluptas hic maxime laudantium repudiandae sapiente qui voluptate itaque?
          consequatur nam? Sed facilis, odit possimus earum, repellendus alias quis eos officiis vitae vero voluptate debitis beatae. Quas voluptas hic maxime laudantium repudiandae sapiente qui voluptate itaque?
        </p>
      </div>
    </section>
  );
}

export default InfoGrid;
