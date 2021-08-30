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

  return (
    <div className="d-flex flex-column">
      <span>Passing date ranges using context API</span>
      <NavLink exact to="/features/seven">
        Check dates
      </NavLink>
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
    </div>
  );
};

export default DatePicker;
