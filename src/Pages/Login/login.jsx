import React from "react";
import "./login.css";
import { NavLink, Navigate, useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();

  return (
    <>
      <body className="login__body">
        <div className="login-page">
          <div className="login">
            <h1 className="login__heading">Login</h1>
            <form action="http://localhost:7000/loginUser" method="POST">
              <input
                className="login__email"
                type="text"
                placeholder="Email"
                name="user_email"
              />
              <input
                className="login__passwrod"
                type="password"
                placeholder="Password"
                name="user_password"
              />
              <button type="submit" className="login__btn">
                Sign in
              </button>

              <p className="login__footer">
                Don't have any account. Please <NavLink to="/register">Sign up</NavLink>
              </p>
            </form>
          </div>
        </div>
      </body>
    </>
  );
}

export default Login;
