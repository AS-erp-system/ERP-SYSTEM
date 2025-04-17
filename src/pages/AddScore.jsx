// React Frontend for School ERP System
// ✅ Login Page
// ✅ Teacher Dashboard
// ✅ Add Score Page
// ✅ Add Route for Add Score Page

// 📁 src/pages/AddScore.jsx
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Table, InputNumber, Button, message, Typography } from "antd";
import axios from "axios";

const { Title } = Typography;

export default function AddScore() {
  const { lessonId } = useParams();
  const [students, setStudents] = useState([]);
  const [scores, setScores] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) return message.error("Unauthorized");

    axios
      .get(`/api/lessons/${lessonId}/students`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setStudents(res.data))
      .catch(() => message.error("Failed to load students"))
      .finally(() => setLoading(false));
  }, [lessonId]);

  const handleChange = (studentId, value) => {
    setScores((prev) => ({ ...prev, [studentId]: value }));
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem("access_token");
    try {
      await axios.post(
        `/api/lessons/${lessonId}/scores`,
        {
          scores,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      message.success("Scores submitted successfully");
      navigate("/teacher");
    } catch {
      message.error("Failed to submit scores");
    }
  };

  const columns = [
    {
      title: "Student Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Score",
      key: "score",
      render: (_, record) => (
        <InputNumber
          min={0}
          max={100}
          onChange={(value) => handleChange(record.id, value)}
        />
      ),
    },
  ];

  return (
    <div className="p-6">
      <Title level={3}>📝 Add Scores for Lesson #{lessonId}</Title>
      <Table
        rowKey="id"
        columns={columns}
        dataSource={students}
        loading={loading}
        pagination={false}
        className="mb-4"
      />
      <Button type="primary" onClick={handleSubmit}>
        Submit Scores
      </Button>
    </div>
  );
}

// 🧠 Notes:
// - Uses lesson ID to fetch enrolled students.
// - Sends score data to backend.
// - Restricts scores between 0 and 100.
// - Redirects back to Teacher Dashboard after submission.

// 📁 src/router/index.jsx
// Add the following route:
// {
//   path: '/teacher/score/:lessonId',
//   element: <AddScore />,
//   protected: true // depends on your auth implementation
// }
