import React, { useState, useEffect } from "react";
import fakedata from "../../../fakedata";
const Logs = () => {
  const [cameralogs, setCameralogs] = useState({});
  useEffect(() => {
    // console.log(fakedata[0].cameralogs);
    let data = fakedata[0].cameralogs;
    setCameralogs(data);
  }, []);
  return (
    <div className="logs scrollbar w-100 " style={{ background: "dimgrey" }}>
      {console.log(cameralogs)}
      <span className="logs__title">
        <h4>{cameralogs[0]?.metadata.name}</h4>
      </span>
      {cameralogs && (
        <ul className="list-group ">
          {cameralogs[0]?.data.map((singleLog, index) => (
            <div className="card" key={index} style={{ background: "gray" }}>
              <div className="card-body">
                {Object.entries(singleLog).map(([key, val]) => (
                  <footer key={key}>
                    <span className="footer_Key">
                      {key?.replaceAll("_", " ").toUpperCase()}
                    </span>{" "}
                    :{" "}
                    <span
                      className={`valueSection ${
                        val === "Pass" ? "goodStatus" : ""
                      }`}
                    >
                      {val?.toUpperCase()}
                    </span>
                  </footer>
                ))}
              </div>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Logs;
