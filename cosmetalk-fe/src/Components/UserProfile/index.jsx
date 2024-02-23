import React, { useContext } from "react";
import { UserTokenContext } from "../../Context/UserTokenContext";
import { Link } from "react-router-dom";
import "./index.scss";

function UserProfile() {
  const { decodedToken, logOut } = useContext(UserTokenContext);
  return (
    <div className="userProfile">
      <div className="userProfile_pp">
        <img src={decodedToken.image} alt="" />
        <p className="profileName">{decodedToken.name} </p>
      </div>
      <div className="userProfile_logout">
      <Link onClick={() => logOut()}>
        <i className="fa-solid fa-arrow-right-from-bracket"></i> LogOut
      </Link>
      </div>
    </div>
  );
}

export default UserProfile;
