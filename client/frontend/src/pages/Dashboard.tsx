import React, { useState, useEffect } from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemButton, ListItemIcon, AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { PieChart, People, AccountCircle } from "@mui/icons-material";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

interface Employee {
  assignedBranchId: number;
  contactNumber: string;
  dateHired: string; // or Date if you're handling date conversion
  emailAddress: string;
  firstName: string;
  id: number;
  lastName: string;
  middleName: string;
  password: string;
  role: string;
  salary: number;
}

export const Dashboard: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState<'dashboard' | 'employees'>('dashboard');
  const [ employee, setEmployee ] = useState<Employee | null>(null);
  const navigate = useNavigate();

  // Function to render content based on selected page
    
  useEffect(() => {
    const getEmployee = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/employee/current`,
          { withCredentials: true }
        );
  
        if (response.data.success) {
          console.log("Employee data being set: ", response.data.data);
          setEmployee(response.data.data);
        } else {
          console.log("Employee not found");
        }
      } catch (error){
        console.error("Error fetching the data: ", error);
      }
    };

    getEmployee();
  }, []);

  const renderContent = () => {
    if (selectedPage === 'dashboard') {
      return <Typography variant="h4">Dashboard Page Content</Typography>
    }
    if (selectedPage === 'employees') {
      return <Typography variant="h4">Employees Page Content</Typography>;
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/employee/logout`,
        { withCredentials: true }
      );

      if (!response.data.success) {
        toast.error(response.data.message);
    } else {
        toast.success("Logged out successfully!");
        return navigate("/");
    }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar */}
      {/* <Drawer
        variant="permanent"
        sx={{
          height: "100vh",
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar sx={{ height: "100px" }}/>
        <Box sx={{ overflow: 'auto' }}>
        <List sx={{ height: "80vh"}}>
          <ListItem disablePadding>
            <ListItemButton onClick={() => setSelectedPage('dashboard')}>
              <ListItemIcon sx={{ color: 'green'}}>
                <PieChart />
              </ListItemIcon>
              <ListItemText primary="Dashboard" sx={{ color: 'green'}} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => setSelectedPage('employees')}>
              <ListItemIcon sx={{ color: 'green'}}>
                <People />
              </ListItemIcon>
              <ListItemText primary="Employees" sx={{ color: 'green'}} />
            </ListItemButton>
          </ListItem>
        </List>
        </Box>
          <form onSubmit={handleSubmit}>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginBottom: 16 }}
          >
            Logout
          </Button>
        </form>
      </Drawer> */}

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          ml: `${drawerWidth}px`,
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
        }}
      >
        <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, bgcolor: "white" }}>
          <Toolbar sx={{
            display: "flex",
            justifyContent: "space-between"
          }}>
            <Typography variant="h6" noWrap color='green'>
              Dashboard
            </Typography>
            <Typography variant='h6' noWrap color='green'>
              <AccountCircle sx={{ marginTop: "-4px", marginRight: "2px"}}/>
              {employee?.firstName}
            </Typography>
          </Toolbar>
        </AppBar>
        <Toolbar />
        {renderContent()}
      </Box>
    </Box>
  );
};