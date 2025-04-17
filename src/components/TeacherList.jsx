import React from "react";

const TeacherList = ({ teachers, onSelect }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-semibold mb-2">Teacher List</h2>
      <ul className="space-y-1">
        {teachers.map((teacher) => (
          <li
            key={teacher.id}
            className="flex justify-between items-center border-b py-1"
          >
            <span>{teacher.name}</span>
            <button
              className="text-sm text-blue-600 hover:underline"
              onClick={() => onSelect(teacher)}
            >
              Add Schedule
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeacherList;
