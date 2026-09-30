import React from "react";
import "./attendance.css";

function Attendance() {
  return (
    <div className="student-attendance-page">

      <div className="student-attendance-header">
        <h1>Attendance</h1>
        <p>View your monthly attendance record.</p>
      </div>

      {/* Month */}
      <div className="attendance-month">
        <label>Month:</label>
        <select>
          <option>September 2026</option>
          <option>August 2026</option>
          <option>July 2026</option>
        </select>
      </div>

      {/* Summary */}
      <div className="attendance-summary">

        <div className="attendance-card">
          <h2>Present</h2>
          <p>22 Days</p>
        </div>

        <div className="attendance-card">
          <h2>Absent</h2>
          <p>3 Days</p>
        </div>

        <div className="attendance-card">
          <h2>Total</h2>
          <p>25 Days</p>
        </div>

        <div className="attendance-card">
          <h2>Percentage</h2>
          <p>88%</p>
        </div>

      </div>

      {/* Attendance Table */}
      <div className="attendance-table-container">

        <h2>September 2026 Attendance</h2>

        <table className="student-attendance-table">

          <thead>
            <tr>
              <th>Date</th>
              <th>Day</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>01 Sep</td>
              <td>Tuesday</td>
              <td className="present">Present</td>
            </tr>

            <tr>
              <td>02 Sep</td>
              <td>Wednesday</td>
              <td className="present">Present</td>
            </tr>

            <tr>
              <td>03 Sep</td>
              <td>Thursday</td>
              <td className="absent">Absent</td>
            </tr>

            <tr>
              <td>04 Sep</td>
              <td>Friday</td>
              <td className="present">Present</td>
            </tr>

            <tr>
              <td>05 Sep</td>
              <td>Saturday</td>
              <td className="present">Present</td>
            </tr>

            <tr>
              <td>07 Sep</td>
              <td>Monday</td>
              <td className="present">Present</td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Attendance;