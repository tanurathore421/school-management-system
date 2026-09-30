import React from "react";
import "./marks.css";

function Marks() {
  return (
    <div className="student-marks-page">

      <div className="student-marks-header">
        <h1>My Marks</h1>
        <p>View your unit test, assignment and mid-term marks.</p>
      </div>

      <div className="student-marks-table-container">

        <table className="student-marks-table">

          <thead>
            <tr>
              <th>Subject</th>
              <th>Unit Test</th>
              <th>Assignment</th>
              <th>Mid Term</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Mathematics</td>
              <td>18 / 20</td>
              <td>9 / 10</td>
              <td>42 / 50</td>
            </tr>

            <tr>
              <td>Science</td>
              <td>16 / 20</td>
              <td>10 / 10</td>
              <td>39 / 50</td>
            </tr>

            <tr>
              <td>English</td>
              <td>19 / 20</td>
              <td>9 / 10</td>
              <td>44 / 50</td>
            </tr>

            <tr>
              <td>Hindi</td>
              <td>17 / 20</td>
              <td>8 / 10</td>
              <td>41 / 50</td>
            </tr>

            <tr>
              <td>Computer</td>
              <td>20 / 20</td>
              <td>10 / 10</td>
              <td>46 / 50</td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Marks;