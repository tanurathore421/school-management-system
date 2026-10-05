import React, { useEffect, useState } from "react";
import axios from "axios";
import "./attendance.css";

function Attendance() {
  const [attendance, setAttendance] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAttendance = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/student/attendance",
          {
            withCredentials: true,
          }
        );

        setAttendance(response.data);
      } catch (error) {
        console.error("Error fetching attendance:", error);
      } finally {
        setLoading(false);
      }
    };

    getAttendance();
  }, []);

  const presentDays = attendance.filter(
    (item) => item.status === "Present"
  ).length;

  const absentDays = attendance.filter(
    (item) => item.status === "Absent"
  ).length;

  const totalDays = attendance.length;

  const percentage =
    totalDays > 0
      ? Math.round((presentDays / totalDays) * 100)
      : 0;

  if (loading) {
    return <p>Loading attendance...</p>;
  }

  return (
    <div className="student-attendance-page">
      <div className="student-attendance-header">
        <h1>My Attendance</h1>
        <p>View your daily attendance record.</p>
      </div>

      <div className="attendance-summary">
        <div className="attendance-card">
          <h3>Present</h3>
          <p>{presentDays} Days</p>
        </div>

        <div className="attendance-card">
          <h3>Absent</h3>
          <p>{absentDays} Days</p>
        </div>

        <div className="attendance-card">
          <h3>Total</h3>
          <p>{totalDays} Days</p>
        </div>

        <div className="attendance-card">
          <h3>Percentage</h3>
          <p>{percentage}%</p>
        </div>
      </div>

      <div className="student-attendance-table-container">
        <table className="student-attendance-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Day</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {attendance.length > 0 ? (
              attendance.map((item) => (
                <tr key={item._id}>
                  <td>
                    {new Date(item.date).toLocaleDateString()}
                  </td>

                  <td>
                    {new Date(item.date).toLocaleDateString(
                      "en-US",
                      { weekday: "long" }
                    )}
                  </td>

                  <td>{item.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">
                  No attendance available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Attendance;