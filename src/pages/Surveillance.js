import React,{Suspense} from "react";
import "../css/surveillance.css";
import Logs from "../components/features/surveillance/Logs";
import Heatmaps from "../components/features/surveillance/Heatmaps";
import OverallPeople from "../components/features/surveillance/OverallPeople";
// import Video from "../components/features/surveillance/Video";
// import VideoLandingPage from "../components/features/surveillance/VideoLandingPage";
const VideoLandingPage = React.lazy(() =>
  import("../components/features/surveillance/VideoLandingPage")
);
import Detection from "../components/features/surveillance/Detection";

const Surveillance = () => {
  return (
    <div className="surveillance row m-0 p-0">
      <div className="col-12 col-sm-12 col-md-4 col-lg-3 m-0 p-2 surveillance__column__left">
        <div className="surveillance__logs w-100 mb-2">
          <Logs />
        </div>
        <div className="surveillance__heatmaps w-100 mb-2">
          <Heatmaps />
        </div>
        <div className="surveillance__overallpeople w-100 mb-2">
          <OverallPeople />
        </div>
      </div>
      <div className="col-12 col-sm-12 col-md-8 col-lg-9 m-0 p-2 surveillance__column__right">
        <div className="surveillance__video mb-3">
          {/* <Video /> */}
          <Suspense fallback={<div>Loading...</div>}>
            <VideoLandingPage />
          </Suspense>
        </div>
        <div className="surveillance__detection" style={{ height: "33%" }}>
          <Detection />
        </div>
      </div>
    </div>
  );
};

export default Surveillance;
