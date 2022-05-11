import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faRotate } from '@fortawesome/free-solid-svg-icons'
import {icon} from'react-bootstrap'
import { BrowserRouter, Link, Route, Routes, NavLink } from "react-router-dom";
import DSU from "./DSU";
import Messages from "./Messages";
import Home from "./Home";
import More from "./More";
import Requests from './Requests';
import React, { Suspense } from "react";



const Tasks = () => {
  let highlightNavLink = (obj) => {
    if (obj.isActive === true) {
      return {
        backgroundColor: "green",
        color: "White",
      };
    }
  };
  const editIcon = <FontAwesomeIcon icon={faEdit} />
  const rotate = <FontAwesomeIcon icon={faRotate} />
  return (
    <div className = "Tasks">
      <div className="bannerContainer">
        <div>
          <img src="https://pulse.brninfotech.com/pulse/assets/admin/layout/img/logo.png"></img>
        </div>
        <div className="navContainer">
          <nav>
            <button className="buttonClassOne">
              <NavLink to="/home" style={(obj) => highlightNavLink(obj)}>
                Home
              </NavLink>
            </button>
            <button className="buttonClassOne">
              <NavLink to="/dsu" style={(obj) => highlightNavLink(obj)}>
                Daily Status Update
              </NavLink>
            </button>
            <button className="buttonClassOne">
              <NavLink to="/tasks" style={(obj) => highlightNavLink(obj)}>
                Tasks
              </NavLink>
            </button>
            <button className="buttonClassOne">
              <NavLink to="/messages" style={(obj) => highlightNavLink(obj)}>
                Messages
              </NavLink>
            </button>
            <button className="buttonClassOne">
              <NavLink to="/requests" style={(obj) => highlightNavLink(obj)}>
                Requests
              </NavLink>
            </button>
            <button className="buttonClassOne">
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
            <Route path="/requests" element={<Requests />}></Route>
            <Route path="/more" element={<More />}></Route>
          </Routes>
        </Suspense>
      </div>
      
      <div className = "rowTasks" id = "tableDiv">
      <div className = "portlet box blue">
      <div className="portlet-title">
          <div className="caption">
          <i>{editIcon}</i> 
          Tasks Assigned to you
          </div>
          <div className = "Tasksrefresh">
            <a>{rotate}</a>
            </div>
      </div>
    </div>
    <div className="container">
      <div class="d-flex justify-content-between">
        <div className="d-flex flex-row">
          <div className="p-2">
          <select className="form-select" aria-label="Default select example">
            <option selected>All</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          </div>
          <div className="p-3 ">Records</div>
      </div>
      <div className= "d-flex flex-row">
      <label className="p-3">your Search</label>
      <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
      </div>
      

      </div>
  
      
   </div>
   <div className='tableTasks'>
   <table class="table table-bordered table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">UID</th>
      <th scope="col">ID</th>
      <th scope="col">Type</th>
      <th scope="col">Title</th>
      <th scope ="col">Requirments</th>
      <th scope="col">Issues</th>
      <th scope="col">Build to Store</th>
      <th scope="col">Dealline</th>
      <th scope="col">Max File Size</th>
      <th scope="col">Status</th>
      <th scope="col">Points Earned</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>BTT88	</td>
      <td>85626</td>
      <td>Technical Task - Theory</td>
      <td>Bootstrap - Containers, Rows, Cols, Stacks	</td>
      <td>Prepare for interviews on Bootstrap - Containers, Rows, Cols, Stacks.</td>
      <td>Open : 0
Fixed : 0
Closed : 0</td>
      <td>NA	</td>
      <td>Before 2:00 pm on 25 April 2022</td>
      <td>Not more than 40 MB</td>
      <td><a href = "">Pending</a></td>
      <td>0/100</td>
    </tr>
    <tr>
    <th scope="row">1</th>
      <td>BTT88	</td>
      <td>85626</td>
      <td>Technical Task - Theory</td>
      <td>Bootstrap - Containers, Rows, Cols, Stacks	</td>
      <td>Prepare for interviews on Bootstrap - Containers, Rows, Cols, Stacks.</td>
      <td>Open : 0
Fixed : 0
Closed : 0</td>
      <td>NA	</td>
      <td>Before 2:00 pm on 25 April 2022</td>
      <td>Not more than 40 MB</td>
      <td><a href = "">Pending</a></td>
      <td>0/100</td>
    </tr>
  </tbody>
</table>
   </div>
      </div>
   
  
   

    </div>
     
  )
}

export default Tasks
