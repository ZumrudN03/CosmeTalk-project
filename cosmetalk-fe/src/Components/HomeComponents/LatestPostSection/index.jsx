import React, { useEffect, useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import "./index.scss";
import { BASE_URL } from "../../../config";

function LatestPostSection() {
  const [blogCard, setBlogCard] = useState([]);

  function getFetchBlogCards() {
    fetch(`${BASE_URL}/blog`)
      .then((res) => res.json())
      .then((data) => setBlogCard(data));
  }
  useEffect(() => {
    getFetchBlogCards();
  }, []);
  return (
    <div className="latestPostSection">
      {blogCard.map((x) => (
        <div key={x._id} className="latestPostSectionCard">
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
