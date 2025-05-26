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
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Games: React.FC = () => {
  const projects = [
    {
      title: 'GENESIS',
      description: 'GENESIS is a Real-Time Strategy game set in the distant future, leading your squad through objective based missions when humanity is at war over resources throughout the galaxy.\n\nInspired by Men of War, XCOM, and Halo Wars.',
      image: '/assets/art/GENESISBackground3.PNG',
      playLink: 'https://soupuh.itch.io/genesis',
    },
    {
      title: 'Hop n\' Hook',
      description: 'A 2D platformer where you play as Hoppe Jr. and use your grappling hook to swing through the level and collect fish from different ponds. ',
      image: '/assets/art/HopnHook_TitleCard.png',
      playLink: '#',
    },
    {
      title: 'Battle For Gaia',
      description: 'A 2D Top-Down Real-Time Strategy game where you must battle against the enemy factions for control of Earth.',
      image: '/assets/art/GENESIS_Screenshot1.png',
      playLink: '#',
    },
    {
      title: 'Solar Samurai',
      description: 'A 2D fast-paced action game where you play as a samurai in space! You need to eliminate the captain to take control of the ship.',
      image: '/assets/art/solarsamurai.png',
      playLink: '#',
    },
    {
      title: 'BLOOD DRIVE',
      description: 'Your blood gauge is tied to your speed! If you run out, you will die! Spin attack and explode other vehicles to fill up the blood gauge.',
      image: '/assets/art/BloodDrive.png',
      playLink: 'https://evilpufferfish.itch.io/blood-drive',
    },
    {
      title: 'Big Blast of Ultimate Muscle',
      description: 'Train and take care of your anthropomorphic buff fish guy as you train to become the world\'s strongest \n\nThe question is: what is he training for?',
      image: '/assets/art/BBOUM.png',
      playLink: 'https://hotshotksw.itch.io/big-blast-of-ultimate-muscle',
    },
    // Add more projects as needed
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ mb: 4, textAlign: 'center' }}>
        Game Projects
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
                boxShadow: (theme) => `0 6px 12px ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)'}`
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
    </Box>
  );
};

export default Games; 