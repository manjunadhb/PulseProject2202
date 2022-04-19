import AdminManage from "./AdminManage";
import AdminReports from "./AdminReports";
import AdminSettings from "./AdminSettings";
import { BrowserRouter, Link, Route, Routes, NavLink } from "react-router-dom";
import React, { Suspense } from "react";
import AdminTopNavigation from "./AdminTopNavigation";
import {Tabs,Tab } from "react-bootstrap"


function AdminDashboard() {
   return (
    <div >
      <div>
        <AdminTopNavigation/>
      </div>
      <div>
      
      </div>
      <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="home" title="Rankings">
    
  </Tab>
  <Tab eventKey="fee" title="Fee Report">
    
  </Tab>
  <Tab eventKey="batchsummary" title="Batches Summary">
   
  </Tab>
  <Tab eventKey="request" title="Requests">
   
  </Tab>
  <Tab eventKey="message" title="Messages">
   
  </Tab>
  <Tab eventKey="task" title="Manage Tasks">
   
  </Tab>
  <Tab eventKey="manageusers" title="Manage Users">
   
  </Tab>
</Tabs>
    </div>
  );
   }

export default AdminDashboard;
