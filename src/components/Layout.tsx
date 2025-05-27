import React from 'react';
import { AppBar, Toolbar, Button, Container, Box, Stack } from '@mui/material';
import { Link as RouterLink, Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'center', padding: 0 }}>
          <Stack direction="row" spacing={0}>
            <Button 
              color="inherit" 
              component={RouterLink} 
              to="/"
              sx={{ 
                height: '64px',
                px: 3,
                borderRadius: 0,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                }
              }}
            >
              About Me
            </Button>
            <Button 
              color="inherit" 
              component={RouterLink} 
              to="/games"
              sx={{ 
                height: '64px',
                px: 3,
                borderRadius: 0,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                }
              }}
            >
              Games
            </Button>
            <Button 
              color="inherit" 
              component={RouterLink} 
              to="/artwork"
              sx={{ 
                height: '64px',
                px: 3,
                borderRadius: 0,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                }
              }}
            >
              Artwork
            </Button>
            <Button 
              color="inherit" 
              component={RouterLink} 
              to="/software"
              sx={{ 
                height: '64px',
                px: 3,
                borderRadius: 0,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                }
              }}
            >
              Software
            </Button>
            <Button 
              color="inherit" 
              component={RouterLink} 
              to="/contact"
              sx={{ 
                height: '64px',
                px: 3,
                borderRadius: 0,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                }
              }}
            >
              Contact Me
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ width: '100%', minHeight: 'calc(100vh - 64px)' }}>
          <Outlet />
        </Box>
      </Container>
    </>
  );
};

export default Layout; 