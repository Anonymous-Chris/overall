import React from "react";
import NestedDonuts from "./NestedDonuts";
import CommonTable from "../CommonTable";
import Dropdowns from "./Dropdowns";
import Flickity from "react-flickity-component";
import "flickity/dist/flickity.min.css";
import "flickity-as-nav-for";
import "../../css/flickity.css";
const FlickityFn = () => {
  const flickityOptions = {
    //wrapAround: true,
    pageDots: false,
    autoPlay: 15000,
    draggable: false,
  };

  const flickityOptions1 = {
    //wrapAround: true,
    asNavFor: ".carousel-main",
    //contain: true,
    pageDots: false,
    draggable: false,
  };
  return (
    <div style={{ height: "43vh" }} className="w-100 h-100">
      <Flickity
        className="carousel carousel-nav"
        // elementType={"section"}
        options={flickityOptions1}
        // disableImagesLoaded={false}
      >
        <div className="carousel-cell">Tab 1</div>
        <div className="carousel-cell">Tab 2</div>
        <div className="carousel-cell">Tab 3</div>
      </Flickity>

      <Flickity
        className="carousel carousel-main"
        //elementType={"section"}
        options={flickityOptions}
        disableImagesLoaded={false}
      >
        <div className="carousel-cell">
          <CommonTable />
        </div>
        <div className="carousel-cell">
          <NestedDonuts />
        </div>
        <div className="carousel-cell">
          <Dropdowns />
        </div>
      </Flickity>
    </div>
  );
};

export default FlickityFn;
