import React, { useState, useEffect } from "react";
import Donut from "../../graphs/chartjs/Donut";
import fakedata from "../../../fakedata";
import { useStateValue } from "../../../context-api/StateProvider";
import getFilteredData from "../../functions/getFilteredData";
const OverallPeople = () => {
  const [peopleDetected, setPeopleDetected] = useState({});
  const [{ cameraStatus }] = useStateValue();

  useEffect(() => {
    let data = fakedata[0].overallpeoplecount;
    const returnedData = getFilteredData(data, cameraStatus);
    setPeopleDetected(returnedData);
  }, [JSON.stringify(cameraStatus)]);

  return (
    <div
      className="overallpeople pt-2 h-100"
      style={{ background: "rgb(22, 22, 25)" }}
    >
      {/* <h4>{peopleDetected[0]?.metadata.name}</h4> */}
      <div
        className="d-flex align-items-center justify-content-center w-100"
        style={{ height: "87%" }}
      >
        <Donut
          title={peopleDetected[0]?.metadata.name}
          data={peopleDetected[0]?.data}
        />
      </div>
    </div>
  );
};

export default OverallPeople;
