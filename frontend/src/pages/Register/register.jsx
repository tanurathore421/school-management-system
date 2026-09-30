import React, { useState } from "react";
import axios from "axios";
import "./register.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/register",
        {
          name,
          email,
          password,
        }
      );

      console.log(response.data);

      alert("Registration successful");

      window.location.href = "/login";
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message || "Registration failed"
      );
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Student Registration</h2>
        <p>Create your student account</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit">
            Register
          </button>
        </form>

        <p className="login-text">
          Already have an account?{" "}
          <a href="/">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Register;