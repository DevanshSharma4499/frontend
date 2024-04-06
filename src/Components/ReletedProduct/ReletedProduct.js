import React from "react";
import useFetch from "../../hooks/useFetch";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import Card from "../Card/Card";

const RelatedProducts = ({ categoryId, productId, error, loading }) => {
  const { data } = useFetch(
    `/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`
  );
console.log("data",data);
  return (
    <>
    <h2 className="font-semibold text-2xl mx-6 my-8">Releted Products</h2>
    <div className="mx-4">
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
        : data?.map((item) =>
        <SwiperSlide>
              <Card item={item} key={item.id} />
        </SwiperSlide>
       )}
       </Swiper>
    </div>
    </>
  );
};

export default RelatedProducts;
