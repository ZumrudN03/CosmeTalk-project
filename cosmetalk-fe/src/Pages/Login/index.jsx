import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { UserTokenContext } from "../../Context/UserTokenContext";
import "./index.scss";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function Login() {
  const navigate = useNavigate();
  const { addToken } = useContext(UserTokenContext);
  async function handleSubmit(values) {
    try {
      const response = await fetch("http://localhost:3100/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
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

  // async function handleSubmit(e) {
  //   e.preventDefault();

  //   const formData = new FormData();
  //   formData.append("email", email);
  //   formData.append("password", password);

  //   const response = await fetch("http://localhost:3100/auth/login", {
  //     method: "POST",
  //     body: formData,
  //   });
  //   const tokenResponse = await response.json();
  //   const token = tokenResponse.token;

  //   if (!token || typeof token !== "string") {
  //     throw new Error("Invalid token received from the server");
  //   }

  //   addToken(token);
  //   navigate("/");
  // }
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="login">
        <div className="login_sign">
          <p className="login_logo">CosmeTalk</p>
          <p className="login_signAccount">Sign Into Your Account</p>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
              password: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required("Required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                handleSubmit(values);
                setSubmitting(false);
              }, 400);
            }}
          >
            <Form>
              {/* <p>Login</p> */}
              <div className="field">
                <label htmlFor="email">Email</label>
                <Field
                  name="email"
                  type="email"
                  placeholder="example@gmail.com"
                />
                <ErrorMessage name="email" />
              </div>
              <div className="field">
                <label htmlFor="password">Password</label>
                <Field name="password" type="text" placeholder="************" />
                <ErrorMessage name="password" />
              </div>
              <button type="submit">Submit</button>
            </Form>
          </Formik>
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
