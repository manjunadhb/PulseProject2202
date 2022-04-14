import DSU from "./DSU";
import Messages from "./Messages";
import More from "./More";
import Tasks from "./Tasks";
import { BrowserRouter, Link, Route, Routes, NavLink } from "react-router-dom";
import React, { Suspense } from "react";

function Home() {
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
            <button className="buttonclassNameOne">
              {" "}
              <NavLink to="/home" style={(obj) => highlightNavLink(obj)}>
                Home
              </NavLink>
            </button>
            <button className="buttonclassNameOne">
              {" "}
              <NavLink to="/dsu" style={(obj) => highlightNavLink(obj)}>
                Daily Status Update
              </NavLink>
            </button>
            <button className="buttonclassNameOne">
              {" "}
              <NavLink to="/tasks" style={(obj) => highlightNavLink(obj)}>
                Tasks
              </NavLink>
            </button>
            <button className="buttonclassNameOne">
              {" "}
              <NavLink to="/messages" style={(obj) => highlightNavLink(obj)}>
                Messages
              </NavLink>
            </button>
            <button className="buttonclassNameOne">
              {" "}
              <NavLink to="/more" style={(obj) => highlightNavLink(obj)}>
                More
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
            alt="image Here"
          ></img>
          <h6>Ranbir Kapoor</h6>
        </div>
        <Suspense fallback={<div>Loading.........</div>}>
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/dsu" element={<DSU />}></Route>
            <Route path="/tasks" element={<Tasks />}></Route>
            <Route path="/messages" element={<Messages />}></Route>
            <Route path="/more" element={<More />}></Route>
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default Home;
