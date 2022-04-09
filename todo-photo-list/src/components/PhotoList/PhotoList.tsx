import { Box, Typography } from '@mui/material';
import React, { FC } from 'react';
import { Photo } from '../../../libs/common';

interface PhotoListInterface {
  album: Photo[] | undefined;
}

export const PhotoList: FC<PhotoListInterface> = ({ album }) => {

  return (
    <Box>
      {album && album.length ?
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          height: 'auto',
          gridRowGap: '1vw',
          gridColumnGap: '1vw',
          maxWidth: '800px',
          margin: 'auto',
        }}>
          {album.map((photo) => {
            return (
              <Box key={photo.id} sx={{ maxWidth: '250px' }}>
                <img src={photo.url}  style={{ maxWidth: '250px' }}></img>
              </Box>
            )
          })
          }
        </Box>
        :
        <Typography sx={{ marginTop: '20px', fontWeight: '600', fontSize: '20px' }}>
          No Photos
        </Typography>
      }
    </Box >
  )
}