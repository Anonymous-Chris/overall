import React, { useState, useEffect } from "react";

const CustomDropdown = (props) => {
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    setSelectedValue(props.defaultValue);
  }, [props]);
  var changeSelectedValue = (e) => {
    setSelectedValue(e.target.value);
  };
  return (
    <div style={{ height: "4vh" }} className="w-100">
      {props.data !== undefined && props.data.length > 0 && (
        <div className="pr-1 w-100 h-100">
          <select
            value={selectedValue}
            className="w-100 h-100"
            onChange={changeSelectedValue}
          >
            {props.data.map((item, index) => (
              <option key={index} value={item}>
                {typeof item === "string"
                  ? item
                      .replace("_", " ")
                      .split(" ")
                      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                      .join(" ")
                  : item}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
