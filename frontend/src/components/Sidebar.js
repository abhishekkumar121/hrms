import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Divider,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox"; // Example icon
import MailIcon from "@mui/icons-material/Mail"; // Example icon
import PeopleIcon from "@mui/icons-material/People";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = ({ open, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    navigate(path);
    onClose(); // Close the sidebar after navigation (important for mobile)
  };

  return (
    <Drawer
      open={open}
      onClose={onClose}
      variant="persistent" // Keep the sidebar open on larger screens
      sx={{
        "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        display: { xs: "none", sm: "block" }, // Hide on extra-small screens
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}
      >
        <Typography variant="h6">HR Dashboard</Typography>
      </Box>
      <Divider />
      <List>
        {[
          { text: "Candidates", path: "/candidates", icon: <PeopleIcon /> },
          { text: "Employees", path: "/employees", icon: <PeopleIcon /> },
          { text: "Leaves", path: "/leaves", icon: <CalendarMonthIcon /> },
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              selected={location.pathname === item.path}
              onClick={() => handleNavigation(item.path)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
