import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import "./index.scss";
import { UserTokenContext } from "../../Context/UserTokenContext";
import { FaStar } from "react-icons/fa";

function MakeUpReviewsCardDetail() {
  const { id } = useParams();
  const [makeupDetail, setMakeupDetail] = useState([]);
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [message, setMessage] = useState("");
  const { decodedToken } = useContext(UserTokenContext);
  const [makeupComments, setmakeupComments] = useState([]);

  // async function postRating() {
  //   try {
  //     const response = await fetch("http://localhost:3100/makeupreview/makeupavarage", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         userId: decodedToken.userId,
  //         makeupId: id,
  //         rating: rating,
  //       }),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // }

  async function postComment() {
    try {
      const response = await fetch("http://localhost:3100/makeupreview/", {
        method: "POST",
        body: JSON.stringify({
          userId: decodedToken.userId,
          makeupId: id,
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
        "http://localhost:3100/makeup/makeupWithReview/" + id
      );
      const data = await response.json();
      setmakeupComments(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  useEffect(() => {
    fetchComments();
  }, []);

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
        <div className="makeupDetail_header">
          <div className="makeupDetail_location">
            <Link to={"/"}>
              <p className="makeupDetail_location_home">Home</p>
            </Link>
            <p className="makeupDetail_location_makeup">{makeupDetail.name}</p>
          </div>
        </div>
        <div className="makeupDetail">
          <div className="makeupDetail_desc">
            <img
              className="makeupDetail_thumbnail"
              src={makeupDetail.thumbnail}
              alt=""
            />
            <p className="makeupDetail_name">{makeupDetail.name}</p>

            <p className="makeupDetail_about">{makeupDetail.about}</p>
            <div className="makeupDetail_ratings">
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
          </div>
          <div className="makeupDetail_review">
            <div>
              <div className="makeupDetail_review_header">
                <div className="line"></div>
                <h3>REVIEW DETAILS</h3>
                <div className="line"></div>
              </div>
              <ul>
                <li>
                  Likes:
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
            <div>
              <div className="makeupDetail_review_header">
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
        {makeupComments
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

export default MakeUpReviewsCardDetail;
