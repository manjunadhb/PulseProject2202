import React, { useState, Suspense } from "react";
import "./navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { BrowserRouter, Link, Route, Routes, NavLink } from "react-router-dom";
import Home from "./Home";
import Messages from "./Messages";
import More from "./More";
import DSU from "./DSU";
import Tasks from "./Tasks";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <img src="https://pulse.brninfotech.com/pulse/assets/admin/layout/img/logo.png"></img>
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/dsu">Daily Status Update</NavLink>
            </li>
            <li>
              <NavLink to="/tasks">Tasks</NavLink>
            </li>
            <li>
              <NavLink to="/messages">Messages</NavLink>
            </li>
            <li>
              <NavLink to="/more">More</NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="https://www.facebook.com/brninfotech/">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/brn_infotech_fullstacktraining/?hl=en">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/c/brninfotec">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
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
      </nav>


    </>
  );
};

export default Navbar;
