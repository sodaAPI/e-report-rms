import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import EditReports from "./pages/dashboard/components/editReports";
import EditUsers from "./pages/dashboard/components/editUsers";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/forgotPassword";
import PageNotFound from "./components/pageNotFound";
import AddReports from "./pages/dashboard/components/addReports";
import AddUsers from "./pages/dashboard/components/addUsers";
import Users from "./pages/dashboard/Users";
import Reports from "./pages/dashboard/Reports";
import Meeting from "./pages/dashboard/Meeting";
import AddMeetings from "./pages/dashboard/components/addMeetings";
import EditMeetings from "./pages/dashboard/components/editMeetings";
import Discussion from "./pages/dashboard/discussion/discussionPage";
import Profile from "./pages/personal/Profile";
import EditProfiles from "./pages/personal/components/editProfiles";
import FAQ from "./pages/settings/FAQ";
import Task from "./pages/personal/Task";
import EditTasks from "./pages/personal/components/editTasks";
import AddTasks from "./pages/personal/components/addTasks";
import TaskCompleted from "./pages/personal/components/taskCompleted";
import TaskUncompleted from "./pages/personal/components/taskUncompleted";
import ReportsComplete from "./pages/dashboard/reportComplete";
import ReportsInProgress from "./pages/dashboard/reportInProgress";
import ResetPassword from "./pages/resetPassword";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Global */}

          <Route path="/home" element={<Home />} />
          <Route path="/*" element={<PageNotFound />} />
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />

          {/* Dashboard */}

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/report" element={<Reports />} />
          <Route path="/dashboard/report/completed" element={<ReportsComplete/>} />
          <Route path="/dashboard/report/in_progress" element={<ReportsInProgress/>} />
          <Route path="/dashboard/user" element={<Users />} />
          <Route path="/dashboard/discussion" element={<Discussion />} />
          <Route path="/dashboard/meeting" element={<Meeting />} />

          {/* Dashboard Edit */}

          <Route path="/dashboard/user/edit/:id" element={<EditUsers />} />
          <Route path="/dashboard/report/edit/:id" element={<EditReports />} />
          <Route
            path="/dashboard/meeting/edit/:id"
            element={<EditMeetings />}
          />
          <Route path="/dashboard/task/edit/:id" element={<EditTasks />} />

          {/* Dashboard Add */}

          <Route path="/dashboard/report/add" element={<AddReports />} />
          <Route path="/dashboard/user/add" element={<AddUsers />} />
          <Route path="/dashboard/meeting/add" element={<AddMeetings />} />
          <Route path="/dashboard/task/add" element={<AddTasks />} />

          {/* Personal */}

          <Route path="/dashboard/profile" element={<Profile />} />
          <Route
            path="/dashboard/profile/edit/:id"
            element={<EditProfiles />}
          />
          <Route path="/dashboard/task" element={<Task />} />
          <Route path="/task/completed" element={<TaskCompleted />} />
          <Route path="/task/uncompleted" element={<TaskUncompleted />} />

          {/* Info */}

          <Route path="/dashboard/faq" element={<FAQ />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
