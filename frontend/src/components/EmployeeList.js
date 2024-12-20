import React, { useState, useEffect } from "react";
import EmployeeCard from "./EmployeeCard";
import api from "../services/api";
import { CircularProgress, Box, Typography, Alert } from "@mui/material";

const EmployeeList = ({ onEdit }) => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await api.get("/employees");
        setEmployees(response.data);
      } catch (err) {
        console.error("Error fetching employees:", err);
        setError("Failed to fetch employees.");
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/employees/${id}`);
      setEmployees(employees.filter((employee) => employee._id !== id));
    } catch (err) {
      console.error("Error deleting employee:", err);
      setError("Failed to delete employee.");
    }
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "200px",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  if (employees.length === 0) {
    return <Typography variant="body1">No employees found.</Typography>;
  }

  return (
    <div>
      {employees.map((employee) => (
        <EmployeeCard
          key={employee._id}
          employee={employee}
          onEdit={() => onEdit(employee)}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default EmployeeList;
