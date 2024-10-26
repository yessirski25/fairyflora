import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, AppBar, Toolbar, Typography, Box } from '@mui/material';

const drawerWidth = 240;

export const Dashboard: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState<'home' | 'settings'>('home');

  // Function to render content based on selected page
  const renderContent = () => {
    if (selectedPage === 'home') {
      return <Typography variant="h4">Home Page Content</Typography>;
    }
    if (selectedPage === 'settings') {
      return <Typography variant="h4">Settings Page Content</Typography>;
    }
    return null;
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItem button onClick={() => setSelectedPage('home')}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={() => setSelectedPage('settings')}>
              <ListItemText primary="Settings" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

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
        <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Toolbar />
        {renderContent()}
      </Box>
    </Box>
  );
};