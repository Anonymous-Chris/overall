import React from "react";
import "../css/surveillance.css";
import Logs from "../components/features/surveillance/Logs";
import Heatmaps from "../components/features/surveillance/Heatmaps";
import OverallPeople from "../components/features/surveillance/OverallPeople";
import Video from "../components/features/surveillance/Video";
import Detection from "../components/features/surveillance/Detection";

const Surveillance = () => {
  return (
    <div className="surveillance row m-0 p-0">
      <div className="col-12 col-sm-12 col-md-3 col-lg-3 m-0 p-2 surveillance__column__left">
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
      <div className="col-12 col-sm-12 col-md-9 col-lg-9 m-0 p-2 surveillance__column__right">
        <div className="surveillance__video">
          <Video />
        </div>
        <div className="surveillance__detection" style={{ height: "34%" }}>
          <Detection />
        </div>
      </div>
    </div>
  );
};

export default Surveillance;
