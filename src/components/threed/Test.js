import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
const Test = () => {
  const boxRef = useRef();
  useEffect(() => {
    setInterval(() => {
      gsap.to(boxRef.current, { rotation: "+=90" });
    }, 15000);
  });

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#e77614", scale: 1.2 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#28a92b", scale: 1 });
  };
  return (
    <div
      className="box"
      ref={boxRef}
      style={{
        background: "pink",
        borderRadius: "5px",
        padding: "5px",
        height: "fit-content",
      }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      Hello, Hover me!
    </div>
  );
};

export default Test;
