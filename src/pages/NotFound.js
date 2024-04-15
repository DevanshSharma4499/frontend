import React from "react";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <div>
      <div className="">
        <div class=" bg-[#f5f5f7] h-screen flex justify-center align-middle items-center">
          <div class="error-box">
            <div class="flex justify-center align-middle items-center ">
              <img loading="lasy" src="/images/404 Error.svg" alt="" class="max-h-[400px]" />
            </div>
            {/* <h3 class="h2 fnt mb-3">Oops! This Page is Not Found.</h3> */}
            <p class="flex justify-center align-middle items-center text-4xl font-semibold">
              The requested page dose not exist.
            </p>
            <div className="flex justify-center">
              <Link
                to="/"
                class="inline-block px-5 py-2 my-9 mx-auto text-white bg-blue-600 rounded-full hover:bg-blue-700 md:mx-0"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
