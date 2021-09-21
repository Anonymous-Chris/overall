import React from "react";

const Video = () => {
  return (
    <div
      className="video w-100 h-100"
      style={{ border: "1px solid white", background: "#161619" }}
    >
      <div className="row h-100 w-100 m-0 p-1">
        <div className="col-12 col-sm-6 col-md-6 col-lg-4 d-flex align-items-center justify-content-center" style={{border: '1px solid orange'}}>
        <iframe className="w-100 h-auto" src="https://www.youtube.com/embed/l4nfjPLkRXo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-4 d-flex align-items-center justify-content-center" style={{border: '1px solid orange'}}>
          <img
            className="w-100"
            src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"
            alt="image1"
          />
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-4 d-flex align-items-center justify-content-center" style={{border: '1px solid orange'}}>
          <img
            className="w-100"
            src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"
            alt="image1"
          />
        </div>
        {/* </div>
        <div className="row h-50 w-100"> */}
        <div className="col-12 col-sm-6 col-md-6 col-lg-4 d-flex align-items-center justify-content-center" style={{border: '1px solid orange'}}>
          <img
            className="w-100"
            src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"
            alt="image1"
          />
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-4 d-flex align-items-center justify-content-center" style={{border: '1px solid orange'}}>
          <img
            className="w-100"
            src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"
            alt="image1"
          />
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-4 d-flex align-items-center justify-content-center" style={{border: '1px solid orange'}}>
          <img
            className="w-100"
            src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"
            alt="image1"
          />
        </div>
      </div>
    </div>
  );
};

export default Video;
