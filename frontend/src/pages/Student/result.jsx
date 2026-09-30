import React from "react";
import "./result.css";

function Result() {
  return (
    <div className="student-results-page">

      <div className="student-results-header">
        <h1>My Result</h1>
        <p>View your final examination result and overall performance.</p>
      </div>

      {/* Result Summary */}

      <div className="result-summary">

        <div className="result-card">
          <h2>Total Marks</h2>
          <p>425 / 500</p>
        </div>

        <div className="result-card">
          <h2>Percentage</h2>
          <p>85%</p>
        </div>

        <div className="result-card">
          <h2>Grade</h2>
          <p>A</p>
        </div>

        <div className="result-card">
          <h2>Result</h2>
          <p className="pass">Pass</p>
        </div>

      </div>

      {/* Final Examination Table */}

      <div className="result-table-container">

        <h2>Final Examination - 2026</h2>

        <table className="student-results-table">

          <thead>
            <tr>
              <th>Subject</th>
              <th>Maximum Marks</th>
              <th>Obtained Marks</th>
              <th>Grade</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Mathematics</td>
              <td>100</td>
              <td>85</td>
              <td>A</td>
            </tr>

            <tr>
              <td>Science</td>
              <td>100</td>
              <td>78</td>
              <td>B+</td>
            </tr>

            <tr>
              <td>English</td>
              <td>100</td>
              <td>88</td>
              <td>A</td>
            </tr>

            <tr>
              <td>Hindi</td>
              <td>100</td>
              <td>82</td>
              <td>A</td>
            </tr>

            <tr>
              <td>Computer</td>
              <td>100</td>
              <td>92</td>
              <td>A+</td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Result;