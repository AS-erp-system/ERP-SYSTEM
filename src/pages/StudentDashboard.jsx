import React, { useState } from "react";
import WeeklyScheduleViewer from "../components/WeeklyScheduleViewer";
import ScoreTable from "../components/ScoreTable";

const mockSchedule = [
  {
    subject: "Math",
    className: "10A",
    day: "Monday",
    start: "09:00",
    end: "09:45",
  },
  {
    subject: "Physics",
    className: "10A",
    day: "Tuesday",
    start: "10:00",
    end: "10:45",
  },
  {
    subject: "History",
    className: "10A",
    day: "Wednesday",
    start: "11:00",
    end: "11:45",
  },
];

const mockScores = [
  { date: "2025-04-01", subject: "Math", score: 4 },
  { date: "2025-04-02", subject: "Physics", score: 5 },
  { date: "2025-04-03", subject: "History", score: 3 },
  { date: "2025-04-08", subject: "Math", score: 5 },
];

const StudentDashboard = () => {
  const [weeklySchedule] = useState(mockSchedule);
  const [scores] = useState(mockScores);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Student Dashboard</h1>

      <WeeklyScheduleViewer schedule={weeklySchedule} />
      <ScoreTable scores={scores} />
    </div>
  );
};

export default StudentDashboard;
