import { AppBar, Typography, Box } from '@mui/material';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

export const NavBar: FC = () => {
  return (
    <AppBar position="fixed" color="inherit" sx={{ margin: 'auto', p: '5px', backgroundColor: 'green' }}>
      <Box >
        <Box sx={{  margin: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '1100px' }}>
          <Box>
            <Link to="/home" style={{ textDecoration: 'none' }}>
              <Typography variant="h6" color="inherit" component="div" sx={{ padding: '10px', color: 'white' }}>
                Welcome to TodoList
              </Typography>
            </Link>
          </Box>
          <Box>
            <Box sx={{ display: 'flex' }}>
              <Link to="/todolist" style={{ textDecoration: 'none' }}>
                <Typography variant="h6" color="inherit" component="div" sx={{ padding: '10px', color: 'white' }}>
                  TodoList
                </Typography>
              </Link>

              <Link to="/photolist" style={{ textDecoration: 'none' }}>
                <Typography variant="h6" color="inherit" component="div" sx={{ padding: '10px', color: 'white' }}>
                  Photos
                </Typography>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </AppBar>
  )
};