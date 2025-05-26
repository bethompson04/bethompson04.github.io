import React from 'react';
import { 
  Typography, 
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Container,
  Box
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const Software: React.FC = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of your first software project.',
      image: '/project1-placeholder.jpg',
      github: 'https://github.com/yourusername/project1',
    },
    {
      title: 'Project 2',
      description: 'Description of your second software project.',
      image: '/project2-placeholder.jpg',
      github: 'https://github.com/yourusername/project2',
    },
    // Add more projects as needed
  ];

  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom sx={{ mb: 4 }}>
        Software Projects
      </Typography>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)'
        },
        gap: 4
      }}>
        {projects.map((project, index) => (
          <Card key={index}>
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
    </Container>
  );
};

export default Software; 