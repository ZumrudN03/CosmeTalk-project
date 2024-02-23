import React, { useEffect, useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function MakeUpReviewsCards() {
  const [makeUpCard, setMakeUpCard] = useState([]);
  const [filterData, setFilterData] = useState("All");
  function getFetchMakeUpProducts() {
    fetch("http://localhost:3100/makeup")
      .then((res) => res.json())
      .then((data) => setMakeUpCard(data));
  }
  useEffect(() => {
    getFetchMakeUpProducts();
  }, []);

  const FilterProduct = (subCategory) => {
    setFilterData(subCategory);
  };

  const dataProducts =
    filterData === "All"
      ? makeUpCard
      : makeUpCard.filter((item) => item.subCategory === filterData);

  return (
    <>
      <div className="makeup_categories">
        <p onClick={() => FilterProduct("All")}>ALL</p>
        <div className="makeup_category_slider">
          <p>FACE</p>
          <Swiper
            slidesPerView={4}
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
              onClick={() => FilterProduct("BRONZER")}
            >
              Bronzer
            </SwiperSlide>
            <SwiperSlide
              className="SwiperSlide"
              onClick={() => FilterProduct("BLUSH")}
            >
              Blush
            </SwiperSlide>
            <SwiperSlide
              className="SwiperSlide"
              onClick={() => FilterProduct("CONCEALER")}
            >
              Concealer
            </SwiperSlide>
            <SwiperSlide
              className="SwiperSlide"
              onClick={() => FilterProduct("CONTOUR")}
            >
              Contour
            </SwiperSlide>
            <SwiperSlide
              className="SwiperSlide"
              onClick={() => FilterProduct("FOUNDATION")}
            >
              Foundation
            </SwiperSlide>
            <SwiperSlide
              className="SwiperSlide"
              onClick={() => FilterProduct("HIGHLIGHTER")}
            >
              Highlighter
            </SwiperSlide>
            <SwiperSlide
              className="SwiperSlide"
              onClick={() => FilterProduct("PRIMER")}
            >
              Primer
            </SwiperSlide>
            <SwiperSlide
              className="SwiperSlide"
              onClick={() => FilterProduct("POWDER")}
            >
              Powder
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="makeup_category_slider">
          <p>EYES</p>
          <Swiper
            slidesPerView={3}
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
              onClick={() => FilterProduct("EYEBROW")}
            >
              Eyebrow
            </SwiperSlide>
            <SwiperSlide
              className="SwiperSlide"
              onClick={() => FilterProduct("EYESHADOW")}
            >
              Eyeshadow
            </SwiperSlide>
            <SwiperSlide
              className="SwiperSlide"
              onClick={() => FilterProduct("MASKARA")}
            >
              Mascara
            </SwiperSlide>
            <SwiperSlide
              className="SwiperSlide"
              onClick={() => FilterProduct("EYEBROW")}
            >
              Eyebrow
            </SwiperSlide>
            <SwiperSlide
              className="SwiperSlide"
              onClick={() => FilterProduct("EYESHADOW")}
            >
              Eyeshadow
            </SwiperSlide>
            <SwiperSlide
              className="SwiperSlide"
              onClick={() => FilterProduct("MASKARA")}
            >
              Mascara
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="makeup_category_slider">
          <p>LIPS</p>
          <Swiper
            slidesPerView={3}
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
              onClick={() => FilterProduct("LIPGLOSS")}
            >
              Lip Gloss
            </SwiperSlide>
            <SwiperSlide
              className="SwiperSlide"
              onClick={() => FilterProduct("LIPPENCIL")}
            >
              Lip Pencil
            </SwiperSlide>
            <SwiperSlide
              className="SwiperSlide"
              onClick={() => FilterProduct("LIPSTICK")}
            >
              Lipstick
            </SwiperSlide>
            <SwiperSlide
              className="SwiperSlide"
              onClick={() => FilterProduct("LIPGLOSS")}
            >
              Lip Gloss
            </SwiperSlide>
            <SwiperSlide
              className="SwiperSlide"
              onClick={() => FilterProduct("LIPPENCIL")}
            >
              Lip Pencil
            </SwiperSlide>
            <SwiperSlide
              className="SwiperSlide"
              onClick={() => FilterProduct("LIPSTICK")}
            >
              Lipstick
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="makeUpReviewsCards">
        {dataProducts.map((x) => (
          <div key={x._id} className="makeUpReviewsCard">
            <div className="makeUpReviewsCard_img">
              <img src={x.thumbnail} alt="" />
              <div className="makeUpReviewsCard_hover">
                <Link to={"/makeupcarddetail/" + x._id}>
                  <button className="makeUpReviewsCard_hover_btn">
                    OPEN REVIEW
                  </button>
                </Link>
              </div>
            </div>

            <div className="makeUpReviewsCard_categories">
              <p className="makeUpReviewsCard_category">
                <span>in </span>
                {x.category}
              </p>
              <i className="fa-solid fa-angle-right"></i>
              <p className="makeUpReviewsCard_subCategory">{x.subCategory}</p>
            </div>
            <p className="makeUpReviewsCard_name">{x.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default MakeUpReviewsCards;
