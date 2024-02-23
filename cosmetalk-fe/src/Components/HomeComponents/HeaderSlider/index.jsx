import { Swiper, SwiperSlide } from "swiper/react";
import "./index.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HeaderSlider() {
  const [blogCard, setBlogCard] = useState([]);

  function getFetchBlogCards() {
    fetch("http://localhost:3100/blog")
      .then((res) => res.json())
      .then((data) => setBlogCard(data));
  }
  useEffect(() => {
    getFetchBlogCards();
  }, []);
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {blogCard.map((x) => (
          <SwiperSlide key={x._id} className="SwiperSlide">
            <div className="slider_hover_container">
              <div className="header_hover"></div>
            </div>
            <img src={x.thumbnail} alt="" />
            <div className="SwiperSlide_textbox">
              <div className="SwiperSlide_textbox_header">
                <div className="line"></div>
                <p>COSMETALK</p>
                <div className="line"></div>
              </div>
              <p className="slider_title">{x.title}</p>
              <Link to={"/blog"}>
                <button>Read more</button>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default HeaderSlider;
