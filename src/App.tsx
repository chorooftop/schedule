import React, { useState } from "react";
import { Route, Routes } from "react-router";
import SettingPage from "./components/SettingPage";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/schedule" element={<SettingPage />} />
      </Routes>
    </div>
  );
}

export default App;
