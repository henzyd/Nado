import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Dashboard, Home } from "./Pages";
import HomeLayout from "./components/Layouts/HomeLayout";
import DashboardLayout from "./components/Layouts/DashboardLayout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <HomeLayout>
              <Home />
            </HomeLayout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
