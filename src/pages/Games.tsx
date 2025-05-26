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
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Games: React.FC = () => {
  const projects = [
    {
      title: 'Game Project 1',
      description: 'Description of your first game project.',
      image: '/game1-placeholder.jpg',
      playLink: '#',
    },
    {
      title: 'Game Project 2',
      description: 'Description of your second game project.',
      image: '/game2-placeholder.jpg',
      playLink: '#',
    },
    // Add more projects as needed
  ];

  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom sx={{ mb: 4 }}>
        Game Projects
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
                startIcon={<PlayArrowIcon />}
                href={project.playLink}
                target="_blank"
              >
                Play Game
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default Games; 