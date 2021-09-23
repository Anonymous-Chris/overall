import React, { useState, useEffect } from "react";
import PowerSwitch from "./PowerSwitch";
const Settings = () => {
  //   const [open, setOpen] = useState(false);
  const [open, setOpen] = useState(true);
  const [camera_list, setCameraList] = useState([
    { name: "one", state: false },
    { name: "two", state: false },
    { name: "three", state: false },
    { name: "four", state: false },
    { name: "five", state: false },
    { name: "six", state: false },
  ]);

  useEffect(() => {
    if (!localStorage.getItem("camera_list")) {
      localStorage.setItem("camera_list", JSON.stringify(camera_list));
    } else {
      setCameraList(JSON.parse(localStorage.getItem("camera_list")));
    }
  }, []);

  // status of settings button
  const toggleState = () => {
    console.log("clicked");
    setOpen(!open);
  };

  const updateStateInParent = (name, status) => {
    camera_list.map((item) => {
      item.name === name ? (item["state"] = status) : "";
    });

    localStorage.setItem("camera_list", JSON.stringify(camera_list));
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
              <div
                className="d-flex w-100 justify-content-between align-items-center"
                key={item.name}
              >
                <li className="pb-1" key={`camera` + item.name}>
                  Camera {item.name}
                </li>
                <PowerSwitch
                  key={item.name}
                  item={item}
                  updateStateInParent={updateStateInParent}
                />
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
