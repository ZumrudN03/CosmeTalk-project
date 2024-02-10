import React from "react";
import { Helmet } from "react-helmet-async";
import FeaturedProductsSection from "../../Components/HomeComponents/FeaturedProductsSection";

function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="home">
        <FeaturedProductsSection/>
      </div>
    </>
  );
}

export default Home;
