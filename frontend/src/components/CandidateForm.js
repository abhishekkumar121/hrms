import React, { useState, useEffect } from "react";
import { TextField, Button, Box, Typography, Modal } from "@mui/material";

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

const CandidateForm = ({ open, onClose, onSubmit, candidate }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: "",
  });

  useEffect(() => {
    if (candidate) {
      setFormData(candidate);
    } else {
      setFormData({
        name: "",
        email: "",
        resume: "",
      });
    }
  }, [candidate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
          {candidate ? "Edit Candidate" : "Add Candidate"}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoFocus
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            fullWidth
            id="resume"
            label="Resume URL" // Changed label
            name="resume"
            value={formData.resume}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {candidate ? "Update" : "Submit"}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default CandidateForm;
