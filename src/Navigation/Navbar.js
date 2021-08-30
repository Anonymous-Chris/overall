import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/navbar.css";
// import overall from "../images/overall.png";
import output from "../images/output.png";
import Clock from "../components/features/Clock";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

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
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink
                exact
                to="/features"
                activeClassName="active"
                className="navbar__links"
                onClick={click ? handleClick : null}
              >
                Features
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink
                exact
                to="/functions"
                activeClassName="active"
                className="navbar__links"
                onClick={click ? handleClick : null}
              >
                Functions
              </NavLink>

              {/* keep nesting outside as to avoid <a> <a> descendent error */}
              <div className="navbar__function__content">
                <NavLink exact to="/functions/link1">
                  Link1
                </NavLink>
                <NavLink exact to="/functions/link2">
                  Link2
                </NavLink>
                <NavLink exact to="/functions/link3">
                  Link3
                </NavLink>
              </div>
            </li>
            <li className="navbar__item">
              <NavLink
                exact
                to="/responsive2x2"
                activeClassName="active"
                className="navbar__links"
                onClick={click ? handleClick : null}
              >
                Responsive
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
