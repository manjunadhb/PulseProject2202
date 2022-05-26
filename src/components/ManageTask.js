import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import CreateTask from "./CreateTask";
import Presentation from "./Presentation";
import Navbar1 from "./Navbar1";
function ManageTask() {
  return (
    <>
       <div>
        <Navbar1 />
        <h1>Admin DashBoard</h1>
      </div>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
     
        <Tab eventKey="Presentation" title="Presentation">
          <Presentation/>
        </Tab>

        <Tab eventKey="Task Review" title="Task Review"></Tab>
        <Tab eventKey="CreateTask" title="CreateTask">
        <CreateTask/>
        </Tab>
        <Tab eventKey="Class Attendance" title="Class Attendance"></Tab>
      </Tabs>
    </>
  );
}

export default ManageTask;
