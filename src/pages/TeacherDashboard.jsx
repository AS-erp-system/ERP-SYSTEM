// React Frontend for School ERP System
// ✅ Common Login Page (already done)
// 🔜 Teacher Dashboard

// 📁 src/pages/TeacherDashboard.jsx
import { useEffect, useState } from "react";
import { Table, Card, Typography, message } from "antd";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const { Title } = Typography;

export default function TeacherDashboard() {
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) return message.error("Unauthorized");

    const { userId } = jwtDecode(token);

    axios
      .get(`/api/teachers/${userId}/schedule`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setLessons(res.data))
      .catch(() => message.error("Failed to load schedule"))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const now = currentTime.toTimeString().slice(0, 5);

  const columns = [
    { title: "Day", dataIndex: "day", key: "day" },
    { title: "Time", dataIndex: "time", key: "time" },
    { title: "Subject", dataIndex: "subject", key: "subject" },
    { title: "Class", dataIndex: "className", key: "className" },
    {
      title: "Action",
      key: "action",
      render: (_, record) => {
        const isNow = record.time === now;
        return isNow ? (
          <a href={`/teacher/score/${record.lessonId}`}>Add Score</a>
        ) : (
          "Unavailable"
        );
      },
    },
  ];

  return (
    <div className="p-6">
      <Title level={3}>📘 Weekly Teaching Schedule</Title>
      <Card className="mt-4">
        <Table
          rowKey="id"
          columns={columns}
          dataSource={lessons}
          loading={loading}
          pagination={false}
        />
      </Card>
    </div>
  );
}

// 🧠 Notes:
// - Teachers can only add scores during the lesson time (based on system time).
// - Clicking 'Add Score' redirects to a page for scoring that specific lesson.
