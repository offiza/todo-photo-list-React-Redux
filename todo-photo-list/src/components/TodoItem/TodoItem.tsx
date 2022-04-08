import React, { FC, useState, useContext } from 'react';
import { Todo } from '../../../libs/common';
import { Box, Checkbox, Typography, IconButton } from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';

interface TodoItemProps {
  todoItem: Todo;
  completeTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

export const TodoItem: FC<TodoItemProps> = ({ todoItem, completeTodo, deleteTodo }) => {
  return (
    <Box sx={{ backgroundColor: !todoItem.completed ? '#e8f5e9' : '#efefef', borderBottom: '1px solid gray', p: '4px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Checkbox color="success" onChange={() => { completeTodo(todoItem.id) }} checked={todoItem.completed} />
          <Typography sx={{ textDecoration: `${todoItem.completed && 'line-through'}` }}>
            {todoItem.title}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton>
            <ModeEditIcon />
          </IconButton>
          <IconButton onClick={() => deleteTodo(todoItem.id)}>
            <DeleteIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  )
}