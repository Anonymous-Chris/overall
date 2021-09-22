import React from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

const Video = () => {
  const handle = useFullScreenHandle();
  const handle1 = useFullScreenHandle();
  // const handle2 = useFullScreenHandle();
  // const handle3 = useFullScreenHandle();

  var handleExpand = (handle) => {
    if (handle.active) {
      return handle.exit;
    } else {
      return handle.enter;
    }
  };
  return (
    <div
      className="video w-100 h-100"
      style={{ border: "1px solid white", background: "#161619" }}
    >
      <div className="row h-100 w-100 m-0 p-1">
        <div
          className="col-12 col-sm-6 col-md-6 col-lg-4 d-flex align-items-center justify-content-center position-relative "
          style={{ border: "1px solid orange" }}
        >
          <FullScreen handle={handle} className="w-100 h-100 d-flex align-items-center justify-content-center">
            <iframe
              className="w-100 h-auto "
              src="https://www.youtube.com/embed/l4nfjPLkRXo"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="w-100 d-flex position-absolute p-1 bottom-0 start-0 responsive__bar">
              <div className="livebtn  bottom-0 start-0 p-1">live</div>
              <div className="camera p-1">camera 1</div>
              <i
                className="fas fa-expand fa-2x"
                onClick={handleExpand(handle)}
              ></i>
            </div>
          </FullScreen>
        </div>
        <div
          className="col-12 col-sm-6 col-md-6 col-lg-4 d-flex align-items-center justify-content-center position-relative "
          style={{ border: "1px solid orange" }}
        >
          <FullScreen handle={handle1} className="w-100 h-100 d-flex align-items-center justify-content-center">
            <img
              className="w-100"
              src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"
              alt="image1"
            />
            <div className="w-100 d-flex position-absolute p-1 bottom-0 start-0 responsive__bar">
              <div className="livebtn  bottom-0 start-0 p-1">live</div>
              <div className="camera p-1">camera 1</div>
              <i
                className="fas fa-expand fa-2x"
                onClick={handleExpand(handle1)}
              ></i>
            </div>
          </FullScreen>
        </div>
        <div
          className="col-12 col-sm-6 col-md-6 col-lg-4 d-flex align-items-center justify-content-center position-relative "
          style={{ border: "1px solid orange" }}
        >
          <FullScreen handle={handle1} className="w-100 h-100 d-flex align-items-center justify-content-center">
            <img
              className="w-100"
              src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"
              alt="image1"
            />
            <div className="w-100 d-flex position-absolute p-1 bottom-0 start-0 responsive__bar">
              <div className="livebtn  bottom-0 start-0 p-1">live</div>
              <div className="camera p-1">camera 1</div>
              <i
                className="fas fa-expand fa-2x"
                onClick={handleExpand(handle1)}
              ></i>
            </div>
          </FullScreen>
        </div>
        {/* </div>
        <div className="row h-50 w-100"> */}
        <div
          className="col-12 col-sm-6 col-md-6 col-lg-4 d-flex align-items-center justify-content-center position-relative"
          style={{ border: "1px solid orange" }}
        >
          <FullScreen handle={handle1} className="w-100 h-100 d-flex align-items-center justify-content-center">
            <img
              className="w-100"
              src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"
              alt="image1"
            />
            <div className="w-100 d-flex position-absolute p-1 bottom-0 start-0 responsive__bar">
              <div className="livebtn  bottom-0 start-0 p-1">live</div>
              <div className="camera p-1">camera 1</div>
              <i
                className="fas fa-expand fa-2x"
                onClick={handleExpand(handle1)}
              ></i>
            </div>
          </FullScreen>
        </div>
        <div
          className="col-12 col-sm-6 col-md-6 col-lg-4 d-flex align-items-center justify-content-center position-relative"
          style={{ border: "1px solid orange" }}
        >
          <FullScreen handle={handle1} className="w-100 h-100 d-flex align-items-center justify-content-center">
            <img
              className="w-100"
              src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"
              alt="image1"
            />
            <div className="w-100 d-flex position-absolute p-1 bottom-0 start-0 responsive__bar">
              <div className="livebtn  bottom-0 start-0 p-1">live</div>
              <div className="camera p-1">camera 1</div>
              <i
                className="fas fa-expand fa-2x"
                onClick={handleExpand(handle1)}
              ></i>
            </div>
          </FullScreen>
        </div>
        <div
          className="col-12 col-sm-6 col-md-6 col-lg-4 d-flex align-items-center justify-content-center position-relative"
          style={{ border: "1px solid orange" }}
        >
          <FullScreen handle={handle1} className="w-100 h-100 d-flex align-items-center justify-content-center">
            <img
              className="w-100"
              src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"
              alt="image1"
            />
            <div className="w-100 d-flex position-absolute p-1 bottom-0 start-0 responsive__bar">
              <div className="livebtn  bottom-0 start-0 p-1">live</div>
              <div className="camera p-1">camera 1</div>
              <i
                className="fas fa-expand fa-2x"
                onClick={handleExpand(handle1)}
              ></i>
            </div>
          </FullScreen>
        </div>
      </div>
    </div>
  );
};

export default Video;
