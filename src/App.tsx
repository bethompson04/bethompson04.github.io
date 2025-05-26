import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Layout from './components/Layout';
import Home from './pages/Home';
import Software from './pages/Software';
import Games from './pages/Games';
import Artwork from './pages/Artwork';

const theme = createTheme({
  palette: {
    mode: 'light', // Can be 'light' or 'dark'
    primary: {
      main: '#2196f3', // Main brand color (used in AppBar, buttons, etc)
      light: '#64b5f6', // Lighter version of the main color
      dark: '#1976d2', // Darker version of the main color
      contrastText: '#ffffff', // Text color that shows up well on primary.main
    },
    secondary: {
      main: '#f50057', // Secondary brand color (used for highlighting and secondary actions)
      light: '#ff4081',
      dark: '#c51162',
      contrastText: '#ffffff',
    },
    background: {
      default: '#ffffff', // Page background
      paper: '#f5f5f5', // Background of Paper components
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)', // Main text color
      secondary: 'rgba(0, 0, 0, 0.6)', // Secondary text color
    }
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="software" element={<Software />} />
            <Route path="games" element={<Games />} />
            <Route path="artwork" element={<Artwork />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
