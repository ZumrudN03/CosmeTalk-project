import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer_container">
      <div className="footer_logo">
        <img src="../src/assets/image/CosmeTalk-logo.png" alt="" />
        <div className="footerr_icons">
          <Link to={"https://www.facebook.com/"}>
            <i className="fa-brands fa-facebook-f"></i>
          </Link>
          <Link to={"https://twitter.com/?lang=en"}>
            <i className="fa-brands fa-x-twitter"></i>
          </Link>
          <Link to={"https://www.instagram.com/"}>
            <i className="fa-brands fa-instagram"></i>
          </Link>
          <Link to={"https://www.pinterest.com/"}>
            <i className="fa-brands fa-pinterest"></i>
          </Link>
        </div>
      </div>
      <div className="footer">
        
      </div>
    </div>
  );
}

export default Footer;
