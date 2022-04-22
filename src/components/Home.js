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

      <div className='ranBody'>
      {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link> */}
      <div className='ranHeading1'>
        <h2><span>&#10224;</span>Home</h2>
      </div>
      <div className='ranMain1'>
      <div className='ranStu'>
        <img className='ranImg' src="https://dev.pulse.brninfotech.com/pulse/modules/uploads/maleProfilePic.png" alt=""></img>
        <h2>Ranjith Kumar</h2>
        <h3>COURSE:IPHONE JOB ORIENTED COURSE</h3>
        <h3>BATCH ID:2101</h3>
        <h3>STUDENT ID:210101</h3>
      </div>
      <div>
        <table className='ranTable1' border='1px' >
          <thead style={{ color: "red" }}>&#11689;ATTENDANCE SUMMARY</thead>
          <tr>
            <th className='ranTable1' width='400'>Total Days</th>
            <td className='ranTable1' width='200'>200</td>
          </tr>
          <tr>
            <th className='ranTable1'>Working Days</th>
            <td className='ranTable1'>180</td>
          </tr>
          <tr>
            <th className='ranTable1'>Leaves</th>
            <td className='ranTable1'>5</td>
          </tr>
          <tr>
            <th className='ranTable1'>Abscents</th>
            <td className='ranTable1'>10</td>
          </tr>
          <tr>
            <th className='ranTable1'>Days Attended</th>
            <td className='ranTable1'>165</td>
          </tr>
          <tr>
            <th className='ranTable1' >Updates Sent</th>
            <td className='ranTable1'>20</td>
          </tr>
          <tr>
            <th className='ranTable1'>Working Hours</th>
            <td className='ranTable1'>1400:00:00</td>
          </tr>
          <tr>
            <th className='ranTable1'>Worked Hours</th>
            <td className='ranTable1'>1200:00:00</td>
          </tr>
          <tr>
            <th className='ranTable1'>Overall Spent Summary</th>
            <td className='ranTable1'>-200:00:00</td>
          </tr>
          <tr>
            <th className='ranTable1'>Worked Per Day(Avg.Hrs)</th>
            <td className='ranTable1'>6:00:00(80%)</td>
          </tr>
          <tr>
            <th className='ranTable1'>Shortage Per Day(Avg.Hrs)</th>
            <td className='ranTable1'>2:00:00(20%)</td>
          </tr>
          <tr>
            <th className='ranTable1'>Late To Office</th>
            <td className='ranTable1'>1</td>
          </tr>
          <tr>
            <th className='ranTable1'>Minimum Hours Missed</th>
            <td className='ranTable1'>4 Times</td>
          </tr>
          <tr>
            <th className='ranTable1'>Max Points</th>
            <td className='ranTable1'>8000</td>
          </tr>
          <tr>
            <th className='ranTable1'>Points Earned</th>
            <td className='ranTable1'>6000</td>
          </tr>
          <tr>
            <th className='ranTable1'>Your Perfomance Score</th>
            <td className='ranTable1'>80%</td>
          </tr>
        </table>
      </div>
      </div>

      <h2 className='ranHeading2'>&#10696; Attendance Details</h2>
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

        <table className='ranTable2' border='1px'>
          <tr>
            <th className='ranTable1'>S.NO:</th>
            <th className='ranTable1'>Date</th>
            <th className='ranTable1'>Day Type</th>
            <th className='ranTable1'>Check In</th>
            <th className='ranTable1'>Check Out</th>
            <th className='ranTable1'>Time Spent</th>
            <th className='ranTable1'>Spent Summary</th>
            <th className='ranTable1'>Points Earned</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Mon,11-Apr-2022</td>
            <td>JustLab</td>
            <td>10:00:00</td>
            <td>06:00:00</td>
            <td>08:00:00</td>
            <td>00:00:00</td>
            <td>30</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Tue,12-Apr-2022</td>
            <td>ClassLab</td>
            <td>10:00:00</td>
            <td>06:00:00</td>
            <td>08:00:00</td>
            <td>00:00:00</td>
            <td>30</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Wed,13-Apr-2022</td>
            <td>JustLab</td>
            <td>10:00:00</td>
            <td>06:00:00</td>
            <td>08:00:00</td>
            <td>00:00:00</td>
            <td>30</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Thu,14-Apr-2022</td>
            <td>ClassLab</td>
            <td>10:00:00</td>
            <td>06:00:00</td>
            <td>08:00:00</td>
            <td>00:00:00</td>
            <td>30</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Fri,15-Apr-2022</td>
            <td>JustLab</td>
            <td>10:00:00</td>
            <td>06:00:00</td>
            <td>08:00:00</td>
            <td>00:00:00</td>
            <td>30</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Sat,16-Apr-2022</td>
            <td>ClassLab</td>
            <td style={{ backgroundColor: "red" }} colspan={2}>Abscent</td>
            <td>00:00:00</td>
            <td>-08:00:00</td>
            <td>-30</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Sun,17-Apr-2022</td>
            <td style={{ backgroundColor: "green" }} colspan={6}>Holiday</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Mon,18-Apr-2022</td>
            <td>JustLab</td>
            <td>10:00:00</td>
            <td>06:00:00</td>
            <td>08:00:00</td>
            <td>00:00:00</td>
            <td>30</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Tue,19-Apr-2022</td>
            <td>ClassLab</td>
            <td>10:00:00</td>
            <td>06:00:00</td>
            <td>08:00:00</td>
            <td>00:00:00</td>
            <td>30</td>
          </tr>
          <tr>
            <td>10</td>
            <td>Wed,20-Apr-2022</td>
            <td>JustLab</td>
            <td style={{ backgroundColor: "red" }} colspan={2}>Abscent</td>
            <td>00:00:00</td>
            <td>-08:00:00</td>
            <td>-30</td>
          </tr>
          <tr>
            <td>11</td>
            <td>Thu,21-Apr-2022</td>
            <td>ClassLab</td>
            <td>10:00:00</td>
            <td>06:00:00</td>
            <td>08:00:00</td>
            <td>00:00:00</td>
            <td>30</td>
          </tr>
          <tr>
            <td>12</td>
            <td>Fri,22-Apr-2022</td>
            <td>JustLab</td>
            <td>10:00:00</td>
            <td>06:00:00</td>
            <td>08:00:00</td>
            <td>00:00:00</td>
            <td>30</td>
          </tr>
          <tr>
            <td>13</td>
            <td>Sat,23-Apr-2022</td>
            <td>ClassLab</td>
            <td>10:00:00</td>
            <td>06:00:00</td>
            <td>08:00:00</td>
            <td>00:00:00</td>
            <td>30</td>
          </tr>
          <tr>
            <td>14</td>
            <td>Sun,24-Apr-2022</td>
            <td style={{ backgroundColor: "green" }} colspan={6}>Holiday</td>
          </tr>
          <tr>
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
      
    </div>
    </div>
  );
}

export default Home;
