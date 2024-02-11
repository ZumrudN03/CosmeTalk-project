import React from "react";
import "./index.scss";

function WelcomeCosmeTalkSection() {
  return (
    <div className="welcomeCosmeTalkSection">
      <div className="welcomeCosmeTalkSection_img">
        <img
          src="https://i.pinimg.com/564x/3e/7d/e3/3e7de38bb64bd1387c232104027b2434.jpg"
          alt=""
        />
      </div>
      <div className="welcomeCosmeTalkSection_textBox">
        <h3>Welcome to The <span>CosmeTalk</span></h3>
        <p>
          Hello! As the CosmeTalk team, we are here to provide you with the most
          up-to-date information in the world of makeup and skin care on this
          platform. CosmeTalk is a platform specializing in beauty and care,
          bringing together quality products and professional advice.
        </p>
      </div>
    </div>
  );
}

export default WelcomeCosmeTalkSection;
