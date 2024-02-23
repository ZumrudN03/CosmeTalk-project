import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import { UserTokenContext } from "../../Context/UserTokenContext";
import UserProfile from "../../Components/UserProfile";

function Navbar() {
  const { decodedToken } = useContext(UserTokenContext);
  const [showProfile, setShowProfile] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const [hiddenNav, setHiddenNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      if (offset > 135) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar_container ${isSticky ? "sticky" : ""}`}>
      <div className="navbar_logo">
        <img src="../src/assets/image/CosmeTalk-logo.png" alt="" />
      </div>
      <div className="navbar">
        <div className="navbar_icons">
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
        <div className="navbar_navmenu">
          <ul>
            <li>
              <NavLink to="/" onClick={() => setHiddenNav(!hiddenNav)}>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/makeupreviews"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#F6C4A7" : "",
                  };
                }}
              >
                MAKEUP
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skincarereviews"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#F6C4A7" : "",
                  };
                }}
              >
                SKINCARE
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
                to="/blog"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#F6C4A7" : "",
                  };
                }}
              >
                BLOG
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar_search">
          <div
            className={hiddenNav ? "responsiveNav hiddenNav" : "responsiveNav"}
          >
            <ul>
              <li>
                <NavLink to="/" onClick={() => setHiddenNav(!hiddenNav)}>
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/makeupreviews"
                  onClick={() => setHiddenNav(!hiddenNav)}
                >
                  MAKEUP
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/skincarereviews"
                  onClick={() => setHiddenNav(!hiddenNav)}
                >
                  SKINCARE
                </NavLink>
              </li>
              <li>
                <NavLink to="/brands" onClick={() => setHiddenNav(!hiddenNav)}>
                  BRANDS
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={() => setHiddenNav(!hiddenNav)}>
                  ABOUT
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" onClick={() => setHiddenNav(!hiddenNav)}>
                  BLOG
                </NavLink>
              </li>
            </ul>
          </div>
          <i
            className="fa-solid fa-bars"
            onClick={() => setHiddenNav(!hiddenNav)}
          ></i>
          {decodedToken ? (
            <div className="showProfile">
              <p onClick={() => setShowProfile(!showProfile)}>
                {showProfile ? (
                  <i className="fa-solid fa-user"></i>
                ) : (
                  <>
                    <i className="fa-regular fa-user"></i>
                  </>
                )}
              </p>
              {showProfile ? <UserProfile /> : ""}
            </div>
          ) : (
            <NavLink to={"/login"}>
              <i className="fa-regular fa-user"></i>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
