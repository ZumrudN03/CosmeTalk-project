import { Swiper, SwiperSlide } from "swiper/react";
import "./index.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

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
            <img src={x.thumbnail} alt="" />
            <div className="SwiperSlide_title"><p>{x.title}</p></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default HeaderSlider;
