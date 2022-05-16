import React from "react";
import { NavLink } from "react-router-dom";



function AdminTopNavigation() {
  let highlightNavLink = (obj) => {
    if (obj.isActive === true) {
      return {
        backgroundColor: "green",
        color: "White",
      };
    }
  };

  return (
    
    <div className="bannerContainer">
      <div>
        <img src="https://pulse.brninfotech.com/pulse/assets/admin/layout/img/logo.png"></img>
      </div>
      <div className="navContainer">
        
        <nav>
  

          <button className="buttonClass">
            {" "}
            <NavLink
              to="/adminDashboard"
              style={(obj) => highlightNavLink(obj)}
             className="link">
              Dashboard
            </NavLink>
          </button>
          <button className="buttonClass">
            {" "}
            <NavLink to="/adminReports" style={(obj) => highlightNavLink(obj)}  className="link">
              Reports{" "}
            </NavLink>
          </button>
          <button className="buttonClass">
            {" "}
            <NavLink to="/adminManage" style={(obj) => highlightNavLink(obj)}  className="link">
              Manages{" "}
            </NavLink>
          </button>
          <button className="buttonClass">
            {" "}
            <NavLink to="/batchSummary" style={(obj) => highlightNavLink(obj)}  className="link">
              Batch Summary
            </NavLink>
          </button>
          <button className="buttonClass">
            {" "}
            <NavLink to="/adminSettings" style={(obj) => highlightNavLink(obj)}  className="link">
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
    </div>
  );
}

export default AdminTopNavigation;
