import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginBtn from "./components/login/LoginBtn";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginBtn />} />
        <Route path="/dashboard" element={<p>dash</p>} />
        <Route path="/" element={<LoginBtn />} />
      </Routes>
    </div>
  );
}

export default App;
