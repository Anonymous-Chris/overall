import React, { useState, useEffect } from "react";
import tableapi from "../api/tableapi";
import DynamicTable from "./features/DynamicTable";
function CommonTable() {
  const [tableData, setTableData] = useState({});

  useEffect(() => {
    let url = `http://127.0.0.1:1880/dynamictable`;
    tableapi(url).then((res) => {
      if (res) {
        setTableData(res[0]);
      }
    });
  }, []);
  return (
    <div className="commontable">
      {console.log(tableData)}
      <DynamicTable tableData={tableData} />
    </div>
  );
}

export default CommonTable;
