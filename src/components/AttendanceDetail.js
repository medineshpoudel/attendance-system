import React, { useState } from "react";
import "./AttendanceDetail.css";

function AttendanceDetail(props) {
  var time = new Date();
  var utc = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
  const [checkIn, setCheckIn] = useState({
    hour: time.getHours(),
    minutes: time.getMinutes(),
  });
  const [checkOut, setCheckOut] = useState({
    hour: time.getHours(),
    minutes: time.getMinutes(),
  });
  const checkInHandler = () => {
    setCheckIn({ hour: time.getHours(), minutes: time.getMinutes() });
    props.onCheckIn(checkIn);
  };
  const checkOutHandler = () => {
    setCheckOut({ hour: time.getHours(), minutes: time.getMinutes() });
    props.onCheckOut(checkOut);
    if (checkIn.hour >= 10 && checkOut.hour <= 14) {
      props.onCount();
    } else {
      props.onAbsent();
    }
  };
  return (
    <>
      <div className="attendance-details">
        <div className="attendance-day">
          <span className="day"> {utc}</span>
        </div>
        <div className="attendance-check">
          <button onClick={checkInHandler} className="check-btn">
            Check In
          </button>
          <button onClick={checkOutHandler} className="check-btn">
            Check Out
          </button>
        </div>
      </div>
    </>
  );
}

export default AttendanceDetail;
