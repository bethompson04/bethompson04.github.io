import React from 'react';
import { AppBar, Box, Button, Container, Stack } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import Home from '../pages/Home';
import Games from '../pages/Games';
import Artwork from '../pages/Artwork';
import Software from '../pages/Software';
import Contact from '../pages/Contact';

// Define animation variants
const pageVariants = {
  initial: (custom: { oldIndex: number, newIndex: number }) => ({
    x: custom.newIndex > custom.oldIndex ? '100%' : '-100%',
    opacity: 1,
    width: '100%',
    height: '100%',
  }),
  animate: {
    x: 0,
    opacity: 1,
    width: '100%',
    height: '100%',
  },
  exit: (custom: { oldIndex: number, newIndex: number }) => ({
    x: custom.newIndex > custom.oldIndex ? '-100%' : '100%',
    opacity: 1,
    width: '100%',
    height: '100%',
  }),
};

const navigationOrder = ['/', '/games', '/artwork', '/software', '/contact'];

const Layout: React.FC = () => {
  // State to track the current location from the hash
  const [location, setLocation] = React.useState(window.location.hash.slice(1) || '/');
  // Ref to store the previous location
  const prevLocationRef = React.useRef(location);
  // Remove slideDirection state
  // const [slideDirection, setSlideDirection] = React.useState<number>(0);

  // Effect to handle hash changes and update location state
  React.useEffect(() => {
    const handleHashChange = () => {
      const newPath = window.location.hash.slice(1) || '/';
      console.log('Hash change detected. New path:', newPath);
      console.log('Current location state (before update):', location);

      if (newPath !== location) {
        // Simply update the location state
        setLocation(newPath);
        // Direction calculation is now handled by variants using custom prop
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial call to set location if page loaded with a hash
     handleHashChange();

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [location]); // Depend on location to ensure the handleHashChange closure has the latest location

  // Effect to update previous location ref when location changes
  React.useEffect(() => {
    console.log('Location state updated to:', location);
    console.log('Previous location ref value:', prevLocationRef.current);

    // Update prevLocationRef to the current location AFTER the render that reflects the new location
    prevLocationRef.current = location;

  }, [location]); // Depend only on location to trigger this effect

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

  // Calculate indices for the custom prop
  const currentPathIndex = navigationOrder.indexOf(location);
  const prevPathIndex = navigationOrder.indexOf(prevLocationRef.current);

  return (
    <>
      <AppBar position="static">
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          padding: 0,
          minHeight: '64px'
        }}>
          <Stack direction="row" spacing={0}>
            <Button 
              color="inherit" 
              onClick={() => window.location.hash = "/"}
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
              onClick={() => window.location.hash = "/games"}
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
              onClick={() => window.location.hash = "/artwork"}
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
              onClick={() => window.location.hash = "/software"}
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
              onClick={() => window.location.hash = "/contact"}
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
        </Box>
      </AppBar>

      <Box sx={{
        height: '2px',
        width: '100%',
        backgroundColor: '#1e65e8',
        boxShadow: '0 6px 20px rgba(30, 101, 232, 1)',
      }} />

      <Container maxWidth="lg" sx={{ mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ 
          width: '100%', 
          minHeight: 'calc(100vh - 64px - 32px)',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#2a2a2a'
        }}>
          <AnimatePresence initial={false} mode="wait" custom={{ oldIndex: prevPathIndex, newIndex: currentPathIndex }}> {/* Pass indices as custom prop */}
            <motion.div
              key={location}
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                backgroundColor: '#2a2a2a'
              }}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={{ oldIndex: prevPathIndex, newIndex: currentPathIndex }} // Pass indices as custom prop to motion.div as well
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              {renderContent(location)}
            </motion.div>
          </AnimatePresence>
        </Box>
      </Container>
    </>
  );
};

export default Layout; 