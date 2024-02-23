import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function SkinCareReviewsCards() {
  const [skinCareCard, setSkinCareCard] = useState([]);
  const [filterData, setFilterData] = useState("All");

  function getFetchSkinCareProducts() {
    fetch("http://localhost:3100/skincare")
      .then((res) => res.json())
      .then((data) => setSkinCareCard(data));
  }
  useEffect(() => {
    getFetchSkinCareProducts();
  }, []);

  const FilterProduct = (category) => {
    setFilterData(category);
  };
  const dataPruducts =
    filterData === "All"
      ? skinCareCard
      : skinCareCard.filter((item) => item.category === filterData);

  return (
    <>
      <div className="skincare_categories">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide
            className="SwiperSlide"
            onClick={() => FilterProduct("All")}
          >
            All
          </SwiperSlide>
          <SwiperSlide
            className="SwiperSlide"
            onClick={() => FilterProduct("MOISTURIZER")}
          >
            Moisturizer
          </SwiperSlide>
          <SwiperSlide
            className="SwiperSlide"
            onClick={() => FilterProduct("SUNSCREEN")}
          >
            Sunscreen
          </SwiperSlide>
          <SwiperSlide
            className="SwiperSlide"
            onClick={() => FilterProduct("SERUM")}
          >
            Serum
          </SwiperSlide>
          <SwiperSlide
            className="SwiperSlide"
            onClick={() => FilterProduct("TONER")}
          >
            Toner
          </SwiperSlide>
          <SwiperSlide
            className="SwiperSlide"
            onClick={() => FilterProduct("MASK")}
          >
            Mask
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="skinCareReviewsCards">
        {dataPruducts.map((x) => (
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
    </>
  );
}

export default SkinCareReviewsCards;
