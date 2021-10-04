import React, { useState, useEffect } from "react";
import Donut from "../../graphs/chartjs/Donut";
import fakedata from "../../../fakedata";
const OverallDetection = () => {
  const [circledata, setCircleData] = useState({});
  useEffect(() => {
    setCircleData(fakedata[0].overallstationdetection);
  }, []);
  return (
    <div className="overallstationdetection w-100 h-100 row m-0 p-0">
      {console.log(circledata)}
      <div className="col-12 col-sm-6 col-md-6 col-lg-8">
        {" "}
        <div className="w-100 h-100">1</div>
      </div>
      <div className="col-12 col-sm-6 col-md-6 col-lg-2">
        <div className="w-100 h-100">
          <Donut
            title={circledata[0]?.name}
            data={circledata[0]?.data}
            displayLegend={circledata[0]?.displayLegend}
          />
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-6 col-lg-2">
        {" "}
        <div className="w-100 h-100">Total</div>
      </div>
    </div>
  );
};

export default OverallDetection;
