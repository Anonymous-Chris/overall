import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "react-dates/initialize";
import { DateRangePicker, isInclusivelyAfterDay } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";
import moment from "moment";
import "moment-timezone";
import "../../css/datepicker.css";
import { useStateValue } from "../../context-api/StateProvider";
import { NavLink } from "react-router-dom";
const DatePicker = () => {
  const [{ startDate, endDate }, dispatch] = useStateValue();

  const [focusedInput, setfocusedInput] = useState(null);

  const updateDate = ({ startDate, endDate }) => {
    if (startDate !== null && endDate !== null) {
      dispatch({
        type: "UPDATE_DATE",
        startDate: startDate,
        endDate: endDate,
      });
    }
  };

  var resetDate = () => {
    dispatch({
      type: "UPDATE_DATE",
      startDate: moment().startOf("day").local(),
      endDate: moment().endOf("day").local(),
    });
  };

  return (
    <div className="d-flex flex-column">
      <span>Passing date ranges using context API</span>
      <NavLink exact to="/features/seven">
        Check dates
      </NavLink>

      <div>
        <DateRangePicker
          minimumNights={0}
          startDate={startDate}
          startDateId="start_date_id"
          endDate={endDate}
          endDateId="end_date_id"
          onDatesChange={({ startDate, endDate }) => {
            updateDate({ startDate, endDate });
          }}
          focusedInput={focusedInput}
          onFocusChange={(focusedInput) => setfocusedInput(focusedInput)}
          isOutsideRange={(day) =>
            isInclusivelyAfterDay(day, moment().add(1, "days"))
          }
        />

        <img
          src="https://cdn4.iconfinder.com/data/icons/game-general-icon-set-1/512/reset-512.png"
          style={{ width: "50px", height: "50px" }}
          onClick={resetDate}
          alt="reset"
        />
      </div>
    </div>
  );
};

export default DatePicker;
