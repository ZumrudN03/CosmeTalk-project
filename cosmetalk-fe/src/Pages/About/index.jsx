import React from "react";
import { Helmet } from "react-helmet-async";
import "./index.scss";
import WelcomeCosmeTalkSection from "../../Components/AboutComponents/WelcomeCosmeTalkSection";
import OurVisionSection from "../../Components/AboutComponents/OurVisionSection";
import CommunicationSection from "../../Components/AboutComponents/CommunicationSection";
import CommentsAndReviewSection from "../../Components/AboutComponents/CommentsAndReviewsSection";
import { Link } from "react-router-dom";
import FeaturedProductsCard from "../../Components/HomeComponents/FeaturedProductsCard";

function About() {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <div className="about">
        <p className="about_header">About</p>
        <div className="about_location">
          <Link to={"/"}><p className="about_location_home">Home</p></Link>
          <p className="about_location_about">About</p>
        </div>
      </div>
      <div>
        <WelcomeCosmeTalkSection />
        <OurVisionSection />
        <CommentsAndReviewSection />
        <CommunicationSection />
      </div>
      {/* <div className="about_footer">
        <p>FEATURED REVIEWS</p>
        <FeaturedProductsCard/>
      </div> */}
    </>
  );
}

export default About;
