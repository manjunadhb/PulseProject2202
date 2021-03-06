import AdminManage from "./AdminManage";
import AdminReports from "./AdminReports";
import AdminSettings from "./AdminSettings";
import { BrowserRouter, Link, Route, Routes, NavLink } from "react-router-dom";
import React, { Suspense } from "react";
import Navbar from "./Navbar";
import { Tabs, Tab, TabContainer, TabPane } from "react-bootstrap";
import Ranking from "./Ranking";
import ManageUsers from "./ManageUsers";
import FeeReport from "./FeeReport";
import AdminMessages from "./AdminMessages";
import ManageTask from "./ManageTask";
import AdminRequest from "./AdminRequest";
import BatchSummary from "./BatchSummary";
import Tasks from "./Tasks";

function AdminDashboard() {
  return (
    <div>
      <div>
        <Navbar />
       
      </div>
     
      <div className="tabContainer">
        <Tabs
          defaultActiveKey="ranking"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="ranking" title="Rankings">
            <Ranking></Ranking>
          </Tab>
          <Tab eventKey="fee" title="Fee Report">
            <FeeReport />
          </Tab>
          <Tab eventKey="batchsummary" title="Batches Summary">
            <BatchSummary></BatchSummary>
          </Tab>
          <Tab eventKey="request" title="Requests">
            <AdminRequest />
          </Tab>
          <Tab eventKey="message" title="Messages">
            <AdminMessages />
          </Tab>
          <Tab eventKey="task" title="Manage Tasks">
            <ManageTask />
          </Tab>
          <Tab eventKey="manageusers" title="Manage Users">
            <ManageUsers />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default AdminDashboard;
