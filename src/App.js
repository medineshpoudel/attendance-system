import React, { useState } from "react";
import Attendance from "./components/Attendance";
import LogInform from "./components/LogInForm";
function App() {
  const adminUser = { email: "admin@admin.com", password: "admin" };
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");
  const logIn = (details) => {
    console.log(details);
    if (
      details.name != "" &&
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      console.log("logged in");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      setError("Incorrect credentials");
    }
  };
  const logOut = () => {
    setUser({ name: "", email: "" });
    setError("");
  };

  return (
    <>
      <Attendance user={user} logIn={logIn} logOut={logOut} error={error} />

      {/* <div className="App">
        {user.email != "" ? (
          <div className="welcome">
            <h1>
              Welcome, <span>{user.name}</span>
            </h1>
            <button onClick={logOut}>Logout</button>
          </div>
        ) : (
          <LogInform login={logIn} error={error} />
        )}
      </div> */}
    </>
  );
}

export default App;
