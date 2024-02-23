import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { UserTokenContext } from "../../Context/UserTokenContext";
import { FaStar } from "react-icons/fa";

function SkinCareReviewsCardDetail() {
  const { id } = useParams();
  const [skincareDetail, setSkincareDetail] = useState([]);
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [message, setMessage] = useState("");
  const { decodedToken } = useContext(UserTokenContext);
  const [skincareComments, setskincareComments] = useState([]);

  async function postComment() {
    try {
      const response = await fetch("http://localhost:3100/makeupreview/", {
        method: "POST",
        body: JSON.stringify({
          userId: decodedToken.userId,
          skincareId: id,
          content: message,
          rating: rating,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      await fetchComments();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  async function fetchComments(e) {
    try {
      const response = await fetch(
        "http://localhost:3100/skincare/skincareWithReview/" + id
      );
      const data = await response.json();
      setskincareComments(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  useEffect(() => {
    fetchComments();
  }, []);


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
                Likes:{" "}
                <div className="stars">
                  {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;
                    return (
                      <label key={i}>
                        <input type="radio" name="rating" id="" />
                        <FaStar
                          className="str"
                          color={
                            ratingValue <= (hover || rating)
                              ? "ffc107"
                              : "e4e5e9"
                          }
                        />
                      </label>
                    );
                  })}
                </div>
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
              <li>
                Pack Size: <p>{skincareDetail.packSize}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="commentArea">
        <div className="commentArea_header">
          <p>Leave a Reply</p>
        </div>
        <div className="makeupDetail_icon">
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
              <label key={i}>
                <input
                  type="radio"
                  name="rating"
                  id=""
                  onClick={() => setRating(ratingValue)}
                  value={ratingValue}
                />
                <FaStar
                  className="str"
                  color={ratingValue <= (hover || rating) ? "ffc107" : "e4e5e9"}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            );
          })}
        </div>
        <form action="">
          <div className="commentArea_textarea">
            <label htmlFor="textarea">COMMENT:</label>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              name=""
              id="textarea"
              cols=""
              rows="" 
            ></textarea>
          </div>
          <div className="commentArea_btn">
            <button onClick={() => postComment()}>ADD COMMENT</button>
          </div>
        </form>
      </div>
      <div className="sharedComments">
        {skincareComments
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .map((item) => (
            <div className="userComment" key={item._id}>
              <div className="userSide">
                {/* <img src={item.userId.image} alt="" /> */}
                {/* <p className="userName">{item.userId.name}</p> */}
              </div>
              <p className="comment">{item.content}</p>
            </div>
          ))}
      </div>
    </>
  );
}

export default SkinCareReviewsCardDetail;
