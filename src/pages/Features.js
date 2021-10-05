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
          <Link to="/features/dynamictable" replace>
            <img src={dynamictable} className="w-100 h-100" alt="first" />
          </Link>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 features__item ">
          <Link to="/features/autoscroll" replace>
            <img src={autoscroll} className="w-100 h-100" alt="first" />
          </Link>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 features__item ">
          <Link to="/features/nesteddonut" replace>
            <img src={donuts} className="w-100 h-100" alt="first" />
          </Link>
        </div>
        {/* second 3 */}

        <div className="col-sm-12 col-md-6 col-lg-4 features__item">
          <Link to="/features/loader" replace>
            <img src={loader} className="w-100 h-100" alt="first" />
          </Link>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 features__item ">
          <Link to="/features/dropdowns" replace>
            <img src={dropdowns} className="w-100 h-100" alt="first" />
          </Link>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 features__item ">
          <Link to="/features/datepicker">
            <img src={contextapi} className="w-100 h-100" alt="first replace" />
          </Link>
        </div>
        {/* third 3 */}

        <div className="col-sm-12 col-md-6 col-lg-4 features__item">
          <Link to="/features/live " replace>
            <img src={live} className="w-100 h-100" alt="first" />
          </Link>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 features__item ">
          <Link to="/features/flickity" replace>
            <img src={flickity} className="w-100 h-100" alt="first" />
          </Link>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 features__item ">
          <Link to="/features/pagination" replace> 
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
