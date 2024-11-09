import { useEffect, useState } from 'react'
import { CssBaseline, Box, Toolbar, AppBar, Typography } from '@mui/material'
import { AccountCircle } from '@mui/icons-material';
import axios from "axios";
import Sidebar from '../sidebar/Sidebar'
import { sidebarItems } from '../sidebar/SidebarItems';
import { Outlet } from "react-router-dom";


export const Layout = () => {
  const [employeeRole, setEmployeeRole] = useState('');
  const [empFirstname, setEmpFirstname] = useState('');
  const drawerWidth = 240;

  useEffect(() => {
    const getEmployeeRole = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/employee/current`,
          { withCredentials: true }
        );
  
        if (response.data.success) {
          console.log("Employee data being set: ", response.data.data);
          setEmployeeRole(response.data.data.role);
          setEmpFirstname(response.data.data.firstName);
        } else {
          console.log("Employee not found");
        }
      } catch (error){
        console.error("Error fetching the data: ", error);
      }
    };

    getEmployeeRole();
  }, []);

  const userRole: Role = employeeRole;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Sidebar width={240} items={sidebarItems} userRole={userRole} />
      <Box component="main" sx={{ flexGrow: 1, p: 3, height: 1 }}>
        <Toolbar />
        {/* render pages here */}
        <Outlet/>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          ml: `${drawerWidth}px`,
          display: 'flex',
          flexDirection: 'column',
          height: '90vh',
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
              {empFirstname}
            </Typography>
          </Toolbar>
        </AppBar>
        <Toolbar />
      </Box>
    </Box>
    
  )
}
