import React from "react";
import "./PageCategoryStyles.css";

const PageCategory = () => {
  return(
    <>
      <ul className="nav justify-content-center">
        <li className="nav-item mb-3">
          <a className="nav-link active text-light fs-5" href="#">All</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light fs-5" href="#">Tech</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light fs-5" href="#">Startup</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light fs-5" href="#">App</a>
        </li>
      </ul>
    </>
  );
}

export default PageCategory;
