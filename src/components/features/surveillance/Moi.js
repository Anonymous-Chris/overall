import React from "react";

const Moi = () => {
  const test = [
    {
      metadata: {
        name: "FT Event Log",
      },
      data: [
        {
          machine_name: "FT1C24",
          status: "FPY Below Average",
          time_stamp: "09/20/21 14:35:06",
        },
        {
          machine_name: "FT1C34",
          status: "FPY Below Average",
          time_stamp: "09/20/21 14:35:06",
        },
        {
          machine_name: "FT1U07",
          status: "FPY Below Average",
          time_stamp: "09/20/21 14:35:06",
        },
        {
          machine_name: "FT2U01",
          status: "FPY Below Average",
          time_stamp: "09/20/21 14:35:06",
        },
      ],
    },
  ];

  console.log(test);
  return <div></div>;
};

export default Moi;

// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// import { useStateValue } from '../context-api/StateProvider';

// function StationLog(props) {

//     const [{ live, formattedStartDate, formattedEndDate, formattedLiveEndDate }] = useStateValue();
//     const [stationLog, setstationLog] = useState([])

//     let repairAPI = `${process.env.REACT_APP_BASE_URL}/${props.stationNameMain}/stationevent?startTime=${formattedStartDate}&endTime=${live ? formattedLiveEndDate : formattedEndDate}&workOrder=${props.stationName}`;
//     let commonAPI = `${process.env.REACT_APP_BASE_URL_OTHERS}/${props.stationNameMain}/stationevent?startTime=${formattedStartDate}&endTime=${live ? formattedLiveEndDate : formattedEndDate}&station=${props.stationName}`;

//     useEffect(() => {
//         if (props.stationName.length > 0) {
//             axios
//                 .get(`${props.stationNameMain === "repair" ? repairAPI : commonAPI}`)
//                 .then((res) => {
//                     const _stationLog = res.data.data;
//                     setstationLog(_stationLog);
//                 })
//                 .catch((err) => {
//                     console.log(err);
//                 });
//         }
//     }, [props.stationNameMain, JSON.stringify(props.stationName), live, formattedStartDate, formattedEndDate, formattedLiveEndDate]);

//     // stationLog.map(single => console.log(single.machine_name))

//     return (
//         <React.Fragment>
//             <div className="ftHeader">
//                 <span>Production Line Event Log</span>
//             </div>
//             {stationLog &&
//                 <div className="stationLog_list">
//                     <ul className="list-group">
//                         {stationLog.map((singleLog, index) => (
//                             <div className="card" key={index}>
//                                 <div className="card-body">

//                                     {Object.entries(singleLog).map(([key, val]) =>
//                                         <footer key={key}><span className="footer_Key">{key?.replaceAll("_", " ").toUpperCase()}</span> : <span className={`valueSection ${val === "Pass" ? "goodStatus" : ""}`}>{val?.toUpperCase()}</span></footer>
//                                     )}
//                                 </div>
//                             </div>
//                         ))}
//                     </ul>
//                 </div>
//             }
//         </React.Fragment >
//     )
// }

// export default StationLog;
