import  { useEffect, useState } from "react";
import axios from "axios";
import "./adminDashboard.css";

function AdminDashboard() {
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const getAdminDashboard = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/auth/admin");
        console.log(response.data);

        setAdmin(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getAdminDashboard();
  }, []);

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <p>School Management System</p>
      </div>

      <div className="admin-cards">
        <div className="admin-card">
          <h3>Manage Staff</h3>
          <p>Add, view and manage staff members.</p>
        </div>

        <div className="admin-card">
          <h3>Manage Students</h3>
          <p>View and manage student records.</p>
        </div>

        <div className="admin-card">
          <h3>Attendance</h3>
          <p>Monitor student attendance.</p>
        </div>

        <div className="admin-card">
          <h3>Reports</h3>
          <p>View school management reports.</p>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;