import React from 'react';
import { Typography, Box, Paper, Avatar, Stack, LinearProgress } from '@mui/material';

interface Skill {
  name: string;
  confidence: number; // Percentage from 0 to 100
}

const Home: React.FC = () => {
  // Define your skills and confidence levels here
  const skills: Skill[] = [
    { name: 'Unreal Engine', confidence: 90 },
    { name: 'Unity', confidence: 90 },
    { name: 'Godot', confidence: 85 },
    { name: 'Java', confidence: 75 },
    { name: 'JavaScript', confidence: 50 },
    { name: 'Python', confidence: 70 },
    { name: 'C++', confidence: 90 },
    { name: 'C#', confidence: 90 },
    { name: 'PostgreSQL', confidence: 60 },
    { name: 'Odoo', confidence: 55 },
    { name: 'ASP .NET', confidence: 60 },
    { name: 'Krita', confidence: 80 },
    { name: 'Blender', confidence: 75 },
    // Add more skills as needed
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
      {/* Container for the main content and side images using Flexbox */}
      <Box sx={{
        width: '100%',
        display: 'flex', // Use flexbox
        alignItems: 'flex-start', // Align items to the top
        justifyContent: 'center', // Center the main content initially
        gap: { md: 4, lg: 8 }, // Add gap between items on medium and larger screens
      }}>
        {/* Left Side Image (Hidden on small screens) */}
        <Box sx={{
          width: '200px', // Example width for the image container
          flexShrink: 0,
          display: { xs: 'none', md: 'block' }, // Hide on extra small and small, show on medium and up
          // Adjust margin to push it further left if needed
          // mr: { md: 2 } // Optional: add margin to the right
        }}>
          <img 
            src="/assets/art/NeuBen3.jpg" // Replace with your left image path
            alt="Left decorative image"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              borderRadius: '8px' // Optional: add some styling
            }}
          />
        </Box>

        {/* Main Content Stack */}
        <Stack 
          spacing={1} 
          alignItems="center" 
          sx={{ 
            flexGrow: 1, // Allow stack to grow and take available space
            maxWidth: 1000, // Increased maximum width
            mx: 'auto', // Center the stack within the flex container
            // Removed horizontal padding/margins from previous attempts
          }}
        >
          <Avatar
            sx={{
              width: 200,
              height: 200,
              mt: 4,
              mb: 2
            }}
            alt="Bennie Thompson"
            src="/assets/art/Card_GENESISpfp.png"
          />
          <Stack spacing={1} alignItems="center">
            <Typography variant="h2" component="h1">
              Bennie Thompson
            </Typography>
            <Typography 
              variant="h5" 
              color="text.secondary"
              sx={{ 
                fontWeight: 300,
                textAlign: 'center',
                maxWidth: '600px',
                mb: 3
              }}
            >
              Game Developer • Software Engineer • Game Artist
            </Typography>
          </Stack>
          
          {/* About Me Section */}
          <Paper elevation={3} sx={{ p: 4, maxWidth: '100%', width: '100%' }}>
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

          {/* Skills Section */}
          <Paper elevation={3} sx={{ p: 4, maxWidth: '100%', width: '100%' }}>
            <Typography variant="h5" gutterBottom>
              Skills
            </Typography>
            <Stack spacing={2}>
              {skills.map((skill, index) => (
                <Box key={index} sx={{ width: '100%' }}>
                  <Typography variant="body1">{skill.name}</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <LinearProgress 
                      variant="determinate" 
                      value={skill.confidence} 
                      sx={{
                        flexGrow: 1,
                        height: 10,
                        borderRadius: 5,
                        // Customizing the bar color
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: '#1e65e8' // Deeper blue color
                        }
                      }}
                    />
                    <Typography variant="body2" color="text.secondary">{`${skill.confidence}%`}</Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Paper>

        </Stack>

        {/* Right Side Image (Hidden on small screens) */}
        <Box sx={{
          width: '200px', // Example width for the image container
          flexShrink: 0,
          display: { xs: 'none', md: 'block' }, // Hide on extra small and small, show on medium and up
          // Adjust margin to push it further right if needed
          // ml: { md: 2 } // Optional: add margin to the left
        }}>
           <img 
            src="/assets/art/NeuBen1.jpg" // Replace with your right image path
            alt="Right decorative image"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              borderRadius: '8px' // Optional: add some styling
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home; 