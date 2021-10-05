import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../css/navbar.css";
// import overall from "../images/overall.png";
import output from "../images/output.png";
import Clock from "../components/features/Clock";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  const location = useLocation();
  const { t } = useTranslation();
  // update the selected boxing of the animations tab in the parent element too
  useEffect(() => {
    // check active tab
    var checkActiveTab = (_location) => {
      if (location.pathname.includes(`${_location}`)) {
        document.getElementById(`${_location}`).classList.add("active");
      } else {
        document.getElementById(`${_location}`).classList.remove("active");
      }
    };

    if (location.pathname.includes("features")) {
      document.getElementById(`animations`).classList.remove("active");
      checkActiveTab("features");
    } else if (location.pathname.includes("animations")) {
      document.getElementById(`features`).classList.remove("active");
      checkActiveTab("animations");
    } else {
      document.getElementById(`animations`).classList.remove("active");
      document.getElementById(`features`).classList.remove("active");
    }
    return () => {};
  }, [location]);

  return (
    <div className="navbar__tabs">
      <div
        className={click ? "navbar__hamburgermenu" : ""}
        onClick={() => Close()}
      />
      <nav className="navbar p-0" onClick={(e) => e.stopPropagation()}>
        <div className="navbar__container">
          <NavLink exact to="/" className="">
            <div className="navbar__logo">
              <img src={output} alt="logo" />
            </div>
          </NavLink>

          <div className="navbar__clock">
            <Clock />
          </div>

          <ul
            className={click ? "navbar__menu active mb-0" : "navbar__menu mb-0"}
          >
            <li className="navbar__item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="navbar__links"
                id="home"
                onClick={click ? handleClick : null}
              >
                {t("navbar.home")}
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink
                exact
                to="/features"
                activeClassName="active"
                className="navbar__links"
                id="features"
                onClick={click ? handleClick : null}
              >
                {t("navbar.features")}
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink
                exact
                to="/animations"
                activeClassName="active"
                className="navbar__links "
                id="animations"
                onClick={click ? handleClick : null}
              >
                {t("navbar.animations")}
              </NavLink>

              {/* keep nesting outside as to avoid <a> <a> descendent error */}
              <div className="navbar__function__content">
                <NavLink exact to="/animations/heatmap">
                  {t("navbar.animations1")}
                </NavLink>
                <NavLink exact to="/animations/charts">
                  {t("navbar.animations2")}
                </NavLink>
                <NavLink exact to="/animations/3d">
                  {t("navbar.animations3")}
                </NavLink>
                <NavLink exact to="/animations/lazyloading">
                  {t("navbar.animations4")}
                </NavLink>
              </div>
            </li>
            <li className="navbar__item">
              <NavLink
                exact
                to="/responsive2x2"
                activeClassName="active"
                className="navbar__links"
                id="responsive2x2"
                onClick={click ? handleClick : null}
              >
                {t("navbar.responsive")}
              </NavLink>
            </li>

            <li className="navbar__item">
              <NavLink
                exact
                to="/surveillance"
                activeClassName="active"
                className="navbar__links"
                id="surveillance"
                onClick={click ? handleClick : null}
              >
                {t("navbar.surveillance")}
              </NavLink>
            </li>
          </ul>
          <div className="navbar__icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
