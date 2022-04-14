import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import logo from "../media/logo.png";

function Login() {
  let userNameRef = useRef();
  let passwordRef = useRef();
  let navigate = useNavigate();
  // let dispatch = useDispatch();
  return (
    <div>
 <img
        src="https://pulse.brninfotech.com/pulse/assets/admin/layout/img/logo-big.png"
        alt
        width="20%"
        height="20%"
      ></img>
      <br />
      <div class="login">
        <label>
          <b>User Name</b>
        </label><br/>
        <input
          type="text"
          name="Uname"
          id="Uname"
          placeholder="Username"
          ref={userNameRef}
        />
        <br />
        <br />
        <label>
          <b>Password</b>
        </label><br/>
        <input
          type="Password"
          name="Pass"
          id="Pass"
          placeholder="Password"
          ref={passwordRef}
        />
        <br />
        <br />
        <input type="checkbox" id="check" />
        <span>
          By creating an account you agree to our{" "}
          <a href="#">Terms & Privacy</a>.
        </span>
        <br />
        <input type="checkbox" id="check" />
        <span>Remember me</span>
        <br />
        <button
          type="submit"
          class="registerbtn"
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
          Login
        </button>
        <br />
        <br />
        Forgot <a href="#">Password</a>
      </div>
      
    </div>
  );
}

export default Login;
