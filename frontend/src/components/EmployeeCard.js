import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
} from "@mui/material";

const EmployeeCard = ({ employee, onEdit, onDelete }) => {
  return (
    <Card sx={{ minWidth: 275, mb: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {employee.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {employee.email}
        </Typography>
        <Typography variant="body2">
          Department: {employee.department}
        </Typography>
        <Typography variant="body2">Role: {employee.role}</Typography>
        {/* Add other employee details as needed */}
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Button size="small" onClick={() => onEdit(employee)}>
            Edit
          </Button>
          <Button
            size="small"
            onClick={() => onDelete(employee._id)}
            color="error"
          >
            Delete
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default EmployeeCard;
