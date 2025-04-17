import React, { useState } from "react";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const initialSchedule = {
  subject: "",
  className: "",
  day: "Monday",
  start: "",
  end: "",
};

const WeeklyScheduleForm = ({ teacher, onSave }) => {
  const [entries, setEntries] = useState([initialSchedule]);

  const handleChange = (index, key, value) => {
    const updated = [...entries];
    updated[index][key] = value;
    setEntries(updated);
  };

  const addRow = () => {
    setEntries((prev) => [...prev, initialSchedule]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(teacher.id, entries);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
      <h2 className="font-semibold mb-2">Weekly Schedule for {teacher.name}</h2>
      {entries.map((entry, idx) => (
        <div key={idx} className="grid grid-cols-6 gap-2 mb-2">
          <input
            type="text"
            placeholder="Subject"
            value={entry.subject}
            onChange={(e) => handleChange(idx, "subject", e.target.value)}
            className="border px-2 py-1 rounded"
          />
          <input
            type="text"
            placeholder="Class"
            value={entry.className}
            onChange={(e) => handleChange(idx, "className", e.target.value)}
            className="border px-2 py-1 rounded"
          />
          <select
            value={entry.day}
            onChange={(e) => handleChange(idx, "day", e.target.value)}
            className="border px-2 py-1 rounded"
          >
            {days.map((d) => (
              <option key={d}>{d}</option>
            ))}
          </select>
          <input
            type="time"
            value={entry.start}
            onChange={(e) => handleChange(idx, "start", e.target.value)}
            className="border px-2 py-1 rounded"
          />
          <input
            type="time"
            value={entry.end}
            onChange={(e) => handleChange(idx, "end", e.target.value)}
            className="border px-2 py-1 rounded"
          />
        </div>
      ))}
      <button type="button" onClick={addRow} className="text-blue-600 mb-2">
        + Add Row
      </button>
      <br />
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Save Schedule
      </button>
    </form>
  );
};

export default WeeklyScheduleForm;
