import React from "react";
import LogInform from "./LogInForm";

import "./Attendance.css";
import AttendanceReport from "./AttendanceReport";

function Attendance(props) {
  return (
    <>
      <div className="App">
        {props.user.email != "" ? (
          <div className="attendance">
            <div className="user-details">
              <h1>
                <span className="user-name">
                  {props.user.name.toUpperCase()}
                </span>
              </h1>
              <button className="log-out" onClick={props.logOut}>
                Logout
              </button>
            </div>
            <AttendanceReport />
          </div>
        ) : (
          <LogInform login={props.logIn} error={props.error} />
        )}
      </div>
    </>
  );
}

export default Attendance;
