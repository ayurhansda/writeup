import "./FooterStyles.css";
import React from 'react';
import { FaHome, FaPhone, FaMailBulk,FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}} />
            <div>
              <p>123 Housing Society.</p>
              <p>Jharkhand.</p>
            </div>
          </div>
          <div className="phone">
            <h4><FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}} />+91 8695325671</h4>
          </div>
          <div className="email">
            <h4><FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}} />test@writeups.com</h4>
          </div>
        </div>
        <div className="left">
          <h3 className="text-light pb-3 ms-3">Company</h3>
          <ul className="options text-light">
            <li className="pb-2"><Link to="/AboutUs">About Us</Link></li>
            <li className="pb-2"><Link to="/Contact">Our Services</Link></li>
            <li className="pb-2"><Link to="#">Privacy Policy</Link></li>
            <li className="pb-2"><Link to="#">Affiliate program</Link></li>
          </ul>
        </div>
        <div className="right">
          <h3 className="text-light pb-3 ms-3">Get Help</h3>
          <ul className="options text-light">
            <li className="pb-2"><Link to="/contact">FAQ</Link></li>
            <li className="pb-2"><Link to="/Contact">Payment options</Link></li>
            <li className="pb-2"><Link to="#">Refund</Link></li>
          </ul>
        </div>
        <div className="right">
          <h3 className="text-light fs-4 pb-3">About the Company</h3>
          <p>This is me Ayur Hansda. CEO & Founder of WriteUps. I enjoy discussing new projects and design challenges.</p>
          <div className="social">
            <FaFacebook size={30} style={{color: "#fff", marginRight: "1rem"}} />
            <FaTwitter size={30} style={{color: "#fff", marginRight: "1rem"}} />
            <FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem"}} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
