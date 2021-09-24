import React from "react";
import { useStateValue } from "../../../context-api/StateProvider";

const CheckContextApI = () => {
  const [, dispatch] = useStateValue();
  const testArray = [1, 2, 3, 4, 5, 6, 7, 8];
  const testObject = {
    name: "chris",
    age: 25,
    work: "foxoconn",
  };
  // objects and array of objects
  const todoAppState = {
    todos: [
      { id: 0, text: "Learn React", completed: true },
      { id: 1, text: "Learn Redux", completed: false, color: "purple" },
      { id: 2, text: "Build something fun!", completed: false, color: "blue" },
    ],
    filters: {
      status: "Active",
      colors: ["red", "blue"],
    },
  };

  const sendData = () => {
    dispatch({
      type: "UPDATE_TEST_ARRAY",
      testArray: testArray,
    });

    dispatch({
      type: "UPDATE_TEST_OBJECT",
      testObject: testObject,
    });
  };

  const sendArrayObj = ()=>{
    dispatch({
        type: "UPDATE_TEST_ARRAY_AND_OBJECT",
        todoAppState: todoAppState,
        payload:2
      });
  }
  return (
    <div>
      <button onClick={sendData}>Send data</button>
      <button onClick={sendArrayObj}>Array and object </button>
    </div>
  );
};

export default CheckContextApI;
