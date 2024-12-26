import React, {useState} from "react";
import { Outlet, Link } from "react-router-dom";
import './LayoutStyles.css';
import { FaBars, FaTimes } from "react-icons/fa";
import Footer from "./Footer";
import Topbutton from "./topbutton";
import logo from "../Assets/img/logo-no-background.png";

const Layout = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return(
    <>
      <div className={color ? "header header-bg d-flex justify-content-between p-3" : "header d-flex justify-content-between p-3"}>
        <nav class='container-fluid d-flex navbar navbar-expand-lg navbar-dark'>
            <Link to='/' className="logo align-items-center w-100 me-auto navbar-brand">
              <img src={logo} className="logo navbar-brand img-fluid img-thumbnail bg-dark" Height={100} Width={150} alt="img" />
            </Link>
          <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navSM">
            <span class="hamburger" onClick={handleClick}>
              {click ? (<FaTimes size={20} style={{color: "fff"}} />) : (<FaBars size={20} style={{color: "fff"}} />)}
            </span>
          </button>
          <div class="collapse navbar-collapse justify-content-center" id="navSM"> 
            <ul className={click ? "nav-menu active d-flex" : "nav-menu d-flex"}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Contact">ContactUs</Link>
              </li>
              <li>
                <Link to="/AboutUs">AboutUs</Link>
              </li>
              <li>
                <Link to="/Explore">Explore</Link>
              </li>
              <li>
                <Link to="/Pricing">Pricing</Link>
              </li>
              <li id="subscribe-btn" className="btn btn-light rounded-pill">
                <Link to="/Register" className="text-dark">Subscribe</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <Outlet />
      <Topbutton />
      <Footer />
    </>
  );
}

export default Layout;
