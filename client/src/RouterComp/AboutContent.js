import "./AboutContentsStyles.css";
import React from 'react';
import { Link } from "react-router-dom";
import Art1 from "../Assets/project3.jpg";
import Art2 from "../Assets/project4.jpg";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>WHO ARE WE ?</h1>
        <p>We're a means for you to express your feelings. And spread your finding for the whole world to see.</p>
        <Link to="/Contact">
          <button className="btn btn-warning">CONTACT</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={Art1} className="img" alt="img1" />
          </div>
          <div className="img-stack bottom">
            <img src={Art2} className="img" alt="img2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
