import React from "react";

const Tittle = (heading) => {
  return (
  <div className=" section-margin-top-30">
        <div className="what-is-new-section">
        <div className="w-full">

          <div className="col-md-12 section-margin-top-40 heading-part">
    <h2>{heading.name}</h2>
            <hr className="weight-loss-kit-bg-color" />
            <p>{heading.head}</p>
          </div>

        </div>
      </div>
    
  </div>
  );
};

export default Tittle;