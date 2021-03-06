import React, { useState, useEffect } from "react";
import Donut from "../graphs/svg/Donut";

function NestedDonuts() {
  const [total, setTotal] = useState(10);
  const [current, setCurrent] = useState(5.5);

  useEffect(() => {
    let interval = setInterval(() => {
      setTotal(Math.random() * 100);
      setCurrent(Math.random() * 100);
    }, 15000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="bg-dark" style={{ height: "94.1vh" }}>
      <h1 className="text-light text-center">Nested Donut</h1>
      <div>
        <div className="row m-0">
          <div className="col col-sm col-md col-lg">
            {/* if col is not added in the class then the layout doesnt break */}
            <Donut
              total={total % 1 === 0 ? total : total.toFixed(1)}
              current={current % 1 === 0 ? current : current.toFixed(1)}
            />
          </div>
          <div className="col col-sm col-md col-lg">
            <Donut
              total={
                total % 1 === 0 && total > 5
                  ? total - 5
                  : (total > 2 ? total - 2 : 0).toFixed(1)
              }
              current={
                current % 1 === 0 && current > 10
                  ? current - 10
                  : (current - (current > 2 ? current - 2 : 0)).toFixed(1)
              }
            />
          </div>
          <div className="col col-sm col-md col-lg">
            <Donut total={100} current={100} />
          </div>

          <div className="col col-sm col-md col-lg">
            <Donut total={100} current={100} />
          </div>
        </div>
      </div>
      ;
    </div>
  );
}

export default NestedDonuts;
