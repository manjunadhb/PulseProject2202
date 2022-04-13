import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import PageNotFound from './components/PageNotFound';
import Home from './components/Home';
import DSU from './components/DSU';
import Tasks from './components/Tasks';
import Messages from './components/Messages';
import Requests from './components/Requests';
import Leaves from './components/Leaves';
import ManageTasks from './components/ManageTasks';
import Presantation from './components/Presantation';
import TaskReview from './components/TaskReview';
import CreateTask from './components/CreateTask';
import ClassAttendence from './components/ClassAttendence';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
       
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route>
        <Route path="home" element={<Home/>}></Route>
        <Route path="dsu" element={<DSU/>}></Route>
        <Route path="tasks" element={<Tasks/>}></Route>
        <Route path="messages" element={<Messages/>}></Route>
        <Route path="requests" element={<Requests/>}></Route>
        <Route path="leaves" element={<Leaves/>}></Route>
        <Route path="*" element={<PageNotFound/>}></Route>
        <Route path="manageTasks" element={<ManageTasks/>}>
        
        <Route path="presentation" element={<Presantation/>}></Route>
        <Route path="taskReview" element={<TaskReview/>}></Route>
        <Route path="createTasks" element={<CreateTask/>}></Route>
        <Route path="classAttendence" element={<ClassAttendence/>}></Route></Route>
        <Route path="taskReview/:userName" element={<TaskReview/>}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
