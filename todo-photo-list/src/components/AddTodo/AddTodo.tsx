import React from 'react';
import { Box, TextField, Button } from '@mui/material';
import { useState } from 'react';

export const AddTodo = () => {
  const [title, setTitle] = useState('');

  return (
    <Box sx={{ display: 'flex', margin: '20px 0', alignItems: 'center' }}>
      <TextField fullWidth color='success' placeholder='What you want to do?' value={title} onChange={(event) => { setTitle(event.currentTarget.value) }} />
      <Button color='success' sx={{height: '56px'}}>Add</Button>
    </Box>
  )
}