import React from "react";
import "../css/features.css";
import { Link } from "react-router-dom";
function Features() {
  return (
    <div className="features w-100 ">
      <div className="row w-100 m-0 p-1 h-31 " style={{ height: "inherit" }}>
        {/* first 3 */}
        <div className="col-sm-12 col-md-6 col-lg-4 features__item">
          <Link to="/features/one">
            <img
              src="https://fadic.net/wp-content/uploads/2018/12/number-1_1.jpg"
              className="w-100 h-100"
              alt="first"
            />
          </Link>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 features__item ">
          <Link to="/features/two">
            <img
              src="https://ecdn.teacherspayteachers.com/thumbitem/FREEBIE-Bubble-Numbers-1-10-in-png-format-in-blue-red-and-white-072647100-1376264640-1397147774/original-822799-2.jpg"
              className="w-100 h-100"
              alt="first"
            />
          </Link>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 features__item ">
          <Link to="/features/three">
            <img
              src="https://st.depositphotos.com/1561359/3755/v/950/depositphotos_37559665-stock-illustration-3d-shiny-red-number-3.jpg"
              className="w-100 h-100"
              alt="first"
            />
          </Link>
        </div>
        {/* second 3 */}

        <div className="col-sm-12 col-md-6 col-lg-4 features__item">
          <Link to="/features/four">
            <img
              src="https://fadic.net/wp-content/uploads/2018/12/number-1_1.jpg"
              className="w-100 h-100"
              alt="first"
            />
          </Link>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 features__item ">
          <Link to="/features/five">
            <img
              src="https://ecdn.teacherspayteachers.com/thumbitem/FREEBIE-Bubble-Numbers-1-10-in-png-format-in-blue-red-and-white-072647100-1376264640-1397147774/original-822799-2.jpg"
              className="w-100 h-100"
              alt="first"
            />
          </Link>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 features__item ">
          <Link to="/features/six">
            <img
              src="https://st.depositphotos.com/1561359/3755/v/950/depositphotos_37559665-stock-illustration-3d-shiny-red-number-3.jpg"
              className="w-100 h-100"
              alt="first"
            />
          </Link>
        </div>
        {/* third 3 */}

        <div className="col-sm-12 col-md-6 col-lg-4 features__item">
          <Link to="/features/seven">
            <img
              src="https://fadic.net/wp-content/uploads/2018/12/number-1_1.jpg"
              className="w-100 h-100"
              alt="first"
            />
          </Link>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 features__item ">
          <Link to="/features/eight">
            <img
              src="https://ecdn.teacherspayteachers.com/thumbitem/FREEBIE-Bubble-Numbers-1-10-in-png-format-in-blue-red-and-white-072647100-1376264640-1397147774/original-822799-2.jpg"
              className="w-100 h-100"
              alt="first"
            />
          </Link>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 features__item ">
          <Link to="/features/nine">
            <img
              src="https://st.depositphotos.com/1561359/3755/v/950/depositphotos_37559665-stock-illustration-3d-shiny-red-number-3.jpg"
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
