import React, { useEffect, useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";

function BlogCards() {
  const [blogCard, setBlogCard] = useState([]);

  function getFetchBlogCards() {
    fetch("http://localhost:3100/blog")
      .then((res) => res.json())
      .then((data) => setBlogCard(data));
  }
  useEffect(() => {
    getFetchBlogCards();
  }, []);
  return (
    <div className="blogCards">
      {blogCard.map((x) => (    
        <div key={x._id} className="blogCard">
          <img className="blogCard_img" src={x.thumbnail} alt="" />
          <p className="blogCard_title">{x.title}</p>
          <button className="blogCard_btn">
            <Link to={"/blogdetail/" + x._id}>Read More</Link>
          </button>
        </div>
      ))}
    </div>
  );
}

export default BlogCards;
