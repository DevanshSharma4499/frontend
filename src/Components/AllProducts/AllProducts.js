import React from "react";
import useFetch from "../../hooks/useFetch";
import Card from "../Card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useRef } from "react";
import loadingData from "../../assets/loading.json";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
const AllProducts = () => {
  const { data, loading, error } = useFetch(`/products?populate=*`);
  const phoneRef = useRef();
  return (
    <div className="mx-6">
      <div className=" ">
        <Swiper
          style={{
            "--swiper-pagination-color": "#206c43",
          }}
          // slidesPerView={4}
          spaceBetween={10}
          grabCursor={true}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
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
          //   },
          //   480: {
          //     slidesPerView: 2,

          //   },
          //   768: {
          //     slidesPerView: 3,

          //   },
          //   1024: {
          //     slidesPerView: 3,

          //   },
          // }}
          loop={true}
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
            ? <div className="flex justify-center items-center max-h-xs">
<Lottie
                  onComplete={() => {
                    phoneRef.current?.setSpeed(0.6);
                    phoneRef.current?.setDirection(-1);
                    phoneRef.current?.play();
                    // setshowCart(false)
                  }}
                  loop={true}
                  lottieRef={phoneRef}
                  animationData={loadingData}
                />
            </div>
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

export default AllProducts;
