import React from "react";
import "../../css/dynamictable.css";

function DynamicTable(props) {
  console.log(props);

  //get table head from data
  var getKeys = function () {
    if (Object.keys(props.tableData).length > 0) {
      try {
        var filteredArray = Object.keys(props.tableData.data[0]).filter(
          function (e) {
            return e !== "sequence" && e !== "id";
            //remove these headers
          }
        );
        console.log(filteredArray);
        return filteredArray;
      } catch (e) {
        console.log("Keys is empty");
      }
    }
  };

  //get table head data from getKeys()
  var generateHeader = () => {
    var keys = getKeys();
    if (keys !== null && keys !== undefined) {
      try {
        return keys.map((key) => {
          return <th key={key}>{key.toUpperCase().replaceAll("_", " ")}</th>;
        });
      } catch (e) {
        console.log("Header is empty");
      }
    }
  };

  var generateTabledata = () => {
    var items = props.tableData.data;
    var keys = getKeys();
    if (items !== null && items !== undefined) {
      try {
        return items.map((row, index) => {
          return (
            <tr id="">
              <RenderRow
                key={index}
                data={row}
                keys={keys}
                cssName={props.cssName}
              />
            </tr>
          );
        });
      } catch (e) {
        console.log("Table data is empty");
      }
    }
  };

  return (
    <div className="container">
      <div className="dynamictable text-center h-100 w-100 scrollbar">
        <h1>{props.tableData.metadata?.name}</h1>
        <div
          className={`table-responsive  ${
            props.cssName !== undefined ? props.cssName : ""
          }`}
        >
          <table
            className="table table-striped table-dark m-0 p-0"
            id={`${props.cssName !== undefined ? props.cssName : ""}`}
          >
            <thead>
              <tr>{generateHeader()}</tr>
            </thead>
            <tbody>{generateTabledata()}</tbody>
          </table>
        </div>{" "}
      </div>
    </div>
  );
}

const RenderRow = (props) => {
  return props.keys.map((key, index) => {
    /* for other tables other than the ones with link */
    return (
      <td key={index}>
        {key !== "ack_status" && key !== "sequence"
          ? typeof props.data[key] === "number"
            ? props.data[key] % 1 === 0
              ? props.data[key]
              : props.data[key].toFixed(2)
            : props.data[key] !== null
            ? props.data[key]
            : "-"
          : null}
      </td>
    );
  });
};

export default DynamicTable;
