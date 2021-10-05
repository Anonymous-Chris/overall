import React, { useState, useEffect } from "react";
import "../../../css/floorheatmap.css";
import OverallStationDetection from './OverallStationDetection'
import test from "../../../images/layout.png";
import Labels from "../Labels";
import fakedata from "../../../fakedata";
const FloorHeatmap = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    setData(fakedata[0]?.overallpositions);
  }, []);

  const returnPositions = (eachData) =>
    eachData.map((item,index) => {
      const position = item[Object.keys(item)][0].position;
      const color = item[Object.keys(item)][0].color;
      const eachPos = position.map((eachPosition, innerIndex) => (
         <Labels key={index+innerIndex} x={eachPosition.x} y={eachPosition.y} color={color} />
      ));
      return eachPos;
    });
  return (
    <div
      className="floorheatmap w-100 h-100 text-white p-0 m-0"
      style={{ background: "black" }}
    >
      <div
        className="h-75 w-100 p-1 mb-1 position-relative"
        style={{ background: "rgb(22, 22, 25)", border: "1px solid white" }}
      >
        <span>
          <h3>Overall Detection Activity</h3>
        </span>

        <svg
          className=""
          viewBox="0 0 300 100"
          style={{ height: "100%", overflow: "visible" }}
        >
          <image xlinkHref={test} width="100%" clipPath="url(#mask1)" />
          {/* {data?.map(item=>returnPositions(item))} */}
          {data.length > 0 ? returnPositions(data) : ""}
        </svg>

        <div
          className="floorheatmap__labels position-absolute text-center start-25 bottom-0 p-1 mb-1"
          style={{
            border: "5px solid gray",
            background: "#13181b",
            borderRadius: "5px",
            height: "10%",
            width: "50%",
            fontSize: "1rem",
          }}
        >
          <h5 className="mb-0">Heat Map Key</h5>
          <ul className="d-flex p-0 mb-0 w-100 ">
            <li>
              <Labels color={"blue"} name={"Floor Operator"} />{" "}
            </li>
            <li>
              <Labels color={"green"} name={"Floor Manager"} />{" "}
            </li>
            <li>
              <Labels color={"red"} name={"Anonymous"} />{" "}
            </li>
          </ul>
        </div>
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
