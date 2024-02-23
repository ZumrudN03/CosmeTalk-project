import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


function BrandCards() {
  const [makeUpCard, setMakeUpCard] = useState([]);
  const [skinCareCard, setSkinCareCard] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("All");

  useEffect(() => {
    getFetchMakeUpProducts();
    getFetchSkinCareProducts();
  }, []);

  function getFetchMakeUpProducts() {
    fetch("http://localhost:3100/makeup")
      .then((res) => res.json())
      .then((data) => setMakeUpCard(data));
  }

  function getFetchSkinCareProducts() {
    fetch("http://localhost:3100/skincare")
      .then((res) => res.json())
      .then((data) => setSkinCareCard(data));
  }

  const handleBrandSelect = (brand) => {
    setSelectedBrand(brand);
  };

  const isMakeupBrand = (brand) => {
    return makeUpCard.some((item) => item.brand === brand);
  };

  const isSkincareBrand = (brand) => {
    return skinCareCard.some((item) => item.brand === brand);
  };

  return (
    <>
      <div className="brands_slider">
        <Swiper
          slidesPerView={10}
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
            onClick={() => handleBrandSelect("All")}
          >
            All
          </SwiperSlide>
          <SwiperSlide
            className="SwiperSlide"
            onClick={() => handleBrandSelect("L'oréal Paris")}
          >
            L'oréal Paris
          </SwiperSlide>
          <SwiperSlide
            className="SwiperSlide"
            onClick={() => handleBrandSelect("Maybelline New York")}
          >
            Maybelline New York
          </SwiperSlide>
          <SwiperSlide
            className="SwiperSlide"
            onClick={() => handleBrandSelect("Lancome")}
          >
            Lancome
          </SwiperSlide>
          <SwiperSlide
            className="SwiperSlide"
            onClick={() => handleBrandSelect("Yves Saint Laurent")}
          >
            Yves Saint Laurent
          </SwiperSlide>
          <SwiperSlide
            className="SwiperSlide"
            onClick={() => handleBrandSelect("Giorgio Armani")}
          >
            Giorgio Armani
          </SwiperSlide>
          <SwiperSlide
            className="SwiperSlide"
            onClick={() => handleBrandSelect("CREAM CO.")}
          >
            CREAM CO.
          </SwiperSlide>
          <SwiperSlide
            className="SwiperSlide"
            onClick={() => handleBrandSelect("CeraVe")}
          >
            CeraVe
          </SwiperSlide>
          <SwiperSlide
            className="SwiperSlide"
            onClick={() => handleBrandSelect("La Roche-Posay")}
          >
            La Roche-Posay
          </SwiperSlide>
          <SwiperSlide
            className="SwiperSlide"
            onClick={() => handleBrandSelect("Neutrogena")}
          >
            Neutrogena
          </SwiperSlide>
          <SwiperSlide
            className="SwiperSlide"
            onClick={() => handleBrandSelect("Innisfree")}
          >
            Innisfree
          </SwiperSlide>
          <SwiperSlide
            className="SwiperSlide"
            onClick={() => handleBrandSelect("Vichy")}
          >
            Vichy
          </SwiperSlide>
          <SwiperSlide
            className="SwiperSlide"
            onClick={() => handleBrandSelect("The Ordinary")}
          >
            The Ordinary
          </SwiperSlide>
          <SwiperSlide
            className="SwiperSlide"
            onClick={() => handleBrandSelect("Charlotte Tilbury")}
          >
            Charlotte Tilbury{" "}
          </SwiperSlide>
          <SwiperSlide
            className="SwiperSlide"
            onClick={() => handleBrandSelect("Fenty Skin")}
          >
            Fenty Skin
          </SwiperSlide>
          <SwiperSlide
            className="SwiperSlide"
            onClick={() => handleBrandSelect("SEPHORA COLLECTION")}
          >
            SEPHORA COLLECTION
          </SwiperSlide>
          <SwiperSlide
            className="SwiperSlide"
            onClick={() => handleBrandSelect("Peter Thomas Roth")}
          >
            Peter Thomas Roth
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="brand_products">
        <div className="makeupBrand_cards">
          {makeUpCard
            .filter(
              (item) => selectedBrand === "All" || item.brand === selectedBrand
            )
            .map((x) => (
              <div key={x._id} className="makeupBrand_card">
                <div className="makeupBrand_card_img">
                  <img src={x.thumbnail} alt="" />
                  <div className="makeupBrand_card_hover">
                    <Link to={"/makeupcarddetail/" + x._id}>
                      <button className="makeupBrand_card_hover_btn">
                        OPEN REVIEW
                      </button>
                    </Link>
                  </div>
                </div>

                <div className="makeupBrand_card_categories">
                  <p className="makeupBrand_card_category">
                    <span>in </span>
                    {x.category}
                  </p>
                  <i className="fa-solid fa-angle-right"></i>
                  <p className="makeupBrand_card_subCategory">
                    {x.subCategory}
                  </p>
                </div>
                <p className="makeupBrand_card_name">{x.name}</p>
              </div>
            ))}
        </div>
        <div className="skincareBrand_cards">
          {skinCareCard
            .filter(
              (item) => selectedBrand === "All" || item.brand === selectedBrand
            )
            .map((x) => (
              <div key={x._id} className="skincareBrand_card">
                <div className="skincareBrand_card_img">
                  <img src={x.thumbnail} alt="" />
                  <div className="skincareBrand_card_hover">
                    <Link to={"/skincarecarddetail/" + x._id}>
                      <button className="skincareBrand_card_hover_btn">
                        OPEN REVIEW
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="skincareBrand_card_categories">
                  <p className="skincareBrand_card_category">
                    <span>in </span>
                    {x.category}
                  </p>
                </div>
                <p className="skincareBrand_card_name">{x.name}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default BrandCards;
