import React, { useEffect, useState } from "react";
import "./index.scss";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import CommentArea from "../../Components/CommentArea";

function SkinCareReviewsCardDetail() {
  const { id } = useParams();
  const [skincareDetail, setSkincareDetail] = useState([]);

  function getFetchSkinCareDetail() {
    fetch("http://localhost:3100/skincare/" + id)
      .then((res) => res.json())
      .then((data) => setSkincareDetail(data));
  }
  useEffect(() => {
    getFetchSkinCareDetail();
  }, []);
  return (
    <>
      <Helmet>
        <title>SkinCare Reviews Detail</title>
      </Helmet>
      <div className="skincareDetail_header">
        <div className="skincareDetail_header_location">
          <Link to={"/"}>
            <p className="skincareDetail_header_location_home">Home</p>
          </Link>
          <p className="skincareDetail_header_location_makeup">
            {skincareDetail.name}
          </p>
        </div>
      </div>
      <div className="skincareDetail">
        <div className="skincareDetail_desc">
          <img
            className="skincareDetail_thumbnail"
            src={skincareDetail.thumbnail}
            alt=""
          />
          <p className="skincareDetail_name">{skincareDetail.name}</p>
          <div className="skincareDetail_icon">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
          <p className="skincareDetail_about">{skincareDetail.about}</p>
          <div className="skincareDetail_ratings">
            <div className="skincareDetail_rating">
              <p>
                <span>{skincareDetail.texture}</span> / 5
              </p>
              <p>Texture</p>
            </div>
            <div className="skincareDetail_rating">
              <p>
                <span>{skincareDetail.application}</span> / 5
              </p>
              <p>Application</p>
            </div>
            <div className="skincareDetail_rating">
              <p>
                <span>{skincareDetail.effect}</span> / 5
              </p>
              <p>Effect</p>
            </div>
          </div>
          <CommentArea />
        </div>
        <div className="skincareDetail_review">
          <div className="skincareDetail_review_reviewDetail">
            <div className="skincareDetail_review_header">
              <div className="line"></div>
              <h3>REVIEW DETAILS</h3>
              <div className="line"></div>
            </div>
            <ul>
              <li>
                Likes: <i className="fa-regular fa-heart"></i>
              </li>
              <li>
                Comments: <i className="fa-regular fa-comment"></i>
              </li>
              <li>
                Categories:
                <p className="reviewDetail_categories">
                  <span>in </span>
                  <p className="reviewDetail_categories_category">
                    {skincareDetail.category}
                  </p>
                </p>
              </li>
            </ul>
          </div>
          <div className="skincareDetail_review_info">
            <div className="skincareDetail_review_header">
              <div className="line"></div>
              <h3>PRODUCT INFO</h3>
              <div className="line"></div>
            </div>
            <ul>
              <li>
                Price:<p>${skincareDetail.price}</p>
              </li>
              <li className="reviewInfo_brand">
                Brand:<p>{skincareDetail.brand}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkinCareReviewsCardDetail;
