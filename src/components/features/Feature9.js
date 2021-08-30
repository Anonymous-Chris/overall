import React, { useState, useEffect } from "react";

import "../../css/pagination.css";

const Feature9 = (props) => {
  const [pageNumber, setpageNumber] = useState(1);
  const totalPage = 10;
  var decreasePage = () => {
    if (pageNumber > 1 && typeof pageNumber === "number") {
      setpageNumber(pageNumber - 1);
    } else if (typeof pageNumber === "string") {
      setpageNumber(1);
    }
  };

  var increasePage = () => {
    if (pageNumber < totalPage && typeof pageNumber === "number") {
      setpageNumber(pageNumber + 1);
    } else if (typeof pageNumber === "string") {
      setpageNumber(1);
    }
  };

  var changePage = (e) => {
    var inputNumber = parseInt(e.target.value);
    if (inputNumber <= totalPage) {
      setpageNumber(inputNumber);
    } else if (e.target.value === "") {
      setpageNumber("");
    }
  };

  var gotoFirst = () => {
    setpageNumber(1);
  };

  var gotoLast = () => {
    setpageNumber(totalPage);
  };

  return (
    <React.Fragment>
      <div className="pagination">
        <i
          className="fa fa-angle-double-left"
          aria-hidden="true"
          onClick={gotoFirst}
        ></i>
        <i
          className="fa fa-angle-left"
          aria-hidden="true"
          onClick={decreasePage}
        ></i>

        <span>
          Page
          <input
            type="text"
            className="dropdownBackground"
            value={pageNumber}
            onChange={changePage}
          ></input>
          of {totalPage}
        </span>

        <i
          className="fa fa-angle-right"
          aria-hidden="true"
          onClick={increasePage}
        ></i>
        <i
          className="fa fa-angle-double-right"
          aria-hidden="true"
          onClick={gotoLast}
        ></i>
      </div>
    </React.Fragment>
  );
};

export default Feature9;
