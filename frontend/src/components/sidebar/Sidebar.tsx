import { Link, useLocation } from "react-router-dom";
import { Drawer, Toolbar, Typography, List, ListItemText, ListItemIcon, ListItemButton } from "@mui/material"
import { SidebarItem } from "./SidebarItems";

type Role = 'Admin' | 'Employee' | 'Customer';

interface SidebarProps {
    width?: number;
    items: SidebarItem[];
    userRole: Role; // Pass the current user's role as a prop
  }

  
  const Sidebar: React.FC<SidebarProps> = ({ width = 240, items, userRole }) => {
    const location = useLocation();
  
    // Filter items based on the allowed roles
    const filteredItems = items.filter(item => item.allowedRoles.includes(userRole));
  
    return (
      <Drawer
        variant="permanent"
        sx={{
          width,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width, boxSizing: 'border-box' },
        }}
      >
        <Toolbar sx={{ marginY: "20px"}}>
          <Typography variant="h6" noWrap>Fairy Flora Icon</Typography>
        </Toolbar>
        {/* <Divider /> */}
        <List>
          {filteredItems.map((item) => (
            <ListItemButton sx={{ marginY: "10px", marginX: "3px", cursor: "pointer"}} button key={item.label} component={Link} to={item.path} selected={location.pathname == item.path}>
              <ListItemIcon sx={{ color: "green"}}>{item.icon}</ListItemIcon>
              <ListItemText sx={{ color: "green"}} primary={item.label} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    );
  };
  
  export default Sidebar;
  