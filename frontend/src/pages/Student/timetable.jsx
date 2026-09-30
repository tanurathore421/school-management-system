
import "./timetable.css";

function Timetable() {
  return (
    <div className="student-timetable-page">

      <div className="timetable-header">
        <h1>Class Timetable</h1>
        <p>View your weekly class schedule.</p>
      </div>

      <div className="timetable-container">

        <table className="timetable-table">

          <thead>
            <tr>
              <th>Time</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>09:00 - 10:00</td>
              <td>Maths</td>
              <td>English</td>
              <td>Science</td>
              <td>Maths</td>
              <td>Computer</td>
              <td>Hindi</td>
            </tr>

            <tr>
              <td>10:00 - 11:00</td>
              <td>Science</td>
              <td>Maths</td>
              <td>English</td>
              <td>Computer</td>
              <td>Science</td>
              <td>Maths</td>
            </tr>

            <tr>
              <td>11:00 - 11:30</td>
              <td className="break">Break</td>
              <td className="break">Break</td>
              <td className="break">Break</td>
              <td className="break">Break</td>
              <td className="break">Break</td>
              <td className="break">Break</td>
            </tr>

            <tr>
              <td>11:30 - 12:30</td>
              <td>Computer</td>
              <td>Hindi</td>
              <td>Maths</td>
              <td>English</td>
              <td>Science</td>
              <td>Computer</td>
            </tr>

            <tr>
              <td>12:30 - 01:30</td>
              <td>English</td>
              <td>Science</td>
              <td>Computer</td>
              <td>Hindi</td>
              <td>Maths</td>
              <td>Sports</td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Timetable;