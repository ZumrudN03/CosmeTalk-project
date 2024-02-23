import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_follow">
        <p>Follow us on social media:</p>
        <div className="footer_icons">
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
      <div className="footer_logo_container">
        <div className="footer_logo">
          <p className="footer_cosmetalk">CosmeTalk</p>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/makeupreviews"}>MakeUp</Link>
            </li>
            <li>
              <Link to={"/skincarereviews"}>SkinCare</Link>
            </li>
            <li>
              <Link to={"/brands"}>Brands</Link>
            </li>
            <li>
              <Link to={"/blog"}>Blog</Link>
            </li>
            <li>
              <Link to={"/about"}>About Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
