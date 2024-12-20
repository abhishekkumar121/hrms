import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Modal,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const LeaveForm = ({ open, onClose, onSubmit, leave }) => {
  const [formData, setFormData] = useState({
    startDate: null,
    endDate: null,
    reason: "",
    status: "pending", // Default status
  });

  const [startDateError, setStartDateError] = useState("");
  const [endDateError, setEndDateError] = useState("");

  useEffect(() => {
    if (leave) {
      setFormData({
        ...leave,
        startDate: moment(leave.startDate),
        endDate: moment(leave.endDate),
      });
    } else {
      setFormData({
        startDate: null,
        endDate: null,
        reason: "",
        status: "pending",
      });
    }
  }, [leave]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleStartDateChange = (date) => {
    setFormData({ ...formData, startDate: date });
    setStartDateError("");
  };

  const handleEndDateChange = (date) => {
    setFormData({ ...formData, endDate: date });
    setEndDateError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.startDate) {
      setStartDateError("Start date is required");
    }
    if (!formData.endDate) {
      setEndDateError("End date is required");
    }
    if (!formData.startDate || !formData.endDate) {
      return;
    }

    onSubmit(formData);
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {leave ? "Edit Leave" : "Request Leave"}
        </Typography>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <DatePicker
              label="Start Date"
              value={formData.startDate}
              onChange={handleStartDateChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  margin="normal"
                  error={!!startDateError}
                  helperText={startDateError}
                />
              )}
            />
            <DatePicker
              label="End Date"
              value={formData.endDate}
              onChange={handleEndDateChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  margin="normal"
                  error={!!endDateError}
                  helperText={endDateError}
                />
              )}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="reason"
              label="Reason"
              name="reason"
              multiline
              rows={3}
              value={formData.reason}
              onChange={handleChange}
            />
            <FormControl fullWidth margin="normal">
              <InputLabel id="status-label">Status</InputLabel>
              <Select
                labelId="status-label"
                id="status"
                name="status"
                value={formData.status}
                label="Status"
                onChange={handleChange}
              >
                <MenuItem value="pending">Pending</MenuItem>
                <MenuItem value="approved">Approved</MenuItem>
                <MenuItem value="rejected">Rejected</MenuItem>
              </Select>
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {leave ? "Update" : "Submit"}
            </Button>
          </Box>
        </LocalizationProvider>
      </Box>
    </Modal>
  );
};

export default LeaveForm;
