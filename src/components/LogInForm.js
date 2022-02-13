import React, { useState } from "react";
import "./LogInForm.css";

function LogInform({ login, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });
  const submitHandler = (event) => {
    event.preventDefault();
    login(details);
  };
  const nameChangeHandler = (event) => {
    setDetails({ ...details, name: event.target.value });
  };
  const emailChangeHandler = (event) => {
    setDetails({ ...details, email: event.target.value });
  };
  const passwordChangeHandler = (event) => {
    setDetails({ ...details, password: event.target.value });
  };

  return (
    <>
      <div>
        <h1 className="main-heading">Attendance System</h1>
      </div>
      <div className="form">
        <form onSubmit={submitHandler}>
          <div className="form-inner">
            <h2 className="login-head">Log In</h2>

            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={nameChangeHandler}
                value={details.name}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="admin@admin.com"
                onChange={emailChangeHandler}
                value={details.email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="admin"
                onChange={passwordChangeHandler}
                value={details.password}
              />
            </div>
            <input className="submit-btn" type="submit" value="Login" />
            {error != "" ? <div className="error">{error}</div> : ""}
          </div>
        </form>
      </div>
    </>
  );
}

export default LogInform;
