import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="col-md-10 mx-auto footer_section">
        <div className="col-md-3">
          <div className="col-md-12">
            <h2>shop by recipient</h2>
            <ul>
              <li className="nav-item">
                <Link className="nav-link" to="">
                  Women
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="">
                  Men
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="">
                  Kids
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-3">
          <div className="col-md-12">
            <h2>shop by category</h2>
            <ul>
              <li className="nav-item">
                <Link className="nav-link" to="">
                  personalized
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="">
                  Jewelry
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="">
                  Kitchen
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-3">
          <div className="col-md-12">
            <h2>shop by occasion</h2>
            <ul>
              <li className="nav-item">
                <Link className="nav-link" to="">
                  Wedding
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="">
                  Anniversary
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="">
                  Housewarming
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-12 samples"></div>
    </>
  );
}

export default Footer;
