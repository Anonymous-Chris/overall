import React, { useState } from "react";

const InputText = (props) => {
  const [inputValue, setInputValue] = useState("");

  var changeInputValue = (e, name) => {
    setInputValue(e.target.value);
  };
  return (
    <div
      style={{
        marginTop: "",
        display: "flex",
        height: "4vh",
        fontSize: "1.3rem",
      }}
      className=""
    >
      <label className="">{props.name}</label>
      <input
        type="text"
        placeholder={props.name}
        id={props.name}
        style={{
          background: "inherit",
          border: "1px solid black",
          color: "grey",
          paddingLeft: "5px",
          marginLeft: "5px",
        }}
        value={inputValue}
        onChange={(e) => changeInputValue(e, "name")}
      ></input>
    </div>
  );
};

export default InputText;
