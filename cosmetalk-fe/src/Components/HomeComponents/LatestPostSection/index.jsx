import React, { useEffect, useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import "./index.scss";

function LatestPostSection() {
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
    <div className="latestPostSection">
      {blogCard.map((x) => (
        <div className="latestPostSectionCard">
          <img className="latestPostSectionCard_img" src={x.thumbnail} alt="" />
          <p className="latestPostSectionCard_title">{x.title}</p>
          <button className="latestPostSectionCard_btn">
            <Link to={"/blogdetail/" + x._id}>Read More</Link>
          </button>
        </div>
      ))}
    </div>
  );
}

export default LatestPostSection;
