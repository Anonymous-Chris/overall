import React from "react";
// import { FullScreen, useFullScreenHandle } from "react-full-screen";

const SingleVideo = (props) => {
  console.log(props.activeCameraCount);
  return props.activeCameraCount === 1 ? (
    <div
      className="singlevideo col-12 col-sm-12 col-md-12 col-lg-12 d-flex align-items-center justify-content-center position-relative "
      style={{ border: "1px solid orange" }}
    >
      singlevideo
    </div>
  ) : props.activeCameraCount === 2 ? (
    <div
      className="singlevideo col-12 col-sm-6 col-md-6 col-lg-6 d-flex align-items-center justify-content-center position-relative "
      style={{ border: "1px solid orange" }}
    >
      singlevideo
    </div>
  ) : (
    <div
      className="singlevideo col-12 col-sm-6 col-md-6 col-lg-4 d-flex align-items-center justify-content-center position-relative "
      style={{ border: "1px solid orange" }}
    >
      singlevideo
    </div>
  );
};

export default SingleVideo;
