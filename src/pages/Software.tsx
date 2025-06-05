import React from 'react';
import { 
  Typography, 
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Box
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const Software: React.FC = () => {
  const projects = [
    {
      title: 'This Portfolio Website',
      description: 'I created this website with the help of Cursor AI. The website itself uses React, Typescript, and MUI. It is hosted here on Github Pages!',
      image: '/project1-placeholder.jpg',
      github: 'https://github.com/bethompson04/bethompson04.github.io',
    }
    // Add more projects as needed
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ mb: 4, textAlign: 'center' }}>
        Software Projects
      </Typography>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)'
        },
        gap: 4,
        width: '100%',
        justifyItems: 'center'
      }}>
        {projects.map((project, index) => (
          <Card 
            key={index}
            sx={{
              width: '100%',
              maxWidth: 345,
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 6px 12px rgba(30, 101, 232, 0.5)'
              }
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={project.image}
              alt={project.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {project.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button 
                size="small" 
                startIcon={<GitHubIcon />}
                href={project.github}
                target="_blank"
              >
                View on GitHub
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Software; 