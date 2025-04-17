import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fakeAuth } from "./authService";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = fakeAuth.login(username, password);
    if (user) {
      navigate(`/${user.role}`);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">
          School ERP Login
        </h2>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Username</label>
          <div className="flex items-center border rounded px-2">
            <UserOutlined className="mr-2" />
            <input
              type="text"
              className="w-full py-1 outline-none"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Password</label>
          <div className="flex items-center border rounded px-2">
            <LockOutlined className="mr-2" />
            <input
              type="password"
              className="w-full py-1 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <button
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
