import React from "react";
import "./adminDashboard.css";

function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <p>Welcome to the School Management System.</p>

      <div className="admin-dashboard-cards">
        <div className="admin-card">
          <h3>👨‍🎓 Students</h3>
          <p>Manage students</p>
        </div>

        <div className="admin-card">
          <h3>👨‍🏫 Staff</h3>
          <p>Manage staff members</p>
        </div>

        <div className="admin-card">
          <h3>📋 Attendance</h3>
          <p>Manage attendance</p>
        </div>

        <div className="admin-card">
          <h3>📝 Marks</h3>
          <p>Manage marks</p>
        </div>

        <div className="admin-card">
          <h3>📊 Results</h3>
          <p>Manage results</p>
        </div>

        <div className="admin-card">
          <h3>📢 Notices</h3>
          <p>Manage notices</p>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;