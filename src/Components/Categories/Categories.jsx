import React from "react";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Categories = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="text-gray-600 body-font">
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
                <button>
                  <div
                    className="link"
                    onClick={() => navigate("/product/" + 1)}
                  >
                    Icerose Powder
                  </div>
                </button>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://dummyimage.com/501x301"
                />
                <button>
                  <div
                    className="link"
                    onClick={() => navigate("/product/" + 2)}
                  >
                    Gesofine Powder
                  </div>
                </button>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src="https://dummyimage.com/600x360"
                />
                <button>
                  <div
                    className="link"
                    onClick={() => navigate("/product/" + 3)}
                  >
                    Refresh Churna
                  </div>
                </button>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src="https://dummyimage.com/600x360"
                />
                <button>
                  <div
                    className="link"
                    onClick={() => navigate("/product/" + 4)}
                  >
                    Constirelex Powder
                  </div>
                </button>
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src="https://dummyimage.com/601x361"
                />
                <button>
                  <div
                    className="link"
                    onClick={() => navigate("/product/" + 5)}
                  >
                    Amrutaam Teblet
                  </div>
                </button>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://dummyimage.com/502x302"
                />
                <button>
                  <div
                    className="link"
                    onClick={() => navigate("/product/" + 7)}
                  >
                    Weight Gain
                  </div>
                </button>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://dummyimage.com/503x303"
                />
                <button>
                  <div
                    className="link"
                    onClick={() => navigate("/product/" + 6)}
                  >
                    Lexolite Teblets
                  </div>
                </button>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://dummyimage.com/503x303"
                />
                <button>
                  <div
                    className="link"
                    onClick={() => navigate("/product/" + 8)}
                  >
                    Weight Loss
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" grid grid-cols-3 gap-5">
      <div className="row">
            <img
              src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <button>
              <Link to="/products/1" className="link">
                Women
              </Link>
            </button>
          </div>
          <div className="row">
            <img
              src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <button>
              <Link to="/products/2" className="link">
                Women
              </Link>
            </button>
          </div>
          <div className="row">
            <img
              src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <button>
              <Link to="/products/3" className="link">
                Women
              </Link>
            </button>
          </div>
      </section>


      {/* <div className="categories grid grid-cols-3 gap-4 aspect-auto">
        <div className="">
          <div className="row">
            <img
              src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <button>
              <div className="link" onClick={() => navigate("/product/" + 2)}>
                Sale
              </div>
            </button>
          </div>
          <div className="row">
            <img
              src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <button>
              <Link to="/products/1" className="link">
                Women
              </Link>
            </button>
          </div>
        </div>
        <div className="col">
          <div className="row">
            {" "}
            <img
              src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <button>
              <Link to="/products/1" className="link">
                New Season
              </Link>
            </button>
          </div>
        </div>
        <div className="col col-l">
          <div className="row">
            <div className="col">
              <div className="row">
                <img
                  src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <button>
                  <Link to="/products/1" className="link">
                    Men
                  </Link>
                </button>
              </div>
            </div>

            <div className="row">
              {" "}
              <img
                src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Accessories
                </Link>
              </button>
            </div>
            <div className="row">
              <img
                src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Shoes
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Categories;
