import React from 'react';
import { Typography, ImageList, ImageListItem, Box } from '@mui/material';

const Artwork: React.FC = () => {
  const artworks = [
    {
      title: 'Artwork 1',
      image: '/art1-placeholder.jpg',
    },
    {
      title: 'Artwork 2',
      image: '/art2-placeholder.jpg',
    },
    {
      title: 'Artwork 3',
      image: '/art3-placeholder.jpg',
    },
    // Add more artworks as needed
  ];

  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom sx={{ mb: 4 }}>
        Artwork Gallery
      </Typography>
      <Box sx={{ overflowY: 'hidden' }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {artworks.map((artwork, index) => (
            <ImageListItem key={index}>
              <img
                src={artwork.image}
                alt={artwork.title}
                loading="lazy"
                style={{ borderRadius: '8px' }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </>
  );
};

export default Artwork; 