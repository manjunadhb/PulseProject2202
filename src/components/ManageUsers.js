import React from "react";
import { Table } from "react-bootstrap";
import Navbar1 from "./Navbar1";

function ManageUsers() {
  return (
    <div>
    
      <div className="mg">
        <div className="manage">
          <h1>&#128172;Manage Users</h1>
          <span> &#128295;</span>
        </div>

        <div className="option">
          <div>
            <form>
              {/* <label for="burgers"><h4>Number of burgers (1-15):</h4> </label> */}
              <input
                type="number"
                id="burgers"
                name="burgers"
                min="1"
                max="15"
                placeholder="Enter Here"
              />
              records
            </form>
          </div>
          <div>
            <p>
              search
              <select>
                <option>all</option>
                <option>1</option>
              </select>
            </p>
          </div>
        </div>

        <Table striped bordered hover variant="lightdark">
          <tbody>
            <tr>
              <th>ID</th>
              <th>Photograph</th>
              <th>First Name</th>
              <th>Surname</th>
              <th>Email</th>
              <th>Mobile NO.</th>
              <th>Role</th>
              <th>Edit</th>
              <th>Approve</th>
              <th>Delete</th>
            </tr>

            <tr>
              <td>1740</td>
              <td>
                <img
                  className="im"
                  src="https://dev.pulse.brninfotech.com/pulse/modules/uploads/maleProfilePic.png"
                ></img>
              </td>
              <td>
                <a href="./home">student 22230</a>
              </td>
              <td>Sai ram</td>
              <td>jhone@gmail.com</td>
              <td>910000000</td>
              <td>Student</td>
              <td>Approve</td>
              <td>Edit</td>
              <td>
                <button>Delete</button>
              </td>
            </tr>

            <tr>
              <td>1740</td>
              <td>
                <img
                  className="im"
                  src="https://dev.pulse.brninfotech.com/pulse/modules/uploads/femaleProfilePic.png"
                ></img>
              </td>
              <td>
                <a href="./home">student 22230</a>
              </td>
              <td></td>
              <td>jhone@gmail.com</td>
              <td></td>
              <td>Student</td>
              <td>Approve</td>
              <td>Edit</td>
              <td>
                <button>Delete</button>
              </td>
            </tr>

            <tr>
              <td>1740</td>
              <td>
                <img
                  className="im"
                  src="https://dev.pulse.brninfotech.com/pulse/modules/uploads/maleProfilePic.png"
                ></img>
              </td>
              <td>
                <a href="./home">student 22230</a>
              </td>
              <td></td>
              <td>jhone@gmail.com</td>
              <td></td>
              <td>Student</td>
              <td>Approve</td>
              <td>Edit</td>
              <td>
                <button>Delete</button>
              </td>
            </tr>

            <tr>
              <td>1740</td>
              <td>
                <img
                  className="im"
                  src="https://dev.pulse.brninfotech.com/pulse/modules/uploads/femaleProfilePic.png"
                ></img>
              </td>
              <td>
                <a href="./home">student 22230</a>
              </td>
              <td>Rani </td>
              <td>jhone@gmail.com</td>
              <td>9010000000</td>
              <td>Student</td>
              <td>Approve</td>
              <td>Edit</td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default ManageUsers;
