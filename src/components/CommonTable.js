import React, { useState, useEffect } from "react";
import getData from "../api/getData";
import DynamicTable from "./features/DynamicTable";
import fakedata from "../fakedata";
function CommonTable() {
  const [tableData, setTableData] = useState({});

  useEffect(() => {
    let url = `${process.env.REACT_APP_BASE_URL}/dynamictable`;
    getData(url).then((res) => {
      if (res && res[0].data.length > 0) {
        setTableData(res[0]);
      }
    });
  }, []);
  return (
    <div className={`commontable`}>
      <DynamicTable
        tableData={
          Object.keys(tableData).length > 0
            ? tableData
            : fakedata[0].dynamictable[0]
        }
      />
    </div>
  );
}

export default CommonTable;
