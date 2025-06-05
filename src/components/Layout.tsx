import React from 'react';
import { AppBar, Toolbar, Button, Container, Box, Stack } from '@mui/material';
import { Link as RouterLink, Outlet, useLocation, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import PageTransition from './PageTransition';
import Home from '../pages/Home';
import Games from '../pages/Games';
import Artwork from '../pages/Artwork';
import Software from '../pages/Software';
import Contact from '../pages/Contact';

const Layout: React.FC = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = React.useState(location.pathname);
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const [currentPath, setCurrentPath] = React.useState(location.pathname);
  const [slideDirection, setSlideDirection] = React.useState(0);

  React.useEffect(() => {
    if (location.pathname !== currentPath) {
      // Determine slide direction based on navigation order
      const navigationOrder = ['/', '/games', '/artwork', '/software', '/contact'];
      const currentIndex = navigationOrder.indexOf(location.pathname);
      const prevIndex = navigationOrder.indexOf(currentPath);
      setSlideDirection(currentIndex > prevIndex ? -1 : 1);
      
      setIsTransitioning(true);
      // Only update the current path after the exit animation completes
      const timer = setTimeout(() => {
        setCurrentPath(location.pathname);
        setPrevLocation(location.pathname);
        setIsTransitioning(false);
      }, 200); // Reduced from 200ms to 100ms for an even shorter delay
      return () => clearTimeout(timer);
    }
  }, [location.pathname, currentPath]);

  const renderContent = (path: string) => {
    switch (path) {
      case '/':
        return <Home />;
      case '/games':
        return <Games />;
      case '/artwork':
        return <Artwork />;
      case '/software':
        return <Software />;
      case '/contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

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

      {/* Subtle blue glow below the header */}
      <Box sx={{
        height: '2px', // Made thinner
        width: '100%',
        backgroundColor: '#1e65e8', // Base color
        boxShadow: '0 6px 20px rgba(30, 101, 232, 1)', // Even stronger glow shadow (increased blur, spread, and opacity)
        // Adjust margin-top if needed to position it right below the AppBar
        // mt: '-2px' // Example to pull it up slightly if there's a gap, matching the new height
      }} />

      <Container maxWidth="lg" sx={{ mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ 
          width: '100%', 
          minHeight: 'calc(100vh - 64px)',
          position: 'relative',
          backgroundColor: 'background.default'
        }}>
          {/* Base layer - shows the current content with slide-in animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPath}
              style={{
                position: 'absolute',
                width: '100%',
                top: 0,
                left: 0,
                display: isTransitioning ? 'none' : 'block'
              }}
              initial={{ x: slideDirection === -1 ? '100%' : '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: slideDirection === -1 ? '-100%' : '100%' }}
              transition={{
                type: "tween",
                duration: 0.4,
                ease: [0.4, 0.0, 0.2, 1]
              }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
          
          {/* Animated layer - shows the old content while it slides off */}
          <AnimatePresence>
            {isTransitioning && (
              <PageTransition 
                key="exit"
                isExiting={true}
                pathname={prevLocation}
              >
                <Box sx={{ 
                  position: 'absolute',
                  width: '100%',
                  top: 0,
                  left: 0,
                  backgroundColor: 'background.default',
                  zIndex: 1
                }}>
                  {renderContent(prevLocation)}
                </Box>
              </PageTransition>
            )}
          </AnimatePresence>
        </Box>
      </Container>
    </>
  );
};

export default Layout; 