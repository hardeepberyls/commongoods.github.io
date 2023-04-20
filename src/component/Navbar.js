import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="col-md-12 nav_section">
        <div className="col-md-8 mx-auto nav_wraps">
          <nav>
            <ul className="nav navbar">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  new
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="">
                  gifts
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="">
                  home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="">
                  kitchen & bar
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="">
                  jewelry
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="">
                  women
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="">
                  men
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="">
                  kids
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="">
                  fun
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="">
                  featured
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="">
                  sale
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
