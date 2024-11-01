import { useNavigate } from "react-router-dom";
import { Inventory, LocalLaundryService, People, PieChart, Store } from "@mui/icons-material"
import { Drawer, Toolbar, Typography, Divider, List, ListItem, ListItemText, ListItemIcon } from "@mui/material"
type Role = 'Admin' | 'Employee' | 'Customer';

interface SidebarItem {
  label: string;
  icon: React.ReactNode;
  path: string;
  allowedRoles: Role[]; // Array of roles allowed to see this item
}

// Define sidebar items with role-based access
export const sidebarItems: SidebarItem[] = [
  { label: 'Dashboard', icon: <PieChart />, path: '/admin-dashboard', allowedRoles: ['Admin'] },
  { label: 'Employees', icon: <People />, path: '/employees', allowedRoles: ['Admin'] },
  { label: 'Branch', icon: <Store />, path: '/branch', allowedRoles: ['Admin'] },
  { label: 'Services', icon: <LocalLaundryService />, path: '/services', allowedRoles: ['Admin'] },
  { label: 'Inventory', icon: <Inventory />, path: '/services', allowedRoles: ['Admin'] },
  { label: 'Dashboard', icon: <PieChart />, path: '/emp-dashboard', allowedRoles: ['Employee'] },
];

interface SidebarProps {
    width?: number;
    items: SidebarItem[];
    userRole: Role; // Pass the current user's role as a prop
  }
  
  
  const Sidebar: React.FC<SidebarProps> = ({ width = 240, items, userRole }) => {
    const navigate = useNavigate();
  
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
        {/* <Toolbar>
          <Typography variant="h6" noWrap>{title}</Typography>
        </Toolbar> */}
        <Divider />
        <List>
          {filteredItems.map((item) => (
            <ListItem button key={item.label} onClick={() => navigate(item.path)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    );
  };
  
  export default Sidebar;
  