import React from "react";

const ScoreTable = ({ scores }) => {
  const sorted = [...scores].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-semibold mb-2">Your Scores</h2>
      <table className="w-full table-auto text-sm border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-2 py-1">Date</th>
            <th className="border px-2 py-1">Subject</th>
            <th className="border px-2 py-1">Score</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((score, idx) => (
            <tr key={idx}>
              <td className="border px-2 py-1">{score.date}</td>
              <td className="border px-2 py-1">{score.subject}</td>
              <td className="border px-2 py-1">{score.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScoreTable;
