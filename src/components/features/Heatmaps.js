import React, { useState } from "react";
import "../../css/heatmaps.css";
const Heatmaps = () => {
  const [chosenValue] = useState(0);
  return (
    <div className="heatmaps text-center w-100" style={{ height: "88vh" }}>
      <h1>Heatmaps (Chosen : {chosenValue})</h1>
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
        </svg>
      </div>
    </div>
  );
};

export default Heatmaps;
