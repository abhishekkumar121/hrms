import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; // Import the menu icon
import InboxIcon from "@mui/icons-material/MoveToInbox"; // Example icon
import MailIcon from "@mui/icons-material/Mail"; // Example icon
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsDrawerOpen(false); // Close drawer after navigation
  };

  const drawer = (
    <Box sx={{ width: 250 }}>
      <List>
        {["Candidates", "Employees", "Leaves"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              selected={location.pathname === `/${text.toLowerCase()}`}
              onClick={() => handleNavigation(`/${text.toLowerCase()}`)}
            >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}{" "}
                {/* Example icons */}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { sm: "none" } }} // Hide on medium screens and up
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            HR Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        open={isDrawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 250 },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Navbar;
