import React from "react";
import FeaturedProductsCard from "../FeaturedProductsCard";
import "./index.scss";
import { Link } from "react-router-dom";

function FeaturedProductsSection() {
  return (
    <div className="featuredProductsSection">
      <div className="featuredProductsSection_header">
        <p className="featuredProductsSection_title">FEATURED REVIEWS</p>
        <Link to={"/makeupreviews"}>
          <button className="featuredProductsSection_btn">
            SEE ALL REVIEWS
          </button>
        </Link>
      </div>
      <FeaturedProductsCard />
    </div>
  );
}

export default FeaturedProductsSection;
