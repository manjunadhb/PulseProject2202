import AdminManage from "./AdminManage";
import AdminReports from "./AdminReports";
import AdminSettings from "./AdminSettings";
import { BrowserRouter, Link, Route, Routes, NavLink } from "react-router-dom";
import React, { Suspense } from "react";

function AdminDashboard() {
  let highlightNavLink = (obj) => {
    if (obj.isActive === true) {
      return {
        backgroundColor: "green",
        color: "White",
      };
    }
  };
  return (
    <div className="App1">
    <div className="bannerContainer">
      <div>
        <img src="https://pulse.brninfotech.com/pulse/assets/admin/layout/img/logo.png"></img>
      </div>
      <div className="navContainer">
        <nav>
          <button className="buttonclassName">
            {" "}
            <NavLink
              to="/adminDashboard"
              style={(obj) => highlightNavLink(obj)}
            >
              Dashboard
            </NavLink>
          </button>
          <button className="buttonclassName">
            {" "}
            <NavLink to="/adminReports" style={(obj) => highlightNavLink(obj)}>
              Reports{" "}
            </NavLink>
          </button>
          <button className="buttonclassName">
            {" "}
            <NavLink to="/adminManage" style={(obj) => highlightNavLink(obj)}>
              Manages{" "}
            </NavLink>
          </button>
          <button className="buttonclassName">
            {" "}
            <NavLink to="/adminSettings" style={(obj) => highlightNavLink(obj)}>
              Settings
            </NavLink>
          </button>
        </nav>
      </div>
      <div className="imageContainer">
        <img
          src="https://img.indiaforums.com/person/640x480/0/1033-ranbir-kapoor.jpg?c=1vF2D7"
          className="image"
          width="40px"
          height="55px"
        ></img>
        <h6>Ranbir Kapoor</h6>
      </div>
      <Suspense fallback={<div>Loading.........</div>}>
        <Routes>
          {/* <Route path="/adminHome" element={<AdminHome />}></Route> */}
          <Route path="/adminDashboard" element={<AdminDashboard />}></Route>
          <Route path="/adminReports" element={<AdminReports />}></Route>
          <Route path="/adminManage" element={<AdminManage />}></Route>
          <Route path="/adminSettings" element={<AdminSettings />}></Route>
        </Routes>
      </Suspense>
    </div>
    </div>
  );
}

export default AdminDashboard;
