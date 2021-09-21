import React, { useState, useEffect } from "react";
import fakedata from "../../../fakedata";
import Slider from '../../functions/Slider'
const Heatmaps = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    setData(fakedata[0].surveillanceoverall);
    Slider()

  }, []);


  return (
    <div className="heatmaps h-100 pt-2 " style={{ background: "#161619" }}>
      <span>
        <h4>{data[0]?.metadata.name}</h4>
      </span>
      <div className="scrollbar w-100 d-flex align-items-center" style={{ height: "84%" }}>
        {data && (
          <ul
            className="m-0 p-0 d-flex w-100 h-75 camera-list"
            style={{ overflow: "scroll" }}
          >
            {data[0]?.data.map((singleLog, index) => (
              <div
                className="d-flex flex-column justify-content-center align-items-center"
                key={index}
                style={{
                  background: "#212224",
                  minWidth: "50%",
                  minHeight: "50%",
                  marginRight: "10px",
                }}
              >
                {Object.entries(singleLog).map(([key, val]) => (
                  <footer key={key}>
                    <span className="">
                      {key?.replaceAll("_", " ").toUpperCase()}
                    </span>{" "}
                    :{" "}
                    <span>
                      {typeof val === "string" ? val?.toUpperCase() : val}
                    </span>
                  </footer>
                ))}
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Heatmaps;
