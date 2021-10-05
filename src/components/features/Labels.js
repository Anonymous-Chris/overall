import React from "react";
import PropTypes from "prop-types";

const Labels = (props) => {
  return (
    <React.Fragment>
      {props.name ? (
        <svg height="16px" className="">
          <circle cx={6} cy={6} r="6" stroke="black" fill={props.color} />
          <text x="17" y="12" fill="white">
            {props.name}
          </text>
        </svg>
      ) : (
        <svg>
          <circle cx={props.x} cy={props.y} r="1" stroke={props.color} fill={props.color} />
        </svg>
      )}
    </React.Fragment>
  );
};

Labels.propTypes = {
  color: PropTypes.string,
};
export default Labels;
