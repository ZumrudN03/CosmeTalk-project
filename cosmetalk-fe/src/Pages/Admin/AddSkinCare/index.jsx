import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./index.scss";
import { useNavigate } from "react-router-dom";

function AddSkinCare() {
  const navigate = useNavigate();
  function postSkinCare(values) {
    fetch("http://localhost:3100/skincare", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Server response:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    navigate("/admin/skincare");
  }
  return (
    <div className="addSkinCare">
      <Formik
        initialValues={{
          thumbnail: "",
          image1: "",
          image2: "",
          image3: "",
          image4: "",
          name: "",
          about: "",
          category: "",
          subCategory: "",
          brand: "",
          packSize: "",
          price: 0,
          texture: 0,
          application: 0,
          effect: 0,
        }}
        validationSchema={Yup.object({
          thumbnail: Yup.string()
            .max(200, "Must be 200 characters or less")
            .required("Required"),
          image1: Yup.string().max(200, "Must be 200 characters or less"),
          image2: Yup.string().max(200, "Must be 200 characters or less"),
          image3: Yup.string().max(200, "Must be 200 characters or less"),
          image4: Yup.string().max(200, "Must be 200 characters or less"),
          name: Yup.string()
            .max(50, "Must be 50 characters or less")
            .required("Required"),
          about: Yup.string()
            .max(500, "Must be 500 characters or less")
            .required("Required"),
          category: Yup.string()
            .max(50, "Must be 50 characters or less")
            .required("Required"),
          subCategory: Yup.string()
            .max(50, "Must be 50 characters or less")
            .required("Required"),
          brand: Yup.string()
            .max(50, "Must be 50 characters or less")
            .required("Required"),
          packSize: Yup.string()
            .max(50, "Must be 50 characters or less")
            .required("Required"),
          price: Yup.number().required("Required"),
          texture: Yup.number().required("Required"),
          application: Yup.number().required("Required"),
          effect: Yup.number().required("Required"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          postSkinCare(values);
          resetForm();
          setSubmitting(false);
        }}
      >
        <Form>
          <label htmlFor="thumbnail">Thumbnail:</label>
          <Field name="thumbnail" type="text" />
          <ErrorMessage component="div" className="error" name="thumbnail" />

          <label htmlFor="image1">Image1:</label>
          <Field name="image1" type="text" />
          <ErrorMessage name="image1" />

          <label htmlFor="image2">Image2:</label>
          <Field name="image2" type="text" />
          <ErrorMessage name="image2" />

          <label htmlFor="image3">Image3:</label>
          <Field name="image3" type="text" />
          <ErrorMessage name="image3" />

          <label htmlFor="image4">Image4:</label>
          <Field name="image4" type="text" />
          <ErrorMessage name="image4" />

          <label htmlFor="name">Name:</label>
          <Field name="name" type="text" />
          <ErrorMessage component="div" className="error" name="name" />

          <label htmlFor="about">About:</label>
          <Field name="about" type="text" />
          <ErrorMessage component="div" className="error" name="about" />

          <label htmlFor="category">Category:</label>
          <Field name="category" type="text" />
          <ErrorMessage component="div" className="error" name="category" />

          <label htmlFor="subCategory">SubCategory:</label>
          <Field name="subCategory" type="text" />
          <ErrorMessage component="div" className="error" name="subCategory" />

          <label htmlFor="brand">Brand:</label>
          <Field name="brand" type="text" />
          <ErrorMessage component="div" className="error" name="brand" />

          <label htmlFor="packSize">PackSize:</label>
          <Field name="packSize" type="text" />
          <ErrorMessage component="div" className="error" name="packSize" />

          <label htmlFor="price">Price:</label>
          <Field name="price" type="number" />
          <ErrorMessage component="div" className="error" name="price" />

          <label htmlFor="texture">Texture:</label>
          <Field name="texture" type="number" />
          <ErrorMessage component="div" className="error" name="texture" />

          <label htmlFor="application">Application:</label>
          <Field name="application" type="number" />
          <ErrorMessage component="div" className="error" name="application" />

          <label htmlFor="effect">Effect:</label>
          <Field name="effect" type="number" />
          <ErrorMessage component="div" className="error" name="effect" />

          <button type="submit">+Add</button>
        </Form>
      </Formik>
    </div>
  );
}

export default AddSkinCare;