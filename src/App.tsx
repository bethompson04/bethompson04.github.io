import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Layout from './components/Layout';
import Home from './pages/Home';
import Software from './pages/Software';
import Games from './pages/Games';
import Artwork from './pages/Artwork';
import Contact from './pages/Contact';

const theme = createTheme({
  palette: {
    mode: 'dark', // Switching to dark mode
    primary: {
      main: '#90caf9', // Lighter blue for better visibility in dark mode
      light: '#e3f2fd',
      dark: '#42a5f5',
      contrastText: '#000000',
    },
    secondary: {
      main: '#f48fb1', // Lighter pink for better visibility in dark mode
      light: '#ffc1e3',
      dark: '#bf5f82',
      contrastText: '#000000',
    },
    background: {
      default: '#121212', // Material Design recommended dark background
      paper: '#1e1e1e', // Slightly lighter than background for cards
    },
    text: {
      primary: '#ffffff', // White text for dark mode
      secondary: 'rgba(255, 255, 255, 0.7)', // Slightly transparent white for secondary text
    }
  },
  typography: {
    fontFamily: '"Montserrat", sans-serif', // Set Montserrat as the primary font
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    // You can define specific typography variants here if needed
    // For example, if you want a different font for body text:
    // body1: {
    //   fontFamily: '"Roboto", sans-serif',
    // },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="games" element={<Games />} />
            <Route path="artwork" element={<Artwork />} />
            <Route path="software" element={<Software />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;
