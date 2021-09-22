import React, { useState } from "react";

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
              <div className="d-flex w-50 justify-content-between" key={item}>
                <li className="" key={item}>Camera {item}</li>
                <input
                  key={item}
                  type="checkbox"
                  checked
                  data-toggle="toggle"
                  data-on="<i class='fa fa-play'></i> Play"
                  data-off="<i class='fa fa-pause'></i> Pause"
                ></input>
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
