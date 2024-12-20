import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import api from "../services/api";
import {
  Box,
  Typography,
  Alert,
  CircularProgress,
  Button,
} from "@mui/material";

moment.locale("en-GB"); // Important for correct date formatting
const localizer = momentLocalizer(moment);

const LeaveCalendar = () => {
  const [leaves, setLeaves] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date()); // State for current date

  useEffect(() => {
    const fetchLeaves = async () => {
      try {
        const response = await api.get("/leaves");
        // Filter for approved leaves
        const approvedLeaves = response.data.filter(
          (leave) => leave.status === "approved"
        );
        setLeaves(
          approvedLeaves.map((leave) => ({
            ...leave,
            start: new Date(leave.startDate), // Convert to Date objects
            end: new Date(leave.endDate), // Convert to Date objects
          }))
        );
      } catch (err) {
        console.error("Error fetching leaves:", err);
        setError("Failed to fetch leaves.");
      } finally {
        setLoading(false);
      }
    };

    fetchLeaves();
  }, []);

  const handleTodayClick = () => {
    setCurrentDate(new Date());
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

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
        <Button onClick={handleTodayClick}>Today</Button>
      </Box>
      <Calendar
        localizer={localizer}
        events={leaves}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        defaultDate={currentDate} // Set the default date to the current date
      />
    </Box>
  );
};

export default LeaveCalendar;
