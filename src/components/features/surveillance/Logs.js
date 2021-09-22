import React, { useState, useEffect } from "react";
import fakedata from "../../../fakedata";
import Settings from '../../features/surveillance/Settings'
const Logs = () => {
  const [cameralogs, setCameralogs] = useState({});
  useEffect(() => {
    // console.log(fakedata[0].cameralogs);
    let data = fakedata[0].cameralogs;
    setCameralogs(data);
  }, []);
  return (
    <div className="logs  w-100 h-100 " style={{ background: "#161619" }}>
      <div style={{ height: "10%" }} className="d-flex align-items-center justify-content-between">
        <span className="logs__title">
          <h4>
            {cameralogs[0]?.metadata.name}
          </h4>
        </span>
        <Settings/>
      </div>
      <div className="scrollbar" style={{ height: "87%" }}>
        {" "}
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
