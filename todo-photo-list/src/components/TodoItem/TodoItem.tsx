import React, { FC, useState, useContext } from 'react';
import { Todo } from '../../../libs/common';
import { Box, Checkbox, Typography, IconButton, TextField, Button } from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { completeTodo, removeTodo, editTodo } from '../../store/actions/todo';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Link } from 'react-router-dom';

interface TodoItemProps {
  todoItem: Todo;
}

export const TodoItem: FC<TodoItemProps> = ({ todoItem }) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState(todoItem.title);

  const handleCompleteTodo = (id: string) => {
    if (!id) return;

    dispatch(completeTodo(id));
  }

  const handleDeleteTodo = (id: string) => {
    if (!id) return;

    dispatch(removeTodo(id));
  }

  const handleEditTodo = (id: string, title: string) => {
    if (!id) return;

    dispatch(editTodo(id, title));
    setIsEdit(false);
  }

  return (
    <Box sx={{ backgroundColor: !todoItem.completed ? '#e8f5e9' : '#efefef', borderBottom: '1px solid gray', p: '4px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Checkbox color="success" onChange={() => { handleCompleteTodo(todoItem.id) }} checked={todoItem.completed} />

          {!isEdit ?
            <Typography sx={{ textDecoration: `${todoItem.completed && 'line-through'}` }}>
              {todoItem.title}
            </Typography>
            :
            <Box>
              <TextField
                value={title}
                color='success'
                onChange={(event) => { setTitle(event.currentTarget.value) }}
                sx={{ backgroundColor: '#fff', }}
              />
              <Button color='success' sx={{ height: '56px' }} onClick={() => handleEditTodo(todoItem.id, title)}>SAVE</Button>
            </Box>
          }
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link to={`/todo/${todoItem.id}`}>
            <IconButton >
              <OpenInNewIcon />
            </IconButton>
          </Link>
          <IconButton onClick={() => setIsEdit(!isEdit)}>
            <ModeEditIcon />
          </IconButton>
          <IconButton onClick={() => handleDeleteTodo(todoItem.id)}>
            <DeleteIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  )
}