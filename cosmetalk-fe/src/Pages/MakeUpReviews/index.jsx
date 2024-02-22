import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "./index.scss";
import MakeUpReviewsCards from "../../Components/MakeUpReviewsComponents/MakeUpReviewsCards";

function MakeUpReviews() {
  return (
    <>
      <Helmet>
        <title>MakeUp Reviews</title>
      </Helmet>
      <div className="makeup">
        <p className="makeup_header">MakeUp Reviews</p>
        <div className="makeup_location">
          <Link to={"/"}>
            <p className="makeup_location_home">Home</p>
          </Link>
          <p className="makeup_location_makeup">MakeUp</p>
        </div>
      </div>

      <MakeUpReviewsCards />
    </>
  );
}

export default MakeUpReviews;
