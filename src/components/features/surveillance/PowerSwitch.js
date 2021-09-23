import React,{useState,useEffect} from "react";
import "../../../css/powerswitch.css";
const PowerSwitch = (props) => {
  // console.log(props.item);
  const [tempState,setTempState]=useState(false)
  useEffect(()=>{
    setTempState(props.item.state)
  },[])
  const updateStatus = () => {
    setTempState(!props.item.state)
    props.updateStateInParent(props.item.name, !props.item.state);
  };
  return (
    <React.Fragment>
      <div className="power-switch" onClick={updateStatus}>
        {props.item.state && tempState!==undefined ? (
          <input type="checkbox" defaultChecked />
        ) : (
          <input type="checkbox" />
        )}
        <div className="button">
          <svg className="power-off">
            <use xlinkHref="#line" className="line" />
            <use xlinkHref="#circle" className="circle" />
          </svg>
          <svg className="power-on">
            <use xlinkHref="#line" className="line" />
            <use xlinkHref="#circle" className="circle" />
          </svg>
        </div>
      </div>
      {/* SVG */}
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          id="line"
        >
          <line x1={50} y1={30} x2={50} y2={50} />
        </symbol>
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          id="circle"
        >
          <circle cx={70} cy={60} r={20} />
        </symbol>
      </svg>
    </React.Fragment>
  );
};

export default PowerSwitch;
