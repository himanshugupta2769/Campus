import "./App.css";
import { BrowserRouter, Route, Routes, withRouter } from "react-router-dom";
import AdminDashboard from "./components/Admin/Dashboard";
import User from "./components/Admin/User";
import Student from "./components/Admin/Student";
import Profile from "./components/Admin/Profile";
import Adduser from "./components/Admin/Adduser";
import Addstu from "./components/Admin/Addstu";
import store from "./store";
import { userAction } from "./Redux/Actions/userAction";
import { Provider } from "react-redux";
import Login from "./components/Login/Log";
import Nav from "./components/Admin/Nav";
import UpadteStudent from './components/Admin/Updatestudent'
import UpadteUser from "./components/Admin/Updateuser";
import Library from "./components/Admin/Lirary";
import NavAcademic from "./components/Academic/NavAcademic";
import DashboardAcademic from "./components/Academic/DashboardAcademic";
import ProfileAcademic from "./components/Academic/ProfileAcademic";
import StudentAcademic from "./components/Academic/StudentAcademic";
import AddstuAcademic from "./components/Academic/AddStuAcademic";
import UpadteStudentAcademic from "./components/Academic/UpdatestudentAcademic";

import NavAccount from "./components/Accountant/NavAccount";
import DashboardAccount from "./components/Accountant/DashboardAccount";
import ProfileAccount from "./components/Accountant/ProfileAccount";
import StudentAccount from "./components/Accountant/StudentAccount";
import Forgot from "./components/Login/Forgot";


import NavLirary from "./components/Library/NavLirary";
import DashboardLirary from "./components/Library/DashboardLirary";
import StudentLirary from "./components/Library/StudentLirary";
import ProfileLirary from "./components/Library/ProfileLirary";
import BookStudentLirary from "./components/Library/BookStudentLirary";
import StudentLiraryBook from './components/Library/StudentLiraryBook'



function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Forgot" element={<Forgot />} />
        </Routes>

        <Routes>
          <Route path="/Nav" element={<Nav />}>
            <Route path="/Nav/AdminDashboard" element={<AdminDashboard />} />
            <Route path="/Nav/User" element={<User />} />
            <Route path="/Nav/Adduser" element={<Adduser />} />
            <Route path="/Nav/Profile" element={<Profile />} />
            <Route path="/Nav/Student" element={<Student />} />
            <Route path="/Nav/Addstu" element={<Addstu />} />
            <Route path="/Nav/UpadteStudent/:id" element={<UpadteStudent />} />
            <Route path="/Nav/UpadteUser/:id" element={<UpadteUser />} />
            <Route path="/Nav/Library" element={<Library />} />
          </Route>
        </Routes>

        <Routes>
          <Route path="/NavAcademic" element={<NavAcademic />}>
            <Route
              path="/NavAcademic/DashboardAcademic"
              element={<DashboardAcademic />}
            />
            <Route
              path="/NavAcademic/ProfileAcademic"
              element={<ProfileAcademic />}
            />
            <Route
              path="/NavAcademic/StudentAcademic"
              element={<StudentAcademic />}
            />
            <Route
              path="/NavAcademic/AddstuAcademic"
              element={<AddstuAcademic />}
            />
            <Route
              path="/NavAcademic/UpadteStudentAcademic/:id"
              element={<UpadteStudentAcademic />}
            />
            {/*<Route path="/Nav/UpadteUser" element={<UpadteUser />} />
            <Route path="/Nav/Library" element={<Library />} /> */}
          </Route>
        </Routes>

        <Routes>
          <Route path="/NavAccount" element={<NavAccount />}>
            <Route
              path="/NavAccount/DashboardAccount"
              element={<DashboardAccount />}
            />
            <Route
              path="/NavAccount/ProfileAccount"
              element={<ProfileAccount />}
            />
            <Route
              path="/NavAccount/StudentAccount"
              element={<StudentAccount />}
            />
            {/* <Route
              path="/NavAccount/AddstuAcademic"
              element={<AddstuAcademic />}
            /> */}
            {/* <Route
              path="/NavAccount/UpadteStudentAcademic"
              element={<UpadteStudentAcademic />}
            /> */}
            {/*<Route path="/Nav/UpadteUser" element={<UpadteUser />} />
            <Route path="/Nav/Library" element={<Library />} /> */}
          </Route>
        </Routes>

        <Routes>
          <Route path="/NavLirary" element={<NavLirary />}>
            <Route
              path="/NavLirary/DashboardLirary"
              element={<DashboardLirary />}
            />
            <Route
              path="/NavLirary/ProfileLirary"
              element={<ProfileLirary />}
            />
            <Route
              path="/NavLirary/StudentLirary"
              element={<StudentLirary />}
            />
            <Route
              path="/NavLirary/BookStudentLirary/:id"
              element={<BookStudentLirary />}
            />
            <Route
              path="/NavLirary/StudentLiraryBook/"
              element={<StudentLiraryBook />}
            />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}
export default App;
