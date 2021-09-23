import React, {useState, useEffect } from "react";
import { useStateValue } from "../../../context-api/StateProvider";

const VideoLandingPage = () => {
  const [{ cameraStatus }] = useStateValue();
  const [camera_list,setCameraList] =useState([])
  useEffect(() => {
    try {
      var camera_list = JSON.parse(cameraStatus);
    //   console.log(camera_list, 'here');
      setCameraList(camera_list)
    } catch (e) {
      console.log("error");
    }
  }, [cameraStatus]);
  return <div>video landing page
{console.log(camera_list,'here')}  </div>;
};

export default VideoLandingPage;
