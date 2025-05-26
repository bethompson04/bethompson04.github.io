import React from 'react';
import { Typography, Box, Paper, Avatar, IconButton, Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import ItchIoIcon from '../components/ItchIoIcon';

const Home: React.FC = () => {
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
      name: 'Email',
      icon: <EmailIcon sx={{ fontSize: 40 }} />,
      url: 'benniert06@gmail.com',
      color: '#EA4335'
    },
    {
      name: 'Itch.io',
      icon: <ItchIoIcon sx={{ fontSize: 40 }} />,
      url: 'https://soupuh.itch.io/',
      color: '#FA5C5C'
    },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
      <Avatar
        sx={{
          width: 200,
          height: 200,
          mt: 4,
          mb: 2
        }}
        alt="Your Name"
        src="/avatar-placeholder.jpg"
      />
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to My Portfolio
      </Typography>
      <Paper elevation={3} sx={{ p: 4, maxWidth: 800 }}>
        <Typography variant="h5" gutterBottom>
          About Me
        </Typography>
        <Typography paragraph>
          Hi! I'm a creative professional with a passion for game development, software engineering, and digital art. 
          I specialize in creating engaging experiences through code and visual design.
        </Typography>
        <Typography paragraph>
          With experience in both technical and artistic domains, I bring a unique perspective to my work. 
          Whether it's developing software solutions, creating game mechanics, or designing digital artwork, 
          I'm always excited to take on new challenges and push creative boundaries.
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

export default Home; 