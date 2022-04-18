import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";

import DSU from "./components/DSU";
import Tasks from "./components/Tasks";
import Messages from "./components/Messages";
import Requests from "./components/Requests";
import Leaves from "./components/Leaves";
import AdminDashboard from "./components/AdminDashboard";
import AdminReports from "./components/AdminReports";
import AdminManage from "./components/AdminManage";
import AdminSettings from "./components/AdminSettings";
import Home from "./components/Home";
import Forgotpassword from "./components/Forgotpassword";
import BatchSummary from "./components/BatchSummary";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="Forgotpassword" element={<Forgotpassword />}></Route>
          <Route path="batchsummary" element={<BatchSummary/>}/>
          //..............................For
          Admin......................................................//




          <Route path="adminDashboard/*" element={<AdminDashboard />}></Route>
          <Route path="adminReports" element={<AdminReports />}></Route>
          <Route path="adminManage" element={<AdminManage />}></Route>
          <Route path="adminSettings" element={<AdminSettings />}></Route>




          //.........................For Student
          ..............................................//




          <Route path="home/*" element={<Home />}></Route>
          <Route path="dsu" element={<DSU />}></Route>
          <Route path="tasks" element={<Tasks />}></Route>
          <Route path="messages" element={<Messages />}></Route>
          <Route path="requests" element={<Requests />}></Route>
          <Route path="leaves" element={<Leaves />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
          
        </Routes>
      </BrowserRouter>

      
      
    </div>
  );
}

export default App;
