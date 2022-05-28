import React from "react";
import { FaGift } from "react-icons/fa";
import { Breadcrumb, Button } from "react-bootstrap";
import { BrowserRouter, Link, Route, Routes, NavLink } from "react-router-dom";
import DSU from "./DSU";
import Messages from "./Messages";
import Home from "./Home";
import Tasks from "./Tasks";
import More from "./More";
// import Requests from './Requests';
// import React, { Suspense } from "react";
function Requests() {
  return (
    <div className="rqvstContainer">

<div className="bannerContainer">
<div>
          <img src="https://pulse.brninfotech.com/pulse/assets/admin/layout/img/logo.png"></img>
        </div>
      
       
        
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/dsu" element={<DSU />}></Route>
            <Route path="/tasks" element={<Tasks />}></Route>
            <Route path="/messages" element={<Messages />}></Route>
            <Route path="/requests" element={<Requests />}></Route>
            <Route path="/more" element={<More />}></Route>
          </Routes>
     
          </div>
      <Breadcrumb>
        <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Requests</Breadcrumb.Item>
      </Breadcrumb>
     
      <div className="contentConatainer">
      <div className="rqvstHeader">
        <div className="iconContainer">
          <FaGift style={{margin:"2px 5px 2px"}}/>
          <h4 className="headerHeading">Create a Request</h4>
        </div>
      </div>
      <div className="inputContainer">
        <div >
          <label className="rqvstLabel">Request Type</label>
          <select className="select">
            <option>Select</option>
            <option value="">New software installation</option>
            <option value="">Unable to login thru my user name</option>
            <option value="">Internet not working</option>
            <option value="">Monitor display problem</option>
            <option value="">System hangs frequently</option>
            <option value="">Audio not working</option>
            <option value="">OS not booting</option>
            <option value="">Install Xcode</option>
            <option value="">Keyboard not working properly</option>
            <option value="">No keyboard</option>
            <option value="">Mouse not working properly</option>
            <option value="">No mouse</option>
            <option value="">Dusty mouse </option>
            <option value="">Dusty Desk</option>
            <option value="">Dusty Keyboard</option>
            <option value="">Dusty Room</option>
            <option value="">Claning Required For bathroom</option>
            <option value="">Liquid hand wash required</option>
            <option value="">Liquid dish wash required</option>
            <option value="">Chair is not clean </option>
            <option value="">Chair is not proper</option>
            <option value="">Drinking water is not clean</option>
            <option value="">No dedicated sysytem for me</option>
            <option value="">No monitor for my system</option>
            <option value="">No CPU for my system</option>
            <option value="">Need a marker for my lab</option>
            <option value="">Need a duster for my lab</option>
            <option value="">Others</option>
          </select>
        </div>
        <div>
          <label className="rqvstLabel">Lab ID</label>
          <select className="select">
            <option>Select</option>
          </select>
        </div>
        <div>
          <label className="rqvstLabel"> Seat Number</label>
          <select className="select">
            <option>Select</option>
          </select>
        </div>
        </div>
        <div className="textAreaContainer">
          <label className="rqvstLabel">Description</label>
          <textarea className="textArea" placeholder="Ticket Description" type="text"></textarea>
          <p>Please describe in detail</p>
        </div>
      

        <div className="rqvstBtn">
          <Button
            variant="success"
            onClick={() => {
              alert("You have some form errors. Please check below.");
            }}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Requests;
