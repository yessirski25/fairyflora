import React from "react";
import { Drawer, Toolbar, Typography, Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { PieChart } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

type Role  = 'Admin' | 'Employee';

interface SidebarItem {
    label: string,
    icon: React.ReactNode,
    path: string,
    allowedRoles: Role[]
}

export const SidebarItems: SidebarItem[] = [
    {label: 'Dashboard', icon: <PieChart/>, path: '/', allowedRoles: ['Admin']}
];

interface SidebarProps {
    width?: 240,
    items: SidebarItem[],
    title: string,
    userRole: Role
}

export const Sidebar: React.FC<SidebarProps> = ({ width, items, title, userRole}) => {
    const navigate = useNavigate();

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
          <Toolbar>
            <Typography variant="h6" noWrap>{title}</Typography>
          </Toolbar>
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
}