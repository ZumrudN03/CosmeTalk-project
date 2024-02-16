import React from "react";
import { Helmet } from "react-helmet-async";
import FeaturedProductsSection from "../../Components/HomeComponents/FeaturedProductsSection";
import HeaderSlider from "../../Components/HomeComponents/HeaderSlider";
import LatestPostSection from "../../Components/HomeComponents/LatestPostSection";

function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="home">
        <HeaderSlider/>
        <LatestPostSection/>
        <FeaturedProductsSection/>
      </div>
    </>
  );
}

export default Home;
