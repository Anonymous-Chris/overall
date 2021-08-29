import React from "react";
import "../css/features.css";
import { Link } from "react-router-dom";
import dynamictable from "../images/dynamictable.jpg";
import autoscroll from "../images/autoscroll.jpg";
import donuts from "../images/donuts.jpg";
import loader from "../images/loader.jpg";
import dropdowns from "../images/dropdowns.jpg";
import contextapi from "../images/contextapi.jpg";
import flickity from "../images/flickity.jpg";
import live from "../images/live.jpg";
import skipandfetchpagination from "../images/skipandfetchpagination.jpg";
function Features() {
  return (
    <div className="features w-100 ">
      <div className="row w-100 m-0 p-1 h-31 " style={{ height: "inherit" }}>
        {/* first 3 */}
        <div className="col-sm-12 col-md-6 col-lg-4 features__item">
          <Link to="/features/dynamictable">
            <img src={dynamictable} className="w-100 h-100" alt="first" />
          </Link>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 features__item ">
          <Link to="/features/autoscroll">
            <img src={autoscroll} className="w-100 h-100" alt="first" />
          </Link>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 features__item ">
          <Link to="/features/nesteddonut">
            <img src={donuts} className="w-100 h-100" alt="first" />
          </Link>
        </div>
        {/* second 3 */}

        <div className="col-sm-12 col-md-6 col-lg-4 features__item">
          <Link to="/features/loader">
            <img src={loader} className="w-100 h-100" alt="first" />
          </Link>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 features__item ">
          <Link to="/features/dropdowns">
            <img src={dropdowns} className="w-100 h-100" alt="first" />
          </Link>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 features__item ">
          <Link to="/features/six">
            <img src={contextapi} className="w-100 h-100" alt="first" />
          </Link>
        </div>
        {/* third 3 */}

        <div className="col-sm-12 col-md-6 col-lg-4 features__item">
          <Link to="/features/seven">
            <img src={live} className="w-100 h-100" alt="first" />
          </Link>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 features__item ">
          <Link to="/features/eight">
            <img src={flickity} className="w-100 h-100" alt="first" />
          </Link>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 features__item ">
          <Link to="/features/nine">
            <img
              src={skipandfetchpagination}
              className="w-100 h-100"
              alt="first"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Features;
