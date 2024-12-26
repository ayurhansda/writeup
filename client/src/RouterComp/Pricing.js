import "./PricingStyles.css";
import React from "react";
import { Link } from "react-router-dom";
import ArticleHeading from "./ArticleHeading";

const Pricing = () => {
  return(
    <>
      <ArticleHeading heading="Our Pricing" text="Support Us" />
      <div className="row pricing d-flex justify-content-around">
        <div className="col-6 col-md-3 card bg-dark p-5">
          <div className="card-body text-center">
            <h3 className="text-light">- Basic -</h3>
            <span className="bar"></span>
            <p className="btc pt-1 pb-3">$ 100</p>
            <p>- 3 Months -</p>
            <p>- Featured -</p>
            <p className="pb-3">- Private Writeup Access -</p>
            <Link to="/Contact" className="btn btn-outline-warning">PURCHASE NOW</Link>
          </div>
        </div>
        <div className="col-6 col-md-3 card bg-dark p-5">
          <div className="card-body text-center">
            <h3 className="text-light">- Premium -</h3>
            <span className="bar"></span>
            <p className="btc pt-1 pb-3">$ 300</p>
            <p>- 3 Months -</p>
            <p>- Featured -</p>
            <p className="pb-3">- Premium Writeup Access -</p>
            <Link to="/Contact" className="btn btn-outline-warning">PURCHASE NOW</Link>
          </div>
        </div>
        <div className="col-6 col-md-3 card bg-dark p-5">
          <div className="card-body text-center">
            <h3 className="text-light d-block">- Professional -</h3>
            <span className="bar"></span>
            <p className="btc pt-1 pb-3">$ 500</p>
            <p>- 3 Months -</p>
            <p>- Featured -</p>
            <p className="pb-3">- VIP Writeup Access -</p>
            <Link to="/Contact" className="btn btn-outline-warning">PURCHASE NOW</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
