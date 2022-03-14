import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../features/LoginPage/LoginPage";

const NotAuthenticatedRoute = () => {
  return (
    <Routes>
      <Route path="/*" element={<LoginPage />} />
    </Routes>
  );
};

export default NotAuthenticatedRoute;
