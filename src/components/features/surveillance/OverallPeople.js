import React, { useState, useEffect } from "react";
import Donut from "../../graphs/chartjs/Donut";
import fakedata from "../../../fakedata";
const OverallPeople = () => {
  const [peopleDetected, setPeopleDetected] = useState({});
  useEffect(() => {
    // console.log(fakedata[0].peopleDetected);
    let data = fakedata[0].overallpeoplecount;
    setPeopleDetected(data);
  }, []);
  return (
    <div className="overallpeople pt-2 h-100">
      {console.log(peopleDetected)}
      <h4>{peopleDetected[0]?.metadata.name}</h4>
      <div className='d-flex align-items-center justify-content-center w-100' style={{height: '87%'}}> 
      <Donut />
      </div>
    </div>
  );
};

export default OverallPeople;
