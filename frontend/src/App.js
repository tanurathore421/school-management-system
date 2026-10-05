import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/Login/login";
import Register from "./pages/Register/register";

import AdminDashboard from "./pages/Admin/adminDashboard";

import StaffDashboard from "./pages/Staff/staffDashboard";
import StaffProtectedRoute from "./components/staffProtectedRoute";
import StaffLayout from "./components/Layout/staffLayout";
import Students from "./pages/Staff/students";
import StaffAttendance from "./pages/Staff/attendance";
import StaffMarks from "./pages/Staff/marks";
import StaffTimetable from "./pages/Staff/timetable";
import StaffNotices from "./pages/Staff/notice";
import StaffResults from "./pages/Staff/results";

import StudentLayout from "./components/Layout/studentLayout";
import StudentDashboard from "./pages/Student/studentDashboard";
import Notices from "./pages/Student/notices";
import Marks from "./pages/Student/marks";
import Attendance from "./pages/Student/attendance";
import Timetable from "./pages/Student/timetable";
import Result from "./pages/Student/result";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login & Register */}

        <Route path="/" element={<Login />} />

        <Route path="/register" element={<Register />} />

        {/* Admin */}

        <Route path="/admin" element={<AdminDashboard />} />

        {/* Staff */}

        <Route
          path="/staff"
          element={
            <StaffProtectedRoute>
              <StaffLayout />
            </StaffProtectedRoute>
          }
        >
          <Route index element={<StaffDashboard />} />
          <Route path="students" element={<Students />} />
          <Route path="attendance" element={<StaffAttendance />} />
          <Route path="marks" element={<StaffMarks />} />
          <Route path="timetable" element={<StaffTimetable />} />
          <Route path="notices" element={<StaffNotices />} />
          <Route path="results" element={<StaffResults />} />
        </Route>

        {/* Student */}

        <Route path="/student" element={<StudentLayout />}>
          <Route index element={<StudentDashboard />} />
          <Route path="marks" element={<Marks />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="timetable" element={<Timetable />} />
          <Route path="result" element={<Result />} />
          <Route path="notices" element={<Notices />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
