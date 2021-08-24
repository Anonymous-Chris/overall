import React, { useState, useEffect } from "react";
import "../../../css/donut.css";
function Donut(props) {
  const [totalStrokeDashArray, setTotalStrokeDashArray] = useState("");
  const [currentStrokeDashArray, setCurrentStrokeDashArray] = useState("");
  const [currentColor, setCurrentColor] = useState("");
  const [totalColor, setTotalColor] = useState("");

  const checkCurrentColor = (currentRepair) => {
    if (currentRepair < 1) {
      return "rgba(0, 204, 153,0.8)";
    } else if (currentRepair >= 1 && currentRepair < 2) {
      return "rgba(248, 184, 35,0.8)";
    } else if (currentRepair >= 2 && currentRepair < 3) {
      return "rgba(255, 103, 0,0.8)";
    } else if (currentRepair >= 3) {
      return "rgba(255, 0, 0,0.8)";
    }
  };

  const checkTotalColor = (totalRepair) => {
    if (totalRepair < 2) {
      return "rgb(0, 204, 153)";
    } else if (totalRepair >= 2 && totalRepair < 4) {
      return "rgb(248, 184, 35)";
    } else if (totalRepair >= 4 && totalRepair < 6) {
      return "rgb(255, 103, 0)";
    } else if (totalRepair >= 6) {
      return "rgb(255, 0, 0)";
    }
  };
  useEffect(() => {
    var total = props.total;
    var current = props.current;
    console.log(total, current);
    var totalStrokeDashArray = `${total} ${(100 - total).toFixed(1)}`;
    var currentStrokeDashArray = `${current} ${(100 - current).toFixed(1)}`;
    setCurrentColor(checkCurrentColor(current));
    setTotalColor(checkTotalColor(total));
    console.log(totalStrokeDashArray, currentStrokeDashArray);

    setTotalStrokeDashArray(totalStrokeDashArray);
    setCurrentStrokeDashArray(currentStrokeDashArray);
    return () => {};
  }, [props]);

  return (
    <React.Fragment>
      <svg
        className="donut__main_viewbox"
        width="100%"
        height="100%"
        viewBox="0 0 42 42"
      >
        {/* outer circle */}

        <svg width="100%" height="100%" viewBox="0 0 42 42" className="donut">
          <circle
            className="donut-segment"
            key={totalStrokeDashArray}
            cx="21"
            cy="21"
            r="15.91549430918954"
            fill="#232529"
            stroke={totalColor}
            strokeLinecap="round"
            strokeWidth="4.5"
            strokeDasharray={totalStrokeDashArray}
            strokeDashoffset="75"
          ></circle>
        </svg>
        <text x="50%" y="14%" fontSize="6" fill="white">
          {props.total}%
        </text>
        {/* inner circle */}

        <svg
          width="80%"
          height="80%"
          x="4.2"
          y="4.2"
          viewBox="0 0 42 42"
          className="donut"
        >
          <circle
            className="donut-segment"
            key={currentStrokeDashArray}
            cx="21"
            cy="21"
            r="14"
            fill="#3A3E47"
            stroke={currentColor}
            strokeLinecap="round"
            strokeWidth="4.5"
            strokeDasharray={currentStrokeDashArray}
            strokeDashoffset="75"
          ></circle>
          <text x="33%" y="53%" fontSize="7" fill="white">
            {props.current}%
          </text>
        </svg>
      </svg>
    </React.Fragment>
  );
}

export default Donut;
