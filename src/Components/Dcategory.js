import React from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
const Dcategory = () => {
  const { data, loading, error } = useFetch(`/categories?populate=*`);
  const navigate = useNavigate();
  return (
    <>
      <div>
       
      <div class="mt-10 grid grid-cols-2 gap-6 lg:mt-16 lg:grid-cols-5 lg:gap-4 mx-5 ">
          {
            error
            ? "Something went wrong!"
            : loading
            ? "loading"
            : data?.map((item) => (
            <article
              key={item.id}
              onClick={() => navigate(`/category/${item.id}`)}
              class="relative p-4 w-full bg-[#fdf4ed] rounded-lg overflow-hidden shadow-md flex flex-col justify-center items-center "
            >
              <div class="aspect-square overflow-hidden w-full h-full rounded-lg">
                <img
                  class="group-hover:scale-125 h-full w-full object-cover transition-all duration-300 "
                  // src={
                  //   " http://localhost:1337" +
                  //   item?.attributes?.img?.data[0]?.attributes?.url
                   
                  // }
                  src={
                    item?.attributes?.img?.data[0]?.attributes?.url
                  }
                  draggable="false"
                />
              </div>
              {/* <div class="absolute top-0 m-1 rounded-full bg-white">
              <p class="text-[10px] rounded-full bg-black p-1 font-bold uppercase tracking-wide text-white sm:px-3 sm:py-1">Sale</p>
              </div> */}
              <div class="mt-4 flex items-start justify-between">
                <div class="">
                  <h3 class="text-xs font-semibold sm:text-sm md:text-base">
                    <a title="" class="cursor-pointer">
                      {item?.attributes?.title}
                      <span class="absolute" aria-hidden="true"></span>
                    </a>
                  </h3>
                  <a title="" class="cursor-pointer">
                    {item?.attributes?.desc}
                    <span class="absolute" aria-hidden="true"></span>
                  </a>
                </div>
              </div>
              </article>
          ))}
        </div>
 
      </div>
     
     
    </>
  );
};

export default Dcategory;
