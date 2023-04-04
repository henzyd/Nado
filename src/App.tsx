import { Suspense, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Buy, Dashboard, Home, Sell } from "./Pages";
import HomeLayout from "./Layouts/HomeLayout";
import DashboardLayout from "./Layouts/DashboardLayout";
import LazyLoader from "./components/LazyLoader";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<HomeLayout />}>
          <Route
            path="/"
            index
            element={
              <Suspense fallback={<LazyLoader />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/buy"
            element={
              <Suspense fallback={<LazyLoader />}>
                <Buy />
              </Suspense>
            }
          />
          <Route
            path="/sell"
            element={
              <Suspense fallback={<LazyLoader />}>
                <Sell />
              </Suspense>
            }
          />
        </Route>

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
