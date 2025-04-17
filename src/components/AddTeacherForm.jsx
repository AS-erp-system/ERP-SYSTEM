import React, { useState } from "react";

const AddTeacherForm = ({ onAdd }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      onAdd({ id: Date.now(), name, schedule: [] });
      setName("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
      <h2 className="font-semibold mb-2">Add Teacher</h2>
      <div className="flex space-x-2">
        <input
          type="text"
          placeholder="Teacher name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border px-2 py-1 rounded w-full"
        />
        <button className="bg-blue-500 text-white px-4 py-1 rounded">
          Add
        </button>
      </div>
    </form>
  );
};

export default AddTeacherForm;
