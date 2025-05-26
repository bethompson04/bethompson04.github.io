import React from 'react';
import { Typography, Box, Paper, Avatar } from '@mui/material';

const Home: React.FC = () => {
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
    </Box>
  );
};

export default Home; 