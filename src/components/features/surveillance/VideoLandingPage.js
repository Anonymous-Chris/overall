import React, { useState, useEffect } from "react";
import { useStateValue } from "../../../context-api/StateProvider";
import SingleVideo from "./SingleVideo";
const VideoLandingPage = () => {
  const [{ cameraStatus }] = useStateValue();
  const [camera_list, setCameraList] = useState([]);
  const [activeCameraCount, setActiveCameraCount] = useState(0);
  useEffect(() => {
    try {
      var camera_list = JSON.parse(cameraStatus);
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
    console.log(activeCameraCount)
      var individualComponent = camera_list.map((item) =>
        item.state ? <SingleVideo key={item.name} activeCameraCount={activeCameraCount} name={item.name}/> : ""
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
