import React, { useState } from "react";
import "../css/responsive2x2.css";
import expand from "../images/expand.png";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

function Responsive2X2() {
  const handle = useFullScreenHandle();
  const handle1 = useFullScreenHandle();
  const handle2 = useFullScreenHandle();
  const handle3 = useFullScreenHandle();

  var handleExpand = (handle) => {
    if (handle.active) {
      return handle.exit;
    } else {
      return handle.enter;
    }
  };
  return (
    <React.Fragment>
      {/* <nav className="navbar navbar-default navbar-inverse">
        <div className="navbar-header d-inline-flex w-100 h-100">
          <img
            className="navbar-brand"
            src=""
            height="42"
            alt=""
            onError={(e) => (e.target.style.display = "none")}
          />
          <p className="text-left navbar-brand main_header">
            Responsive Layout (Bootstrap)
          </p>
        </div>
      </nav> */}
      <div className="main d-inline d-sm-inline d-md-block d-lg-block">
        <div className="row h-50 m-0">
          <div className="col-sm-12 col-md-6 col-lg-6 h-100 p-1 position-relative ">
            <FullScreen handle={handle} className="h-100">
              <img
                src="https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg"
                className=" w-100 h-100 background-color-box"
                alt="Responsive_Picture"
                onError={(e) => (e.target.style.display = "none")}
              ></img>
              <div className="w-100 d-flex position-absolute p-1 bottom-0 start-0 responsive__bar">
                <div className="livebtn  bottom-0 start-0 p-1">live</div>
                <div className="camera p-1">camera 1</div>
                <img
                  className="responsive__expand"
                  alt="expand_button"
                  src={expand}
                  onClick={handleExpand(handle)}
                />
              </div>
            </FullScreen>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 h-100 p-1 position-relative ">
            <FullScreen handle={handle1} className="h-100">
              <img
                src="https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg"
                className=" w-100 h-100 background-color-box"
                alt="Responsive_Picture"
                onError={(e) => (e.target.style.display = "none")}
              ></img>
              <div className="w-100 d-flex position-absolute p-1 bottom-0 start-0 responsive__bar">
                <div className="livebtn  bottom-0 start-0 p-1">live</div>
                <div className="camera p-1">camera 2</div>
                <img
                  className="responsive__expand"
                  alt="expand_button"
                  src={expand}
                  onClick={handleExpand(handle1)}
                />
              </div>
            </FullScreen>
          </div>
        </div>

        <div className="row h-50 m-0">
          <div className="col-sm-12 col-md-6 col-lg-6 h-100 p-1 position-relative ">
            <FullScreen handle={handle2} className="h-100">
              <img
                src="https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg"
                className=" w-100 h-100 background-color-box"
                alt="Responsive_Picture"
                onError={(e) => (e.target.style.display = "none")}
              ></img>
              <div className="w-100 d-flex position-absolute p-1 bottom-0 start-0 responsive__bar">
                <div className="livebtn  bottom-0 start-0 p-1">live</div>
                <div className="camera p-1">camera 3</div>
                <img
                  className="responsive__expand"
                  alt="expand_button"
                  src={expand}
                  onClick={handleExpand(handle2)}
                />
              </div>
            </FullScreen>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 h-100 p-1 position-relative ">
            <FullScreen handle={handle3} className="h-100">
              <img
                src="https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg"
                className=" w-100 h-100 background-color-box"
                alt="Responsive_Picture"
                onError={(e) => (e.target.style.display = "none")}
              ></img>
              <div className="w-100 d-flex position-absolute p-1 bottom-0 start-0 responsive__bar">
                <div className="livebtn  bottom-0 start-0 p-1">live</div>
                <div className="camera p-1">camera 4</div>
                <img
                  className="responsive__expand"
                  alt="expand_button"
                  src={expand}
                  onClick={handleExpand(handle3)}
                />
              </div>
            </FullScreen>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Responsive2X2;
