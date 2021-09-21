import React from "react";

const Video = () => {
  return (
    <div
      className="video w-100 h-100"
      style={{ border: "1px solid white", background: "#161619" }}
    >
        <div className="row h-100 w-100">
          <div className="col-12 col-sm-6 col-md-6 col-lg-4">1</div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4">2</div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4">3</div>
        {/* </div>
        <div className="row h-50 w-100"> */}
          <div className="col-12 col-sm-6 col-md-6 col-lg-4">1</div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4">2</div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4">3</div>
        </div>
    </div>
  );
};

export default Video;
