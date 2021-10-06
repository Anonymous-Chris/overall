import React, { useState, useEffect } from "react";
import "../../css/heatmaps.css";
const data = [
  { x: 2, y: 2 },
  { x: 17, y: 2 },
  { x: 32, y: 2 },
  { x: 47, y: 2 },
  { x: 62, y: 2 },
  { x: 77, y: 2 },
  { x: 92, y: 2 },
  { x: 2, y: 17 },
  { x: 17, y: 17 },
  { x: 32, y: 17 },
  { x: 47, y: 17 },
  { x: 62, y: 17 },
  { x: 77, y: 17 },
  { x: 92, y: 17 },
  { x: 2, y: 32 },
  { x: 17, y: 32 },
  { x: 32, y: 32 },
  { x: 47, y: 32 },
  { x: 62, y: 32 },
  { x: 77, y: 32 },
  { x: 92, y: 32 },
  { x: 107, y: 32 },
  { x: 122, y: 32 },
  { x: 137, y: 32 },
  { x: 2, y: 47 },
  { x: 17, y: 47 },
  { x: 32, y: 47 },
  { x: 47, y: 47 },
  { x: 62, y: 47 },
  { x: 77, y: 47 },
  { x: 92, y: 47 },
  { x: 2, y: 62 },
  { x: 17, y: 62 },
  { x: 32, y: 62 },
  { x: 47, y: 62 },
  { x: 62, y: 62 },
  { x: 77, y: 62 },
  { x: 92, y: 62 },
  { x: 2, y: 77 },
  { x: 17, y: 77 },
  { x: 32, y: 77 },
  { x: 47, y: 77 },
  { x: 62, y: 77 },
  { x: 77, y: 77 },
  { x: 92, y: 77 },
];
const Heatmaps = () => {
  let [counter, setcounter] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setcounter((counter) => (counter < 42 ? counter + 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const getBoundingBox = (data) => {
    const eachBox = data.map((item, index) => (
      <g key={index}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <g>
            <rect
              className={` ${counter === index}`}
              x={item.x}
              y={item.y}
              width="15"
              height="15"
              fill="red"
              fillOpacity={`${counter === index ? "0.8" : "0"}`}
            ></rect>
            {counter === index ? (
              <text
                x={index > 9 ? item.x + 2 : item.x + 5}
                y={item.y + 10}
                fontFamily="Verdana"
                fontSize="10"
                fill="blue"
              >
                {index}
              </text>
            ) : (
              ""
            )}
          </g>
        </svg>
      </g>
    ));
    return eachBox;
  };
  return (
    <div className="heatmaps text-center w-100" style={{ height: "88vh" }}>
      {/* {console.log(counter)} */}
      <h1>Heatmaps (Chosen : {counter})</h1>
      <div
        className="col-12 col-sm-12 col-md-12 col-lg-8 m-auto"
        style={{ height: "inherit" }}
      >
        <svg viewBox="0 0 160 100" style={{ height: "100%", width: "100%" }}>
          <image
            style={{ objectFit: "contain" }}
            height="100%"
            width="100%"
            xlinkHref="https://cdn.shopify.com/s/files/1/0977/4104/products/mc-eur-305595-dark_2_2_911c0ac7-8c18-4c0d-a2ef-744eb234758b.png?v=1542948302"
            alt="world"
            // clipPath="url(#mask1)"
          />
          {/* insert bounding boxes */}

          {getBoundingBox(data)}
        </svg>
      </div>
    </div>
  );
};

export default Heatmaps;
