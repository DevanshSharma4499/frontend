import React from "react";
import { useState } from "react";

import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AiFillStar } from "react-icons/ai";
import { addToCart } from "../../redux/cartReducer";
import { ToastContainer, toast } from "react-toastify";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import RelatedProducts from "../../Components/ReletedProduct/ReletedProduct";

const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  return (
    <>
      <div className="grid xl:grid-cols-2 sm:grid-cols-1 bg-[#f9f9f9]">
        <div className="overflow-scroll sajivan-ayurveda m-6">
          <Carousel
            infiniteLoop={true}
            showIndicators={false}
            showStatus={false}
            thumbWidth={60}
            axis="horizontal"
            // autoPlay="{true}"
            className="productCarousel"
          >
            {/* <img src={process.env.REACT_APP_DEV_URL +
                      data.img.data[0].attributes.url} /> */}

            {/* {product.images.map((img) => (
                    <img
                    src={
                      process.env.REACT_APP_API_URL_UPLOAD +
                      product.img?.data?.attributes?.url
                    }
                        key={img.id}
                        id={img.id}
                        data={img.attributes}
                    />
                ))} */}
            {/* <img
            alt="Product Image"
            className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
            height={600}
            src="/placeholder.svg"
            width={600}
          /> */}

            <img
              className="h-[400px]  object-cover"
              src={
              
                data?.attributes?.img?.data[0]?.attributes?.url
              }
            />
            <img
              className="h-[400px] object-cover"
              src={
                
                data?.attributes?.img2?.data[0]?.attributes?.url
              }
            />
            {/* <img
              className="h-[400px] object-cover"
              src={
                "http://localhost:1337" +
                data?.attributes?.img2?.data[1]?.attributes?.url
              }
            />
            <img
              className="h-[400px] object-cover"
              src={
                "http://localhost:1337" +
                data?.attributes?.img2?.data[2]?.attributes?.url
              }
            />
            <img
              className="h-[400px] object-cover"
              src={
                "http://localhost:1337" +
                data?.attributes?.img2?.data[3]?.attributes?.url
              }
            />
            <img
              className="h-[400px] object-cover"
              src={
                "http://localhost:1337" +
                data?.attributes?.img2?.data[4]?.attributes?.url
              }
            /> */}
            {/* <img className="h-[400px]"
                src={
                  'http://localhost:1337' +
                data?.attributes?.img2?.data[5]?.attributes?.url
                }
              /> */}
          </Carousel>
        </div>
        <div className="product-div-right mt-8 px-4">
          <span className="product-name  text-[32px] font-semibold">
            {data?.attributes?.title}
          </span>
          {/* <div className="product-rating flex">
            <span>
              <AiFillStar />
            </span>
            <span>
              <AiFillStar />
            </span>
            <span>
              <AiFillStar />
            </span>
            <span>
              <AiFillStar />
            </span>
            <span>
              <AiFillStar />
            </span>
            <span>(350 ratings)</span>
          </div> */}
          <p className="product-description my-[15px] font-light text-[17px] pr-8 text-[#6c6c6c] leading-normal">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
            animi ad minima veritatis dolore. Architecto facere dignissimos
            voluptate fugit ratione molestias quis quidem exercitationem
            voluptas.
          </p>

          <div className="info__price flex">
            <span className="digestiveproduct-price font-semibold text-2xl">
              Rs.&nbsp;{data?.attributes?.price}
            </span>
            <span className="origin_price text-2xl font-light font-body-3-2  pl-3 text-[#9b9b9b] line-through  mr-6">
              Rs.&nbsp;28,999
            </span>
            {/* <span class="inline-flex items-center gap-x-1 py-0 px-2 rounded-lg text-[13px] font-md bg-green-100  dark:bg-blue-800/30 text-green-700 ring-1 ring-inset ring-green-600/20">Sale</span> */}
            <span className="tag font-body-3-2 mt-1 pl-3 ">
              (&nbsp;incl. of all taxes&nbsp;)
            </span>
          </div>
          {/* <div className="btn-groups">
                <div className="selection-box">
                  <select className="choose">
                    <option value="option1"> 1</option>
                    <option value="option2"> 2</option>
                    <option value="option3"> 3</option>
                  </select>
                </div>
                <button type="button" className="add-cart-btn">
                  <i className="fas fa-shopping-cart"></i>Add To Cart
                </button>
                <button type="button" className="buy-now-btn">
                  <i className="fas fa-wallet"></i>Buy Now
                </button>
              </div> */}
          <div className="flex flex-row items-center gap-12 pt-4">
            <div className="flex flex-row items-center">
              <button
                className="bg-gray-200 py-[4px] px-[14px] rounded-lg text-[#206c43] text-2xl shadow-md"
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              <span className="py-4 px-6 text-2xl rounded-lg"> {quantity}</span>
              <button
                className="bg-gray-200 py-[4px] px-[12px] shadow-md rounded-lg text-[#206c43] text-2xl"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </button>
            </div>
            <button
              className="bg-[#206c43] text-md text-white font-semibold py-3 xl:px-12 rounded-md h-full sm:px-3 add-to-cart-pd hover:bg-[#318e4c] shadow"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    price: data.attributes.price,
                    img: data.attributes.img.data[0].attributes.url,
                    quantity,
                  })
                )
              }
            >
              Add To Cart
            </button>
          </div>
          <ul class="reviews flex ">
            <li className="text-[#6c6c6c] text-xl">
              4.4{data?.attributes?.rating}
            </li>
            <li>
              <img src="https://cdn.shopify.com/s/files/1/0575/8920/3125/files/reviewstar.png?v=1629806756" />
            </li>
            <li className="px-6 text-[#6c6c6c] text-lg italic">
              13500+ People Using&nbsp;
             
            </li>
           
            {/* <li className="float">30 Days</li> */}
          </ul>

          <ul className="product-details">
            {/* <div className="flex mb-2">
              <h5 className="w-[20%] font-semibold text-lg">Includes :-</h5>
              <div className="font-light mb-2">
                Soulfly 30 Caps (1), Xor-Digestive Powder 100gm(1), Pilocool 60
                Caps (2){" "}
              </div>
            </div> */}

            {/* <div class="max-w-4xl mx-auto py-4 pr-6">
              <div class="flex flex-col space-y-6">
                <div className="flex">
                  <h3 class="text-lg font-semibold ">Includes</h3>
                  <div class="text-md pl-8 font-light align-middle pt-[5px]">
                    Soulfly 30 Caps (1), Xor-Digestive Powder 100gm(1), Pilocool
                    60 Caps (2)
                  </div>
                </div>
                <div className="flex">
                  <h3 class="text-lg font-semibold pt-1">Care For</h3>
                  <div class="flex space-x-2 pl-8">
                    <span class="inline-block bg-[#d5eadb] rounded-full px-4 py-2 text-sm font-light  mb-2">
                      Gas
                    </span>
                    <span class="inline-block bg-[#d5eadb] rounded-full px-4 py-2 text-sm font-light mr-2 mb-2">
                      Acidity
                    </span>
                    <span class="inline-block bg-[#d5eadb] rounded-full px-4 py-2 text-sm font-light mr-2  mb-2">
                      Constipation
                    </span>
                  </div>
                </div>
                <div className="flex ">
                  <h3 class="text-lg font-semibold">Dosage</h3>

                  <div
                    class="text-sm text-green-800 cursor-pointer decoration-solid pl-9 mt-1"
                    href="#"
                    rel="ugc"
                  >
                    Click Here <span className="underline ">To Download</span>
                  </div>
                </div>
              </div>
            </div> */}
            <ul className="product-details">
            <li className="kevin pb-0 flex my-2">
              <h6 className="font-semibold text-lg">Care For</h6>
              <p className="mx-8">
                <span className="inline-block bg-[#d5eadb] rounded-full px-3 py-2 text-sm font-light mr-2 mb-2 text-green-800">Stomach Gas</span> <span className="inline-block bg-[#d5eadb] text-green-800 rounded-full px-3 py-2 text-sm font-light mr-2 mb-2">Acidity</span>
                <span className="inline-block text-green-800 bg-[#d5eadb] rounded-full px-3 py-2 text-sm font-light mr-2 mb-2">Constipation</span>
              </p>
            </li>
            <li className="flex mb-[15px] my-2">
              <h6 className="font-semibold text-lg">Includes</h6>
              <p className="mx-8 text-[15px] text-gray-700 font-light pr-8 "> 
                {/* {product.includes} */}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic amet, eveniet adipisci recusandae.
              </p>
            </li>
            
            <li className="py-2 flex">
              <h6 className="font-semibold text-lg">Dosage</h6>
              <p className="text-[15px] text-gray-700 font-light">
                <a href="#" className="pr-1 text-[#206c43] ml-10 pt-[4px]">
                  Click Here
                </a>
                To Download
              </p>
            </li>
            <li className="py-2 flex">
              <h6 className="font-semibold text-lg">Dilivery</h6>
              <p className="text-[15px] text-gray-700 font-light pt-[4px] ml-10">
                <a href="#"></a>
                Free Home Delivery
              </p>
            </li>
            <li className="py-2 flex">
              <h6 className="font-semibold text-lg">Shipping</h6>
              <p className="text-[15px] text-gray-700 font-light pt-[4px] ml-[30px]">
                <a href="#"></a>
                All Over India
              </p>
            </li>
            
          </ul>
            {/* <div className="flex">
              <h5 className="w-[20%] font-semibold text-lg">Care For :-</h5>
              <span class="inline-block bg-[#d5eadb] rounded-full px-3 py-2 text-sm font-light mr-2 mb-2">
                Gas
              </span>
              <span class="inline-block bg-[#d5eadb] rounded-full px-3 py-2 text-sm font-light mr-2 mb-2">
                Acidity
              </span>
              <span class="inline-block bg-[#d5eadb] rounded-full px-3 py-2 text-sm font-light mr-2 mb-2">
                Constipation
              </span>
            </div> */}
            {/* <li className="flex mb-[15px]">
              <h6>Includes</h6>
              <p>{product.includes}</p>
            </li> */}
            {/* <li className="kevin pb-2">
              <h6>Care For</h6>
              <p>
                <span>Stomach Gas</span> <span>Acidity</span>
                <span>Constipation</span>
              </p>
            </li> */}
            {/* <li className="py-3">
              <h6>Dosage</h6>
              <p>
                <a href="#" className="pr-1 text-[#206c43]">
                  Click Here
                </a>
                To Download
              </p>
            </li> */}
            {/* <li className="py-3">
              <h6>Dilivery</h6>
              <p>
                <a href="#"></a>
                Free Home Delivery
              </p>
            </li> */}
            {/* <li className="py-3">
              <h6>Shipping</h6>
              <p>
                <a href="#"></a>
                All Over India
              </p>
            </li> */}
            {/* <li className="py-3">
                  <h6>Services</h6>
                  <img src="./icons/verified.png" alt="" />
                  <p className="padding-bottom">
                    <a href="#"></a>
                    Secure Payments
                  </p>
                  <img src="./icons/operator.png" alt="" />
                  <p className="padding-bottom">
                    <a href="#"></a>
                    Free Consultance
                  </p>
                  <img
                    className="three-dots"
                    src="./icons/vertical-dots.png"
                    alt=""
                  />
                </li> */}
          </ul>
          <span className="divider" />
          {/* <div className="info-item">
            <span className="text-bold">
              Category:{" "}
              <span>{product.categories.data[0].attributes.title}</span>
            </span>
            <span className="text-bold">
              Share:
              <span className="social-icons">
                <FaFacebookF size={16} />
                <FaTwitter size={16} />
                <FaInstagram size={16} />
                <FaLinkedinIn size={16} />
                <FaPinterest size={16} />
              </span>
            </span>
          </div> */}
        </div>
      </div>
