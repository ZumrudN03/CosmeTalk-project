import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss"

function SkinCareReviewsCards() {
  const [skinCareCard, setSkinCareCard] = useState([]);

  function getFetchSkinCareProducts() {
    fetch("http://localhost:3100/skincare")
      .then((res) => res.json())
      .then((data) => setSkinCareCard(data));
  }
  useEffect(() => {
    getFetchSkinCareProducts();
  }, []);
  return (
    <div className="skinCareReviewsCards">
      {skinCareCard.map((x) => (
        <div key={x._id} className="skinCareReviewsCard">
          <div className="skinCareReviewsCard_img">
            <img src={x.thumbnail} alt="" />
            <div className="skinCareReviewsCard_hover">
              <Link to={"/skincarecarddetail/" + x._id}>
                <button className="skinCareReviewsCard_hover_btn">
                  OPEN REVIEW
                </button>
              </Link>
            </div>
          </div>
          <div className="skinCareReviewsCard_categories">
            <p className="skinCareReviewsCard_category">
              <span>in </span>
              {x.category}
            </p>
          </div>
          <p className="skinCareReviewsCard_name">{x.name}</p>
        </div>
      ))}
    </div>
  );
}

export default SkinCareReviewsCards;
