// src/pages/DirectorDashboard.jsx
import React, { useState } from "react";
import AddTeacherForm from "../components/AddTeacherForm";
import WeeklyScheduleForm from "../components/WeeklyScheduleForm";
import TeacherList from "../components/TeacherList";

const DirectorDashboard = () => {
  const [teachers, setTeachers] = useState([]);
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const addTeacher = (teacher) => {
    setTeachers((prev) => [...prev, teacher]);
  };

  const addSchedule = (teacherId, schedule) => {
    setTeachers((prev) =>
      prev.map((t) => (t.id === teacherId ? { ...t, schedule } : t))
    );
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Director Dashboard</h1>

      <AddTeacherForm onAdd={addTeacher} />

      <TeacherList teachers={teachers} onSelect={setSelectedTeacher} />

      {selectedTeacher && (
        <WeeklyScheduleForm teacher={selectedTeacher} onSave={addSchedule} />
      )}
    </div>
  );
};

export default DirectorDashboard;
