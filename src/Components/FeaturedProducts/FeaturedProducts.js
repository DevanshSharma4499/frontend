import React from "react";
import Card from "../Card/Card";
// import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts mx-6">
      {/* <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div> */}
      <div className="bottom ">
        <Swiper style={{
            "--swiper-pagination-color": "#206c43",
          }}
          // slidesPerView={4}
          spaceBetween={10}
          grabCursor={true}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            320: {
              slidesPerView: 1.2,
            },
            412: {
              slidesPerView: 1.6,
            },
            568: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1300: {
              slidesPerView: 5,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Autoplay, Pagination]}
          className="mySwiper mt-8"
        >
          {error
            ? "Something went wrong!"
            : loading
            ? "loading"
            : data?.map((item) => (
                <SwiperSlide>
                  <Card item={item} key={item.id} />
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedProducts;
