import React, { useState } from "react";
import PowerSwitch from "./PowerSwitch";
const Settings = () => {
  //   const [open, setOpen] = useState(false);
  const [open, setOpen] = useState(true);
  const camera_list = [1, 2, 3, 4, 5, 6];
  const toggleState = () => {
    console.log("clicked");
    setOpen(!open);
  };
  return (
    <React.Fragment>
      <i className="fas fa-cog" onClick={toggleState}></i>

      {open && (
        <div
          className="position-absolute p-2 d-flex flex-column align-items-center"
          style={{
            top: "20px",
            left: "-300px",
            width: "300px",
            height: "250px",
            background: "rgb(33, 34, 36)",
            zIndex: 1,
            overflow: "scroll",
          }}
        >
          <h4>Camera</h4>
          <ul
            className="m-0 p-2 w-100 d-flex flex-column align-items-center"
            style={{ listStyleType: "none" }}
          >
            {camera_list.map((item) => (
              <div className="d-flex w-100 justify-content-between align-items-center" key={item}>
                <li className="pb-1" key={`camera` +item}>Camera {item}</li>
                <PowerSwitch key={item}/>
              </div>
            ))}
          </ul>
        </div>
      )}

      {console.log(open)}
    </React.Fragment>
  );
};

export default Settings;
