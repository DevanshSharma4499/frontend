import React from 'react'
import Card from '../Card/Card'
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import AllProducts from '../AllProducts/AllProducts';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
const Category = () => {
    const { id } = useParams();
    const { data } = useFetch(
        `/products?populate=*&[filters][categories][id]=${id}`
    );
  return (
    <>
     <div className="font-semibold text-2xl ">
                    {
                        
 data?.[0]?.attributes?.categories?.data?.[0]
                            ?.attributes?.title
                      
                       
                    }
                </div>
                <div className="category-title">
                    {/* {
                        data?.data?.[0]?.attributes?.categories?.data?.[0]
                            ?.attributes?.title
                    } */}
                </div>
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
          {data?.map((item) => (
                <SwiperSlide>
                  <Card item={item} key={item.id} />
                </SwiperSlide>
              ))}
        </Swiper>
    
    
    </>
  )
}

export default Category
