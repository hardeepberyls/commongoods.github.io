import React from "react";
import "../index.css";
const ImageText = (props) => {
  return (
    <>
      <div className="col-md-12 sub_item">
        <div className="col-md-12 down_section_1">
          <div className="col-md-8 book_image">
            <img
              src="images/mother_day.jpg"
              alt="mother day image"
              className="img-fluid"
            />
          </div>
          <div className="col-md-4">
            <div className="col-md-5 mx-auto comfy_section text-left">
              <h4> {props.title}</h4>
              <p>{props.tagline}</p>
              <div className="col-md-12 shop_btn">
                <a href="#">{props.buttonName}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageText;
