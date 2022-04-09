import { Box, Typography, TextField, Button } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useGetPhoto } from '../../hooks/useGetPhoto';
import { PhotoList } from '../PhotoList/PhotoList';

export const PhotoListPage = () => {
  const [albumId, setAlbumId] = useState(0);
  const [tempAlbumId, setTempAlbumId] = useState(0);
  const [isDisable, setIsDisable] = useState(false);

  const { album, error } = useGetPhoto(albumId);

  const handleSubmit = () => {
    setAlbumId(tempAlbumId);
    setIsDisable(true);
  }

  useEffect(() => {
    if (tempAlbumId === albumId)
      setIsDisable(true);
    else setIsDisable(false);
  }, [tempAlbumId])


  return (
    <Box sx={{ textAlign: 'center', margin: '100px auto 5px' }}>
      <Typography sx={{ fontWeight: '600', fontSize: '20px' }}>
        Select Photo
      </Typography>
      <Box sx={{ display: 'flex', margin: '20px auto', textAlign: 'center', alignItems: 'center', width: '600px' }}>
        <TextField value={tempAlbumId} onChange={(event) => { setTempAlbumId(parseInt(event.currentTarget.value)) }} fullWidth type='number' color='success' ></TextField>
        <Button color='success' onClick={handleSubmit} disabled={isDisable}>Get photos</Button>
      </Box>
      <PhotoList album={album}>
      </PhotoList>
    </Box>
  )
}