import React from "react";
import "./staffDashboard.css";

function StaffDashboard() {
  return (
    <>
      {/* Header */}
      <header className="staff-topbar">
        <div>
          <h1>Staff Dashboard</h1>
          <p>Manage your classes and student activities.</p>
        </div>

        <div className="staff-profile">
          <div className="staff-profile-icon">
            👤
          </div>

          <div>
            <strong>Staff Member</strong>
            <span>Teacher</span>
          </div>
        </div>
      </header>

      {/* Dashboard Cards */}
      <section className="staff-grid">

        <div className="staff-card">
          <div className="staff-card-icon">
            👨‍🎓
          </div>

          <h2>Students</h2>
          <p>View and manage students assigned to you.</p>

          <button>View Students</button>
        </div>

        <div className="staff-card">
          <div className="staff-card-icon">
            📅
          </div>

          <h2>Attendance</h2>
          <p>Mark and view student attendance.</p>

          <button>Manage Attendance</button>
        </div>

        <div className="staff-card">
          <div className="staff-card-icon">
            📝
          </div>

          <h2>Marks</h2>
          <p>Add and update student marks.</p>

          <button>Manage Marks</button>
        </div>

        <div className="staff-card">
          <div className="staff-card-icon">
            🕐
          </div>

          <h2>Timetable</h2>
          <p>View your class timetable.</p>

          <button>View Timetable</button>
        </div>

        <div className="staff-card">
          <div className="staff-card-icon">
            📢
          </div>

          <h2>Notices</h2>
          <p>View important school announcements.</p>

          <button>Manage Notices</button>
        </div>

      </section>
    </>
  );
}

export default StaffDashboard;