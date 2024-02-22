import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import "./index.scss";
import CommentArea from "../../Components/CommentArea";

function MakeUpReviewsCardDetail() {
  const { id } = useParams();
  const [makeupDetail, setMakeupDetail] = useState([]);

  function getFetchMekaUpDetail() {
    fetch("http://localhost:3100/makeup/" + id)
      .then((res) => res.json())
      .then((data) => setMakeupDetail(data));
  }
  useEffect(() => {
    getFetchMekaUpDetail();
  }, []);
  return (
    <>
      <Helmet>
        <title>MakeUp Reviews Detail</title>
      </Helmet>
      <div>
        <div className="makeupDetail">
          <div className="makeupDetail_location">
            <Link to={"/"}>
              <p className="makeupDetail_location_home">Home</p>
            </Link>
            <p className="makeupDetail_location_makeup">{makeupDetail.name}</p>
          </div>
        </div>
        <div className="makeup_detail">
          <div className="makeup_detail_desc">
            <img
              className="makeupDetail_thumbnail"
              src={makeupDetail.thumbnail}
              alt=""
            />
            <p className="makeupDetail_name">{makeupDetail.name}</p>
            <div className="makeupDetail_icon">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <p className="makeupDetail_about">{makeupDetail.about}</p>
            <div className="makeup_detail_rating">
              <div className="makeupDetail_rating">
                <p>
                  <span>{makeupDetail.pigmentation}</span> / 5
                </p>
                <p>Pigmentation</p>
              </div>
              <div className="makeupDetail_rating">
                <p>
                  <span>{makeupDetail.texture}</span> / 5
                </p>
                <p>Texture</p>
              </div>
              <div className="makeupDetail_rating">
                <p>
                  <span>{makeupDetail.application}</span> / 5
                </p>
                <p>Application</p>
              </div>
              <div className="makeupDetail_rating">
                <p>
                  <span>{makeupDetail.longevity}</span> / 5
                </p>
                <p>Longevity</p>
              </div>
            </div>
          <CommentArea/>
          </div>
          <div className="makeup_detail_review">
            <div className="makeup_detail_review_reviewDetail">
              <div className="makeup_detail_review_header">
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
                      {makeupDetail.category}
                    </p>
                    <i className="fa-solid fa-angle-right"></i>
                    <p className="reviewDetail_categories_subCategory">
                      {makeupDetail.subCategory}
                    </p>
                  </p>
                </li>
              </ul>
            </div>
            <div className="makeup_detail_review_info">
              <div className="makeup_detail_review_header">
                <div className="line"></div>
                <h3>PRODUCT INFO</h3>
                <div className="line"></div>
              </div>
              <ul>
                <li>
                  Price:<p>${makeupDetail.price}</p>
                </li>
                <li className="reviewInfo_brand">
                  Brand:<p>{makeupDetail.brand}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MakeUpReviewsCardDetail;
