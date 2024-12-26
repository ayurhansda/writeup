import './MainImageStyles.css';
import React from 'react';
import IntroImg from "../Assets/home.jpg";
import { Link } from "react-router-dom";

const MainImg = () => {
  return(
    <div className="mainImg">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <h1>WriteUps & Research</h1>
        <p>A place to read, write, and deepen your understanding</p>
        <div>
          <Link to="/Contact" className="btn btn-outline-warning">Learn More</Link>
          <Link to="/Register" className="btn btn-outline-warning">Subscribe</Link>
        </div>
      </div>
    </div>
  );
}

export default MainImg;
