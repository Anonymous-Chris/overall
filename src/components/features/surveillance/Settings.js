import React, { useState, useEffect } from "react";
import PowerSwitch from "./PowerSwitch";
import { useStateValue } from "../../../context-api/StateProvider";
const Settings = () => {
  //   const [open, setOpen] = useState(false);
  const [, dispatch] = useStateValue();

  const [open, setOpen] = useState(false);
  //  send either video or an image source
  const [camera_list, setCameraList] = useState([
    {
      name: "one",
      state: true,
      videoSource: "https://www.youtube.com/embed/EgeqKqwebZI",
    },
    {
      name: "two",
      state: true,
      videoSource:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    },
    {
      name: "three",
      state: true,
      videoSource:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    },
    {
      name: "four",
      state: true,
      videoSource:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    },
    {
      name: "five",
      state: true,
      videoSource:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    },
    {
      name: "six",
      state: true,
      videoSource:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    },
  ]);

  useEffect(() => {
    // localStorage.clear('camera_list')
    // if (!localStorage.getItem("camera_list")) {
    //   localStorage.setItem("camera_list", JSON.stringify(camera_list));
    //   dispatch({
    //     type: "UPDATE_CAMERA_STATUS",
    //     cameraStatus: camera_list,
    //   });
    // } else {
    //   var _cameraList = JSON.parse(localStorage.getItem("camera_list"));
    //   console.log(_cameraList);
    //   setCameraList(_cameraList);
    //   dispatch({
    //     type: "UPDATE_CAMERA_STATUS",
    //     cameraStatus: _cameraList,
    //   });
    // }

    if (localStorage.getItem("camera_list")) {
      setCameraList(JSON.parse(localStorage.getItem("camera_list")));
    }
  }, []);

  useEffect(() => {
    dispatch({
      type: "UPDATE_CAMERA_STATUS",
      cameraStatus: camera_list,
    });
  }, [camera_list, dispatch]);

  // status of settings button
  const toggleState = () => {
    console.log("clicked");
    setOpen(!open);
  };

  const updateStateInParent = (name, status) => {
    camera_list.map((item) =>
      item.name === name ? (item["state"] = status) : ""
    );
    // console.log(camera_list);
    localStorage.setItem("camera_list", JSON.stringify(camera_list));
    dispatch({
      type: "UPDATE_CAMERA_STATUS",
      cameraStatus: camera_list,
    });
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
            {/* {console.log(camera_list)}
            {console.log("here")} */}
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
    </React.Fragment>
  );
};

export default Settings;
