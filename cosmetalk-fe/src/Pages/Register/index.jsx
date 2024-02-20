import React, { createRef, useState } from "react";
import { useContext } from "react";
import { UserTokenContext } from "../../Context/UserTokenContext";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

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
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            id="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <i
            className={
                passwordType ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"
            }
            onClick={() => passwordToggle()}
          ></i>
          <input
            type="file"
            accept="image/*"
            ref={fileRef}
            onChange={(e) => setProfilePhoto(e.target.files[0])}
          />
          <button>submit</button>
        </form>
      </div>
    </>
  );
}

export default Register;
