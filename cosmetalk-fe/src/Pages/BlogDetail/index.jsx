import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./index.scss";

function BlogDetail() {
  const { id } = useParams();
  const [blogDetail, setBlogDetail] = useState([]);

  function getFetchBlogDetail() {
    fetch("http://localhost:3100/blog/" + id)
      .then((res) => res.json())
      .then((data) => setBlogDetail(data));
  }
  useEffect(() => {
    getFetchBlogDetail();
  }, []);

  return (
    <div className="blogDetail">
      <div className="blogDetail_thumbnail">
        <img
          src={blogDetail.thumbnail}
          alt=""
        />
      </div>
      <div className="blogDetail_content">
        <h3 className="blogDetail_content_title">{blogDetail.title}</h3>
        <p className="blogDetail_content_desc">{blogDetail.desc}</p>
        <p className="blogDetail_content_name">1.{blogDetail.name1}</p>
        <img
          className="blogDetail_content_image"
          src={blogDetail.image1}
          alt=""
        />
        <p className="blogDetail_content_sub">{blogDetail.sub1}</p>
        <p className="blogDetail_content_name">2.{blogDetail.name2}</p>
        <img
          className="blogDetail_content_image"
          src={blogDetail.image2}
          alt=""
        />
        <p className="blogDetail_content_sub">{blogDetail.sub2}</p>
        <p className="blogDetail_content_name">3.{blogDetail.name3}</p>
        <img
          className="blogDetail_content_image"
          src={blogDetail.image3}
          alt=""
        />
        <p className="blogDetail_content_sub">{blogDetail.sub3}</p>
        <p className="blogDetail_content_name">4.{blogDetail.name4}</p>
        <img
          className="blogDetail_content_image"
          src={blogDetail.image4}
          alt=""
        />
        <p className="blogDetail_content_sub">{blogDetail.sub4}</p>
        <p className="blogDetail_content_name">5.{blogDetail.name5}</p>
        <img
          className="blogDetail_content_image"
          src={blogDetail.image5}
          alt=""
        />
        <p className="blogDetail_content_sub">{blogDetail.sub5}</p>
      </div>
    </div>
  );
}

export default BlogDetail;
