import React, { useState, useEffect } from "react";
import tableapi from "../api/tableapi";
import DynamicTable from "./features/DynamicTable";
import Pathname from "./functions/Pathname";
import AutoScroll from "./features/Autoscroll";
function CommonTable() {
  const [tableData, setTableData] = useState({});

  useEffect(() => {
    let url = `http://127.0.0.1:1880/dynamictable`;
    tableapi(url).then((res) => {
      if (res && res[0].data.length > 0) {
        setTableData(res[0]);
        console.log(res);

        // only have autoscroll for autoscroll page table
        if (Pathname().includes("autoscroll")) {
          AutoScroll(`autoscroll1`, res[0].data.length);
        }
      }
    });
  }, []);
  return (
    <div className={`commontable`}>
      <DynamicTable tableData={tableData} />
    </div>
  );
}

export default CommonTable;