import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";

function AdminNav() {
  return (
    <div className="adminNav">
      <div className="adminNav_navbar">
        <img src="../src/assets/image/CosmeTalk-logo.png" alt="" />
      </div>
      <div className="adminNav_sidebar">
        <NavLink
          to="/admin/makeup"
          style={({ isActive }) => {
            return {
              color: isActive ? "#F6C4A7" : "",
            };
          }}
        >
          MAKEUP{" "}
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/pastel-glyph/64/makeup--v2.png"
            alt="makeup--v2"
          />
        </NavLink>
        <NavLink
          to="/admin/skincare"
          style={({ isActive }) => {
            return {
              color: isActive ? "#F6C4A7" : "",
            };
          }}
        >
          SKINCARE{" "}
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/ios/50/foundation-makeup.png"
            alt="foundation-makeup"
          />
        </NavLink>
        <NavLink
          to="/admin/blog"
          style={({ isActive }) => {
            return {
              color: isActive ? "#F6C4A7" : "",
            };
          }}
        >
          BLOG{" "}
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/fluency-systems-regular/48/create--v1.png"
            alt="create--v1"
          />
        </NavLink>
        <NavLink
          to="/admin/user"
          style={({ isActive }) => {
            return {
              color: isActive ? "#F6C4A7" : "",
            };
          }}
        >
          USER{" "}
          <img width="20" height="20" src="https://img.icons8.com/fluency/48/user-male-circle--v1.png" alt="user-male-circle--v1"/>
        </NavLink>
      </div>
    </div>
  );
}

export default AdminNav;
