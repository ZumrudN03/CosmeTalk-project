import React from "react";
import { Helmet } from "react-helmet-async";
import "./index.scss"
import { Link } from "react-router-dom";
import BlogCards from "../../Components/BlogComponents/BlogCards";

function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog</title>
      </Helmet>
      <div className="blog">
        <p className="blog_header">Blog</p>
        <div className="blog_location">
          <Link to={"/"}>
            <p className="blog_location_home">Home</p>
          </Link>
          <p className="blog_location_blog">Blog</p>
        </div>
      </div>
      <BlogCards/>
    </>
  );
}

export default Blog;
