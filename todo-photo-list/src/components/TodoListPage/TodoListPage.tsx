import { Box, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Todo } from '../../../libs/common';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { TodoList } from '../TodoList/TodoList';

export const TodoListPage = () => {
  // const todoItem1: Todo = {
  //   id: '1',
  //   title: 'eat pizza',
  //   completed: false,
  // }
  // const todoItem2: Todo = {
  //   id: '2',
  //   title: 'eat pizza2',
  //   completed: false,
  // }

  // const todoItems = [todoItem1, todoItem2];
  
  const dispatch = useDispatch();
  const { todos} = useTypedSelector((state) => state.todos)

  console.log(todos);

  return (
    <Box sx={{ margin: '100px auto', }}>
      <Box sx={{ textAlign: 'center', padding: '16px' }}>
        <Typography sx={{ fontWeight: '700', fontSize: '20px' }}>TODOLIST BY OFFIZA</Typography>
      </Box>
      <TodoList todoItems={todos} />
    </Box>
  )
}