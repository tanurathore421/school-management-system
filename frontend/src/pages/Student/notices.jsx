import React from "react";
import "./notices.css";

function Notices() {
  return (
    <div className="notices-page">

      <div className="notices-header">
        <h1>School Notices</h1>
        <p>Important announcements and updates from the school.</p>
      </div>

      <div className="notices-list">

        <div className="notice-card">
          <div className="notice-icon">📢</div>

          <div className="notice-content">
            <h2>Annual Function</h2>
            <p>
              The annual function will be held next month.
              Students are requested to participate actively.
            </p>
            <span>Posted on: 25 September 2026</span>
          </div>
        </div>

        <div className="notice-card">
          <div className="notice-icon">📚</div>

          <div className="notice-content">
            <h2>Examination Schedule</h2>
            <p>
              The examination schedule has been released.
              Students can check the examination timetable.
            </p>
            <span>Posted on: 22 September 2026</span>
          </div>
        </div>

        <div className="notice-card">
          <div className="notice-icon">🏫</div>

          <div className="notice-content">
            <h2>School Holiday</h2>
            <p>
              The school will remain closed on Monday due to
              a public holiday.
            </p>
            <span>Posted on: 20 September 2026</span>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Notices;