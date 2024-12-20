import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./context/AuthContext"; // Make sure path is correct
import Login from "./components/AuthForm"; // Make sure path is correct
import LoginPage from "./components/LoginPage"; // Import LoginPage
import RegisterPage from "./components/RegisterPage"; // Import RegisterPage
import Dashboard from "./components/Dashboard"; // Make sure path is correct
import PrivateRoute from "./components/PrivateRoute"; // Make sure path is correct
import "./App.css"; // Import your CSS file

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/candidates"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/employees"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/leaves"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
