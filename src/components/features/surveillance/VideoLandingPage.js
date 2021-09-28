import React, { useState, useEffect } from "react";
import { useStateValue } from "../../../context-api/StateProvider";
import SingleVideo from "./SingleVideo";
import Settings from "./Settings";

const VideoLandingPage = () => {
  const [{ cameraStatus }] = useStateValue();
  const [camera_list, setCameraList] = useState([]);
  const [activeCameraCount, setActiveCameraCount] = useState(0);
  useEffect(() => {
    try {
      var camera_list = cameraStatus;
      // find the active camera count
      var cameraCount = camera_list.filter(
        ({ state }) => state === true
      ).length;
      setActiveCameraCount(cameraCount);

      setCameraList(camera_list);
    } catch (e) {
      console.log("error");
    }
  }, [cameraStatus]);

  const returnCameraComponent = (camera_list) => {
    if (camera_list.length > 0) {
      // console.log(activeCameraCount)
      var individualComponent = camera_list.map((item) =>
        item.state ? (
          <SingleVideo
            key={item.name}
            activeCameraCount={activeCameraCount}
            name={item.name}
            videoSource={item.videoSource}
          />
        ) : (
          ""
        )
      );
      return individualComponent;
    }
  };

  const resetLayout = () => {
    console.log("pressed reset layout");
    // go back to default layout
    localStorage.removeItem("rgl-8");
    // refresh after removing the local stored object
    window.location.reload(false);
  };
  return (
    <div className=" h-100 w-100 m-0 p-1 postion-relative">
      <div
        className="position-absolute d-flex align-items-center justify-content-center"
        style={{ right: "10px", zIndex: 1 }}
      >
        <div onClick={resetLayout}>
          <img
            src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/restart-icon-18-256.png"
            style={{
              width: "15px",
              height: "15px",
              marginRight: "5px",
            }}
          />
        </div>
        <Settings />
      </div>
      <div className="row h-100 w-100 m-0">
        {returnCameraComponent(camera_list)}
      </div>
    </div>
  );
};

export default VideoLandingPage;
