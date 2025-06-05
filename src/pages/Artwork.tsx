import React, { useState } from 'react';
import { Typography, ImageList, ImageListItem, Box, Container, useTheme, useMediaQuery, Dialog } from '@mui/material';

const Artwork: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const getCols = () => {
    if (isSmallScreen) return 1;
    if (isMediumScreen) return 2;
    return 3;
  };

  const artworks = [
    {
      title: 'Hop n Hook Title Card',
      image: '/assets/art/HopnHook_TitleCard.png',
      description: 'Hop n\' Hook Title Artwork'
    },
    {
      title: 'Sprite Animation',
      image: '/assets/art/sprite-animation.gif',
      description: 'Hop n\' Hook Running Animation'
    },
    {
      title: 'Kamen Jogger',
      image: '/assets/art/KamenJogger7.png',
      description: 'Concert artwork for fun'
    },
    {
      title: 'GENESIS Art',
      image: '/assets/art/Card_GENESISART.PNG',
      description: 'Work inspired by GENESIS'
    },
    {
      title: 'Hatsune Miku',
      image: '/assets/art/MikuScreenshot.PNG',
      description: 'Art of Hatsune Miku from Vocaloid'
    }
  ];

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom sx={{ mb: 4, textAlign: 'center' }}>
        Artwork Gallery
      </Typography>
      <Box sx={{ 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4
      }}>
        <ImageList 
          variant="masonry" 
          cols={getCols()} 
          gap={16}
          sx={{
            width: '100%',
            '& .MuiImageListItem-root': {
              overflow: 'hidden',
              borderRadius: 2,
              transition: 'transform 0.3s ease-in-out',
              height: '250px !important',
              '&:hover': {
                transform: 'scale(1.02)',
                '& img': {
                  transform: 'scale(1.1)',
                }
              },
              '& img': {
                transition: 'transform 0.3s ease-in-out',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }
            }
          }}
        >
          {artworks.map((artwork, index) => (
            <ImageListItem 
              key={index}
              onClick={() => handleImageClick(artwork.image)}
              sx={{
                cursor: 'pointer',
                '&::after': {
                  content: `"${artwork.description}"`,
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'rgba(0, 0, 0, 0.7)',
                  color: 'white',
                  padding: '10px',
                  transform: 'translateY(100%)',
                  transition: 'transform 0.3s ease-in-out',
                },
                '&:hover::after': {
                  transform: 'translateY(0)',
                }
              }}
            >
              <img
                src={artwork.image}
                alt={artwork.title}
                loading="lazy"
                style={{
                  height: '250px',
                  objectFit: artwork.image.includes('sprite-animation') ? 'contain' : 'cover'
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>

      <Dialog
        open={!!selectedImage}
        onClose={handleClose}
        maxWidth="xl"
        PaperProps={{
          sx: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
            overflow: 'hidden'
          }
        }}
      >
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Selected artwork"
            style={{
              maxHeight: '90vh',
              maxWidth: '90vw',
              objectFit: selectedImage.includes('sprite-animation') ? 'contain' : 'contain',
              cursor: 'pointer'
            }}
            onClick={handleClose}
          />
        )}
      </Dialog>
    </Container>
  );
};

export default Artwork; 