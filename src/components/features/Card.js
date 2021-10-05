import React, { useState, useEffect } from "react";
import Slider from "../functions/Slider";
const Card = (props) => {
  // get orientation too eihter vertical or horizontal
  // console.log(props?.data[0]?.data);
  const [data, setData] = useState({});
  useEffect(() => {
    setData(props?.data);
    Slider()
  }, [props]);
  return (
    <div className="card_dynamic">
        {data && (
          <ul
            className="m-0 p-0 d-flex w-100 camera-list flex-sm-column flex-column flex-md-row flex-lg-row"
            style={{ overflow: "scroll" }}
          >
            {data[0]?.data.map((singleLog, index) => (
              <div
                className="d-flex flex-column justify-content-center align-items-center p-3"
                key={index}
                style={{
                  background: "#212224",
                  marginRight: "10px",
                  marginBottom: '10px'
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
  );
};

export default Card;
