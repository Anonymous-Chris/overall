import React from "react";
import "../../css/cube.css";
const Cube = () => {
  return (
    <div className="stage" style={{ width: "120px", height: "120px" }}>
      <div className="cubespinner">
        <div className="face1">1</div>
        <div className="face2">2</div>
        <div className="face3">3</div>
        <div className="face4">4</div>
        <div className="face5">5</div>
        <div className="face6">6</div>
      </div>
    </div>
  );
};

export default Cube;
