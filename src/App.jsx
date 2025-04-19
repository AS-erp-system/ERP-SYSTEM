import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import AdminDashboard from "./pages/AdminDashboard";
import DirectorDashboard from "./pages/DirectorDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={
              <AdminDashboard />
          }
        />
        <Route
          path="/director"
          element={
              <DirectorDashboard />
          }
        />
        <Route
          path="/teacher"
          element={
              <TeacherDashboard />
          }
        />
        <Route
          path="/student"
          element={
              <StudentDashboard />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
