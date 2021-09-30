import React, { useState, useEffect } from "react";
import Bar from "../../graphs/chartjs/Bar";
import fakedata from "../../../fakedata";
import { useStateValue } from "../../../context-api/StateProvider";
 import getFilteredData from "../../functions/getFilteredData";

const Detection = () => {
  const [barData, setBarData] = useState({});
  const [{ cameraStatus }] = useStateValue();
  const updateCameraStatus =JSON.stringify(cameraStatus)

  useEffect(() => {
    let data = fakedata[0].peoplecountbytime;

    const returnedData = getFilteredData(data, cameraStatus);
    // console.log(returnedData)
        setBarData(returnedData);
      }, [updateCameraStatus,cameraStatus]);
      return (
    <div
      className="detection w-100"
      style={{ height: "100%", background: "#161619" }}
    >
      <Bar title={barData[0]?.metadata.name} data={barData[0]?.data} labels={barData[0]?.labels}/>
    </div>
  );
};

export default Detection;
