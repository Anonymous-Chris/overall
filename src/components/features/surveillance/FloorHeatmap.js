import React from "react";
import "../../../css/floorheatmap.css";
import OverallStationDetection from './OverallStationDetection'
import test from "../../../images/layout.png";
const FloorHeatmap = () => {
  return (
    <div
      className="floorheatmap w-100 h-100 text-white p-0 m-0"
      style={{ background: "black" }}
    >
      <div
        className="h-75 w-100 p-1 mb-1"
        style={{ background: "rgb(22, 22, 25)", border: "1px solid white" }}
      >
        <span>
          <h3>Overall Detection Activity</h3>
        </span>
        <img
          className="w-100 p-1 "
          style={{ background: "rgb(33, 34, 36)" }}
          src={test}
        />{" "}
      </div>
      <div
        className="h-25 pt-1 p-1"
        style={{ background: "rgb(22, 22, 25)", border: "1px solid white" }}
      >
        <span>
          <h3>Overall Station Detection</h3>
        </span>
        <div className="floorheatmap__station__detection w-100 h-100">
          <OverallStationDetection />{" "}
        </div>
      </div>
    </div>
  );
};

export default FloorHeatmap;
