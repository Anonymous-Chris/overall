import React from "react";
// import Cube from "./animations/Cube";
// import Test from "./threed/Test";
import GtbGltfLoader from "./threed/GlbGltfLoader";
const ThreeD = () => {
  return (
    <>
      <div className="d-flex mb-2 h-50">
        <div className="d-flex">
          {/* <Cube />
          <Test /> */}
        </div>

        {/* Graphics Language Binary(glb) 0r Graphics Language Translation format loader*/}
        <div>
          <GtbGltfLoader path={"untitled.glb"} scale={1}/>
        </div>
      </div>
      <div className="d-flex mt-2 h-50">
        <GtbGltfLoader path={"spongebob.glb"} scale={1}/>
      </div>
    </>
  );
};

export default ThreeD;
