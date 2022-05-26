import DSU from "./DSU";
import Messages from "./Messages";
import More from "./More";
import Tasks from "./Tasks";
import Requests from "./Requests"
import { BrowserRouter, Link, Route, Routes, NavLink } from "react-router-dom";
import React, { Suspense } from "react";
import {Accordion,OverlayTrigger,Popover,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from "./Navbar1";

function Home() {

  return (
    <div>
    <div className="App1">
    <div>
        <Navbar1 />
        <h1>Home</h1>
      </div>
      
       
        <Suspense fallback={<div>Loading.........</div>}>
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/dsu" element={<DSU />}></Route>
            <Route path="/tasks" element={<Tasks />}></Route>
            <Route path="/messages" element={<Messages />}></Route>
            <Route path="/requests" element={<Requests/>}></Route>
            <Route path="/more" element={<More />}></Route>
          </Routes>
        </Suspense>
      
      </div>


      <div>
      <div className='ranbody'>
      <div className='ranHeading'>
        <h2><span>&#10224;</span>Home</h2>
      </div>
      <div className='ranMain1'>
      <div>
        <img className='ranImg' src="https://dev.pulse.brninfotech.com/pulse/modules/uploads/maleProfilePic.png" alt=""></img>
        <h2>Ranjith Kumar</h2>
        <h5>COURSE:IPHONE JOB ORIENTED COURSE</h5>
        <h5>BATCH ID:2101</h5>
        <h5>STUDENT ID:210101</h5>
      </div>
      <div>
        <table id='ran' className='ranTable1' >
          <thead style={{ color: "red" }}>&#11689;ATTENDANCE SUMMARY</thead>
          <tr id='ran'>
            <th width='400'>Total Days</th>
            <td width='200'>200</td>
          </tr>
          <tr id='ran'>
            <th>Working Days</th>
            <td>180</td>
          </tr>
          <tr id='ran'>
            <th>Leaves</th>
            <td>5</td>
          </tr>
          <tr id='ran'>
            <th>Abscents</th>
            <td>10</td>
          </tr>
          <tr id='ran'>
            <th>Days Attended</th>
            <td>165</td>
          </tr>
          <tr id='ran'>
            <th>Updates Sent</th>
            <td>20</td>
          </tr>
          <tr id='ran'>
            <th>Working Hours</th>
            <td>1400:00:00</td>
          </tr>
          <tr id='ran'>
            <th>Worked Hours</th>
            <td>1200:00:00</td>
          </tr>
          <tr id='ran'>
            <th>Overall Spent Summary</th>
            <td>-200:00:00</td>
          </tr>
          <tr id='ran'>
            <th>Worked Per Day(Avg.Hrs)</th>
            <td>6:00:00(80%)</td>
          </tr>
          <tr id='ran'>
            <th>Shortage Per Day(Avg.Hrs)</th>
            <td>2:00:00(20%)</td>
          </tr>
          <tr id='ran'>
            <th>Late To Office</th>
            <td>1</td>
          </tr>
          <tr id='ran'>
            <th>Minimum Hours Missed</th>
            <td>4 Times</td>
          </tr>
          <tr id='ran'>
            <th>Max Points</th>
            <td>8000</td>
          </tr>
          <tr id='ran'>
            <th>Points Earned</th>
            <td>6000</td>
          </tr>
          <tr id='ran'>
            <th>Your Perfomance Score</th>
            <td>80%</td>
          </tr>
        </table>
      </div>
      </div>

     
      <Accordion class='panel-group'>
      <Accordion.Item>
      <Accordion.Header> <h2>&#10696; Attendance Details</h2></Accordion.Header>
      <Accordion.Body>
      <div className='ranMain2'>
        
        <div className="ranSmall">
          <div>
            <p><select className='ranSel'>
              <option>All</option>
              <option>5</option>
              <option>10</option>
              <option>15</option>
            </select> Records</p>
          </div>
          <div>
            <p>My Search:<input className='ranSel'></input></p>
          </div>
        </div>

        <table className='ranTable2' id='ran'>
          <tr id='ran'>
            <th>#</th>
            <th>Date</th>
            <th>Day Type</th>
            <th>Check In</th>
            <th>Check Out</th>
            <th>Time Spent</th>
            <th>Spent Summary</th>
            <th>Points Earned</th>
          </tr>
          <tr id='ran'>
            <td>1</td>
            <td>Mon,11-Apr-2022</td>
            <td>JustLab</td>
            <td>10:00:00</td>
            <td>06:00:00</td>
            <td>08:00:00</td>
            <td>00:00:00</td>
            <td>30</td>
          </tr>
          <tr id='ran'>
            <td>2</td>
            <td>Tue,12-Apr-2022</td>
            <td>
            <>
  {['right'].map((placement) => (
    <OverlayTrigger
      key={placement}
      placement={placement}
      overlay={
        <Popover id={`popover-positioned-${placement}`}>
          <Popover.Header>Mon,11-Apr-2022,Session Details</Popover.Header>
          <Popover.Body>
             <table id='ran'>
               <tr>
                 <th>Topic</th>
                 <td>Bootstrap</td>
               </tr>
               <tr>
                 <th>Duration</th>
                 <td>90 Minutes</td>
               </tr>
               <tr>
                 <th>Attendance</th>
                 <td>Present</td>
               </tr>
             </table>
          </Popover.Body>
        </Popover>
      }
    >
      <Button variant="link">ClassLab</Button>
    </OverlayTrigger>
  ))}
</>
            </td>
            <td>10:00:00</td>
            <td>06:00:00</td>
            <td>08:00:00</td>
            <td>00:00:00</td>
            <td>30</td>
          </tr>
          <tr id='ran'>
            <td>3</td>
            <td>Wed,13-Apr-2022</td>
            <td>JustLab</td>
            <td>10:00:00</td>
            <td>06:00:00</td>
            <td>08:00:00</td>
            <td>00:00:00</td>
            <td>30</td>
          </tr>
          <tr id='ran'>
            <td>4</td>
            <td>Thu,14-Apr-2022</td>
            <td>
            <>
  {['right'].map((placement) => (
    <OverlayTrigger
      key={placement}
      placement={placement}
      overlay={
        <Popover id={`popover-positioned-${placement}`}>
          <Popover.Header>Thu,14-Apr-2022,Session Details</Popover.Header>
          <Popover.Body>
             <table id='ran'>
               <tr>
                 <th>Topic</th>
                 <td>React-Bootstrap</td>
               </tr>
               <tr>
                 <th>Duration</th>
                 <td>90 Minutes</td>
               </tr>
               <tr>
                 <th>Attendance</th>
                 <td>Present</td>
               </tr>
             </table>
          </Popover.Body>
        </Popover>
      }
    >
      <Button variant="link">ClassLab</Button>
    </OverlayTrigger>
  ))}
</>
            </td>
            <td>10:00:00</td>
            <td>06:00:00</td>
            <td>08:00:00</td>
            <td>00:00:00</td>
            <td>30</td>
          </tr>
          <tr id='ran'>
            <td>5</td>
            <td>Fri,15-Apr-2022</td>
            <td>JustLab</td>
            <td>10:00:00</td>
            <td>06:00:00</td>
            <td>08:00:00</td>
            <td>00:00:00</td>
            <td>30</td>
          </tr>
          <tr id='ran'>
            <td>6</td>
            <td>Sat,16-Apr-2022</td>
            <td>
            <>
  {['right'].map((placement) => (
    <OverlayTrigger
      key={placement}
      placement={placement}
      overlay={
        <Popover id={`popover-positioned-${placement}`}>
          <Popover.Header>Sat,16-Apr-2022,Session Details</Popover.Header>
          <Popover.Body>
             <table id='ran'>
               <tr>
                 <th>Topic</th>
                 <td>Redux,React-Redux</td>
               </tr>
               <tr>
                 <th>Duration</th>
                 <td>90 Minutes</td>
               </tr>
               <tr>
                 <th>Attendance</th>
                 <td>Abscent</td>
               </tr>
             </table>
          </Popover.Body>
        </Popover>
      }
    >
      <Button variant="link">ClassLab</Button>
    </OverlayTrigger>
  ))}
</>
            </td>
            <td style={{ backgroundColor: "red" }} colspan={2}>Abscent</td>
            <td>00:00:00</td>
            <td>-08:00:00</td>
            <td>-30</td>
          </tr>
          <tr id='ran'>
            <td>7</td>
            <td>Sun,17-Apr-2022</td>
            <td style={{ backgroundColor: "green" }} colspan={6}>Holiday</td>
          </tr>
          <tr id='ran'>
            <td>8</td>
            <td>Mon,18-Apr-2022</td>
            <td>JustLab</td>
            <td>10:00:00</td>
            <td>06:00:00</td>
            <td>08:00:00</td>
            <td>00:00:00</td>
            <td>30</td>
          </tr>
          <tr id='ran'>
            <td>9</td>
            <td>Tue,19-Apr-2022</td>
            <td>
            <>
  {['right'].map((placement) => (
    <OverlayTrigger
      key={placement}
      placement={placement}
      overlay={
        <Popover id={`popover-positioned-${placement}`}>
          <Popover.Header>Tue,19-Apr-2022,Session Details</Popover.Header>
          <Popover.Body>
             <table id='ran'>
               <tr>
                 <th>Topic</th>
                 <td>React-Router-DOM</td>
               </tr>
               <tr>
                 <th>Duration</th>
                 <td>90 Minutes</td>
               </tr>
               <tr>
                 <th>Attendance</th>
                 <td>Present</td>
               </tr>
             </table>
          </Popover.Body>
        </Popover>
      }
    >
      <Button variant="link">ClassLab</Button>
    </OverlayTrigger>
  ))}
</>
            </td>
            <td>10:00:00</td>
            <td>06:00:00</td>
            <td>08:00:00</td>
            <td>00:00:00</td>
            <td>30</td>
          </tr>
          <tr id='ran'>
            <td>10</td>
            <td>Wed,20-Apr-2022</td>
            <td>JustLab</td>
            <td style={{ backgroundColor: "red" }} colspan={2}>Abscent</td>
            <td>00:00:00</td>
            <td>-08:00:00</td>
            <td>-30</td>
          </tr>
          <tr id='ran'>
            <td>11</td>
            <td>Thu,21-Apr-2022</td>
            <td><>
  {['right'].map((placement) => (
    <OverlayTrigger
      key={placement}
      placement={placement}
      overlay={
        <Popover id={`popover-positioned-${placement}`}>
          <Popover.Header>Thu,21-Apr-2022,Session Details</Popover.Header>
          <Popover.Body>
             <table id='ran'>
               <tr>
                 <th>Topic</th>
                 <td>Media Queries</td>
               </tr>
               <tr>
                 <th>Duration</th>
                 <td>90 Minutes</td>
               </tr>
               <tr>
                 <th>Attendance</th>
                 <td>Present</td>
               </tr>
             </table>
          </Popover.Body>
        </Popover>
      }
    >
      <Button variant="link">ClassLab</Button>
    </OverlayTrigger>
  ))}
</></td>
            <td>10:00:00</td>
            <td>06:00:00</td>
            <td>08:00:00</td>
            <td>00:00:00</td>
            <td>30</td>
          </tr>
          <tr id='ran'>
            <td>12</td>
            <td>Fri,22-Apr-2022</td>
            <td>JustLab</td>
            <td>10:00:00</td>
            <td>06:00:00</td>
            <td>08:00:00</td>
            <td>00:00:00</td>
            <td>30</td>
          </tr>
          <tr id='ran'>
            <td>13</td>
            <td>Sat,23-Apr-2022</td>
            <td><>
  {['right'].map((placement) => (
    <OverlayTrigger
      key={placement}
      placement={placement}
      overlay={
        <Popover id={`popover-positioned-${placement}`}>
          <Popover.Header>Sat,23-Apr-2022,Session Details</Popover.Header>
          <Popover.Body>
             <table id='ran'>
               <tr>
                 <th>Topic</th>
                 <td>Params,Hooks,Table</td>
               </tr>
               <tr>
                 <th>Duration</th>
                 <td>90 Minutes</td>
               </tr>
               <tr>
                 <th>Attendance</th>
                 <td>Present</td>
               </tr>
             </table>
          </Popover.Body>
        </Popover>
      }
    >
      <Button variant="link">ClassLab</Button>
    </OverlayTrigger>
  ))}
</></td>
            <td>10:00:00</td>
            <td>06:00:00</td>
            <td>08:00:00</td>
            <td>00:00:00</td>
            <td>30</td>
          </tr>
          <tr id='ran'>
            <td>14</td>
            <td>Sun,24-Apr-2022</td>
            <td style={{ backgroundColor: "green" }} colspan={6}>Holiday</td>
          </tr>
          <tr id='ran'>
            <td>15</td>
            <td>Mon,25-Apr-2022</td>
            <td>JustLab</td>
            <td>10:00:00</td>
            <td>06:00:00</td>
            <td>08:00:00</td>
            <td>00:00:00</td>
            <td>30</td>
          </tr>
        </table>
      </div>
      </Accordion.Body>
      </Accordion.Item>
      </Accordion> 

      

      
      
    </div>
      </div>

          </div>
  );
}

export default Home;
