import React, { useState } from "react";
import "./Check.css";
import AttendanceDetail from "./AttendanceDetail";
function Check(props) {
  const [checkInTime, setCheckInTime] = useState({ hour: 0, minutes: 0 });
  const [checkOutTime, setCheckOutTime] = useState({ hour: 0, minutes: 0 });
  const checkIn = (check) => {
    setCheckInTime(check);
  };
  const checkOut = (check) => {
    setCheckOutTime(check);
  };
  const checkCount = () => {
    props.onCount();
  };
  const absentCount = () => {
    props.onAbsent();
  };
  return (
    <>
      <div className="check">
        <div className="check-in">
          Check In Time : {checkInTime.hour}:{checkInTime.minutes} min
        </div>
        <div className="check-out">
          Check Out Time : {checkOutTime.hour}:{checkOutTime.minutes} min
        </div>
      </div>
      <AttendanceDetail
        onCheckIn={checkIn}
        onCheckOut={checkOut}
        onCount={checkCount}
        onAbsent={absentCount}
      />
    </>
  );
}

export default Check;
