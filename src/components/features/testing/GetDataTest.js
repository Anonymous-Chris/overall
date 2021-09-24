import React from "react";
import { useStateValue } from "../../../context-api/StateProvider";

const GetDataTest = () => {
  const [{ testArray, testObject,todoAppState }] = useStateValue();

//   console.log(testArray);
//   console.log(testObject);
  console.log(todoAppState)
  return (
    <div>
      {
        /* <button onClick={getData}>Get data</button> */
        testArray.length > 0 ? testArray : "nothing"
      }

      {Object.keys(testObject).map((item) => testObject[item])}
    </div>
  );
};

export default GetDataTest;
