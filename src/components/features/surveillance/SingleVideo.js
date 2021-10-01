import React from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import '../../../css/responsive2x2.css'
const SingleVideo = (props) => {
  // console.log(props);
  const handle = useFullScreenHandle();
  var handleExpand = (handle) => {
    if (handle.active) {
      return handle.exit;
    } else {
      return handle.enter;
    }
  };

  const addVideoorImage = (videoSource) =>
    videoSource?.match(/\.(jpeg|jpg|gif|png)$/) != null ? (
      <img className="w-100 h-auto " src={videoSource} alt="image1" style={{objectFit: 'contain', maxHeight: '100%', maxWidth: '100%'}}/>
    ) : (
      <iframe
        className="w-100 h-auto "
        src={videoSource}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    );
  const getComponent = (cameraName, videoSource) => (
    <FullScreen
      handle={handle}
      className="w-100 h-100 d-flex align-items-center justify-content-center"
    >
      {/**/}
      {addVideoorImage(videoSource)}
      <div className="w-100 d-flex position-absolute p-1 bottom-0 start-0 responsive__bar">
        <div className="livebtn  bottom-0 start-0 p-1">live</div>
        <div className="camera p-1">{cameraName}</div>
        <i className="fas fa-expand fa-2x" onClick={handleExpand(handle)}></i>
      </div>
    </FullScreen>
  );
  return props.activeCameraCount === 1 ? (
    <div
      className="singlevideo col-12 col-sm-12 col-md-12 col-lg-12 d-flex align-items-center justify-content-center position-relative "
      style={{ border: "1px solid orange" }}
    >
      {getComponent(props.name, props.videoSource)}
    </div>
  ) : props.activeCameraCount === 2 ? (
    <div
      className="singlevideo col-12 col-sm-6 col-md-6 col-lg-6 d-flex align-items-center justify-content-center position-relative "
      style={{ border: "1px solid orange" }}
    >
      {getComponent(props.name, props.videoSource)}
    </div>
  ) : (
    <div
      className="singlevideo col-12 col-sm-6 col-md-6 col-lg-4 d-flex align-items-center justify-content-center position-relative "
      style={{ border: "1px solid orange" }}
    >
      {getComponent(props.name, props.videoSource)}
    </div>
  );
};

export default SingleVideo;
