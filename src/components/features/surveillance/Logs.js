import React, { useState, useEffect } from "react";
import fakedata from "../../../fakedata";
import { useStateValue } from "../../../context-api/StateProvider";

const Logs = () => {
  const [cameralogs, setCameralogs] = useState({});
  const [{ cameraStatus }] = useStateValue();

  useEffect(() => {
    let data = fakedata[0].cameralogs;

    //  create a copy of an object as it points to the
    //same reference if a new object is created
    var tempMyObj = JSON.parse(JSON.stringify(data));

    var data1 = data[0].data;
    // filter out camera
    const cameraStatusFalse = cameraStatus.filter(
      (item) => item.state === false
    );

    // filter out result from both arrays
    let result = data1.filter(
      (o1) => !cameraStatusFalse.some((o2) => o1.camera_id === o2.name)
    );

    // insert the data value in original object
    tempMyObj[0]["data"] = result;

    setCameralogs(tempMyObj);
  }, [JSON.stringify(cameraStatus)]);

  return (
    <div className="logs  w-100 h-100 " style={{ background: "#161619" }}>
      <div
        style={{ height: "10%" }}
        className="d-flex align-items-center justify-content-between"
      >
        <span className="logs__title">
          <h4>{cameralogs[0]?.metadata.name}</h4>
        </span>
      </div>
      <div
        className="scrollbar cancelDraggable"
        style={{ height: "87%", zIndex: -1 }}
      >
        {/* {console.log(cameralogs)} */}
        {cameralogs && (
          <ul className="list-group ">
            {cameralogs[0]?.data.map((singleLog, index) => (
              <div
                className="card mb-2"
                key={index}
                style={{ background: "#212224" }}
              >
                <div className="card-body">
                  {Object.entries(singleLog).map(([key, val]) => (
                    <footer key={key}>
                      <span className="footer_Key">
                        {key?.replaceAll("_", " ").toUpperCase()}
                      </span>{" "}
                      :{" "}
                      {key === "people_alert" && val > 2 ? (
                        <i
                          className="fal fa-exclamation-triangle"
                          style={{ color: "red" }}
                        ></i>
                      ) : (
                        ""
                      )}{" "}
                      <span>{val?.toUpperCase()}</span>
                    </footer>
                  ))}
                </div>
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Logs;
