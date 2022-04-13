import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { TodoList } from '../TodoList/TodoList';

export const TodoListPage = () => {
  localStorage.clear();
  
  const { todos} = useTypedSelector((state) => state.todos)

  useEffect(() => {
    localStorage.clear();
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  return (
    <Box sx={{ margin: '100px auto', }}>
      <Box sx={{ textAlign: 'center', padding: '16px' }}>
        <Typography sx={{ fontWeight: '700', fontSize: '20px' }}>TODOLIST BY OFFIZA</Typography>
      </Box>
      <TodoList todoItems={todos} />
    </Box>
  )
}