import React from "react";
import "../index.css";
const FourCol = () => {
  return (
    <>
      <div className="col-md-10 mx-auto my-5">
        <div className="col-md-12 reason_title text-start">
          <h3>Other reasons to give</h3>
        </div>
        <div className="col-md-12 sub_item_2">
          <div className="col-md-3">
            <div className="col-md-12 img_content">
              <a href="#">birthday gifts</a>
            </div>
          </div>
          <div className="col-md-3 mx-2">
            <div className="col-md-12 img_content">
              <a href="#">anniversary gifts</a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="col-md-12 img_content">
              <a href="#">wedding gifts</a>
            </div>
          </div>
          <div className="col-md-3 ms-2">
            <div className="col-md-12 img_content">
              <a href="#">housewarming gifts</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FourCol;
