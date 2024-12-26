import React from 'react';
import { Link } from "react-router-dom";
import "./WriteupCardStyles.css";
import img from "../Assets/project1.jpg";
import img2 from "../Assets/art2.png";
import img3 from "../Assets/art3.png";
import img4 from "../Assets/art4.png";
import img5 from "../Assets/art5.png";
import img6 from "../Assets/art6.png";
import { FaUser } from "react-icons/fa";

export default function WriteupCard() {
 return(
    <div className="container">
      <div className="row">
        <div className="col-6 col-md-4">
          <Link to="/Article">
          <div>
            <img src={img} alt="img" className="img-thumbnail img-fluid custom-size" />
          </div> 
          <h3 className="mt-4 mb-2 font-bold text-light">Writeup Title</h3>
          <p className="mb-2 fs-6 text-secondary"><FaUser className='inline-flex items-center me-2 mb-2' />Author Name</p>
          <p className="fs-6 text-secondary">Published: November 14, 2024</p>
          </Link>
        </div>
        <div className="col-6 col-md-4">
          <Link to="/Article">
          <div>
            <img src={img2} alt="img" className="img-thumbnail img-fluid custom-size"/>
          </div> 
          <h3 className="mt-4 mb-2 font-bold text-light">Writeup Title</h3>
          <p className="mb-2 fs-6 text-secondary"><FaUser className='inline-flex items-center me-2 mb-2' />Author Name</p>
          <p className="fs-6 text-secondary">Published: November 14, 2024</p>
          </Link>
        </div>
        <div className="col-6 col-md-4">
          <Link to="/Article">
          <div>
            <img src={img3} alt="img" className="img-thumbnail img-fluid custom-size" />
          </div> 
          <h3 className="mt-4 mb-2 font-bold text-light">Writeup Title</h3>
          <p className="mb-2 fs-6 text-secondary"><FaUser className='inline-flex items-center me-2 mb-2' />Author Name</p>
          <p className="fs-6 text-secondary">Published: November 14, 2024</p>
          </Link>
        </div>
        <div className="col-6 col-md-4">
          <Link to="/Article">
          <div>
            <img src={img4} alt="img" className="img-thumbnail img-fluid custom-size" />
          </div> 
          <h3 className="mt-4 mb-2 font-bold text-light">Writeup Title</h3>
          <p className="mb-2 fs-6 text-secondary"><FaUser className='inline-flex items-center me-2 mb-2' />Author Name</p>
          <p className="fs-6 text-secondary">Published: November 14, 2024</p>
          </Link>
        </div>
        <div className="col-6 col-md-4">
          <Link to="/Article">
          <div>
            <img src={img5} alt="img" className="img-thumbnail img-fluid custom-size" />
          </div> 
          <h3 className="mt-4 mb-2 font-bold text-light">Writeup Title</h3>
          <p className="mb-2 fs-6 text-secondary"><FaUser className='inline-flex items-center me-2 mb-2' />Author Name</p>
          <p className="fs-6 text-secondary">Published: November 14, 2024</p>
          </Link>
        </div>
        <div className="col-6 col-md-4">
          <Link to="/Article">
          <div>
            <img src={img6} alt="img" className="img-thumbnail img-fluid custom-size" />
          </div> 
          <h3 className="mt-4 mb-2 font-bold text-light">Writeup Title</h3>
          <p className="mb-2 fs-6 text-secondary"><FaUser className='inline-flex items-center me-2 mb-2' />Author Name</p>
          <p className="fs-6 text-secondary">Published: November 14, 2024</p>
          </Link>
        </div>
      </div>
    </div>
 ); 
}
