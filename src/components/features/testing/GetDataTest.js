import React from "react";
import { useStateValue } from "../../../context-api/StateProvider";

const GetDataTest = () => {
  const [{ testArray }] = useStateValue();

  console.log(testArray);
  return <div>{/* <button onClick={getData}>Get data</button> */
  testArray.length>0?testArray:'nothing'
  }</div>;
};

export default GetDataTest;
