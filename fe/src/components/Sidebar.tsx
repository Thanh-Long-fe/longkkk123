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
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import AnalyticsIcon from "@mui/icons-material/Analytics";
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

  // Xác định mục active dựa trên đường dẫn hiện tại
  const getActiveItem = (pathname: string) => {
    const activeItem = menuItems.find((item) => pathname.startsWith(item.path));
    return activeItem ? activeItem.id : "dashboard"; // Mặc định là dashboard nếu không khớp
  };

  const [activeItem, setActiveItem] = React.useState(
    getActiveItem(location.pathname),
  );

  // Cập nhật activeItem khi đường dẫn thay đổi
  useEffect(() => {
    setActiveItem(getActiveItem(location.pathname));
  }, [location.pathname]);

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          backgroundColor: "#1a1a2e",
          color: "#ffffff",
          borderRight: "none",
        },
      }}
    >
      {/* Header */}
      <Box sx={{ p: 3, textAlign: "center" }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "#4CAF50",
            mb: 1,
          }}
        >
          Admin Panel
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#b3b3b3",
            fontSize: "0.8rem",
          }}
        >
          Management System
        </Typography>
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
                backgroundColor:
                  activeItem === item.id ? "#4CAF50" : "transparent",
                "&:hover": {
                  backgroundColor:
                    activeItem === item.id ? "#45a049" : "#333366",
                  transform: "translateX(4px)",
                },
                "&:active": {
                  transform: "translateX(2px)",
                },
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
            </ListItem>
          </Link>
        ))}
      </List>

      {/* Footer */}
      <Box
        sx={{
          mt: "auto",
          p: 2,
          borderTop: "1px solid #333366",
          textAlign: "center",
        }}
      >
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
    </Drawer>
  );
};

export default Sidebar;
