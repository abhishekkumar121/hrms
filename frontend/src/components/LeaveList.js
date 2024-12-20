import React, { useState, useEffect } from "react";
import api from "../services/api";
import {
  CircularProgress,
  Box,
  Typography,
  Alert,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import moment from "moment";

const LeaveList = ({ onEdit }) => {
  const [leaves, setLeaves] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeaves = async () => {
      try {
        const response = await api.get("/leaves");
        setLeaves(response.data);
      } catch (err) {
        console.error("Error fetching leaves:", err);
        setError("Failed to fetch leaves.");
      } finally {
        setLoading(false);
      }
    };

    fetchLeaves();
  }, []);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/leaves/${id}`);
      setLeaves(leaves.filter((leave) => leave._id !== id));
    } catch (err) {
      console.error("Error deleting leave:", err);
      setError("Failed to delete leave.");
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

  if (leaves.length === 0) {
    return <Typography variant="body1">No leaves found.</Typography>;
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Start Date</TableCell>
            <TableCell align="right">End Date</TableCell>
            <TableCell align="right">Reason</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {leaves.map((leave) => (
            <TableRow
              key={leave._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {moment(leave.startDate).format("YYYY-MM-DD")}
              </TableCell>
              <TableCell align="right">
                {moment(leave.endDate).format("YYYY-MM-DD")}
              </TableCell>
              <TableCell align="right">{leave.reason}</TableCell>
              <TableCell align="right">{leave.status}</TableCell>
              <TableCell align="right">
                <Button size="small" onClick={() => onEdit(leave)}>
                  Edit
                </Button>
                <Button
                  size="small"
                  onClick={() => handleDelete(leave._id)}
                  color="error"
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LeaveList;
