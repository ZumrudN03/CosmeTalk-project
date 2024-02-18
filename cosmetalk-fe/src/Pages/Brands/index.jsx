import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "./index.scss";

function Brands() {
  return (
    <>
      <Helmet>
        <title>Brands</title>
      </Helmet>
      <div className="brands">
        <p className="brands_header">Brands</p>
        <div className="brands_location">
          <Link to={"/"}>
            <p className="brands_location_home">Home</p>
          </Link>
          <p className="brands_location_brands">Brands</p>
        </div>
      </div>
    </>
  );
}

export default Brands;
