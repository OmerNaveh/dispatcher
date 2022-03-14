import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardPage from "../features/DashboardPage/DashboardPage";
import LoginPage from "../features/LoginPage/LoginPage";

const AuthenticatedRoute = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
};

export default AuthenticatedRoute;
