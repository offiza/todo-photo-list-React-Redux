import React from 'react';
import { Box, TextField, Button } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTodo } from '../../store/actions/todo';
import { Todo } from '../../../libs/common';
import md5 from 'md5';

export const AddTodo = () => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('');

  const handleCreateTodo = (title: string) => {
    if (!title.trim()) return;

    const candidate: Todo = {
      id: md5(title + Date.now()),
      title: title,
      completed: false
    }

    dispatch(createTodo(candidate));

    setTitle('');
  }

  const handleKeyPress = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.charCode === 13) {
      await AddTodo();
    }
  };

  return (
    <form >
      <Box sx={{ display: 'flex', margin: '20px 0', alignItems: 'center' }}>
        <TextField
          fullWidth
          color='success'
          placeholder='What you want to do?'
          value={title}
          onChange={(event) => { setTitle(event.currentTarget.value) }}
          onKeyPress={handleKeyPress}
        />
        <Button type='submit' color='success' sx={{ height: '56px' }} onClick={() => handleCreateTodo(title)}>Add</Button>
      </Box>
    </form>
  )
}