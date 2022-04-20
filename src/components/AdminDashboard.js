import AdminManage from "./AdminManage";
import AdminReports from "./AdminReports";
import AdminSettings from "./AdminSettings";
import { BrowserRouter, Link, Route, Routes, NavLink } from "react-router-dom";
import React, { Suspense } from "react";
import AdminTopNavigation from "./AdminTopNavigation";
import {Tabs,Tab } from "react-bootstrap"
import Ranking from "./Ranking";

import ManageUsers from "./ManageUsers";
import FeeReport from "./FeeReport";
import AdminMessages from "./AdminMessages";
import Requests from "./Requests";
import BatchSummary from "./BatchSummary";
import Tasks from "./Tasks";



function AdminDashboard() {
   return (
    <div >
      <div>
        <AdminTopNavigation/>
      </div>
      <div className="tabContainer">
      
      
      <Tabs defaultActiveKey="ranking" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="ranking" title="Rankings">
    <Ranking></Ranking>
  </Tab>
  <Tab eventKey="fee" title="Fee Report">
    <FeeReport/>
    
  </Tab>
  <Tab eventKey="batchsummary" title="Batches Summary">
   <BatchSummary></BatchSummary>
  </Tab>
  <Tab eventKey="request" title="Requests">
   <Requests></Requests>
  </Tab>
  <Tab eventKey="message" title="Messages">
   <AdminMessages/>
  </Tab>
  <Tab eventKey="task" title="Manage Tasks">
   <Tasks></Tasks>
  </Tab>
  <Tab eventKey="manageusers" title="Manage Users">

   <ManageUsers/>

    

    

   

  </Tab>
</Tabs>

</div>
    </div>
  );
   }

export default AdminDashboard;
