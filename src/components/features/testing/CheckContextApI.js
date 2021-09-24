import React from "react";
import { useStateValue } from "../../../context-api/StateProvider";

const CheckContextApI = () => {
  const [, dispatch] = useStateValue();
  const testArray = [1, 2, 3, 4, 5, 6, 7, 8];
  const sendData = () => {
    dispatch({
      type: "UPDATE_TEST",
      testArray: testArray,
    });
  };
  return (
    <div>
      <button onClick={sendData}>Send data</button>
    </div>
  );
};

export default CheckContextApI;
