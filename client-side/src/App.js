import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import RegisterUser from "./pages/RegisterUser.jsx";
import Dashboard from "./pages/Dashboard.jsx";
// import { AuthProvider } from './AuthContext';
// import ProtectedRoute from './ProtectedRoutes';

function App() {
  return (
    <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegisterUser />} />
            <Route path="/dashboard" element={
                <Dashboard />
            } />
          </Routes>
    </div>
  );
}

export default App;
