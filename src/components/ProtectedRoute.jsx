import React from "react";
import { Navigate } from "react-router-dom";
import { fakeAuth } from "../auth/authService";

const ProtectedRoute = ({ role, children }) => {
  const user = fakeAuth.getCurrentUser();
  if (!user || user.role !== role) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
