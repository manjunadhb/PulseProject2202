import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./login.css";

function Login() {
  let userNameRef = useRef();
  let passwordRef = useRef();
  let navigate = useNavigate();
  // let dispatch = useDispatch();
  return (
    <div className="login-page-first">
      <br />
      <div className="login-page">
        <img
          src="https://pulse.brninfotech.com/pulse/assets/admin/layout/img/logo-big.png"
          alt="Student Photo"
          width="100%"
          height="100%"
        ></img>
        <div className="form">
          <div >
            <div className="login-header">
              <h1>LOGIN</h1>
              <p>Please enter your credentials to login.</p>
            </div>
          </div>
          <form className="login-form">
            <input type="text" placeholder="username" ref={userNameRef} />
            <input type="password" placeholder="password" ref={passwordRef} />
            <button
              onClick={() => {
                if (
                  userNameRef.current.value === "student" &&
                  passwordRef.current.value === "student"
                ) {
                  let collectedData = {
                    un: userNameRef.current.value,
                    pwd: passwordRef.current.value,
                    // Login: "yes",
                  };

                  // dispatch({ type: "login", value: collectedData });
                  navigate("/home", { state: collectedData });
                } else if (
                  userNameRef.current.value === "brn" &&
                  passwordRef.current.value === "brn"
                ) {
                  let collectedData = {
                    un: userNameRef.current.value,
                    pwd: passwordRef.current.value,
                    // Login: "yes",
                  };

                  // dispatch({ type: "login", value: collectedData });
                  navigate("/adminDashboard", { state: collectedData });
                } else {
                  alert("invalid Username or Password");
                }
              }}
            >
              login
            </button>
            <p className="message">
              Not registered? <a href="#"  onClick={() => {
            navigate("/signup")}}>Create an account</a>
            </p>
            <p className="message">
              <a href="#">Forgot Password</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
