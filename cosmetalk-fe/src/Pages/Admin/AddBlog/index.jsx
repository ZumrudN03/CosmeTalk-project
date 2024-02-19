import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import "./index.scss";

function AddBlog() {
  const navigate = useNavigate();

  function postBlog(values) {
    fetch("http://localhost:3100/blog", {
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
    navigate("/admin/blog");
  }
  return (
    <div className="addBlog">
      <Formik
        initialValues={{
          thumbnail: "",
          title: "",
          desc: "",
          image1: "",
          image2: "",
          image3: "",
          image4: "",
          image5: "",
          sub1: "",
          sub2: "",
          sub3: "",
          sub4: "",
          sub5: "",
          name1: "",
          name2: "",
          name3: "",
          name4: "",
          name5: "",
        }}
        validationSchema={Yup.object({
          thumbnail: Yup.string()
            .max(200, "Must be 200 characters or less")
            .required("Required"),
          title: Yup.string()
            .max(50, "Must be 50 characters or less")
            .required("Required"),
          desc: Yup.string().max(500, "Must be 500 characters or less"),
          image1: Yup.string().max(200, "Must be 200 characters or less"),
          image2: Yup.string().max(200, "Must be 200 characters or less"),
          image3: Yup.string().max(200, "Must be 200 characters or less"),
          image4: Yup.string().max(200, "Must be 200 characters or less"),
          image5: Yup.string().max(200, "Must be 200 characters or less"),
          sub1: Yup.string().max(50, "Must be 50 characters or less"),
          sub2: Yup.string().max(50, "Must be 50 characters or less"),
          sub3: Yup.string().max(50, "Must be 50 characters or less"),
          sub4: Yup.string().max(50, "Must be 50 characters or less"),
          sub5: Yup.string().max(50, "Must be 50 characters or less"),
          name1: Yup.string().max(50, "Must be 50 characters or less"),
          name2: Yup.string().max(50, "Must be 50 characters or less"),
          name3: Yup.string().max(50, "Must be 50 characters or less"),
          name4: Yup.string().max(50, "Must be 50 characters or less"),
          name5: Yup.string().max(50, "Must be 50 characters or less"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          postBlog(values);
          resetForm();
          setSubmitting(false);
        }}
      >
        <Form>
          <label htmlFor="thumbnail">Thumbnail:</label>
          <Field name="thumbnail" type="text" />
          <ErrorMessage component="div" className="error" name="thumbnail" />

          <label htmlFor="title">Title:</label>
          <Field name="title" type="text" />
          <ErrorMessage component="div" className="error" name="title" />

          <label htmlFor="desc">Desc:</label>
          <Field name="desc" type="text" />
          <ErrorMessage name="desc" />

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

          <label htmlFor="image5">Image5:</label>
          <Field name="image5" type="text" />
          <ErrorMessage name="image5" />

          <label htmlFor="sub1">Sub1:</label>
          <Field name="sub1" type="text" />
          <ErrorMessage name="sub1" />

          <label htmlFor="sub2">Sub2:</label>
          <Field name="sub2" type="text" />
          <ErrorMessage name="sub2" />

          <label htmlFor="sub3">Sub3:</label>
          <Field name="sub3" type="text" />
          <ErrorMessage name="sub3" />

          <label htmlFor="sub4">Sub4:</label>
          <Field name="sub4" type="text" />
          <ErrorMessage name="sub4" />

          <label htmlFor="sub5">Sub5:</label>
          <Field name="sub5" type="text" />
          <ErrorMessage name="sub5" />

          <label htmlFor="name1">Name1:</label>
          <Field name="name1" type="text" />
          <ErrorMessage name="name1" />

          <label htmlFor="name2">Name2:</label>
          <Field name="name2" type="text" />
          <ErrorMessage name="name2" />

          <label htmlFor="name3">Name3:</label>
          <Field name="name3" type="text" />
          <ErrorMessage name="name3" />

          <label htmlFor="name4">Name4:</label>
          <Field name="name4" type="text" />
          <ErrorMessage name="name4" />

          <label htmlFor="name5">Name5:</label>
          <Field name="name5" type="text" />
          <ErrorMessage name="name5" />

          <button type="submit">+Add</button>
        </Form>
      </Formik>
    </div>
  );
}

export default AddBlog;
