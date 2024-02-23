import React, { createRef, useState } from "react";
import { useContext } from "react";
import { UserTokenContext } from "../../Context/UserTokenContext";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./index.scss";

function Register() {
  const { addToken } = useContext(UserTokenContext);
  const navigate = useNavigate();
  const fileRef = createRef();
  const [register, setRegister] = useState(true);
  const [profilePhoto, setProfilePhoto] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function passwordType() {
    const myInput = document.getElementById("myInput");
    if (register) {
      myInput.type = "text";
    } else {
      myInput.type = "password";
    }
    setRegister(!register);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("profilePhoto", profilePhoto);

    const response = await fetch("http://localhost:3100/auth/register", {
      method: "POST",
      body: formData,
    });
    const tokenResponse = await response.json();
    const token = tokenResponse.token;

    if (!token || typeof token !== "string") {
      throw new Error("Invalid token received from the server");
    }

    addToken(token);
    navigate("/");
  }

  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div className="register">
        <div className="create_account">
          <p className="register_logo">CosmeTalk</p>
          <p className="register_signAccount">Create An Account</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="username"
              placeholder="UserName"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="text"
              id="email"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="register_password">
              <input
                type="password"
                id="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <i
                className={
                  passwordType ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"
                }
                onClick={() => passwordType()}
              ></i>
            </div>
            <div className="register_profilePhoto">
            <p className="add_file">Add Profile Photo</p>
            <input
              className="add_profilePhoto"
              type="file"
              accept="image/*"
              ref={fileRef}
              onChange={(e) => setProfilePhoto(e.target.files[0])}
            />
            </div>
            <button>Register</button>
          </form>
          <p className="register_login">
            Do have an account? <Link to={"/login"}>Login</Link>
          </p>
          <div className="create_account_border_top"></div>
          <div className="create_account_border_bottom"></div>
          <div className="create_account_border_left"></div>
        </div>
        <div className="register_left"></div>
        <div className="register_right"></div>
      </div>
    </>
  );
}

export default Register;
