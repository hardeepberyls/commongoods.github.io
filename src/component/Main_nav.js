import React from "react";
import FourCol from "./FourCol";
import ImageText from "./ImageText";

function Main_nav() {
  return (
    <>
      <div className="col-md-12">
        <div className="col-md-10 mx-auto top_nav">
          <div className="col-md-2 item">
            <div className="col-md-12">
              <img
                className="img-fluid"
                src="images/mom.jpg"
                alt="mom image"
                style={{ borderRadius: "50%", width: "161.22px" }}
              />
            </div>
            <div className="col-md-12 item_title">
              <h3>for mom</h3>
            </div>
          </div>

          <div className="col-md-2 item">
            <div className="col-md-12">
              <img
                className="img-fluid"
                src="images/dad.jpg"
                alt="dad image"
                style={{ borderRadius: "50%", width: "161.22px" }}
              />
            </div>
            <div className="col-md-12 item_title">
              <h3>for dad</h3>
            </div>
          </div>

          <div className="col-md-2 item">
            <div className="col-md-12">
              <img
                className="img-fluid"
                src="images/everyone.jpg"
                alt="everyone image"
                style={{ borderRadius: "50%", width: "161.22px" }}
              />
            </div>
            <div className="col-md-12 item_title">
              <h3>for everyone</h3>
            </div>
          </div>

          <div className="col-md-2 item">
            <div className="col-md-12">
              <img
                className="img-fluid"
                src="images/kids.jpg"
                alt="kids image"
                style={{ borderRadius: "50%", width: "161.22px" }}
              />
            </div>
            <div className="col-md-12 item_title">
              <h3>for kids</h3>
            </div>
          </div>

          <div className="col-md-2 item">
            <div className="col-md-12">
              <img
                className="img-fluid"
                src="images/new.jpg"
                alt="new image"
                style={{ borderRadius: "50%", width: "161.22px" }}
              />
            </div>
            <div className="col-md-12 item_title">
              <h3>new</h3>
            </div>
          </div>

          <div className="col-md-2 item">
            <div className="col-md-12">
              <img
                className="img-fluid"
                src="images/seller.jpg"
                alt="seller image"
                style={{ borderRadius: "50%", width: "161.22px" }}
              />
            </div>
            <div className="col-md-12 item_title">
              <h3>bestsellers</h3>
            </div>
          </div>
        </div>

        <ImageText
          title="Mother's Day is coming"
          tagline="3 out of 5 turtles are ready. Are you?"
          buttonName="Find mom's gift"
        />

        <FourCol/>
        <div className="col-md-12">
          <div className="col-md-12 down_section_1">
            <div className="col-md-8 skyler_image">
              <p>image placed here</p>
            </div>
            <div className="col-md-4">
              <div className="col-md-5 mx-auto comfy_section">
                <h4>Feeling festive</h4>
                <p>
                  5 out of 6 snow people agree that it's never too soon to start
                  making spirits bright.
                </p>
              </div>
              <div className="col-md-12 shop_btn">
                <div className="col-md-3">
                  <button
                    type="button"
                    className="btn form-control btn-secondary"
                  >
                    SHOP EARLY HOLIDAY
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main_nav;
