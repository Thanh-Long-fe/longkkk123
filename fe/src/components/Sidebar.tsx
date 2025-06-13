import React, { useEffect } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  Divider,
  IconButton,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link, useLocation } from "react-router-dom";

interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  path: string;
}

const menuItems: MenuItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: <DashboardIcon />,
    path: "/admin/dashboard",
  },
  { id: "users", label: "Users", icon: <PeopleIcon />, path: "/admin/users" },
  {
    id: "requests",
    label: "Requests",
    icon: <AnalyticsIcon />,
    path: "/admin/requests",
  },
];

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [open, setOpen] = React.useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const getActiveItem = (pathname: string) => {
    const activeItem = menuItems.find((item) => pathname.startsWith(item.path));
    return activeItem ? activeItem.id : "dashboard";
  };

  const [activeItem, setActiveItem] = React.useState(
    getActiveItem(location.pathname),
  );

  useEffect(() => {
    setActiveItem(getActiveItem(location.pathname));
  }, [location.pathname]);

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: open ? 240 : 65,
        flexShrink: 0,
        transition: "width 0.3s ease",
        "& .MuiDrawer-paper": {
          width: open ? 240 : 65,
          boxSizing: "border-box",
          backgroundColor: "#1a1a2e",
          color: "#ffffff",
          borderRight: "none",
          transition: "width 0.3s ease",
          overflowX: "hidden",
        },
      }}
    >
      {/* Header */}
      <Box sx={{ p: 2, textAlign: "center" }}>
        {open && (
          <Box>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                color: "white",
                mb: 1,
              }}
            >
              Admin Panel
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "white",
                fontSize: "0.8rem",
              }}
            >
              Management System
            </Typography>
          </Box>
        )}
      </Box>

      <Divider sx={{ borderColor: "#333366" }} />

      {/* Menu Items */}
      <List sx={{ px: 1, py: 2 }}>
        {menuItems.map((item) => (
          <Link to={item.path} key={item.id} style={{ textDecoration: "none" }}>
            <ListItem
              sx={{
                mb: 1,
                borderRadius: 2,
                cursor: "pointer",
                transition: "all 0.3s ease",
                background:
                  activeItem === item.id
                    ? "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)"
                    : "transparent",
                "&:hover": {
                  background:
                    activeItem === item.id
                      ? "linear-gradient(45deg, #1976D2 30%, #1CB5E0 90%)"
                      : "#333366",
                },
                "&:active": {
                  transform: "translateX(2px)",
                },
                justifyContent: open ? "flex-start" : "center",
              }}
            >
              <ListItemIcon
                sx={{
                  color: activeItem === item.id ? "#ffffff" : "#b3b3b3",
                  minWidth: 40,
                  transition: "color 0.3s ease",
                }}
              >
                {item.icon}
              </ListItemIcon>
              {open && (
                <ListItemText
                  primary={item.label}
                  sx={{
                    "& .MuiListItemText-primary": {
                      fontSize: "0.9rem",
                      fontWeight: activeItem === item.id ? 600 : 400,
                      color: activeItem === item.id ? "#ffffff" : "#e0e0e0",
                      transition: "all 0.3s ease",
                    },
                  }}
                />
              )}
            </ListItem>
          </Link>
        ))}
      </List>

      {/* Footer with Collapse Button */}
      <Box
        sx={{
          mt: "auto",
          borderTop: "1px solid #333366",
        }}
      >
        {open && (
          <Box sx={{ p: 2, textAlign: "center" }}>
            <Typography
              variant="caption"
              sx={{
                color: "#888",
                fontSize: "0.7rem",
              }}
            >
              Version 1.0.0
            </Typography>
          </Box>
        )}
        <Box
          sx={{
            p: 1,
            display: "flex",
            justifyContent: "center",
            borderTop: "1px solid #333366",
          }}
        >
          <IconButton
            onClick={toggleDrawer}
            sx={{
              color: "white",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              },
              width: "40px",
              height: "40px",
            }}
          >
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
