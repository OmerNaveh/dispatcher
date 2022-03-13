import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./features/LoginPage/LoginPage";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user, isAuthenticated, isLoading);

  return (
    <div className="App">
      {!isAuthenticated ? (
        <Routes>
          <Route path="/*" element={<LoginPage />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<p>dash</p>} />
          <Route path="/" element={<LoginPage />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
