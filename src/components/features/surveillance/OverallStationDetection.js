import React, { useState, useEffect } from "react";
import Donut from "../../graphs/chartjs/Donut";
import fakedata from "../../../fakedata";
import Card from "../Card";
const OverallDetection = () => {
  const [circledata, setCircleData] = useState({});
  const [total,setTotal]=useState({})
  const [detections,setDetections]=useState({})
  useEffect(() => {
    setCircleData(fakedata[0].overallstationcircledata);
    setTotal(fakedata[0].overallstationtotal)
    setDetections(fakedata[0].overallstationdetections)
  }, []);
  return (
    <div className="overallstationdetection w-100 h-100 row m-0 p-0 text-center">
      {/* {console.log(circledata)} */}
      <div className="col-12 col-sm-6 col-md-6 col-lg-8">
        {" "}
        <div className="w-100 h-100"><Card data={detections}/></div>
      </div>
      <div className="col-12 col-sm-6 col-md-6 col-lg-2">
        <div className="w-100 h-100">
          <Donut
            title={circledata[0]?.metadata.name}
            data={circledata[0]?.data}
            displayLegend={circledata[0]?.displayLegend}
          />
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-6 col-lg-2">
        {" "}
        <div className="w-100 h-100"><Card data={total}/></div>
      </div>
    </div>
  );
};

export default OverallDetection;
