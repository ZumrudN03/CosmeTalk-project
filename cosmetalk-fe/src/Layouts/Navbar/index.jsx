import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_logo">
        <img src="../src/assets/image/CosmeTalk-logo.png" alt="" />
      </div>
      <div className="navbar_menu">
        <div className="navbar_menu_icons">
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
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#F6C4A7" : "",
                };
              }}
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reviews"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#F6C4A7" : "",
                };
              }}
            >
              REVIEWS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/brands"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#F6C4A7" : "",
                };
              }}
            >
              BRANDS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#F6C4A7" : "",
                };
              }}
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#F6C4A7" : "",
                };
              }}
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
        <div className="navbar_menu_search">
          <i className="fa-regular fa-user"></i>
          <Link to={"/wishlist"}>
            <i className="fa-regular fa-heart"></i>
          </Link>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
