import React from "react";
import FeaturedProducts from "../Components/FeaturedProducts/FeaturedProducts";
import AllProducts from "../Components/AllProducts/AllProducts";
import Categories from "../Components/Categories/Categories";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../Components/Card/Card";
import Tittle from "../Components/Head/Tittle";
import { useState } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import useFetch from "../hooks/useFetch";
import "./styles.css";

// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import Dcategory from "../Components/Dcategory";
import { Banner } from "../Components/Banner";
// import SubCategory from "../Components/Categories/SubCategory";

const Home = () => {
  const [hovered, setHovered] = React.useState(false);
  // const { data} = useFetch(
  //   `/categories?populate=*`
  // );
  return (
    <div className="">
      {" "}
      {/* <section class="pt-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16 my-12">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div class="grid items-center grid-cols-1 md:grid-cols-2">
            <div>
              <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Hey 👋 I am <br class="block sm:hidden" />Jenny Carter</h2>
              <p class="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

              <p class="mt-4 text-xl text-gray-600 md:mt-8">
                <span class="relative inline-block">
                  <span class="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300"></span>
                  <span class="relative"> Have a question? </span>
                </span>
                <br class="block sm:hidden" />Ask me on <a href="#" title="" class="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline">Twitter</a>
              </p>
            </div>

            <div class="relative">
              <img class="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2" src="" alt="" />

              <img class="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="../../public/images/banner.png" alt="" />
            </div>
          </div>
        </div>
      </section> */}
      <Banner/>
      <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div class="flex flex-col overflow-hidden rounded-lg bg-gray-200 sm:flex-row md:h-80">
     
      <div class="order-first h-48 w-full bg-gray-300 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
        <img src="/images/undraw.svg" loading="lazy" alt="Photo by Andras Vas" class="h-full w-full object-cover object-center" />
      </div>
    

     
      <div class="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
        <h2 class="mb-4 text-xl font-bold text-gray-800 md:text-2xl lg:text-4xl">Help center</h2>

        <p class="mb-8 max-w-md text-gray-600">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>

        <div class="mt-auto">
          <a href="http://wa.me/919624226677" class="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base">Contact support</a>
        </div>
      </div>
    
    </div>
  </div>
</div>
      

      {/* <div

        className={`relative rounded-lg overflow-hidden cursor-pointer transition duration-300 ease-in-out ${hovered ? 'scale-105' : 'scale-100'}`}

        onMouseEnter={() => setHovered(true)}

        onMouseLeave={() => setHovered(false)}

      >

        <img

          className="w-full h-48 object-cover"

          src="https://source.unsplash.com/random/800x600"

          alt="Home Card"

        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-800 opacity-50"></div>

        <div className="absolute inset-0 flex items-center justify-center text-white">

          <div className="text-xl font-medium">Home Card</div>

        </div>

      </div> */}
      {/* <section className="bg-white m-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-0 pt-4 flex justify-between items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-900">
              Welcome to SajivanAyurveda
            </h1>
            <p className="text-2xl font-bold text-green-600">
              Digital Ayurvedic Clinic For All
            </p>
            <p className="text-base text-gray-700 max-w-lg">
              Get your customized solution from our Healthcare experts.
            </p>
            <button className="bg-green-600 text-white py-3 px-8 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
              Book Free Consultation
            </button>
          </div>
          <div className="flex-shrink-0">
            <img
              className="mb-0"
              style={{
                aspectRatio: "600/600",
                height: "400px",
                objectFit: "cover",
                width: "400px",
              }}
              src="/images/doc.png"
              alt=""
            />
           
          </div>
        </div>
      </section> */}


      {/* <div class="bg-[#f3f4f6] p-5">
        <div class="grid xl:grid-cols-2 gap-8 sm:grid-cols-1 ">
          <Swiper
            style={{
              "--swiper-pagination-color": "#206c43",
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[FreeMode, Autoplay, Pagination]}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
            <SwiperSlide className="">
              <img
                src="./images/aa1.jpg"
                alt=""
                className="h-[400px] w-[700px] rounded-md"
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                src="./images/aa2.jpg"
                alt=""
                className="h-[400px] w-[700px] rounded-md"
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                src="./images/aa3.jpg"
                alt=""
                className="h-[400px] w-[700px] rounded-md"
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                src="./images/aa4.jpg"
                alt=""
                className="h-[400px] w-[700px] rounded-md"
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                src="./images/aa5.jpg"
                alt=""
                className="h-[400px] w-[700px] rounded-md"
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                src="./images/aa6.jpg"
                alt=""
                className="h-[400px] w-[700px] rounded-md"
              />
            </SwiperSlide>
          </Swiper>

          <div class="grid grid-cols-2 gap-4">
            <div
              class="rounded-lg border shadow-sm col-span-1 bg-[#81c784] text-white"
              data-v0-t="card"
            >
              <div class="flex flex-col space-y-1.5 p-6">
                <h3 class="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                  Best Sale
                </h3>
              </div>
              <div class="p-6">
                <h3 class="text-2xl font-bold">Laptops</h3>
                <p class="mt-2">Start ₹91,000 to ₹2,56,000</p>
              </div>
            </div>
            <div
              class="rounded-lg border shadow-sm col-span-1 bg-[#81c784] text-white"
              data-v0-t="card"
            >
              <div class="flex flex-col space-y-1.5 p-6">
                <h3 class="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                  New Arrival
                </h3>
              </div>
              <div class="p-6">
                <h3 class="text-2xl font-bold">Smart Watch</h3>
                <p class="mt-2">Start ₹14,999 to ₹24,999</p>
              </div>
            </div>
            <div
              class="rounded-lg border shadow-sm col-span-1 bg-[#ffe0b2] text-white"
              data-v0-t="card"
            >
              <div class="flex flex-col space-y-1.5 p-6">
                <h3 class="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                  New Arrival
                </h3>
              </div>
              <div class="p-6">
                <h3 class="text-2xl font-bold">Mobiles</h3>
                <p class="mt-2">Start ₹58,999 to ₹2,16,000</p>
              </div>
            </div>
            <div
              class="rounded-lg border shadow-sm col-span-1 bg-[#ffe0b2] text-white"
              data-v0-t="card"
            >
              <div class="flex flex-col space-y-1.5 p-6">
                <h3 class="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                  New Arrival
                </h3>
              </div>
              <div class="p-6">
                <h3 class="text-2xl font-bold">Earphone</h3>
                <p class="mt-2">Start ₹8,999 to ₹16,000</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}


      <div className="mx-5">
        {/* <Swiper style={{
            "--swiper-pagination-color": "#206c43",
          }}
        //  slidesPerView={4}
        spaceBetween={10}
        grabCursor={true}
        freeMode={true}
        loop={true}
        pagination={{
          clickable: true,
        }}breakpoints={{
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
        modules={[FreeMode,Autoplay, Pagination]}
        className="mySwiper mt-8"
      >
        {data?.map(item => (
        <SwiperSlide key={item.id}>
         <Card  item={item} key={item.id} />
        </SwiperSlide>
      ))}
      </Swiper> */}
      </div>
      {/* <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
              Master Cleanse Reliac Heirloom
            </h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom.
            </p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://dummyimage.com/500x300"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://dummyimage.com/501x301"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src="https://dummyimage.com/600x360"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src="https://dummyimage.com/600x360"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src="https://dummyimage.com/601x361"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://dummyimage.com/502x302"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://dummyimage.com/503x303"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://dummyimage.com/503x303"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <SubCategory/> */}
      <Tittle
        name="Select By Category"
        // head="improve your digestive health and prevent health problems"
        style={{ padding: "30px" }}
      />
      <Dcategory />
      {/* <Categories /> */}
      {/* <div className="flex w-full mb-20 flex-wrap my-4">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
          Digestive Care Products
        </h1>
        <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify, subway tile poke farm-to-table. Franzen you probably haven't
          heard of them man bun deep jianbing selfies heirloom.
        </p>
      </div> */}
      {/* <div>
        <Tittle
          name="Digestive Care"
          head="improve your digestive health and prevent health problems"
          style={{ padding: "30px" }}
        />
      </div> */}
      {/* <FeaturedProducts type="vihan" /> */}
      {/* <div className="flex w-full mb-20 flex-wrap my-4">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
          All Products
        </h1>
        <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify, subway tile poke farm-to-table. Franzen you probably haven't
          heard of them man bun deep jianbing selfies heirloom.
        </p>
      </div> */}
      <Tittle
        name="Choose Your Products"
        head="Choose from a wide range of  products"
        style={{ padding: "30px" }}
      />
      <AllProducts />
      {/* <div className="flex w-full mb-20 flex-wrap my-4">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
          Piles Care Products
        </h1>
        <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify, subway tile poke farm-to-table. Franzen you probably haven't
          heard of them man bun deep jianbing selfies heirloom.
        </p>
      </div> */}
      {/* <Tittle
        name="Piles Care"
        head="

          Don’t let piles stop you from doing your best."
        style={{ padding: "30px" }}
      />
      <FeaturedProducts type="deepakstore" /> */}
      {/* <section
        className="bg-[#d5eadb]  m-5  flex items-center justify-between box-shadows2"
        style={{ borderRadius: "12px" }}
      >
        <div className="flex items-center">
          <img
            alt="Doctor"
            className="pl-4"
            src="https://cdn.shopify.com/s/files/1/0575/8920/3125/files/Digestive-Care.png?v=1629541512"
            style={{
              aspectRatio: "400/400",
              height: "300px",
              objectFit: "contain",
              width: "600px",
            }}
             draggable="false"
          />
          <div className="ml-4 text-center">
            <h2 className=" font-semibold text-3xl text-[#206c43]  pb-4">
              Expert Consultation For Digestive Care
            </h2>
            <p className="mt-1  font-light pb-12 mx-8  ">
              Get the best customised ayurvedic care for Digestive problems on
              the Phone from our Experts at your comfort
            </p>
            <div class="flex space-x-4 ml-[220px]">
              <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-[#206c43] text-white">
                Contact Us
              </button>
              <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-[#318e5c] text-white">
                Call Now
              </button>
              <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-[#206c43] text-white">
                Whatsapp
              </button>
            </div>
          </div>
        </div>
      </section> */}

    </div>
  );
};

export default Home;
