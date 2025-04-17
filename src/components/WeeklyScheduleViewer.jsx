import React from "react";

const WeeklyScheduleViewer = ({ schedule }) => {
  const grouped = schedule.reduce((acc, item) => {
    if (!acc[item.day]) acc[item.day] = [];
    acc[item.day].push(item);
    return acc;
  }, {});

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-semibold mb-2">Weekly Schedule</h2>
      {days.map((day) => (
        <div key={day} className="mb-4">
          <h3 className="text-lg font-medium">{day}</h3>
          {grouped[day] ? (
            <ul className="list-disc ml-5">
              {grouped[day].map((lesson, idx) => (
                <li key={idx}>
                  {lesson.subject} ({lesson.className}) — {lesson.start} to{" "}
                  {lesson.end}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500">No lessons</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default WeeklyScheduleViewer;
