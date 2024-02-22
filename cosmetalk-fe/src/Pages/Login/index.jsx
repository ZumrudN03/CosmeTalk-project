import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { UserTokenContext } from "../../Context/UserTokenContext";
import "./index.scss";

function Login() {
  const navigate = useNavigate();
  const { addToken } = useContext(UserTokenContext);

  async function handleSubmit(value) {
    try {
      const response = await fetch("http://localhost:3100/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(value),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const tokenResponse = await response.json();
      const token = tokenResponse.token;

      if (!token || typeof token !== "string") {
        throw new Error("Invalid token received from the server");
      }

      addToken(token);
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="login">
        <div className="login_sign">
          <p className="login_logo">CosmeTalk</p>
          <p className="login_signAccount">Sign Into Your Account</p>
          <form
            onSubmit={(value, { setSubmitting }) => {
              setTimeout(() => {
                handleSubmit(value);
                setSubmitting(false);
              }, 400);
            }}
          >
            <input type="text" id="email" placeholder="Email Address" />
            <input type="text" id="password" placeholder="Password" />
            <button>Login</button>
          </form>
          <p className="login_register">
            Don't have an account? <Link to={"/register"}>Register here</Link>
          </p>
          <div className="login_sign_border_top"></div>
          <div className="login_sign_border_bottom"></div>
          <div className="login_sign_border_left"></div>
        </div>
        <div className="login_left"></div>
        <div className="login_right"></div>
      </div>
    </>
  );
}

export default Login;
