import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Box, Typography, Button } from "@mui/material";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => navigate("/login");
  const handleRegister = () => navigate("/register");

  return (
    <Container
      maxWidth="sm"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <Box>
        <Typography variant="h3" gutterBottom>
          Welcome to HR Management System
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Please choose an option to get started
        </Typography>
      </Box>
      <Box mt={4} width="100%" display="flex" justifyContent="space-around">
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleLogin}
          style={{ width: "40%" }}
        >
          Login
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          size="large"
          onClick={handleRegister}
          style={{ width: "40%" }}
        >
          Create Account
        </Button>
      </Box>
    </Container>
  );
};

export default LandingPage;
