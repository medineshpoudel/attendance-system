import React, { useEffect, useState } from "react";
import "./AttendanceReport.css";
import Check from "./Check";

// getting the count stored at local storage
const getLocalItem = () => {
  let count = localStorage.getItem("count");

  if (count) {
    return JSON.parse(localStorage.getItem("count"));
  }
};
function AttendanceReport() {
  const [count, setCount] = useState(0);
  const [absentCount, setAbsentCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };
  const absentCounter = () => {
    setAbsentCount(absentCount + 1);
  };
  // storing data to local storage
  useEffect(() => {
    localStorage.setItem("absentCount", JSON.stringify(absentCount));
  }, [absentCount]);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  return (
    <>
      <div className="attendance-report">
        {/* <div className="report">Total: 60</div> */}
        <div className="report text-green"> Present Days: {count}</div>
        <div className="report text-red">Absent Days: {absentCount}</div>
      </div>
      <Check onCount={increaseCount} onAbsent={absentCounter} />
    </>
  );
}

export default AttendanceReport;
