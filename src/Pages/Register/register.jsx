import React from "react";
import "./register.css";
import { NavLink, Navigate } from "react-router-dom";
function Register() {
  function handleSigUp() {
    return <Navigate to="/home" />;
  }
  return (
    <>
      <body class="login__body">
        <div class="login-page">
          <div class="register">
            <h1 class="login__heading">Register</h1>
            <form
              action="http://localhost:7000/newUser"
              method="POST"
              onSubmit={handleSigUp}
            >
              <input
                class="login__email"
                type="text"
                placeholder="Fullname"
                name="user_name"
                required
              />
              <input
                class="login__email"
                type="text"
                placeholder="Email"
                name="user_email"
                required
              />

              <input
                class="login__passwrod"
                type="password"
                placeholder="Password"
                name="user_password"
                required
              />
              <button className="login__btn">Sign up</button>
              <p class="login__footer">
                Do you have an account. Please{"  "}
                <NavLink href="./login.html" to="/login">
                  Sign in
                </NavLink>
              </p>
            </form>
          </div>
        </div>
      </body>
    </>
  );
}
export default Register;
