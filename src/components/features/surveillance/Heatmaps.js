import React,{useState, useEffect} from "react";
import fakedata from "../../../fakedata";
const Heatmaps = () => {

  const [data,setData]=useState({})
  useEffect(()=>{
    setData(fakedata[0].surveillanceoverall)

  },[])
  return (
    <div className="heatmaps h-100" style={{ background: "#161619" }}>
      <span>
        <h4>{data[0]?.metadata.name}</h4>
      </span>
      <div className=" scrollbar" style={{height: '84%'}}>
        {data && (
          <ul className="list-group ">
            {data[0]?.data.map((singleLog, index) => (
              <div
                className="card mb-2"
                key={index}
                style={{ background: "#212224" }}
              >
                <div className="card-body">
                  {Object.entries(singleLog).map(([key, val]) => (
                    <footer key={key}>
                      <span className="footer_Key">
                        {key?.replaceAll("_", " ").toUpperCase()}
                      </span>{" "}
                      :{" "}
           
                      <span>{typeof val==='string'?val?.toUpperCase():val}</span>
                    </footer>
                  ))}
                </div>
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Heatmaps;
