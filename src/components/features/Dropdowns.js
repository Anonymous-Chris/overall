import React, { useState, useEffect } from "react";
import getData from "../../api/getData";
import CheckTypes from "../functions/CheckTypes";
import fakedata from "../../fakedata";
function Dropdowns() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    let url = `${process.env.REACT_APP_BASE_URL}/dropdowns`;
    getData(url).then((res) => {
      if (res && res[0].data.length > 0) {
        setData(res[0].data);
        setName(res[0].metadata.name);
      }
    });
  }, []);
  return (
    <div className="dropdowns w-100 h-100">
      <h1 className="dropdowns__title w-100 text-center">
        {name !== "" ? name : ""}
      </h1>
      <div className="dropdowns__items row">
        {data.length > 0
          ? data.map((item, index) => (
              <div
                key={index}
                className=" col-lg-3 col-md-3 col-sm-6 col-12 pb-2"
              >
                <b>
                  <i>{item.name}</i>
                </b>
                <CheckTypes item={item} />
              </div>
            ))
          : //use fake data if api doesnt work
            fakedata[0].dropdowns[0].data.map((item, index) => (
              <div
                key={index}
                className=" col-lg-3 col-md-3 col-sm-6 col-12 pb-2"
              >
                <b>
                  <i>{item.name}</i>
                </b>
                <CheckTypes item={item} />
              </div>
            ))}
      </div>
      <span>
        Dynamic dropdowns getting values directly from an api(Uses fake json
        format if api is not hit).
      </span>
    </div>
  );
}

export default Dropdowns;