<RelatedProducts
 productId={id}
 categoryId={data?.attributes.categories.data[0].id}
/>
      {/* <div className="product">
        {loading ? (
          "loading"
        ) : (
          <>
            <div className="left">
              <div className="images">
                <img
                  src={
                    "http://localhost:1337" +
                    data?.attributes?.img?.data?.attributes?.url
                  }
                  alt=""
                  onClick={(e) => setSelectedImg("img")}
                />
                <img
                  src={
                    "http://localhost:1337" +
                    data?.attributes?.img2?.data?.attributes?.url
                  }
                  alt=""
                  onClick={(e) => setSelectedImg("img2")}
                />
              </div>
              <div className="mainImg">
                <img
                  src={
                    "http://localhost:1337" +
                    data?.attributes[selectedImg]?.data?.attributes?.url
                  }
                  alt=""
                />
              </div>
            </div>
            <div className="right">
              <h1>{data?.attributes?.title}</h1>
              <span className="price">${data?.attributes?.price}</span>
              <p>{data?.attributes?.desc}</p>
              <div className="quantity">
                <button
                  onClick={() =>
                    setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                  }
                >
                  -
                </button>
                {quantity}
                <button onClick={() => setQuantity((prev) => prev + 1)}>
                  +
                </button>
              </div>
              <button
                className="add"
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: data.id,
                      title: data.attributes.title,
                      desc: data.attributes.desc,
                      price: data.attributes.price,
                      img: data.attributes.img.data.attributes.url,
                      quantity,
                    })
                  )
                }
              >
                ADD TO CART
              </button>
              <div className="links">
                <div className="item">ADD TO WISH LIST</div>
                <div className="item">ADD TO COMPARE</div>
              </div>
              <div className="info">
                <span>Vendor: Polo</span>
                <span>Product Type: T-Shirt</span>
                <span>Tag: T-Shirt, Women, Top</span>
              </div>
              <hr />
              <div className="info">
                <span>DESCRIPTION</span>
                <hr />
                <span>ADDITIONAL INFORMATION</span>
                <hr />
                <span>FAQ</span>
              </div>
            </div>
          </>
        )}
      </div> */}
    </>
  );
};

export default Product;
