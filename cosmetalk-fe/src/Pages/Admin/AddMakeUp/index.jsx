import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./index.scss"
import { useNavigate } from "react-router-dom";

function AddMakeUp() {
  const navigate = useNavigate()
  function postMakeUp(values) {
    fetch("http://localhost:3100/makeup", {
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
      })
      navigate("/admin/makeup")
  }

  return (
    <div className="addMakeUp">
      <Formik
        initialValues={{
          thumbnail: "",
          name: "",
          about: "",
          category: "",
          subCategory: "",
          brand: "",
          price: 0,
          pigmentation: 0,
          texture: 0,
          application: 0,
          longevity: 0,
        }}
        validationSchema={Yup.object({
          thumbnail: Yup.string()
            .max(200, "Must be 200 characters or less")
            .required("Required"),
          name: Yup.string()
            .max(100, "Must be 100 characters or less")
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
          price: Yup.number().required("Required"),
          pigmentation: Yup.number().required("Required"),
          texture: Yup.number().required("Required"),
          application: Yup.number().required("Required"),
          longevity: Yup.number().required("Required"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          postMakeUp(values);
          resetForm();
          setSubmitting(false);
        }}
      >
        <Form>
          <label htmlFor="thumbnail">Thumbnail:</label>
          <Field name="thumbnail" type="text" />
          <ErrorMessage component="div" className="error" name="thumbnail" />

          <label htmlFor="name">Name:</label>
          <Field name="name" type="text" />
          <ErrorMessage component="div" className="error"  name="name" />

          <label htmlFor="about">About:</label>
          <Field name="about" type="text" />
          <ErrorMessage component="div" className="error"  name="about" />

          <label htmlFor="category">Category:</label>
          <Field name="category" type="text" />
          <ErrorMessage component="div" className="error"  name="category" />

          <label htmlFor="subCategory">SubCategory:</label>
          <Field name="subCategory" type="text" />
          <ErrorMessage component="div" className="error"  name="subCategory" />

          <label htmlFor="brand">Brand:</label>
          <Field name="brand" type="text" />
          <ErrorMessage component="div" className="error"  name="brand" />

          <label htmlFor="price">Price:</label>
          <Field name="price" type="number" />
          <ErrorMessage component="div" className="error"  name="price" />

          <label htmlFor="pigmentation">Pigmentation:</label>
          <Field name="pigmentation" type="number" />
          <ErrorMessage component="div" className="error"  name="pigmentation" />

          <label htmlFor="texture">Texture:</label>
          <Field name="texture" type="number" />
          <ErrorMessage component="div" className="error"  name="texture" />

          <label htmlFor="application">Application:</label>
          <Field name="application" type="number" />
          <ErrorMessage component="div" className="error"  name="application" />

          <label htmlFor="longevity">Longevity:</label>
          <Field name="longevity" type="number" />
          <ErrorMessage component="div" className="error"  name="longevity" />

          <button type="submit">+Add</button>
        </Form>
      </Formik>
    </div>
  );
}

export default AddMakeUp;
