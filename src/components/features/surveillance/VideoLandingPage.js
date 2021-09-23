import React, { useEffect } from "react";
import { useStateValue } from "../../../context-api/StateProvider";

const VideoLandingPage = () => {
  const [{ cameraStatus }] = useStateValue();
  useEffect(() => {
    try {
      var camera_list = JSON.parse(cameraStatus);
      console.log(camera_list[0].name);
    } catch (e) {
      console.log("e");
    }
  }, [cameraStatus]);
  return <div>video landing page</div>;
};

export default VideoLandingPage;
