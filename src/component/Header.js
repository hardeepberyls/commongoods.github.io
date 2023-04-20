import React from "react";
import "../index.css";

function Header() {
  return (
    <>
      <div className="color_samples">
        <div className="col-md-12 samples"></div>
        <div className="col-md-12 header_area">
          <div className="col-md-3 header_start">
            <h4>We're all out of the ordinary<sup>TM</sup></h4>
          </div>
          <div className="col-md-5 header_logo">
            <h3>common goods</h3>
          </div>
          <div className="col-md-3 header_links">
            <nav>
              <ul className="nav navbar">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <span className="sign_icon">
                      <i className="fa-regular fa-user"></i>
                    </span>
                    Sign in
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <span className="wish_icon">
                      <i className="fa-sharp fa-solid fa-heart"></i>
                    </span>
                    Wish list
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <span className="gift_icon">
                      <i className="fa-sharp fa-solid fa-gift"></i>
                    </span>
                    Gift finder
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <span className="cart_icon">
                      <i className="fa-solid fa-cart-shopping"></i>
                    </span>
                    Cart
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="col-md-12">
          <div className="col-md-7 mx-auto search_input">
            <input
              className="form-control form-control-md me-2"
              type="search"
              placeholder="search keyword"
              aria-label="Search"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
