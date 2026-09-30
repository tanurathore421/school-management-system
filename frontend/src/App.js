
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/login';
import Register from './pages/Register/register'
import AdminDashboard from './pages/Admin/adminDashboard';
import StudentDashboard from './pages/Student/studentDashboard';
import StaffDashboard from './pages/Staff/staffDashboard';

import Notices from './pages/Student/notices';
import Marks from './pages/Student/marks';
import Attendance from './pages/Student/attendance';
import Timetable from './pages/Student/timetable';
import Result from './pages/Student/result';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminDashboard />} />
       <Route path="/staff" element={<StaffDashboard />} /> 
        <Route path="/student" element={<StudentDashboard />} />

      <Route path="/student/notices" element={<Notices />} />
      <Route path="/student/marks" element={<Marks />} />
      <Route path="/student/attendance" element={<Attendance />} />
      <Route path="/student/timetable" element={<Timetable />} />
      <Route path="/student/result" element={<Result />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
