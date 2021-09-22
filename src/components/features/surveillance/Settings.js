import React, { useState } from "react";

const Settings = () => {
//   const [open, setOpen] = useState(false);
const [open, setOpen] = useState(true);

  const toggleState = () => {
    console.log("clicked");
    setOpen(!open);
  };
  return (
    <React.Fragment>
      <i className="fas fa-cog" onClick={toggleState}></i>

      {open && (
        <div
          className="position-absolute"
          style={{
            top: "20px",
            left: "-200px",
            width: "200px",
            height: "200px",
            background: "rgb(33, 34, 36)",
            zIndex: 1
          }}
        >
          yo 
        </div>
      )}

      {console.log(open)}
    </React.Fragment>
  );
};

export default Settings;
