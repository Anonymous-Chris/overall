import React, { useState, useEffect } from "react";

import "../../css/pagination.css";

const Pagination = () => {
  const [pageNumber, setpageNumber] = useState(1);
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(10);
  const defaultNumber = 10;
  const totalPage = 100;

  useEffect(() => {
    console.log(pageNumber);
    var _start = defaultNumber * pageNumber - defaultNumber + 1;
    var _end = defaultNumber * pageNumber;
    setStart(_start);
    setEnd(_end);
  }, [pageNumber]);
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
      <span>
        If the default is 10, and page=1 it gets data from (default*page-10+1 to
        default*n) Similarly, if nth page, it gets data from (default*n-10+1) to
        default*n
      </span>
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

      <span>
        Get data from {start} to {end}.
      </span>
    </React.Fragment>
  );
};

export default Pagination;
