import React from 'react';
import { Typography, Box, IconButton, Tooltip, Paper } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ItchIoIcon from '../components/ItchIoIcon';

const Contact: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <GitHubIcon sx={{ fontSize: 40 }} />,
      url: 'https://github.com/bethompson04/',
      color: '#9e1fc4'
    },
    {
      name: 'LinkedIn',
      icon: <LinkedInIcon sx={{ fontSize: 40 }} />,
      url: 'https://www.linkedin.com/in/bennie-thompson-422323319/',
      color: '#0077b5'
    },
    {
      name: 'Itch.io',
      icon: <ItchIoIcon sx={{ fontSize: 40 }} />,
      url: 'https://soupuh.itch.io/',
      color: '#FA5C5C'
    },
    {
      name: 'benniert06@gmail.com',
      icon: <EmailIcon sx={{ fontSize: 40 }} />,
      url: '',
      color: '#f2eb22'
    },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ mb: 4, textAlign: 'center' }}>
        Contact Me
      </Typography>
      
      <Paper elevation={3} sx={{ p: 4, maxWidth: 800 }}>
        <Typography variant="h5" gutterBottom>
          Where to find me?
        </Typography>
        <Typography paragraph>
          Feel free to reach out to me through any of the platforms below, you can see a majority of my work through these links. Whether you want to discuss any of my projects, potential collaborations, or even just say hello!
        </Typography>
      </Paper>

      <Box 
        sx={{ 
          mt: 4, 
          display: 'flex', 
          gap: 3,
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}
      >
        {socialLinks.map((link) => (
          <Tooltip 
            key={link.name} 
            title={link.name}
            placement="top"
            arrow
          >
            <IconButton
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  color: link.color,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
                width: 60,
                height: 60,
              }}
            >
              {link.icon}
            </IconButton>
          </Tooltip>
        ))}
      </Box>
    </Box>
  );
};

export default Contact; 