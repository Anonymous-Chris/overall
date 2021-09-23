import React, { useState, useEffect } from "react";
import { useStateValue } from "../../../context-api/StateProvider";
import SingleVideo from "./SingleVideo";
const VideoLandingPage = () => {
  const [{ cameraStatus }] = useStateValue();
  const [camera_list, setCameraList] = useState([]);

  useEffect(() => {
    try {
      var camera_list = JSON.parse(cameraStatus);
      //   console.log(camera_list, 'here');
      setCameraList(camera_list);
    } catch (e) {
      console.log("error");
    }
  }, [cameraStatus]);

  const returnCameraComponent = (camera_list) => {
    if (camera_list.length > 0) {
      console.log(camera_list);
      var individualComponent = camera_list.map((item) =>
        item.state ? <SingleVideo key={item.name} /> : ""
      );
      return individualComponent;
    }
  };

  return (
    <div className="row h-100 w-100 m-0 p-1">
      {returnCameraComponent(camera_list)}
    </div>
  );
};

export default VideoLandingPage;
