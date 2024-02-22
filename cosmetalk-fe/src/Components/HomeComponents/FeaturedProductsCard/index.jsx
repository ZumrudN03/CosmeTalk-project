import React, { useEffect, useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";

function FeaturedProductsCard() {
  const [featuredProductsCard, setFeaturedProductsCard] = useState([]);

  function getFetchMakeUpProducts() {
    fetch("http://localhost:3100/makeup")
      .then((res) => res.json())
      .then((data) => setFeaturedProductsCard(data));
  }
  useEffect(() => {
    getFetchMakeUpProducts();
  }, []);

  return (
    <>
      <div className="featuredProductsCards">
        {featuredProductsCard.slice(0, 4).map((x) => (
          <div key={x._id} className="featuredProductsCard">
            <div className="featuredProductsCard_img">
              <img src={x.thumbnail} alt="" />
              <div className="featuredProductsCard_hover">
                <Link to={"/makeupcarddetail/" + x._id}>
                  <button className="featuredProductsCard_hover_btn">
                    OPEN REVIEW
                  </button>
                </Link>
              </div>
            </div>

            <div className="featuredProductsCard_categories">
              <p className="featuredProductsCard_category">
                <span>in </span>
                {x.category}
              </p>
              <i className="fa-solid fa-angle-right"></i>
              <p className="featuredProductsCard_subCategory">
                {x.subCategory}
              </p>
            </div>
            <p className="featuredProductsCard_name">{x.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default FeaturedProductsCard;
